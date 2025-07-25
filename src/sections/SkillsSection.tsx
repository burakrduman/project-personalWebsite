import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'industry' | 'toolsTech';
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Microprocessors', level: 95, category: 'industry' },
    { name: 'Hydraulics', level: 90, category: 'industry' },
    { name: 'Pneumatics', level: 92, category: 'industry' },
    { name: 'PLC Programming', level: 85, category: 'industry' },
    { name: 'Siemens S7-200', level: 88, category: 'industry' },
    { name: 'S7-300', level: 80, category: 'industry' },
    { name: 'SolidWorks', level: 75, category: 'toolsTech' },
    { name: 'AutoCAD', level: 90, category: 'toolsTech' },
    { name: 'C', level: 85, category: 'toolsTech' },
    { name: 'Matlab', level: 90, category: 'toolsTech' },
    { name: 'Arduino', level: 100, category: 'toolsTech' },
    { name: 'Microsoft Office', level: 100, category: 'toolsTech' },
    { name: 'Microsoft Excel', level: 100, category: 'toolsTech' },
    { name: 'Power Point', level: 95, category: 'toolsTech' },
  ];

  const frontendSkills = skills.filter(skill => skill.category === 'industry');
  const designSkills = skills.filter(skill => skill.category === 'toolsTech');

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Here are the technologies and skills I've acquired throughout my journey as a PhD Researcher.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Indusrty Knowledge
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Tools & Technologies
            </h3>
            {designSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;