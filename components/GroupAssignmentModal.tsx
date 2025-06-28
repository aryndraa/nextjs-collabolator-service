import React from "react";
import Overlay from "./Overlay";
import { IoIosClose } from "react-icons/io";
import { InputLabel } from "./InputLabel";
import { TextInputLabel } from "./TextInputLabel";
import { DatePicker } from "./DatePicker";
import FriendItem from "./FriendItem";
import { Label } from "./ui/label";
import { FaPlus } from "react-icons/fa";
import Button from "./Button";

export default function GroupAssignmentModal() {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex justify-end -mb-4">
          <button className="text-3xl cursor-pointer text-zinc-500">
            <IoIosClose />
          </button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Add New Task</h1>
          <p>Create a task and assign it to your team.</p>
        </div>
        <div className="flex flex-col gap-6">
          <InputLabel
            label="Task Name"
            name="name"
            placeholder="Define the task"
            type="text"
          />
          <TextInputLabel
            name="description"
            height={8}
            placeholder="Describe the task"
          />
          <DatePicker name="deadline" />
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <Label className="text-zinc-400 ">Assigne</Label>
              <button className="text-white bg-primary-100 text-lg p-2 rounded-full cursor-pointer">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col gap-4 p-3 border rounded-lg  scroll-y overflow-y-scroll">
              <FriendItem />
            </div>
          </div>
          <Button>Done</Button>
        </div>
      </div>
    </Overlay>
  );
}
