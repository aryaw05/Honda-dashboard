"use client";
import { getCategories } from "@/app/api/category/page";
import useActionForm from "@/hooks/useActionForm";
import InputData from "@/components/fragments/input";
import InputSelect from "@/components/fragments/select";
import TextArea from "@/components/fragments/textArea";
import { Button } from "@/components/ui/button";
import { grotesk } from "@/lib/font";
import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { postMotors } from "@/app/api/motors/motors";
import MotorFormLayout from "@/components/layouts/formLayout";
type FormMotorcycle = {
  nama_barang: string;
  harga: string;
  deskripsi: string;
  id_kategori: string;
  image_card: File | null;
  gambar_details: File[];
};

export default function EditData() {
  const [data, setData] = useState([]);

  const { formData, handleChange } = useActionForm<FormMotorcycle>({
    nama_barang: "",
    harga: "",
    deskripsi: "",
    id_kategori: "",
    image_card: null,
    gambar_details: [],
  });

  const postCategories = useCallback(async () => {
    const form_data = new FormData();
    if (formData.image_card instanceof File) {
      form_data.append("gambar", formData.image_card);
    }
    if (Array.isArray(formData.gambar_details)) {
      formData.gambar_details.forEach((file) => {
        form_data.append(`gambar_details`, file);
      });
    }
    // Append JSON data
    form_data.append(
      "data",
      JSON.stringify({
        nama_barang: formData.nama_barang,
        harga: formData.harga,
        deskripsi: formData.deskripsi,
        id_kategori: 5, // Assuming a static category ID for now
        id_user: 153,
      })
    );
    console.log("Form Data:", form_data.getAll("gambar_details"));
    try {
      const token = Cookies.get("token");
      const result = await postMotors(token || "", form_data);
      console.log(result);
    } catch (error) {
      console.error("Gagal tambah data Motor", error);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const result = await getCategories();
      setData(result.data);
    } catch (err) {
      console.error("Gagal mengambil data motor:", err);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <div>
      <h1
        className={`${grotesk.className} text-[#1b120e] text-5xl font-bold text-center mb-20 `}
      >
        Motorcycle Data Editing Form
      </h1>
      <MotorFormLayout>
        <InputData
          placeholder="Insert MotorCycle Name"
          label="Motorcycle Name"
          onChange={handleChange}
          name="nama_barang"
        />
        <InputData
          placeholder="Harga"
          label="Motorcycle Price"
          type="number"
          onChange={handleChange}
          name="harga"
        />

        <TextArea
          className="col-span-2 flex flex-col gap-3"
          placeholder="Insert Description"
          label="Description"
          onChange={handleChange}
          name="deskripsi"
        />
        <div className="flex  flex-col gap-4">
          <InputData
            placeholder="Choose Image"
            type="file"
            multiple={false}
            onChange={handleChange}
            name="image_card"
            label="Motorcycle Image Card"
          />

          <InputData
            placeholder="Choose Banner Image"
            type="file"
            multiple={true}
            onChange={handleChange}
            name="gambar_details"
            label="Motorcycle Banner Image"
          />
        </div>

        <InputSelect data={data} onChange={handleChange} name="id_kategori" />
        <Button
          className="md:col-span-2 mt-10 p-8 md:text-lg rounded-xl"
          onClick={postCategories}
        >
          Submit
        </Button>
      </MotorFormLayout>
    </div>
  );
}
