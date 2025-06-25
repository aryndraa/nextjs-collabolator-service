import React from "react";
import Overlay from "./Overlay";
import { InputLabel } from "./InputLabel";
import { TextInputLabel } from "./TextInputLabel";

export default function GroupInfoModal() {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Change Group Info</h1>
          <p>Change the group description, deadlines and title</p>
          <div className="mt-6 flex justify-between w-full rounded-full  bg-zinc-100">
            <button className="p-2.5 text-white font-medium rounded-full  bg-primary-100 w-full">
              Info
            </button>
            <button className="p-2.5 text-zinc-500 font-medium rounded-full  bg-zinc-100 w-full">
              Participant
            </button>
          </div>
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
        </div>
      </div>
    </Overlay>
  );
}
