import Cookies from "js-cookie";
export async function getMotors() {
  const token = Cookies.get("token");
  const result = await fetch("http://localhost:3000/api/motor", {
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

export async function postMotors(token: string, formData: any) {
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
