import { FileText } from "lucide-react";

export default function Header() {
  return (
    <div className="h-20 w-full bg-[#1e3a8a] flex justify-center items-center text-[#27d3c8] text-[40px]">
      <FileText size={40} color="#27d3c8" />
      CV Builder
    </div>
  );
}
