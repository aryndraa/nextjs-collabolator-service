import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextInputLabelProps = {
  name: string;
  placeholder: string;
  height: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function TextInputLabel({
  name,
  placeholder,
  height,
  value,
  onChange,
}: TextInputLabelProps) {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor={name} className="capitalize text-zinc-400">
        {name}
      </Label>
      <Textarea
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        className="resize-none  focus:ring-primary-100/40! focus:border-primary-100!"
        style={{ height: `${height}rem` }}
      />
    </div>
  );
}
