import Cookies from "js-cookie";
export async function getMotors(
  id_kategori: string,
  page: string,
  size: string
) {
  const token = Cookies.get("token");
  const queryParams = new URLSearchParams({
    id_kategori: id_kategori,
    page: page,
    size: size,
  });
  const result = await fetch(`http://localhost:3000/api/motor?${queryParams}`, {
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

export async function postMotors(formData: any) {
  const token = Cookies.get("token");
  const result = await fetch("http://localhost:3000/api/motor", {
    method: "POST",
    body: formData,

    headers: {
      Authorization: token || "",
    },
  });
  if (!result.ok) {
    console.error(result.statusText);
  }
  const data = await result.json();

  return data;
}

export async function deleteMotor(id: number) {
  const token = Cookies.get("token");
  const result = await fetch(`http://localhost:3000/api/motor/delete/${id}`, {
    method: "DELETE",
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

export async function getMotorById(id: number) {
  const token = Cookies.get("token");
  const result = await fetch(`http://localhost:3000/api/motor/${id}`, {
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

export async function updateMotor(data: any, motorId: number) {
  const token = Cookies.get("token");
  const result = await fetch(
    `http://localhost:3000/api/motor/update/${motorId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: token || "",
      },
      body: data,
    }
  );
  if (!result.ok) {
    console.error(result.statusText);
  }
  const res = await result.json();

  return res;
}

export async function deleteDetailImageCard(imageUrl: string) {
  const token = Cookies.get("token");
  const result = await fetch(
    `http://localhost:3000/api/motor/delete-image-details/${imageUrl}`,
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
  const res = await result.json();

  return res;
}
