import React from "react";
import {
  View,
  Text,
  Flex,
  Heading,
  Image,
  Divider,
  MenuTrigger,
  ActionButton,
  Menu,
  Item,
} from "@adobe/react-spectrum";
import More from "@spectrum-icons/workflow/More";
import Edit from "@spectrum-icons/workflow/Edit";
import Delete from "@spectrum-icons/workflow/Delete";

interface Props {
  name: string;
  description?: string;
  members?: string[];
}

export const Team = ({ name, description, members }: Props) => {
  return (
    <View
      borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
      padding="size-250"
      width="size-3400"
      backgroundColor="gray-100"
    >
      <Flex direction="column">
        <Image
          width="size-1200"
          alignSelf="center"
          src={`https://robohash.org/${name}?set=set3`}
          alt={`${name}'s signature image`}
        />
        <Flex alignItems="center" justifyContent="space-between">
          <Heading level={4}>{name}</Heading>
          <MenuTrigger>
            <ActionButton isQuiet>
              <More />
            </ActionButton>
            <Menu>
              <Item key="edit" textValue="edit">
                <Edit size="S" />
                <Text>Edit</Text>
              </Item>
              <Item key="delete" textValue="delete">
                <Delete size="S" />
                <Text>Delete</Text>
              </Item>
            </Menu>
          </MenuTrigger>
        </Flex>
        <Text>{description}</Text>
        <Divider size="S" marginY="size-200" />
        <Text>{members ? members : "No members yet"}</Text>
      </Flex>
    </View>
  );
};
