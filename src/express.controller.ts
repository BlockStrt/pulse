import { Controller, Get, Req, Body } from "@nestjs/common";
import { Request } from "express";
import sql from "../../src/models/db";


@Controller('express')
export class ExpressController {
    @Get()
    async findAllCrimes(): Promise<any> {
        try {
          const crimes = await sql`SELECT * FROM crimes LIMIT 500`;
          if (crimes.length === 0){
            return {message: 'Table is currently emprty no crimes reported'}
          }
          return crimes;
        } catch (error) {
          console.error('Error fetching crimes:', error);
          return { message: 'Failed to fetch crimes', error: error.message };
        }
      }
}



/* 
    NestJS app is wired correctly to PostgreSQL
    ql import works
    controller is properly returning API responses 
*/