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
    console.error("Gagal mengambil data motor:", result.statusText);
  }
  const data = await result.json();

  return data;
}
