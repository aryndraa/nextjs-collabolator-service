import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputLabelProps = {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
};

export function InputLabel({
  name,
  type,
  placeholder,
  label = name,
}: InputLabelProps) {
  return (
    <div className="grid w-full  items-center gap-3">
      <Label htmlFor={type} className="capitalize text-zinc-400 ">
        {label ?? name}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        className="py-6 focus:ring-primary-100/40! focus:border-primary-100!"
      />
    </div>
  );
}
