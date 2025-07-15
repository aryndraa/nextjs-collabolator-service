import { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

export default function AvatarUploader({
  onFileSelect,
}: {
  onFileSelect: (file: File) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      onFileSelect(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <button
      className="flex flex-col items-center gap-2"
      type="button"
      onClick={handleClick}
    >
      <div>
        {!preview ? (
          <div className="w-28 h-28 text-2xl rounded-full bg-gray-200 flex items-center justify-center  text-gray-400">
            <FaUser />
          </div>
        ) : (
          <img
            src={preview}
            alt="Avatar Preview"
            className="w-28 h-28 rounded-full object-cover"
          />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />
    </button>
  );
}
