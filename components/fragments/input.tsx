import { Input } from "../ui/input";

export default function InputData(props: any) {
  const { placeholder, key, type, label, multiple, onChange, name } = props;
  return (
    <div className="flex flex-col gap-3">
      <label className="text-xl font-semibold">{label}</label>
      <Input
        onChange={onChange}
        multiple={multiple ? multiple : false}
        required
        key={key}
        placeholder={placeholder}
        className="w-full py-10 px-5 rounded-xl md:text-lg "
        type={type ? type : "text"}
        name={name}
      />
    </div>
  );
}
