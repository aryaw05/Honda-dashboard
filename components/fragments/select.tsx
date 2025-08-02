import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InputSelect(props: any) {
  const { data } = props;
  console.log(data);

  return (
    <div>
      <label className="text-lg">Category</label>
      <Select>
        <SelectTrigger className="w-full rounded-xl p-10 text-lg">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-md text-muted-foreground">
              Fruits
            </SelectLabel>
            {data.map((item: any, index: number) => (
              <SelectItem
                key={index}
                value={item.nama_kategori}
                className="text-lg"
              >
                {item.nama_kategori}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
