
import {pgProvider} from './pg.provider';
import { ConfigService } from '@nestjs/config';


//Set up we can always re-use to set up Nest JS just to test that the .env variables are working

(async () => {
    try {
    const configService = new ConfigService();
    const pool = await pgProvider.useFactory(configService);
    const result = await pool.query('SELECT NOW()');
    console.log('Database time:', result.rows[0]);
        await pool.end();
            } catch (error) {
            console.log("database did not catch ", error)
            }
})();