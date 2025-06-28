"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import GroupAssignmentModal from "./GroupAssignmentModal";
import GroupAssignmentConfirmModal from "./GroupAssignmentConfirmModal";

export default function GroupAssignmetCard() {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  return (
    <div className="p-4 border rounded-lg bg-zinc-50">
      <div className="flex justify-between mb-3 ">
        <div>
          <h3 className=" font-semibold mb-0.5">Task Title</h3>
          <p className="text-sm font-medium text-zinc-400">
            Due : December 12, 12:40 PM{" "}
          </p>
        </div>
        <div>
          <input
            type="checkbox"
            readOnly
            checked={isChecked}
            onClick={(e) => {
              e.preventDefault();
              setShowConfirmModal(true);
            }}
            className="border-primary-100 size-4 rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <div>
        <p className="text-sm text-zinc-600 mb-3">
          Initiate project scope and objectives while coordinating with
          stakeholders to ensure alignment on deliverables and timelines...
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-zinc-400">
              <FaUserCircle />
            </div>
            <span className="text-sm font-medium text-zinc-600">
              Petel Arrauw
            </span>
          </div>
          <button
            onClick={() => setOpenEdit(true)}
            className="flex cursor-pointer justify-center p-2 text-primary-100 rounded-lg text-lg font-medium border border-primary-100"
          >
            <IoSettings />
          </button>
        </div>
      </div>

      {openEdit && (
        <GroupAssignmentModal
          setIsOpen={() => setOpenEdit(false)}
          type="update"
        />
      )}

      {showConfirmModal && (
        <GroupAssignmentConfirmModal
          setIsOpen={() => setShowConfirmModal(false)}
          onConfirm={() => {
            setIsChecked(true);
            setShowConfirmModal(false);
          }}
        />
      )}
    </div>
  );
}
