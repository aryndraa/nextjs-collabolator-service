import { useGroup } from "@/lib/stores/group";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "../Button";
import { DatePicker } from "../DatePicker";
import { InputLabel } from "../InputLabel";
import Overlay from "../Overlay";
import { TextInputLabel } from "../TextInputLabel";
import { createGroup } from "@/utils/services/group";
import { toast } from "react-toastify";

type GroupCreateModalProps = {
  setIsOpen: () => void;
};

export default function GroupCreateModal({ setIsOpen }: GroupCreateModalProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    deadlineProject: "",
  });

  const optimisticCreateGroup = useGroup(
    (state) => state.optimisticCreateGroup
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createGroup({
        name: form.name,
        description: form.description,
        deadline: form.deadlineProject,
      });

      optimisticCreateGroup({
        id: Date.now(),
        name: form.name,
        description: form.description,
        deadline: form.deadlineProject,
      });

      toast.success("Group created successfully!");
    } catch (error) {
      console.error("Error creating group:", error);

      toast.error("Failed to create group. Please try again.");
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
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
            <Button type="submit">Create Group </Button>
          </div>
        </form>
      </div>
    </Overlay>
  );
}
