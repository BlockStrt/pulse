"use client"
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import GMap from './components/Gmap';
import DataPoint from './components/Gmap'
import Sidebar from "./components/Sidebar";
import Searchbutton from './components/Searchbutton';

export default function Home() {
  const [data, setData] = useState<[number, number][]>([]);
  type DataPoint = [number, number];
  const points: DataPoint[] = [
    [-122.4, 37.8],
    [-122.3, 37.7],
    // ...more
  ];

  useEffect(()=> {
    fetch('/api/crimes')
    .then(res => res.json())
    .then((res)=>{
      const points = res.map((d: any) => [d.lng, d.lat]);
      setData(points);
    })
  }, [])


  return (
    <div className=" grid grid-rows-[20px_1fr_20px]  items-center justify-items-center min-h-screen  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <div className="fixed z-30 left-0 top-0 h-screen p-10 bg-gray-700 sm:w-52 md:w-64 lg:w-72  ">
          <Sidebar/>
        </div>
      <main className="!overflow-y-hidden flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
      <div className='z-30 h-full top-10 fixed '>
      <Searchbutton/>
        </div>  
      <GMap/>

      </main>

    </div>
  );
}
