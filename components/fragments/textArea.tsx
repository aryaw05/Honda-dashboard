import { Textarea } from "../ui/textarea";

export default function TextArea(props: any) {
  const { placeholder, label, className } = props;
  return (
    <div className={className}>
      <label className="text-lg">{label}</label>
      <Textarea
        placeholder={placeholder}
        className=" h-75 md:text-lg rounded-xl"
      />
    </div>
  );
}
