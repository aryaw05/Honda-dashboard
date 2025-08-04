import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Motor } from "@/lib/types/motor";
import Image from "next/image";

export default function MotorCard(props: Motor) {
  const { gambar_card, deskripsi, nama_barang, harga } = props;
  return (
    <Card className="w-[290px] mx-auto cursor-pointer  border rounded-xl">
      <CardHeader className="px-3">
        <Image
          className="max-h-48 object-cover rounded-lg"
          src={`http://localhost:3000/uploads/${gambar_card}`}
          alt="Images"
          width={500}
          height={500}
        />
      </CardHeader>
      <CardContent className="mt-0 text-xl">
        <p>{nama_barang} </p>
        <CardDescription>{deskripsi}</CardDescription>
      </CardContent>
      <CardFooter className="text-2xl">
        <p>Rp.{harga}</p>
      </CardFooter>
    </Card>
  );
}
