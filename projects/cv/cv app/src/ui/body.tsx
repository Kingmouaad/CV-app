import { useState } from "react";
import Edu from "./edu";
import Genral from "./genral";
import Practical from "./practical";
import Change from "./change";

export default function Body() {
  const [content, setContent] = useState({
    general: {
      name: "",
      email: "",
      phone: "",
      text: "",
    },
    education: [
      { id: Date.now(), school: "", degree: "", sdate: "", edate: "" },
    ],
    practical: [
      {
        id: Date.now() + 1,
        company: "",
        position: "",
        responsibilities: "",
        sdate: "",
        edate: "",
      },
    ],
  });

  // ✅ Update general info (works correctly as it's an object)
  function syncGeneral(value: string, field: string): void {
    setContent((prev) => ({
      ...prev,
      general: { ...prev.general, [field]: value },
    }));
  }
  function syncEducation(id: number, value: string, field: string): void {
    setContent((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  }
  function syncPractical(id: number, value: string, field: string): void {
    setContent((prev) => ({
      ...prev,
      practical: prev.practical.map((prac) =>
        prac.id === id ? { ...prac, [field]: value } : prac
      ),
    }));
  }
  function addEducation(): void {
    setContent((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now(), school: "", degree: "", sdate: "", edate: "" },
      ],
    }));
  }
  function removeEducation(id: number): void {
    setContent((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  }
  function addPractical(): void {
    setContent((prev) => ({
      ...prev,
      practical: [
        ...prev.practical,
        {
          id: Date.now(),
          company: "",
          position: "",
          responsibilities: "",
          sdate: "",
          edate: "",
        },
      ],
    }));
  }

  // ✅ Remove practical entry
  function removePractical(id: number): void {
    setContent((prev) => ({
      ...prev,
      practical: prev.practical.filter((prac) => prac.id !== id),
    }));
  }

  return (
    <div className="bg-[#f6f7f8] flex-1 flex justify-start gap-5 p-3 min-h-[70vh]">
      <div className="w-[30%] flex flex-col gap-2.5 bg-[#45a7c4] p-3 components">
        <Genral onChange={syncGeneral} />
        <Edu
          education={content.education}
          onChange={syncEducation}
          onAdd={addEducation}
          onRemove={removeEducation}
        />
        <Practical
          practical={content.practical}
          onChange={syncPractical}
          onAdd={addPractical}
          onRemove={removePractical}
        />
      </div>
      <div className="w-[50%] bg-[#45a7c4] flex flex-col m-5 gap-3">
        <Change content={content} />
      </div>
    </div>
  );
}
