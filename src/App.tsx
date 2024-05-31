import { Plus } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Text } from "./components/ui/custom/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div
      className="w-screen h-screen min-h-screen overflow-auto
    bg-background text-primary flex flex-col gap-6 px-8 py-6">
      <Text variant={"h1"}>Componentes</Text>
      <div className="w-full flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Text variant={"h3"}>Cards</Text>
          <Card variant={"default"} size={"md"}>
            Hola
          </Card>
          <Card variant={"primary"} size={"md"}>
            Hola
          </Card>
          <Card variant={"secondary"} size={"md"}>
            Hola
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Text variant={"h3"}>Buttons</Text>
          <Button variant={"default"} size={"default"}>
            <Plus />
            default
          </Button>
          <Button variant={"primary"} size={"default"}>
            <Plus />
            primary
          </Button>
          <Button variant={"secondary"} size={"default"}>
            <Plus />
            secondary
          </Button>
          <Button variant={"highlight"} size={"default"}>
            <Plus />
            highlight
          </Button>
          <Button variant={"ghost"} size={"default"}>
            <Plus />
            ghost
          </Button>
          <Button variant={"link"} size={"default"}>
            link
          </Button>
          <Button variant={"custom"} size={"default"}>
            custom
          </Button>
          <Button variant={"icon"} size={"default"}>
            icon
          </Button>
          <Button variant={"transparent"} size={"default"}>
            transparent
          </Button>
          <Button variant={"destructive"} size={"default"}>
            <Plus />
            destructive
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Text variant={"h3"}>Tabs</Text>
          <Text variant={"h5"}>Default</Text>
          <Tabs defaultValue="value1">
            <TabsList>
              <TabsTrigger value="value1">Tab 1</TabsTrigger>
              <TabsTrigger value="value2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="value1">
              <Text variant={"psm"}>Content 1</Text>
            </TabsContent>
            <TabsContent value="value2">
              <Text variant={"psm"}>Content 2</Text>
            </TabsContent>
          </Tabs>

          <Text variant={"h5"}>Custom 1</Text>
          <Tabs defaultValue="value1">
            <TabsList variant={"custom1"}>
              <TabsTrigger variant={"custom1"} value="value1">
                Tab 1
              </TabsTrigger>
              <TabsTrigger variant={"custom1"} value="value2">
                Tab 2
              </TabsTrigger>
            </TabsList>
            <TabsContent value="value1">
              <Text variant={"psm"}>Content 1</Text>
            </TabsContent>
            <TabsContent value="value2">
              <Text variant={"psm"}>Content 2</Text>
            </TabsContent>
          </Tabs>

          <Text variant={"h5"}>Custom 2</Text>
          <Tabs defaultValue="value1">
            <TabsList variant={"custom2"}>
              <TabsTrigger variant={"custom2"} value="value1">
                Tab 1
              </TabsTrigger>
              <TabsTrigger variant={"custom2"} value="value2">
                Tab 2
              </TabsTrigger>
            </TabsList>
            <TabsContent value="value1">
              <Text variant={"psm"}>Content 1</Text>
            </TabsContent>
            <TabsContent value="value2">
              <Text variant={"psm"}>Content 2</Text>
            </TabsContent>
          </Tabs>

          <Text variant={"h5"}>Ant</Text>
          <Tabs defaultValue="value1">
            <TabsList variant={"antd"}>
              <TabsTrigger variant={"antd"} value="value1">
                Tab 1
              </TabsTrigger>
              <TabsTrigger variant={"antd"} value="value2">
                Tab 2
              </TabsTrigger>
            </TabsList>
            <TabsContent value="value1" variant={"antd"}>
              <Text variant={"psm"}>Content 1</Text>
            </TabsContent>
            <TabsContent value="value2">
              <Text variant={"psm"}>Content 2</Text>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
