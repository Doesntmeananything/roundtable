import React, { useState } from "react";
import {
  Heading,
  Divider,
  View,
  Form,
  TextField,
  TextArea,
  Button,
  Flex,
  Text,
} from "@adobe/react-spectrum";
import Add from "@spectrum-icons/workflow/Add";
import UsersShare from "@spectrum-icons/workflow/UsersShare";

import { useSetRecoilState } from "recoil";
import { currentTeams } from "shared/atoms/teams";
import { useHistory } from "react-router-dom";

export const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");

  const createTeam = useSetRecoilState(currentTeams);

  const history = useHistory();

  const handleCreatingTeam = () => {
    createTeam((teams) => [
      { name: teamName, description: teamDescription },
      ...teams,
    ]);
    history.goBack();
  };

  return (
    <>
      <Heading level={2} marginBottom="size-75" marginTop="size-0">
        Create a Team
      </Heading>
      <Divider size="L" marginBottom="size-400" />
      <Heading level={4}>
        Start by giving your team a name and an optional description
      </Heading>
      <View backgroundColor="gray-200" padding="size-400">
        <Form isRequired necessityIndicator="label" maxWidth="size-4600">
          <TextField
            autoFocus
            label="Team Name"
            placeholder="The A-Team"
            maxLength={20}
            value={teamName}
            onChange={setTeamName}
          />
          <TextArea
            isRequired={false}
            label="Team Description"
            placeholder="Soldiers of fortune."
            maxLength={30}
            value={teamDescription}
            onChange={setTeamDescription}
          />
          <Flex justifyContent="space-between" marginTop="size-200">
            <Button variant="primary" onPress={handleCreatingTeam}>
              <Add />
              <Text>Create</Text>
            </Button>
            <Button variant="cta">
              <UsersShare />
              <Text>Create and Add People</Text>
            </Button>
          </Flex>
        </Form>
      </View>
    </>
  );
};
