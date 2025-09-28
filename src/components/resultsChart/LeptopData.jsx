import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export const LeptopData = () => {

  const leptopData = [
      { "id": 1, "brand": "Dell",    "price": 750,  "units_sold": 42, "rating": 4.2, "ram_gb": 8,  "storage_gb": 512 },
      { "id": 2, "brand": "HP",      "price": 820,  "units_sold": 38, "rating": 4.1, "ram_gb": 16, "storage_gb": 1024 },
      { "id": 3, "brand": "Lenovo",  "price": 520,  "units_sold": 50, "rating": 4.3, "ram_gb": 8,  "storage_gb": 256 },
      { "id": 4, "brand": "Asus",    "price": 630,  "units_sold": 30, "rating": 4.0, "ram_gb": 8,  "storage_gb": 512 },
      { "id": 5, "brand": "Acer",    "price": 580,  "units_sold": 28, "rating": 3.9, "ram_gb": 16, "storage_gb": 1024 },
      { "id": 6, "brand": "Apple",   "price": 1299, "units_sold": 35, "rating": 4.7, "ram_gb": 8,  "storage_gb": 512 },
      { "id": 7, "brand": "MSI",     "price": 1399, "units_sold": 12, "rating": 4.5, "ram_gb": 32, "storage_gb": 2048 },
      { "id": 8, "brand": "Samsung", "price": 699,  "units_sold": 20, "rating": 4.0, "ram_gb": 8,  "storage_gb": 256 },
      { "id": 9, "brand": "Huawei",  "price": 760,  "units_sold": 15, "rating": 3.8, "ram_gb": 16, "storage_gb": 1024 },
      { "id": 10,"brand": "Toshiba", "price": 480,  "units_sold": 10, "rating": 3.7, "ram_gb": 4,  "storage_gb": 500 }
    ];

  return (
    <div className='container mx-auto'>
        <BarChart width={600} height={400} data={leptopData}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
           <XAxis dataKey={"brand"}></XAxis>
           <YAxis></YAxis>
           <Tooltip></Tooltip>
           <Legend></Legend>
            <Bar dataKey={'price'} fill="#8884d8"></Bar>
            <Bar dataKey={'units_sold'} fill="#82ca9d"></Bar>
            <Bar dataKey={'rating'} fill='green'></Bar>
            <Bar dataKey={'ram_gb'} fill='blue'></Bar>
            <Bar dataKey={'storage_gb'} fill='red'></Bar>
          

        </BarChart>
    </div>
  )
}
