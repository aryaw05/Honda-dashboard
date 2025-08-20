import { useState } from "react";

export default function useActionForm<T extends Record<string, any>>(
  initialValues: T
) {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type, value, files, multiple } = e.target as HTMLInputElement;

    if (type === "file") {
      if (!files) return;

      setFormData((prev) => ({
        ...prev,
        [name]: multiple ? Array.from(files) : files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
  };
}
