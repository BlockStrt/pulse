import * as dotenv from 'dotenv';
dotenv.config();
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

export const PG_PROVIDER = 'PG_CONNECTION';


export const pgProvider = {
    provide: PG_PROVIDER,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
        const port = parseInt(configService.get<string>('POSTGRES_PORT', '5432'), 10);
        console.log('POSTGRES_PORT:', configService.get<string>('POSTGRES_PORT')); // Debug log
        console.log('POSTGRES_HOST:', configService.get<string>('POSTGRES_HOST'));
        const pool = new Pool ({
            host: configService.get<string>('POSTGRES_HOST'),
            port,
            user: configService.get<string>('POSTGRES_USER'),
            password: configService.get<string>('POSTGRES_PASSWORD'),
            database: configService.get<string>('POSTGRES_DB'),
            
        })
        console.log('✅ PostgreSQL Connected to:', configService.get('POSTGRES_HOST'));
        return pool;
    }
}

