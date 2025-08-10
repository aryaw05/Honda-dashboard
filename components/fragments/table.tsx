import { CategoryType } from "@/lib/types/category";
import { Button } from "../ui/button";
import { DialogAlert } from "./dialog";

export default function TableComponent(props: {
  data: CategoryType[];
  remove: (id: number) => void;
  fetchCategories: () => Promise<void>;
}) {
  const { data, remove, fetchCategories } = props;

  return (
    <div className="w-full">
      <div className="overflow-x-auto ">
        <div className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200 text-xl text-gray-600 rounded-2xl">
                <th className="w-[100px] p-4 text-left border-b">No.</th>
                <th className="p-4 text-left border-b">Name</th>
                <th className="p-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(
                (
                  item: {
                    id_kategori: number;
                    nama_kategori: string;
                  },
                  index: number
                ) => (
                  <tr
                    key={item.id_kategori}
                    className="text-lg border-b hover:bg-gray-50"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{item.nama_kategori}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <DialogAlert
                          data={item}
                          fetchCategories={fetchCategories}
                        />
                        <Button
                          className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-8 py-6"
                          onClick={() => remove(item.id_kategori)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
