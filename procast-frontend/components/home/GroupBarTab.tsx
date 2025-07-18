type GroupBarTabProps = {
  count: number;
  name: string;
  active?: boolean;
};

export default function GroupBarTab({
  count = 0,
  name,
  active = false,
}: GroupBarTabProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`size-6 rounded-full  flex items-center justify-center ${
          active
            ? "bg-white text-primary-100 font-semibold"
            : "bg-zinc-100 text-zinc-500"
        }`}
      >
        {count}
      </span>
      {name}
    </div>
  );
}
