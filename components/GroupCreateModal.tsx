import React, { useState } from "react";
import Overlay from "./Overlay";
import { InputLabel } from "./InputLabel";
import { TextInputLabel } from "./TextInputLabel";
import { DatePicker } from "./DatePicker";
import Button from "./Button";
import { IoIosClose } from "react-icons/io";
import useSWRMutation from "swr/mutation";
import { createGroup } from "@/lib/api/group";

type GroupCreateModalProps = {
  setIsOpen: () => void;
};

export default function GroupCreateModal({ setIsOpen }: GroupCreateModalProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    deadlineProject: "",
  });

  const { trigger, isMutating, error } = useSWRMutation(
    "/api/group",
    createGroup
  );

  const handleSubmit = async () => {
    try {
      const result = await trigger(form);
      console.log("Group created:", result);
      setIsOpen();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex justify-end -mb-4">
          <button
            className="text-3xl cursor-pointer text-zinc-500"
            onClick={setIsOpen}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Create Group</h1>
          <p>Create new group to collaborate with others</p>
        </div>
        <div className="flex flex-col gap-6">
          <InputLabel
            name="name"
            type="text"
            placeholder="Emter your group name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextInputLabel
            name="description"
            placeholder="Emter your group description"
            height={8}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <DatePicker
            name="Project Deadline"
            value={
              form.deadlineProject ? new Date(form.deadlineProject) : undefined
            }
            onChange={(date) =>
              setForm({
                ...form,
                deadlineProject: date ? date.toISOString() : "",
              })
            }
          />
          <div className="flex">
            <Button onClick={handleSubmit} disabled={isMutating}>
              {isMutating ? "Creating..." : "Create Group"}
            </Button>
            {error && <p className="text-red-500">{error.message}</p>}
          </div>
        </div>
      </div>
    </Overlay>
  );
}
