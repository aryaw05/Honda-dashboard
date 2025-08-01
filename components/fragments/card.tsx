import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function MotorCard(props: any) {
  const { image, deskripsi, nama_barang, harga } = props;
  return (
    <Card className="w-[290px] mx-auto cursor-pointer border rounded-xl">
      <CardHeader className="px-0 pt-0">
        <Image
          className="max-h-48 object-cover rounded-lg"
          src={`http://localhost:3000/uploads/${image}`}
          alt="Images"
          width={500}
          height={500}
        />
      </CardHeader>
      <CardContent className="mt-0 ">
        <p>{nama_barang} </p>
        <CardDescription>{deskripsi}</CardDescription>
      </CardContent>
      <CardFooter>
        <p>Rp.{harga}</p>
      </CardFooter>
    </Card>
  );
}
