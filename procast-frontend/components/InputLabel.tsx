import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputLabelProps = {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputLabel({
  name,
  type,
  placeholder,
  label = name,
  value,
  required = false,
  onChange,
}: InputLabelProps) {
  return (
    <div className="grid w-full  items-center gap-3">
      <Label htmlFor={type} className="capitalize text-zinc-400 ">
        {label ?? name}
      </Label>
      <Input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="py-6 focus:ring-primary-100/40! focus:border-primary-100!"
      />
    </div>
  );
}
