"use client";

export default function About() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-second">
          About UVICS
        </h1>

        {/* Visi & Misi */}
        <section className="bg-[var(--popover)] rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-center text-[var(--color-second)] mb-6">
            Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-second)] text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  To become a community where students can continuously grow, develop their potential, and achieve through competitions.
                </li>
                <li>
                  UVICS strives to contribute meaningful achievements and a positive reputation to Universitas Klabat.
                </li>
                <li>
                  UVICS provides opportunities for students to strengthen their technical skills, interpersonal skills, experience, and professional portfolios.
                </li>
                <li>
                  Beyond individual development, UVICS aims to create sustainable initiatives that positively impact the community.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-second)] text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Bring together students from different academic levels and disciplines in an environment where they can learn, collaborate, compete, and build meaningful portfolios.
                </li>
                <li>
                  Provide equal opportunities for members to develop teamwork, communication, leadership, technical skills, and professional capabilities.
                </li>
                <li>
                  Support collaborative learning that strengthens both technical and interpersonal capabilities.
                </li>
                <li>
                  Develop innovative programs that encourage members to create solutions that can contribute positively to society.
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* Our Program */}
<section className="bg-[var(--color-muted)] rounded-lg p-8 shadow-md text-center">
  <h2 className="text-2xl font-bold text-[var(--color-second)] mb-6">
    Our Program
  </h2>

  {/* Daftar program UVICS */}
  {(() => {
    const programs = [
      {
        title: "Kabel",
        division: "Internal Development",
        description:
          "A structured member development initiative designed to support personal growth, competition readiness, professional development, and portfolio building.",
      },
      {
        title: "Champions of Change (CoC)",
        division: "Internal Development",
        description:
          "A recognition initiative that highlights active member participation, contribution, and growth within UVICS programs.",
      },
      {
        title: "Bonding",
        division: "Internal Development",
        description:
          "A member engagement program that strengthens relationships, collaboration, and organizational culture among UVICS members.",
      },
    ]

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[var(--color-second)] text-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-lg font-semibold mb-2">
              {index + 1}. {program.title}
            </h3>
            <p className="text-sm italic">{program.division}</p>
            <p className="mt-2 text-sm">{program.description}</p>
          </div>
        ))}
      </div>
    );
  })()}
</section>


        {/* Job Description */}
        <section>
          <h2 className="text-2xl font-bold text-center text-[var(--color-second)] mb-6">
            Job Description
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Internal Development</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>
                  Organizes bonding activities that strengthen relationships among UVICS members.
                </li>
                <li>
                  Manages internal development initiatives such as Kabel and supports periodic member performance growth.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Public Relations</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>
                  Builds and maintains the public presence of UVICS through communication, storytelling, audience engagement, and promotional content.
                </li>
                <li>
                  Plans social media content, produces organizational updates, and collaborates with other departments to communicate UVICS activities effectively.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Editor</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Produces photo and video documentation for UVICS activities.</li>
                <li>
                  Creates and edits visual materials, maintains organized digital archives, and supports communication through creative assets.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Competition Handler</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Identifies and shares relevant competition opportunities with UVICS members.</li>
                <li>
                  Supports team preparation, mentoring coordination, progress monitoring, and achievement recognition.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">Web Development</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Maintains and improves the official UVICS website.</li>
                <li>
                  Publishes approved content and develops web-based projects based on organizational needs and advisor direction.
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-2">CREATE</h3>
              <ul className="list-disc pl-4 space-y-2 text-sm">
                <li>Providing opportunities for members to contribute through digital projects, creative production, communication, and organizational initiatives.</li>
                <li>
                  Supporting UVICS programs through collaboration across departments and member-led initiatives.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center text-[var(--color-second)]">
            Benefits
          </h2>
          <div className="bg-[var(--color-second)] text-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-4 space-y-2 text-sm">
              <li>
                Competition Mentoring
              </li>
              <li>
                Competition Funding
              </li>
              <li>
                E-Certificates
              </li>
              <li>LinkedIn Recommendations</li>
              <li>Competition Consultation with Mentors</li>
              <li>Portfolio Building</li>
              <li>
                Progress Monitoring & Expectation Setting
              </li>
              <li>
                Networking Opportunities
              </li>
              <li>Canva Pro Access</li>
              <li>Skill Development</li>
              <li>Personal Branding Development</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
