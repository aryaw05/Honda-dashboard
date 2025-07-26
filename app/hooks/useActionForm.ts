import { useState } from "react";

export default function useActionForm(initialValues = {}) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e: any) => {
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
