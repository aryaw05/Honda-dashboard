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
  const { data, onChange, name } = props;

  return (
    <div className="flex flex-col gap-3">
      <label className="text-lg">Category</label>
      <Select onValueChange={(value) => onChange({ target: { name, value } })}>
        <SelectTrigger className="w-full rounded-xl p-10 text-lg">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-md text-muted-foreground">
              Category
            </SelectLabel>
            {data.map(
              (
                item: { id_kategori: number; nama_kategori: string },
                index: number
              ) => (
                <SelectItem
                  onChange={onChange}
                  key={index}
                  value={item.id_kategori}
                  className="text-lg"
                >
                  {item.nama_kategori}
                </SelectItem>
              )
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
