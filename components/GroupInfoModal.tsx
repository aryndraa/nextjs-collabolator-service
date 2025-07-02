"use client";
import React, { useState } from "react";
import Overlay from "./Overlay";
import { InputLabel } from "./InputLabel";
import { TextInputLabel } from "./TextInputLabel";
import { DatePicker } from "./DatePicker";
import Button from "./Button";
import { IoIosClose } from "react-icons/io";
import { Input } from "./ui/input";
import FriendItem from "./FriendItem";
import { Label } from "./ui/label";
import { IoCopy } from "react-icons/io5";

type groupInfoModalProps = {
  setOpenInfo: () => void;
  group: any;
};

export default function GroupInfoModal({
  setOpenInfo,
  group,
}: groupInfoModalProps) {
  const [info, setInfo] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: group?.name,
    description: group?.description,
    deadlineProject: group?.deadlineProject,
  });

  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex justify-end -mb-4">
          <button
            className="text-3xl cursor-pointer text-zinc-500"
            onClick={setOpenInfo}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Change Group Info</h1>
          <p>Change the group description, deadlines and title</p>
          <div className="mt-6 flex justify-between w-full rounded-full   bg-zinc-100">
            <button
              onClick={() => setInfo(false)}
              className={`p-2.5 font-medium rounded-full w-full  cursor-pointer ${
                !info
                  ? "bg-primary-100 text-white "
                  : "text-zinc-500 bg-zinc-100"
              }`}
            >
              Info
            </button>
            <button
              onClick={() => setInfo(true)}
              className={`p-2.5 font-medium rounded-full   w-full cursor-pointer ${
                info
                  ? "bg-primary-100 text-white "
                  : "text-zinc-500 bg-zinc-100"
              }`}
            >
              Invite
            </button>
          </div>
        </div>
        {!info ? (
          <div className="flex flex-col gap-6">
            <InputLabel
              name="name"
              type="text"
              placeholder="Emter your group name"
              value={form?.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextInputLabel
              name="description"
              placeholder="Emter your group description"
              height={8}
              value={form?.description ?? ""}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <DatePicker
              name="Project Deadline"
              value={
                form.deadlineProject
                  ? new Date(form.deadlineProject)
                  : undefined
              }
              onChange={(date) =>
                setForm({
                  ...form,
                  deadlineProject: date ? date.toISOString() : "",
                })
              }
            />
            <div className="flex">
              <Button>Update Info</Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <Input
              placeholder={"Search Friend"}
              className="py-6 focus:ring-primary-100/40! focus:border-primary-100!"
            />
            <div className="flex flex-col gap-3 p-3 border rounded-lg h-[220px] scroll-y overflow-y-scroll">
              <FriendItem type={["invitation"]} />
              <FriendItem type={["invitation"]} />
              <FriendItem type={["invitation"]} />
              <FriendItem type={["invitation"]} />
              <FriendItem type={["invitation"]} />
              <FriendItem type={["invitation"]} />
              <FriendItem type={["invitation"]} />
            </div>
            <div className="grid w-full  items-center gap-3">
              <Label className="capitalize text-zinc-400 ">
                Invite Via Links
              </Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  disabled
                  id="link"
                  placeholder="https:yourgrouplinks.com/ddjgsaw-adijuga"
                  className="py-6 focus:ring-primary-100/40! focus:border-primary-100!"
                />
                <button className="p-4 bg-primary-100 rounded-lg text-white cursor-pointer">
                  <IoCopy />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Overlay>
  );
}
