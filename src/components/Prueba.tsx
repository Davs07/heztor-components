import React from "react";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type Props = {};

export default function Prueba({}: Props) {
  return (
    <div>
      <Text variant={"h4"}>Hola</Text>

      <Button variant={"highlight"}>Soy un botón</Button>

      <Card>Soy una carta</Card>
    </div>
  );
}
