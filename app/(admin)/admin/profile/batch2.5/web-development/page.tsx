import { AdminMemberGrid } from "@/components/adminComponents/profile-preview";

const names = [
  "Grantly Sorongan",
  "Adithia Gunawan",
  "Jordan Sutarto",
  "Grantly Sorongan",
  "Adithia Gunawan",
  "Jordan Sutarto",
];

export default function WebDevelopmentPage() {
  return (
    <AdminMemberGrid
      title="Web Development"
      batch="Batch 2.5"
      memberTitle="Web Development"
      names={names}
    />
  );
}
