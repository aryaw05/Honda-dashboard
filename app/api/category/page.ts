import { Category } from "@/lib/types/category";
import Cookies from "js-cookie";
const token = Cookies.get("token");
export async function getCategories() {
  const result = await fetch("http://localhost:3000/api/kategori/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
  });
  if (!result.ok) {
    console.error(result.statusText);
  }
  const data = await result.json();

  return data;
}

export async function addCategory(formData: { nama_kategori: string }) {
  const result = await fetch("http://localhost:3000/api/kategori", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify(formData),
  });
  if (!result.ok) {
    console.error(result.statusText);
  }
  const data = await result.json();

  return data;
}

export async function deleteCategory(id: number) {
  const result = await fetch(
    `http://localhost:3000/api/kategori/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
    }
  );
  if (!result.ok) {
    console.error(result.statusText);
  }
  const data = await result.json();

  return data;
}

export async function updateCategory(data: Category) {
  const result = await fetch(`http://localhost:3000/api/kategori/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    console.error(result.statusText);
  }
  const res = await result.json();

  return res;
}
