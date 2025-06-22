import { FaUserCircle } from "react-icons/fa";

export default function GroupAssignmetCard() {
  return (
    <div className="p-4 border rounded-lg">
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
            className="border-primary-100 size-4 rounded-lg"
          />
        </div>
      </div>
      <div>
        <p className="text-sm text-zinc-600 mb-3">
          Initiate project scope and objectives while coordinating with
          stakeholders to ensure alignment on deliverables and timelines...
        </p>
        <div className="flex items-center gap-2">
          <div className="text-zinc-400">
            <FaUserCircle />
          </div>
          <span className="text-sm font-medium text-zinc-600">
            Petel Arrauw
          </span>
        </div>
      </div>
    </div>
  );
}
