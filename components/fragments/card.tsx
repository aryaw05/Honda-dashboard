import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function MotorCard(props: any) {
  const { image } = props;
  return (
    <Card className="w-[290px] mx-auto cursor-pointer border">
      <CardHeader>
        <Image
          className="max-h-30 object-cover rounded-lg"
          src={`http://localhost:3000/uploads/${image}`}
          alt="Images"
          width={500}
          height={500}
        />
      </CardHeader>
      <CardContent className="mt-0 ">
        <p>Motor Garang </p>
        <CardDescription>Card Description</CardDescription>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
