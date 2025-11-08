import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { useState } from "react";

type PracticalItem = {
  id: number;
  company: string;
  position: string;
  responsibilities: string;
  sdate: string;
  edate: string;
};

type PracticalProps = {
  practical: PracticalItem[];
  onChange: (id: number, value: string, field: string) => void;
  onAdd: () => void;
  onRemove: (id: number) => void;
};

export default function Practical({
  practical,
  onChange,
  onAdd,
  onRemove,
}: PracticalProps) {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-[#f9fbfc]">
      <div className="flex justify-between p-4 [border-bottom:1px_solid_black]">
        <div>Practical Experience</div>
        <button onClick={() => setClick(!click)}>
          {click ? (
            <ChevronUp size={30} color="#27d3c8" />
          ) : (
            <ChevronDown size={30} color="#27d3c8" />
          )}
        </button>
      </div>
      {click && (
        <div>
          {practical.map((prac) => (
            <Tool
              key={prac.id}
              item={prac}
              onChange={onChange}
              onRemove={() => onRemove(prac.id)}
            />
          ))}
          <button
            className="w-[96%] [border:2px_dotted_blue] m-2 h-10 rounded-lg font-bold text-[blue] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onAdd();
            }}
          >
            ADD EXPERIENCE
          </button>
        </div>
      )}
    </div>
  );
}

type ToolProps = {
  item: PracticalItem;
  onChange: (id: number, value: string, field: string) => void;
  onRemove: () => void;
};

function Tool({ item, onChange, onRemove }: ToolProps) {
  return (
    <form className="grid grid-cols-[1fr_1fr] auto-rows-[60px] bg-[#dbeafe] m-2 rounded-2xl [box-shadow:0_0_6px_black]">
      <div className="col-[1/3]">
        <label htmlFor={`company-${item.id}`}>Company</label>
        <input
          type="text"
          id={`company-${item.id}`}
          value={item.company}
          placeholder="Company of example"
          onChange={(e) => onChange(item.id, e.target.value, "company")}
        />
      </div>
      <div className="col-[1/3]">
        <label htmlFor={`role-${item.id}`}>Role</label>
        <input
          type="text"
          id={`role-${item.id}`}
          value={item.position}
          placeholder="Software Engineer"
          onChange={(e) => onChange(item.id, e.target.value, "position")}
        />
      </div>
      <div className="col-[1/3]">
        <label htmlFor={`area-${item.id}`}>Responsibilities</label>
        <textarea
          id={`area-${item.id}`}
          value={item.responsibilities}
          placeholder="A brief summary of the work you did"
          onChange={(e) =>
            onChange(item.id, e.target.value, "responsibilities")
          }
        />
      </div>
      <div>
        <label htmlFor={`sdate-${item.id}`}>Start Date</label>
        <input
          type="text"
          id={`sdate-${item.id}`}
          value={item.sdate}
          placeholder="April 2017"
          onChange={(e) => onChange(item.id, e.target.value, "sdate")}
        />
      </div>
      <div>
        <label htmlFor={`edate-${item.id}`}>End Date</label>
        <input
          id={`edate-${item.id}`}
          type="text"
          value={item.edate}
          placeholder="May 2020"
          onChange={(e) => onChange(item.id, e.target.value, "edate")}
        />
      </div>
      <div className="col-[1/3] flex justify-center items-center text-[25px] text-red-600">
        <button
          className="flex cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
        >
          <Trash2 size={30} color="#fb0404" className="relative top-[3px]" />
          Remove
        </button>
      </div>
    </form>
  );
}
