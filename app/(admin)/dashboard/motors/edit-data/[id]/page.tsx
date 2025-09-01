"use client";
import useActionForm from "@/hooks/useActionForm";
import InputData from "@/components/fragments/input";
import TextArea from "@/components/fragments/textArea";
import { Button } from "@/components/ui/button";
import { grotesk } from "@/lib/font";
import { useEffect, useState } from "react";
import {
  deleteDetailImageCard,
  getMotorById,
  updateMotor,
} from "@/app/api/motors/motors";
import MotorFormLayout from "@/components/layouts/formLayout";
import { useParams } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";
type FormMotorcycle = {
  id_motor: string;
  nama_barang: string;
  harga: string;
  deskripsi: string;
  gambar_card: File | null;
  gambarMotors: string[];
  imageDetailPreview: string[];
};

export default function EditData() {
  const params = useParams<{ id: string }>();
  const [imageCardPreview, setImageCardPreview] = useState("");
  const { formData, handleChange, setFormData } = useActionForm<FormMotorcycle>(
    {
      id_motor: "",
      nama_barang: "",
      harga: "",
      deskripsi: "",
      gambar_card: null,
      gambarMotors: [],
      imageDetailPreview: [],
    }
  );

  const updateMotorData = async () => {
    const form_data = new FormData();
    if (formData.gambar_card instanceof File) {
      form_data.append("gambar", formData.gambar_card);
    }
    if (Array.isArray(formData.gambarMotors)) {
      formData.gambarMotors.forEach((file) => {
        form_data.append(`gambar_details`, file);
      });
    }
    // Append JSON data
    form_data.append(
      "data",
      JSON.stringify({
        id_motor: parseInt(params.id || ""),
        nama_barang: formData.nama_barang,
        harga: formData.harga,
        deskripsi: formData.deskripsi,
      })
    );
    try {
      await updateMotor(form_data, parseInt(params.id || "")).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }

    console.log(form_data.get("gambar_details"));
  };

  useEffect(() => {
    if (formData.gambar_card && formData.gambar_card instanceof File) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageCardPreview(reader.result as string);
      };
      reader.readAsDataURL(formData.gambar_card);
    }
  }, [formData.gambar_card]);
  useEffect(() => {
    getMotorById(parseInt(params.id || "")).then((res) => {
      console.log(res);
      setFormData({
        ...res.data,
        imageDetailPreview: res.data.gambarMotors,
      });
    });
  }, [params.id, setFormData]);

  function deleteDetailImage(url_gambar: string) {
    deleteDetailImageCard(url_gambar).then((res) => {
      setFormData((prev) => ({
        ...prev,
        // membuat array baru yang tidak sama dengan url_gambar ( url yang ingin dihapus)
        imageDetailPreview: prev.imageDetailPreview.filter(
          (motor) => motor.url_gambar !== url_gambar
        ),
      }));
    });
  }

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
          value={formData.nama_barang}
          name="nama_barang"
        />
        <InputData
          placeholder="Harga"
          label="Motorcycle Price"
          type="number"
          onChange={handleChange}
          value={formData.harga}
          name="harga"
        />

        <TextArea
          className="col-span-2 flex flex-col gap-3"
          placeholder="Insert Description"
          label="Description"
          onChange={handleChange}
          value={formData.deskripsi}
          name="deskripsi"
        />
        <div className="space-y-4">
          <InputData
            placeholder="Choose Image"
            type="file"
            multiple={false}
            onChange={handleChange}
            name="gambar_card"
            label="Motorcycle Image Card"
          />
          <Image
            className="rounded-lg mx-auto"
            src={
              `${imageCardPreview}`
                ? `${imageCardPreview}`
                : `http://localhost:3000/uploads/${formData.gambar_card}`
            }
            width={400}
            height={400}
            alt="Motorcycle Image Card"
          />
        </div>

        <div className="space-y-4">
          <InputData
            placeholder="Choose Banner Image"
            type="file"
            multiple={true}
            onChange={handleChange}
            name="gambarMotors"
            label="Motorcycle Banner Image"
          />
          {formData.imageDetailPreview.map((item, index) => (
            <div key={index} className="relative">
              <Image
                className="rounded-lg mx-auto "
                src={`http://localhost:3000/uploads/${item.url_gambar}`}
                width={400}
                height={400}
                alt="Motorcycle Banner Image"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute -top-3 -right-4  rounded-full bg-black/60 text-white hover:bg-black/80 hover:text-white"
                onClick={() => {
                  deleteDetailImage(item.url_gambar);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <Button
          className="md:col-span-2 mt-10 p-8 md:text-lg rounded-xl"
          onClick={updateMotorData}
        >
          Submit
        </Button>
      </MotorFormLayout>
    </div>
  );
}
