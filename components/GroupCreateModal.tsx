import React from "react";
import Overlay from "./Overlay";
import { InputLabel } from "./InputLabel";
import { TextInputLabel } from "./TextInputLabel";
import { DatePicker } from "./DatePicker";
import Button from "./Button";
import { IoIosClose } from "react-icons/io";

export default function GroupCreateModal() {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex justify-end -mb-4">
          <button className="text-3xl cursor-pointer text-zinc-500">
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
          />
          <TextInputLabel
            name="description"
            placeholder="Emter your group description"
            height={8}
          />
          <DatePicker name="Project Deadline" />
          <div className="flex">
            <Button>Create Group</Button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
