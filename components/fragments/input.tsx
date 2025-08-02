import { Input } from "../ui/input";

export default function InputData(props: any) {
  const { placeholder, key, type, label, multiple } = props;
  return (
    <div>
      <label className="text-lg">{label}</label>
      <Input
        multiple={multiple ? multiple : false}
        required
        key={key}
        placeholder={placeholder}
        className="w-full py-10 px-5 rounded-xl md:text-lg "
        type={type ? type : "text"}
      />
    </div>
  );
}
