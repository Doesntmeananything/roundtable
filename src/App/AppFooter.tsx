import React from "react";
import { Flex, Text } from "@adobe/react-spectrum";

export const AppFooter = () => {
  const today = new Date();
  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Text>&copy; Andrey Krasnov, {today.getFullYear()}</Text>
    </Flex>
  );
};
