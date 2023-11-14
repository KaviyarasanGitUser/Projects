import { CiViewList } from "react-icons/ci";
import { IoBugOutline } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

export const projectProgress = [
  {
    icon: <IoBugOutline />,
    progressValue: "105",
    progressTitle: "New Bugs",
  },
  {
    icon: <CiViewList />,
    progressValue: "45",
    progressTitle: "Dependencies",
  },
  {
    icon: <BsCodeSlash />,
    progressValue: "12%",
    progressTitle: "Code Review",
  },
  {
    icon: <GoChecklist />,
    progressValue: "8%",
    progressTitle: "Unit Testing",
  },
  {
    icon: <IoBugOutline />,
    progressValue: "45%",
    progressTitle: "New Bugs",
  },
];
