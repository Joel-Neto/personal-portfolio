import { Collapse, theme } from "antd";
import { HiAcademicCap } from "react-icons/hi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { CaretRightOutlined } from "@ant-design/icons";
import { experience } from "../utils/experience";
import { education } from "../utils/education";
import { skills } from "../utils/skills";

export default function Skills() {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    padding: 4,
    marginBottom: 8,
    background: "white",
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[150px]">
      <div className="container mx-auto max-w-4xl p-4 pt-12">
        <div className=" mb-4 p-4 text-center">
          <h2 className="mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold text-gray-800">
              Experiências
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 ">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              <span>Experiências</span>
            </h3>

            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              items={experience.map((item, index) => ({
                key: `${index + 1}`,
                label: <p className="font-semibold text-gray-900 text-lg">{item.name}</p> ,
                children: <p className="text-base text-justify">{item.description}</p>,
                style: panelStyle
              }))}
            />
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className=" mb-4 p-4 text-center">
          <h2 className="mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>

          <p className="text-sm text-gray-700">
            Full-Stack Developer | React.js | TypeScript | JavaScript | Node.js
          </p>
        </div>

        <div className="flex flex-col gap-8 ">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              <span>Educação</span>
            </h3>

            {education.map((ed, i) => (
              <div
                key={`education-${i}`}
                className="mb-2 rounded-lg bg-white p-4 font-semibold text-gray-900"
              >
                {ed.name}
              </div>
            ))}
          </div>

          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
              Skills
            </h3>

            <div className="flex flex-wrap gap-2 font-semibold ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-10 py-3 bg-gradient-to-tr from-blue-900 to-blue-800 text-white rounded-3xl"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
