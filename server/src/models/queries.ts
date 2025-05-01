import sql from "./db";


interface crimeTable {
    id: number
    name: string
    date: Date
    block: string
    primary_type: string
    description: string
    location_description: string
    arrest: Boolean
    domestic: Boolean
    beat: number
    district: number
    ward: number
    longitude:number
    latitude: number
}


export async function createCrimesTable() {
    await sql`
      CREATE TABLE IF NOT EXISTS crimes (
        id BIGINT PRIMARY KEY,
        name TEXT,
        date TIMESTAMP,
        block TEXT,
        primary_type TEXT,
        description TEXT,
        location_description TEXT,
        arrest BOOLEAN,
        domestic BOOLEAN,
        beat INTEGER,
        district INTEGER,
        ward INTEGER,
        longitude DOUBLE PRECISION,
        latitude DOUBLE PRECISION
      )
    `;
  }