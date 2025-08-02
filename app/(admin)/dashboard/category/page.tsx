"use client";
import { addCategory, getCategories } from "@/app/api/category/page";
import useActionForm from "@/app/hooks/useActionForm";
import InputData from "@/components/fragments/input";
import TableComponent from "@/components/fragments/table";
import { Button } from "@/components/ui/button";
import { grotesk } from "@/lib/font";
import { useEffect, useState } from "react";

export default function Category() {
  const { handleChange, formData } = useActionForm({
    nama_kategori: "",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        setData(result.data);
        console.log(result.data);
      } catch (err) {
        console.error("Gagal mengambil data motor:", err);
      }
    };
    fetchCategories();
  }, []);

  async function uploadCategory(e: any) {
    e.preventDefault();
    try {
      const result = await addCategory(formData);
      return result;
    } catch (err) {
      console.error("Gagal menambahkan data kategori:", err);
    }
  }
  return (
    <div>
      <h1
        className={`${grotesk.className} text-[#1b120e] text-5xl font-bold mb-10`}
      >
        Category Dashboard
      </h1>
      <div className="flex flex-col md:flex-row md:justify-start w-full gap-5 md:gap-10">
        <div className="md:w-2/6">
          <div className="w-full border px-7 py-15 rounded-2xl flex flex-col gap-8">
            <InputData
              placeholder="Category Name"
              label="Category Name"
              onChange={handleChange}
              name="nama_kategori"
            />
            <Button
              className="md:w-1/2 mx-auto text-md py-7"
              onClick={(e) => uploadCategory(e)}
            >
              Add Category
            </Button>
          </div>
        </div>
        <div className="md:w-3/6">
          <TableComponent caption="Category List" data={data} />
        </div>
      </div>
    </div>
  );
}
