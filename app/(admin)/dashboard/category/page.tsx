"use client";
import {
  addCategory,
  deleteCategory,
  getCategories,
} from "@/app/api/category/page";
import useActionForm from "@/hooks/useActionForm";
import InputData from "@/components/fragments/input";
import TableComponent from "@/components/fragments/table";
import { Button } from "@/components/ui/button";
import { grotesk } from "@/lib/font";
import useSWR, { mutate } from "swr";

export default function Category() {
  const { handleChange, formData } = useActionForm({
    nama_kategori: "",
  });

  const { data, isLoading } = useSWR("categories", getCategories);
  console.log(data);

  async function uploadCategory(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const result = await addCategory(formData).then(() => {
        mutate("categories");
      });
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id: number) {
    try {
      await deleteCategory(id).then(() => {
        mutate("categories");
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1
        className={`${grotesk.className} text-[#1b120e] text-5xl font-bold mb-10`}
      >
        Category Dashboard
      </h1>
      <div className="flex flex-col md:flex-row md:justify-center w-full gap-5 md:gap-10">
        <div className="md:w-2/6">
          <div className="w-full border px-7 py-15 rounded-2xl flex flex-col gap-8">
            <InputData
              placeholder="Category Name"
              label="Category Name"
              onChange={handleChange}
              name="nama_kategori"
            />
            <Button
              className="md:w-1/2 mx-auto text-md py-7 bg-linear-65 from-red-400 to-red-700 text-white shadow-lg rounded-xl shadow-red-500/30"
              onClick={(e) => uploadCategory(e)}
            >
              Add Category
            </Button>
          </div>
        </div>
        <div className="md:w-3/6">
          <TableComponent
            isLoading={isLoading}
            fetchCategories={() => mutate("categories")}
            data={data}
            remove={(id: number) => handleDelete(id)}
          />
        </div>
      </div>
    </div>
  );
}
