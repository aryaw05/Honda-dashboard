"use client";
import { getMotors } from "@/app/api/motors/motors";
import MotorCard from "@/components/fragments/card";
import { useEffect, useState } from "react";
import { geist, grotesk, inter } from "@/lib/font";
import { Motor } from "@/lib/types/motor";

export default function Dashboard() {
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

  return (
    <div>
      <h1
        className={`${grotesk.className} text-[#1b120e] text-5xl font-bold mb-10`}
      >
        Motorcycle Dashboard
      </h1>
      <div className={inter.className}>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 auto-cols-auto grid-flow-row ">
          {dataMotor &&
            dataMotor.map((motor: Motor) => {
              return (
                <MotorCard
                  id_motor={motor.id_motor}
                  key={motor.id_motor}
                  gambar_card={motor.gambar_card}
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
