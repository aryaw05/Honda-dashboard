export async function login(formData: { username: string; password: string }) {
  const response = await fetch(`http://localhost:3000/api/users/login`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return await response.json();
}
