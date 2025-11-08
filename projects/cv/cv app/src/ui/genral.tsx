import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

type GenralProps = {
  onChange: (value: string, field: string) => void;
};

export default function Genral({ onChange }: GenralProps) {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-[#f9fbfc]">
      <div className="flex justify-between p-4 [border-bottom:1px_solid_black]">
        <div>General Information</div>
        <button onClick={() => setClick(!click)}>
          {click ? (
            <ChevronUp size={30} color="#27d3c8" />
          ) : (
            <ChevronDown size={30} color="#27d3c8" />
          )}
        </button>
      </div>
      {click && (
        <form className="grid grid-cols-[1fr_1fr] auto-rows-[60px]">
          <div className="col-[1/3]">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Ilyes"
              onChange={(e) => onChange(e.target.value, "name")}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="ilyes@gmail.com"
              onChange={(e) => onChange(e.target.value, "email")}
            />
          </div>
          <div>
            <label htmlFor="phonenumber">Number</label>
            <input
              type="tel"
              id="phonenumber"
              placeholder="+213 05 49 38 47 38"
              onChange={(e) => onChange(e.target.value, "phone")}
            />
          </div>
          <div className="col-[1/3] min-h-18">
            <label htmlFor="pro">Summary of the background</label>
            <textarea
              id="pro"
              placeholder="A brief summary of your professional background"
              className="min-h-[50px] p-2"
              onChange={(e) => onChange(e.target.value, "text")}
            />
          </div>
        </form>
      )}
    </div>
  );
}
