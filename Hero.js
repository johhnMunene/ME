import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto">
        <div className="bg-[#161925] border-2 border-blue-500 p-6 rounded-lg shadow-lg">
          <pre className="text-blue-400 text-center">
            {`
               -\`
              .o+\`
             \`ooo/
            \`+oooo:
           \`+oooooo:
           -+oooooo+:
         \`/:-:++oooo+:
        \`/++++/+++++++:
       \`/++++++++++++++:
      \`/+++ooooooooooooo/\`
     ./ooosssso++osssssso+\`
    .oossssso-\`\`\`/ossssss+\`
   -osssssso.      :ssssssso.
  :osssssss/        osssso+++.
 /ossssssss/        +ssssooo/-
\`/ossssso+/:-      -:/+osssso+-
\`+sso+:-\`              \`.-/+oso:
\`++:.                          \`-/+/
.\`                                 \`/
            `}
          </pre>
          <h2 className="text-4xl font-bold mt-4">Cybersecurity Specialist & Software Engineer</h2>
          <p className="mt-4">
            Passionate about protecting systems, building secure solutions, and solving challenging problems.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-black"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

