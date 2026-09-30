import { Pool } from "pg";
import dotenv from "dotenv";
const {client} =require('../db/pg')

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
async function getdata(){

  const res= await client.query(` insert into public.admin_register(admin_id,password) values('admin21','admin123')`);
  for(let i=0;i<res.length;i++){
    console.log(res.rows[i].admin_id);
    const data = {admin_id:res.rows[i].password};
  }

}
getdata();

export default pool;