import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function CustomAvatar(props: any) {
  const { image } = props;
  return (
    <Avatar>
      <AvatarImage src={image} className="w-12 h-12 rounded-2xl" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
