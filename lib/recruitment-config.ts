export type RecruitmentBenefit = {
  title: string;
  description: string;
};

export type RecruitmentConfig = {
  isActive: boolean;
  batchName: string;
  label: string;
  title: string;
  shortMessage: string;
  deadlineLabel: string;
  deadline: string;
  applicationUrl: string;
  applicationLabel: string;
  detailsUrl: string;
  detailsLabel: string;
  showAnnouncementBar: boolean;
  showHomeSection: boolean;
  dismissLabel: string;
  benefits: RecruitmentBenefit[];
};

export const recruitmentConfig = {
  isActive: true,
  batchName: "Batch 3.5",
  label: "Open Recruitment",
  title: "Ready to Grow With Us?",
  shortMessage:
    "UVICS Open Recruitment is available for students who want to grow, collaborate, develop their skills, and pursue achievements together.",
  deadlineLabel: "Application Deadline",
  deadline: "22 August",
  applicationUrl: "https://bit.ly/RegistrationUVICS_BATCH3_5",
  applicationLabel: "Apply Now",
  detailsUrl: "",
  detailsLabel: "Learn More",
  showAnnouncementBar: true,
  showHomeSection: true,
  dismissLabel: "Dismiss recruitment announcement",
  benefits: [
    {
      title: "Competition Support",
      description:
        "Access competition opportunities, mentoring, and team development.",
    },
    {
      title: "Skill Development",
      description:
        "Strengthen technical, interpersonal, and professional capabilities.",
    },
    {
      title: "Portfolio Building",
      description:
        "Build experience through competitions, projects, and organizational contribution.",
    },
    {
      title: "Networking",
      description:
        "Connect with students, mentors, and people with similar ambitions.",
    },
  ],
} satisfies RecruitmentConfig;
