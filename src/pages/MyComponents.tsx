import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

type Props = {};

function MyComponents({}: Props) {
  return (
    <div className="w-full h-full flex flex-col gap-6 px-8 py-6">
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
        <Separator orientation="vertical" />
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
        <Separator orientation="vertical" />

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
        <Separator orientation="vertical" />

        <div className="flex flex-col gap-4">
          <Text variant={"h3"}>Text</Text>

          <Text variant={"h1"}>H1</Text>
          <Text variant={"h2"}>H2</Text>
          <Text variant={"h3"}>H3</Text>
          <Text variant={"h4"}>H4</Text>
          <Text variant={"h5"}>H5</Text>
          <Text variant={"plg"}>Párrafo 1</Text>
          <Text variant={"pbase"}>Párrafo 2</Text>
          <Text variant={"pmd"}>Párrafo 3</Text>
          <Text variant={"psm"}>Párrafo 4</Text>
          <Text variant={"pxs"}>Párrafo 5</Text>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col gap-4">
          <Text variant={"h3"}>Select</Text>
        </div>
      </div>
    </div>
  );
}

export default MyComponents;
