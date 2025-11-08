import { Mail, Phone, Dot } from "lucide-react";

type ContentType = {
  general: {
    name: string;
    email: string;
    phone: string;
    text: string;
  };
  education: Array<{
    id: number;
    school: string;
    degree: string;
    sdate: string;
    edate: string;
  }>;
  practical: Array<{
    id: number;
    company: string;
    position: string;
    responsibilities: string;
    sdate: string;
    edate: string;
  }>;
};

type ChangeProps = {
  content: ContentType;
};

export default function Change({ content }: ChangeProps) {
  return (
    <div className="p-6 text-white">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-3 mb-6 border-b border-white pb-4">
        <div className="text-3xl font-bold">
          {content.general.name || "Your Name"}
        </div>
        <div className="flex items-center gap-3 text-sm">
          {content.general.email && (
            <>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                {content.general.email}
              </div>
              <Dot />
            </>
          )}
          {content.general.phone && (
            <div className="flex items-center gap-1">
              <Phone size={16} />
              {content.general.phone}
            </div>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {content.general.text && (
        <div className="mb-6">
          <div className="text-xl font-bold mb-2 border-b border-white pb-1">
            Professional Summary
          </div>
          <div className="text-sm leading-relaxed">{content.general.text}</div>
        </div>
      )}

      {/* Education Section */}
      {content.education.length > 0 &&
        content.education.some((edu) => edu.school || edu.degree) && (
          <div className="mb-6">
            <div className="text-xl font-bold mb-3 border-b border-white pb-1">
              Education
            </div>
            {content.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">
                      {edu.school || "School Name"}
                    </div>
                    <div className="text-sm italic">
                      {edu.degree || "Degree"}
                    </div>
                  </div>
                  <div className="text-sm text-right">
                    {edu.sdate && <div>{edu.sdate}</div>}
                    {edu.edate && <div>- {edu.edate}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      {/* Experience Section */}
      {content.practical.length > 0 &&
        content.practical.some((prac) => prac.company || prac.position) && (
          <div className="mb-6">
            <div className="text-xl font-bold mb-3 border-b border-white pb-1">
              Experience
            </div>
            {content.practical.map((prac) => (
              <div key={prac.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="font-semibold">
                      {prac.position || "Position"}
                    </div>
                    <div className="text-sm italic">
                      {prac.company || "Company"}
                    </div>
                  </div>
                  <div className="text-sm text-right">
                    {prac.sdate && <div>{prac.sdate}</div>}
                    {prac.edate && <div>- {prac.edate}</div>}
                  </div>
                </div>
                {prac.responsibilities && (
                  <div className="text-sm mt-1 leading-relaxed">
                    {prac.responsibilities}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
