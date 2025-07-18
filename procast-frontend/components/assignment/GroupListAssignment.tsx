"use client";

import React, { useState } from "react";
import GroupAssignmetCard from "./GroupAssignmentCard";
import { GoPlus } from "react-icons/go";
import Button from "../Button";
import GroupAssignmentModal from "./GroupAssignmentModal";

export default function GroupListAssignment() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-scroll max-h-[73dvh] scroll-y pb-24">
        <GroupAssignmetCard />
        <GroupAssignmetCard />
        <GroupAssignmetCard />
        <GroupAssignmetCard />
      </div>

      <div className="py-3 w-full border-t ">
        <Button onClick={() => setOpenModal(true)}>
          <span className="text-xl">
            <GoPlus />
          </span>
          New Assignment
        </Button>
      </div>

      {openModal && (
        <GroupAssignmentModal setIsOpen={() => setOpenModal(false)} />
      )}
    </div>
  );
}
