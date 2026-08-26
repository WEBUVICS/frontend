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

const batch = "Batch 2";

export default function BatchTwoProfilePage() {
  return (
    <AdminProfileBatchPreview
      selectedBatch={batch}
      departments={["Web Development", "Indev", "Exaf", "Core Team", "Editor", "PR"]}
      sections={[
        { title: "Advisor", members: makeMembers(batch, "Advisor", ["Sir. Stenly Pungus Ph.D"]) },
        { title: "Core Team", href: "/admin/profile/batch2/core-team", members: makeMembers(batch, "Core Team", ["Aiko Lasut", "Prince Tampi", "Dion Kobi"]) },
        { title: "Web Development", href: "/admin/profile/batch2/web-development", members: makeMembers(batch, "Web Development", ["Grantly Sorongan", "Adithia Gunawan", "Jordan Sutarto"]) },
        { title: "Indev", href: "/admin/profile/batch2/indev", members: makeMembers(batch, "Indev", ["Marshanda Padmarini", "Avriel Parengkuan", "Alyan Donuhulu"]) },
        { title: "Exaf", href: "/admin/profile/batch2/exaf", members: makeMembers(batch, "Exaf", ["Marcel Pandelaki", "Reva Rorie", "Natanel Rantung"]) },
        { title: "Editor", href: "/admin/profile/batch2/Editor", members: makeMembers(batch, "Editor", ["John Doe", "Jane Doe"]) },
        { title: "PR", href: "/admin/profile/batch2/PR", members: makeMembers(batch, "Public Relations", ["Alex Smith", "Emily Johnson"]) },
      ]}
    />
  );
}
