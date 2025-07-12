import React from "react";
import Overlay from "./Overlay";
import { IoIosClose } from "react-icons/io";
import { InputLabel } from "./InputLabel";
import { DatePicker } from "./DatePicker";
import Button from "./Button";
import { FaTrashAlt } from "react-icons/fa";

type GroupMeetingModalProps = {
  setIsOpen: () => void;
  type?: string;
};

export default function GroupMeetingModal({
  setIsOpen,
  type = "",
}: GroupMeetingModalProps) {
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
          <h1 className="text-xl font-semibold mb-1">
            {type === "update" ? "Update Meeting" : "Add New Meeting"}{" "}
          </h1>
          <p>Schedule meeting for your team</p>
        </div>
        <div className="flex flex-col gap-6">
          <InputLabel
            name="title"
            type="text"
            placeholder="Define the meeting"
            label="Meeting Title"
          />
          <InputLabel
            name="link"
            type="text"
            placeholder="Link to meeting"
            label="Meeting Links"
          />
          <DatePicker name="Date" />
          {type === "update" ? (
            <div className="flex gap-3">
              <Button>Update Meeting</Button>
              <button className="flex justify-center p-2  rounded-lg text-lg font-medium border text-primary-100 border-primary-100">
                <FaTrashAlt />
              </button>
            </div>
          ) : (
            <Button>Done</Button>
          )}
        </div>
      </div>
    </Overlay>
  );
}
