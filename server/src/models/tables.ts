import sql from "./db";
import { createCrimesTable } from "./queries";




//error handle
 createCrimesTable().then(()=>{
  console.log("table created!")
  process.exit();  
}).catch((err)=>{
    console.log("table not created", err)
    process.exit(1) // make sure process exits with an errorcode
})

