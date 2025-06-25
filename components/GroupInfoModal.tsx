import React from "react";
import Overlay from "./Overlay";
import { InputLabel } from "./InputLabel";
import { TextInputLabel } from "./TextInputLabel";
import { DatePicker } from "./DatePicker";
import Button from "./Button";

export default function GroupInfoModal() {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Change Group Info</h1>
          <p>Change the group description, deadlines and title</p>
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
