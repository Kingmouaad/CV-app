import { FileText } from "lucide-react";

export default function Header() {
  return (
    <div className="h-20 w-full bg-red-500 flex justify-center items-center text-[#27d3c8] text-[40px]">
      <FileText size={40} color="#27d3c8" />
      CV Builder
    </div>
  );
}
