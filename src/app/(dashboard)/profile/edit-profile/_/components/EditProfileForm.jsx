"use client";
import { useAuth } from "@/context/AuthContext";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import TextField from "@/ui/TextField";
import { includeObject } from "@/utils/objectUtils";
import { useEffect, useState } from "react";

function EditProfileForm() {
  const { user, editUser, isLoading } = useAuth();
  const [formData, setFormData] = useState({});
  const includesKey = ["name", "email"];

  useEffect(() => {
    if (user) setFormData(includeObject(user, includesKey));
  }, [user]);

  const handleEditUser = (e) => {
    e.preventDefault();
    editUser(formData);
  };

  return (
    <form className="form" onSubmit={handleEditUser}>
      <TextField
        name="name"
        label="نام و نام‌خانوادگی"
        value={formData.name || ""}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        isRequired
      />
      <TextField
        name="email"
        label="ایمیل"
        value={formData.email || ""}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        isRequired
      />
      <div>
        {isLoading ? (
          <Button variant="primary" className="w-full">
            <SpinnerMini className="mx-auto" />
          </Button>
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}

export default EditProfileForm;
