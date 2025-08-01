"use client";
import { getMotors } from "@/app/api/motors/motors";
import MotorCard from "@/components/fragments/card";
import { useEffect, useState } from "react";

export default function Dashboard(props: any) {
  const [dataMotor, setDataMotor] = useState([]);
  useEffect(() => {
    const fetchMotors = async () => {
      try {
        const res = await getMotors();
        // console.log("DATA MOTOR:", res.data.data);
        setDataMotor(res.data.data);
      } catch (err) {
        console.error("Gagal mengambil data motor:", err);
      }
    };

    fetchMotors();
  }, []);
  console.log(dataMotor);

  return (
    <div className="overflow-hidden mt-10  px-5 py-5 w-full">
      <h1 className="text-3xl font-bold mb-10">Motorcycle Dashboard</h1>
      <div className="">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 auto-cols-auto grid-flow-row ">
          {dataMotor &&
            dataMotor.map((motor: any) => {
              return (
                <MotorCard
                  key={motor.id_motor}
                  image={motor.gambar_card}
                  deskripsi={motor.deskripsi}
                  nama_barang={motor.nama_barang}
                  harga={motor.harga}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
