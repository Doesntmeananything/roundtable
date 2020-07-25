import React from "react";
import {
  Heading,
  IllustratedMessage,
  Content,
  Button,
  Text,
} from "@adobe/react-spectrum";
import NotFound from "@spectrum-icons/illustrations/NotFound";
import UsersAdd from "@spectrum-icons/workflow/UsersAdd";
import { useRouteMatch, useHistory } from "react-router-dom";

export const NoTeams = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const handlePress = () => {
    history.push(`${match.url}/create-team`);
  };

  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No Teams Yet</Heading>
      <Content>Create your first team to get ready for a standup!</Content>
      <Button marginTop="size-200" variant="cta" onPress={handlePress}>
        <UsersAdd />
        <Text>Create a team</Text>
      </Button>
    </IllustratedMessage>
  );
};
