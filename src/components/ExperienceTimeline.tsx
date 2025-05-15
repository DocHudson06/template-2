import Image from 'next/image';

// Sample data array
const experiences = [
  {
    title: 'Systems Engineer',
    company: 'Infosys Pvt Ltd. (Florida Power and Light)',
    period: 'Dec 2021 - Jul 2023',
    description: 'Developed and maintained enterprise web applications. Collaborated with cross-functional teams to deliver projects on time. Implemented CI/CD pipelines for faster deployments.',
    logo: '/images/clients/company1.jpg',
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: 'Aug 2023 - Present',
    description: 'Built responsive UIs with React and Tailwind CSS. Optimized performance and accessibility. Mentored junior developers.',
    logo: '/images/clients/company2.jpg',
  },
  // Add more experiences as needed
];

const ExperienceTimeline = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Experience</h2>
      <p className="text-center text-gray-400 mb-12">My professional journey</p>
      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-blue-500 rounded-full -translate-x-1/2 z-0" />
        <div className="w-full flex flex-col gap-12 z-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex justify-center items-center w-full">
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 border-4 border-white dark:border-gray-900 rounded-full z-20 shadow-md" />
              {/* Card */}
              <div className="w-full md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 mx-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg flex flex-col md:flex-row items-center gap-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-600">
                    <Image src={exp.logo} alt={exp.company + ' logo'} width={48} height={48} className="object-contain w-10 h-10" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{exp.company}</p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{exp.period}</div>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
