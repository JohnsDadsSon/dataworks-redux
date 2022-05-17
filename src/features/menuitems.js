import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import DnsTwoToneIcon from "@mui/icons-material/DnsTwoTone";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone";
import DataThresholdingTwoToneIcon from "@mui/icons-material/DataThresholdingTwoTone";
import MilitaryTechTwoToneIcon from "@mui/icons-material/MilitaryTechTwoTone";
import SmartToyTwoToneIcon from "@mui/icons-material/SmartToyTwoTone";
import SettingsInputComponentTwoToneIcon from "@mui/icons-material/SettingsInputComponentTwoTone";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import AssuredWorkloadTwoToneIcon from "@mui/icons-material/AssuredWorkloadTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SavingsTwoToneIcon from "@mui/icons-material/SavingsTwoTone";
import CloudTwoToneIcon from "@mui/icons-material/CloudTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import CastForEducationTwoToneIcon from "@mui/icons-material/CastForEducationTwoTone";
import DocumentScannerTwoToneIcon from "@mui/icons-material/DocumentScannerTwoTone";
import TakeoutDiningTwoToneIcon from "@mui/icons-material/TakeoutDiningTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
const iconPurple = "#352d60CC";
export const menuitems = [
  {
    title: "System Status",
    description: "This is the description for system status",
    icon: (
      <SettingsSuggestTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />
    ),
    catagory: "Operations",
    link: "/SystemStatus",
    key: 0,
  },
  {
    title: "Workflows",
    description: "This is the description for workflows",
    icon: <AccountTreeTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Operations",
    link: "/Workflows",
    key: 1,
  },
  {
    title: "Scheduler",
    description: "This is the description for scheduler",
    icon: <CalendarMonthTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Operations",
    link: "/Scheduler",

    key: 2,
  },
  {
    title: "Proxy Management",
    description: "This is the description for proxy Management",
    icon: <DnsTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Operations",
    link: "/ProxyManagement",

    key: 3,
  },
  {
    title: "Reporting",
    description: "This is the description for reporting",
    icon: <AssessmentTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Operations",
    link: "/Reporting",

    key: 4,
  },
  {
    title: "Data Management",
    description: "This is the description for data management",
    icon: (
      <DataThresholdingTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />
    ),
    catagory: "Operations",
    link: "/DataManagement",

    key: 5,
  },
  {
    title: "Data Quality Engine",
    description: "This is the description for data quality engine",
    icon: <MilitaryTechTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Operations",
    link: "/DataQualityEngine",

    key: 6,
  },
  {
    title: "AI Lab",
    description: "This is the description for AI lab",
    icon: <SmartToyTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Operations",
    link: "/AILab",

    key: 7,
  },
  {
    title: "Core Engine Controls",
    description: "This is the description for core engine controls",
    icon: (
      <SettingsInputComponentTwoToneIcon
        sx={{ color: iconPurple, fontSize: 60 }}
      />
    ),
    catagory: "System Configuration",
    key: 8,
  },
  {
    title: "Service Integration",
    description: "This is the description for Service Integration",
    icon: (
      <IntegrationInstructionsTwoToneIcon
        sx={{ color: iconPurple, fontSize: 60 }}
      />
    ),
    catagory: "System Configuration",
    key: 9,
  },
  {
    title: "Projects",
    description: "This is the description for Projects",
    icon: <FolderCopyTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Project Management",
    key: 10,
  },
  {
    title: "Workflows",
    description: "This is the description for workflows",
    icon: <AccountTreeTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Project Management",
    key: 11,
  },
  {
    title: "To-Do",
    description: "This is the description for To-Do",
    icon: <ListAltTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Project Management",
    key: 12,
  },
  {
    title: "Governance",
    description: "This is the description for governance",
    icon: (
      <AssuredWorkloadTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />
    ),
    catagory: "Project Management",
    key: 13,
  },
  {
    title: "User Management",
    description: "This is the description for user management",
    icon: <AccountCircleTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Admin Area",
    key: 14,
  },
  {
    title: "Financial Control",
    description: "This is the description for financial control",
    icon: <SavingsTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Admin Area",
    key: 15,
  },
  {
    title: "Cloud Settings",
    description: "This is the description for cloud Settings",
    icon: <CloudTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Admin Area",
    key: 16,
  },
  {
    title: "Infrastructure Control",
    description: "This is the description for infrastructure control",
    icon: <EngineeringTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Admin Area",
    key: 17,
  },
  {
    title: "Support Centre",
    description: "This is the description for support centre",
    icon: <SupportAgentTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Admin Area",
    key: 18,
  },
  {
    title: "Training",
    description: "This is the description for training",
    icon: (
      <CastForEducationTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />
    ),
    catagory: "Admin Area",
    key: 19,
  },
  {
    title: "Documentation",
    description: "This is the description for documentation",
    icon: (
      <DocumentScannerTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />
    ),
    catagory: "Admin Area",
    key: 20,
  },
  {
    title: "Sandbox Playground",
    description: "This is the description for sandbox playground",
    icon: <TakeoutDiningTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Admin Area",
    key: 21,
  },
  {
    title: "Other Resources",
    description: "This is the description for other resources",
    icon: <SearchTwoToneIcon sx={{ color: iconPurple, fontSize: 60 }} />,
    catagory: "Admin Area",
    key: 22,
  },
];
