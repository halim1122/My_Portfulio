import React from 'react';
import { motion } from 'motion/react';
import { Element } from 'react-scroll';

const allSkills = [
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind', image: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', image: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', image: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000' },
  { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

const SkillsSection = () => {
  return (
    <Element name='skills'>
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 data-aos="flip-up" className="text-4xl font-bold text-center mb-10 ">
       <span className='bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent'> My Skills</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#0f0f1a] border border-[#ab057d]/40 rounded-xl p-6 shadow-md shadow-purple-500/10"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {allSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-[#ab057d]/10 text-purple-400 border border-purple-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <img src={skill.image} alt={skill.name} className="w-7 h-7" />
              {skill.name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    </Element>
  );
};

export default SkillsSection;
