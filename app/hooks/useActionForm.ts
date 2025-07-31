import { useState } from "react";

export default function useActionForm<T extends Record<string, any>>(
  initialValues: T
) {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    setFormData,
    handleChange,
  };
}
