import { useRef, useState } from "react";

export default function FileUploader({
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
    <div className="flex flex-col items-center gap-2">
      {preview ? (
        <img
          src={preview}
          alt="Avatar Preview"
          className="w-20 h-20 rounded-full object-cover"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
          No image
        </div>
      )}
      <button
        type="button"
        onClick={handleClick}
        className="text-sm text-blue-600 underline"
      >
        Choose Avatar
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
      />
    </div>
  );
}
