import React, { useContext } from "react";
import { Heading, Flex, ActionButton } from "@adobe/react-spectrum";
import HeaderIcon from "@spectrum-icons/workflow/GraphPie";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";

import { ColorSchemeContext } from "./ColorSchemeProvider";

export const AppHeader = () => {
  const colorContext = useContext(ColorSchemeContext);

  const handlePress = () => {
    colorContext.toggleScheme();
  };

  return (
    <Flex marginX="size-300" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap="size-100">
        <HeaderIcon />
        <Heading level={1}>Roundtable</Heading>
      </Flex>
      <ActionButton onPress={handlePress}>
        {colorContext.colorScheme === "light" ? <Moon /> : <Light />}
      </ActionButton>
    </Flex>
  );
};
