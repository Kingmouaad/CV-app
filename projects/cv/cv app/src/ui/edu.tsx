import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { useState } from "react";

type EducationItem = {
  id: number;
  school: string;
  degree: string;
  sdate: string;
  edate: string;
};

type EduProps = {
  education: EducationItem[];
  onChange: (id: number, value: string, field: string) => void;
  onAdd: () => void;
  onRemove: (id: number) => void;
};

export default function Edu({
  education,
  onChange,
  onAdd,
  onRemove,
}: EduProps) {
  const [click, setClick] = useState(false);

  return (
    <div className="bg-[#f9fbfc]">
      <div className="flex justify-between p-4 [border-bottom:1px_solid_black]">
        <div>Educational Experience</div>
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
          {education.map((edu) => (
            <Tool
              key={edu.id}
              item={edu}
              onChange={onChange}
              onRemove={() => onRemove(edu.id)}
            />
          ))}
          <button
            className="w-[96%] [border:2px_dotted_blue] m-2 h-10 rounded-lg font-bold text-[blue] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onAdd();
            }}
          >
            ADD EDUCATION
          </button>
        </div>
      )}
    </div>
  );
}

type ToolProps = {
  item: EducationItem;
  onChange: (id: number, value: string, field: string) => void;
  onRemove: () => void;
};

function Tool({ item, onChange, onRemove }: ToolProps) {
  return (
    <form className="grid grid-cols-[1fr_1fr] auto-rows-[60px] bg-[#dbeafe] m-2 rounded-2xl [box-shadow:0_0_6px_black]">
      <div className="col-[1/3]">
        <label htmlFor={`uni-${item.id}`}>University / School</label>
        <input
          type="text"
          id={`uni-${item.id}`}
          value={item.school}
          placeholder="University of example"
          onChange={(e) => onChange(item.id, e.target.value, "school")}
        />
      </div>
      <div className="col-[1/3]">
        <label htmlFor={`degree-${item.id}`}>Degree</label>
        <input
          type="text"
          id={`degree-${item.id}`}
          value={item.degree}
          placeholder="Computer Science"
          onChange={(e) => onChange(item.id, e.target.value, "degree")}
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
