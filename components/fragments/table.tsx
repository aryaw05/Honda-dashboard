import { Button } from "../ui/button";

export default function TableComponent(props: any) {
  const { data, remove } = props;

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
                        <Button
                          variant="outline"
                          className="rounded-lg px-8 py-6"
                        >
                          Edit
                        </Button>
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
