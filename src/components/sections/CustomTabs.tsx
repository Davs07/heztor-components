import { Apple, Text } from "lucide-react";
import DynamicTabs from "../ui/custom/dynamic-tabs";
import Prueba from "../Prueba";

type Props = {};

function CustomTabs({}: Props) {
  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: <Prueba />,
      icon: <Apple />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab 2",
      icon: <Text />,
    },
  ];

  return (
    <div>
      <DynamicTabs items={items} defaultActiveKey="1" />
    </div>
  );
}

export default CustomTabs;
