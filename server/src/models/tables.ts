import { createCrimesTable } from "./queries";


createCrimesTable().then(()=>{
  console.log("table created!")
  process.exit();  
}).catch((err)=>{
    console.log("you fucked up creating table", err)
    process.exit(1)
})