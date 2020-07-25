import React from "react";
import { useRecoilValue } from "recoil";
import {
  Heading,
  Divider,
  View,
  Button,
  Text,
  Grid,
} from "@adobe/react-spectrum";
import { useRouteMatch, useHistory } from "react-router-dom";
import UsersAdd from "@spectrum-icons/workflow/UsersAdd";

import { currentTeams } from "shared/atoms/teams";
import { NoTeams } from "./NoTeams";
import { Team } from "./Team";

export const TeamsList = () => {
  const teams = useRecoilValue(currentTeams);

  const match = useRouteMatch();
  const history = useHistory();

  const handlePress = () => {
    history.push(`${match.url}/create-team`);
  };

  return (
    <>
      <Heading level={2} marginBottom="size-75" marginTop="size-0">
        My Teams
      </Heading>
      <Divider size="L" marginBottom="size-400" />
      <Button variant="primary" onPress={handlePress} marginBottom="size-200">
        <UsersAdd />
        <Text>Create a new team</Text>
      </Button>
      <View
        backgroundColor="gray-200"
        padding="size-400"
        maxHeight="30vh"
        overflow="auto"
      >
        {teams.length ? (
          <Grid columns={["1fr", "1fr", "1fr"]} rowGap="size-400">
            {teams.map(({ name, description, members }) => (
              <Team
                key={name}
                name={name}
                description={description}
                members={members}
              />
            ))}
          </Grid>
        ) : (
          <NoTeams />
        )}
      </View>
    </>
  );
};
