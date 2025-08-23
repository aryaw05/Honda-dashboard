"use client";
import { deleteMotor, getMotors } from "@/app/api/motors/motors";
import MotorCard from "@/components/fragments/card";
import { grotesk, inter } from "@/lib/font";
import { Motor } from "@/lib/types/motor";
import useSWR from "swr";
import SkeletonLoading from "./skeletonLoading";

export default function Dashboard() {
  const { data, isLoading } = useSWR("motors", getMotors);
  return (
    <div>
      <h1
        className={`${grotesk.className} text-[#1b120e] text-5xl font-bold mb-10`}
      >
        Motorcycle Dashboard
      </h1>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <div className={inter.className}>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 auto-cols-auto grid-flow-row ">
            {data &&
              data.data.data.map((motor: Motor) => {
                return (
                  <MotorCard
                    id_motor={motor.id_motor}
                    key={motor.id_motor}
                    gambar_card={motor.gambar_card}
                    deskripsi={motor.deskripsi}
                    nama_barang={motor.nama_barang}
                    harga={motor.harga}
                    onClick={() => deleteMotor(motor.id_motor)}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
