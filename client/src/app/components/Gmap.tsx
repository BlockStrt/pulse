// components/CrimeMap.tsx
import React from 'react';
import Map from 'react-map-gl/maplibre';
import {DeckGL} from '@deck.gl/react';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {HexagonLayer} from '@deck.gl/aggregation-layers';


const ambientLight = new AmbientLight({ color: [255, 255, 255], intensity: 1.0 });
const pointLight1 = new PointLight({ color: [255, 255, 255], intensity: 0.8, position: [-0.144528, 49.739968, 80000] });
const pointLight2 = new PointLight({ color: [255, 255, 255], intensity: 0.8, position: [-3.807751, 54.104682, 8000] });
const lightingEffect = new LightingEffect({ ambientLight, pointLight1, pointLight2 });
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

export const colorRange = [
  [1, 152, 189], [73, 227, 206], [216, 254, 181],
  [254, 237, 177], [254, 173, 84], [209, 55, 78]
];

type DataPoint = [number, number];

type Props = {
    data?: DataPoint[];
};

const INITIAL_VIEW_STATE = {
  longitude: -1.415727,
  latitude: 52.232395,
  zoom: 6.6,
  minZoom: 5,
  maxZoom: 15,
  pitch: 40.5,
  bearing: -27,
};

function getTooltip({object}: any) {
    if (!object) return null;
  
    const lat = object.position[1];
    const lng = object.position[0];
    const count = object.count;
  
    return `\
  latitude: ${lat?.toFixed(6)}
  longitude: ${lng?.toFixed(6)}
  ${count} Incidents`;
  }

export default function GMap({ data }: Props) {
  const layers = [
    new HexagonLayer<DataPoint>({
      id: 'heatmap',
      gpuAggregation: true,
      coverage: 1,
      data,
      elevationRange: [0, 3000],
      elevationScale: data && data.length ? 50 : 0,
      extruded: true,
      getPosition: d => d,
      pickable: true,
      radius: 1000,
      upperPercentile: 100,
      material: {
        ambient: 0.64,
        diffuse: 0.6,
        shininess: 32,
        specularColor: [51, 51, 51],
      },
      transitions: { elevationScale: 3000 },
    }),
  ];

  return (
    <DeckGL
    {...({
        layers: layers,
        effects: [lightingEffect],
        initialViewState: INITIAL_VIEW_STATE,
        controller: true,
        getTooltip: getTooltip,
      } as any)}
    >
      <Map reuseMaps mapStyle={MAP_STYLE} mapboxAccesstoken={MAPBOX_TOKEN} />
    </DeckGL>
  );
}
