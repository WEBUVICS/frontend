import {
  AdminProfileBatchPreview,
  type AdminMember,
} from "@/components/adminComponents/profile-preview";

const makeMembers = (
  batch: string,
  title: string,
  names: string[]
): AdminMember[] =>
  names.map((name, index) => ({ id: index + 1, name, title, batch, image: null }));

const batch = "Batch 1";

export default function BatchOneProfilePage() {
  return (
    <AdminProfileBatchPreview
      selectedBatch={batch}
      departments={[
        "Web Development",
        "Public and Documentation",
        "Event and Education",
        "Core Team",
      ]}
      sections={[
        { title: "Advisor", members: makeMembers(batch, "Advisor", ["Sir. Stenly Pungus Ph.D"]) },
        { title: "Core Team", href: "/admin/profile/batch1/core-team", members: makeMembers(batch, "Core Team", ["Aiko Lasut", "Prince Tampi", "Dion Kobi"]) },
        { title: "Web Development", href: "/admin/profile/batch1/web-development", members: makeMembers(batch, "Web Development", ["Grantly Sorongan", "Adithia Gunawan", "Jordan Sutarto"]) },
        { title: "Public and Documentation", href: "/admin/profile/batch1/public-documentation", members: makeMembers(batch, "Member", ["Marshanda Padmarini", "Avriel Parengkuan", "Alyan Donuhulu"]) },
        { title: "Event and Education", href: "/admin/profile/batch1/event-education", members: makeMembers(batch, "Member", ["Marcel Pandelaki", "Reva Rorie", "Natanel Rantung"]) },
      ]}
    />
  );
}
