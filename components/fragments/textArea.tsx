import { Textarea } from "../ui/textarea";

export default function TextArea(props: any) {
  const { placeholder, label, className, onChange } = props;

  return (
    <div className={className}>
      <label className="text-lg">{label}</label>
      <Textarea
        placeholder={placeholder}
        onChange={onChange}
        className=" h-75 md:text-lg rounded-xl"
      />
    </div>
  );
}
