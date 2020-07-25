import React from "react";
import { useRecoilState } from "recoil";
import { Heading, Flex, ActionButton } from "@adobe/react-spectrum";
import HeaderIcon from "@spectrum-icons/workflow/GraphPie";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";

import { colorSchemeState } from "shared/atoms/colorScheme";

export const AppHeader = () => {
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState);

  const handlePress = () => {
    setColorScheme((colorScheme) =>
      colorScheme === "light" ? "dark" : "light"
    );
  };

  return (
    <Flex marginX="size-300" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap="size-100">
        <HeaderIcon />
        <Heading level={1}>Roundtable</Heading>
      </Flex>
      <ActionButton onPress={handlePress}>
        {colorScheme === "light" ? <Moon /> : <Light />}
      </ActionButton>
    </Flex>
  );
};
