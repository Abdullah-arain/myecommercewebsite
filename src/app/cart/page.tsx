"use client"
// import { NextRequest, NextResponse } from 'next/server'
// import { db, cartTable } from "../../lib/drizzle"
// import {cookies} from "next/headers"
// import {eq} from "drizzle-orm"

// import React from 'react'

// // const url= 'https://api.quotable.io/random?tags=technology'

// // const fetcher = (url:string) => fetch(url).then((res) => res.json())
  
// export const GET= async (request: NextRequest,{cart}: {cart:{name:any}}) => {

//   fetch(`https://localhost:3000/api/ecommerce?user_id=${cookies().get("user_id")?.value}`)

//   const req = request.nextUrl
//   const uid = req.searchParams.get("user_id") as string
//   try {
//       const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid))
//       return NextResponse.json({res})
//   }catch(error){
//       console.log(error)
//       return NextResponse.json({message: "Something went wrong"})
//   }
// }
 






// import { cart } from "@/lib/drizzle";

// const getData = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/ecommerce", {
//             method: "GET",
//             cache:"no-store",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (!res.ok) {
//             throw new Error("Failed to fetch the data")
//         };
//         const result = await res.json()
//         return result
//     } catch (err) {
//         console.log(err)
//     }
// }
// const TodoList = async () => {
//   try {
//     const res: { data: cart[] } = await getData();
//     const data = res.data || []; // Initialize as an empty array if res.data is undefined

//     console.log(data)
//     return (
//       <div className="max-h-[350px] overflow-auto mb-4">
//         {data.map((item) => (
//           <div className="bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5">
//             {/* Circle */}
//             <div className="h-3 w-3 bg-secondary rounded-full"></div>
//             {/* Task Title */}
//             <p className="text-lg font-medium">{item.product_id}</p>
//           </div>
//         ))}
//       </div>
//     );
//   } catch (error) {
//     // Handle the error
//     console.error(error);
//     return null;
//   }
// };

// export default TodoList








import React, { useEffect, useState } from 'react';
import { cart } from "@/lib/drizzle";
import Navbar from '../components/Navbar';

const TodoList = () => {
  const [data, setData] = useState<cart[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/ecommerce", {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!res.ok) {
          throw new Error("Failed to fetch the data");
        }
        const result: { data: cart[] } = await res.json();
        setData(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      { data?.map((item) => (
        <div
          className="bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5"
          key={item.product_id}
        >
          {/* Circle */}
          <div className="text-4xl font-semibold">{item.quantity}</div>
          {/* Task Title */}
          <p className="text-lg font-medium">{item.user_id}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;







// import { NextRequest, NextResponse } from "next/server";
// import { cartTable, db } from "@/lib/drizzle";
// import { sql } from "@vercel/postgres";

// export async function GET(request: NextRequest) {
//   try {
//     await sql`CREATE TABLE IF NOT EXISTS database(id serial, product_id varchar(255))`;
//     const res = await db.select().from(cartTable);
//     console.log(res);
//     return NextResponse.json({ data: res });
//   } catch (err) {
//     console.log((err as{message:string}).message);
//     return NextResponse.json({ message: "Something went Wrong" });
//   }
// }







// import { db } from '@vercel/postgres';
// import { NextApiRequest, NextApiResponse } from 'next';
 
// export default async function handler(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const client = await db.connect();
 
//   try {
//     const names = ['Fiona', 'Lucy'];
//     await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
//   } catch (error) {
//     return response.status(500).json({ error });
//   }
 
//   const pets = await client.sql`SELECT * FROM Pets;`;
//   return response.status(200).json({ pets });
// }








// import Image from "next/image";
// import { sql } from "@vercel/postgres";
// import { db, cartTable } from "@/lib/drizzle";

// export default async function Home() {
//   const { rows } = await sql`SELECT * from ecommerce`;
// console.log(rows)
//   return (
//     <main className="flex min-h-screen flex-col items-center  p-24">
//       <div className="text-2xl">Todo App</div>
//       <div>
//         {rows.map((row) => (
//           <div key={row.id} className="flex flex-col">
//             <p className="bold font-semibold">Title : {row.product}</p>
//             <p className="font-base">Description : {row.item}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }