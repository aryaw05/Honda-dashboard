"use client";
import { getCategories } from "@/app/api/category/page";
import InputData from "@/components/fragments/input";
import InputSelect from "@/components/fragments/select";
import TextArea from "@/components/fragments/textArea";
import { Button } from "@/components/ui/button";
import { grotesk } from "@/lib/font";
import { useEffect, useState } from "react";

export default function AddData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        const result = await res.json();
        setData(result.data);
        console.log(result.data);
      } catch (err) {
        console.error("Gagal mengambil data motor:", err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <h1
        className={`${grotesk.className} text-[#1b120e] text-5xl font-bold text-center mb-20 `}
      >
        Motorcycle Form Data
      </h1>
      <div className="flex  justify-center items-start w-full h-screen">
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <InputData
            placeholder="Insert MotorCycle Name "
            label="Motorcycle Name"
          />
          <InputData
            placeholder="arya"
            label="Motorcycle Price"
            type="number"
          />

          <TextArea
            className="col-span-2 flex flex-col gap-3"
            placeholder="Insert Description"
            label="Description"
          />
          <div className="flex  flex-col gap-4">
            <InputData
              placeholder="Choose Image"
              type="file"
              multiple={false}
              label="Motorcycle Image Card"
            />

            <InputData
              placeholder="Choose Banner Image"
              type="file"
              multiple={true}
              label="Motorcycle Banner Image"
            />
          </div>

          <InputSelect data={data} />
          <Button className="md:col-span-2 mt-10 p-8 md:text-lg rounded-xl">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
