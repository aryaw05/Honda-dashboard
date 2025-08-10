import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputData from "./input";
import { CategoryType } from "@/lib/types/category";
import useActionForm from "@/hooks/useActionForm";
import { updateCategory } from "@/app/api/category/page";
import { useState } from "react";

export function DialogAlert(props: {
  data: CategoryType;
  fetchCategories: () => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const { data, fetchCategories } = props;
  const { formData, handleChange } = useActionForm({
    id_kategori: data.id_kategori,
    nama_kategori: data.nama_kategori,
  });

  async function handleUpdate(data: CategoryType) {
    try {
      await updateCategory(data);
      await fetchCategories();
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="  rounded-lg px-8 py-6">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] gap-10">
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Make Category changes here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <InputData
                onChange={handleChange}
                value={data.nama_kategori}
                placeholder="Category Name"
                label="Name"
                name="nama_kategori"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="text-md py-4   shadow-md rounded-xl "
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={() => handleUpdate(formData)}
              disabled={!formData.nama_kategori}
              className="text-md py-4 bg-linear-65 from-red-400 to-red-700 text-white shadow-md rounded-xl shadow-red-500/30"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
