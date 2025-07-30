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

export default function MotorCard() {
  return (
    <Card className="w-[290px] mx-auto ">
      <CardHeader>
        <Image
          className="max-h-30 object-cover rounded-lg"
          src={
            "https://images.unsplash.com/photo-1529226014005-9db6241b4768?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Image"
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
