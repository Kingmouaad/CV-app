import { Mail, Phone, Dot } from "lucide-react";

export default function Change({ general }) {
  return (
    <>
      <div className="flex justify-center text-3xl">{general.general.name}</div>
      <div className="flex justify-center gap-3">
        <div className="flex text-2xl items-center">
          {general.general.email}
          <Mail />
        </div>
        <Dot />
        <div className="flex text-2xl items-center">
          <Phone />
          {general.general.phone}
        </div>
      </div>
      <div>Professional Summary</div>
      <div>{general.general.text}</div>
      <div>Education</div>
      {general.education.map((edu, index) => (
        <div key={index}>
          <div>
            <div>{edu.school}</div>
            <div>{edu.degree}</div>
          </div>
          <div>
            <div>{edu.sdate}</div>
            <div>{edu.edate}</div>
          </div>
        </div>
      ))}
      <div>Experience</div>
      <div></div>
    </>
  );
}
