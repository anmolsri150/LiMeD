import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "home",
  icon: "iconsminds-home",
  label: "Dashboard",
  to: `${adminRoot}/dashboard`,
},
  {
    id: "second-menu",
    icon: "iconsminds-library",
    label: "Documents",
    to: `${adminRoot}/documents`,
  },
  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "Manage Access",
    to: `${adminRoot}/access`,
  },
  {
    id: "single",
    icon: "iconsminds-profile",
    label: "Your Profile",
    to: `${adminRoot}/dashboard`,
  },
  {
    id: "docs",
    icon: "iconsminds-gear",
    label: "App Settings",
    to: `${adminRoot}/dashboard`,
  }
];
export default data;
