import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { Element } from "react-scroll";

const education = [
  {
    degree: "Diploma in Computer Science",
    institution: "Jashore Polytechnic Institute",
    duration: "2022 – 2026",
    side: "left",
    icon: <MdSchool className="text-white" />,
    gpa: null,
  },
  {
    degree: "SSC - Science",
    institution: "Alirpur Aziz High School",
    duration: "2021 – 2022",
    side: "Right",
    icon: <FaSchool className="text-white" />,
    gpa: "GPA: 5.00",
  },
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "### University",
    duration: "2026-2030 (Expected)",
    side: "left",
    icon: <FaGraduationCap className="text-white" />,
    gpa: null,

  },
];

const Education = () => {
  return (
    <Element name='education'>
      <section
        id="education"
        className="py-16 bg-gray-950 text-white rounded-2xl mb-20 px-4 overflow-hidden"
        data-aos="fade-up"
      >
        {/* Gradient Title */}
        <h2
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          🎓 My Educational Journey
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#ab057d]" />

          <div className="flex flex-col gap-10">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative w-full flex ${item.side === "left"
                    ? "justify-start pr-[55%]"
                    : "justify-end pl-[55%]"
                  }`}
                data-aos={item.side === "left" ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#f82b81] flex items-center justify-center z-10"
                  style={{ marginTop: "4px" }}
                >
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-[#f82b81]/30 p-5 rounded-lg shadow-lg w-[90%] md:w-[80%]">
                  <h3 className="text-xl font-semibold text-[#c54cfd]">
                    {item.degree}
                  </h3>
                  <p className="text-gray-300">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.duration}</p>
                  {item.gpa && <p className="text-[#f82b81] text-sm mt-1">{item.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>

  );
};

export default Education;
