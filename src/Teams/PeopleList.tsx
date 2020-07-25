import React from "react";
import { Heading, Divider, Button, View, Text } from "@adobe/react-spectrum";
import UserAdd from "@spectrum-icons/workflow/UserAdd";

export const PeopleList = () => {
  return (
    <>
      <Heading level={2} marginBottom="size-75" marginTop="size-600">
        People
      </Heading>
      <Divider size="L" marginBottom="size-400" />
      <Button variant="primary" marginBottom="size-200">
        <UserAdd />
        <Text>Add a new person</Text>
      </Button>
      <View
        backgroundColor="gray-200"
        padding="size-400"
        maxHeight="35vh"
        overflow="auto"
      ></View>
    </>
  );
};
