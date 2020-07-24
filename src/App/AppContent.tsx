import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Flex, View } from "@adobe/react-spectrum";

import { AppSettings } from "AppSettings";
import { Teams } from "Teams";

export const AppContent = () => {
  return (
    <Switch>
      <Flex
        justifyContent="center"
        direction="column"
        marginX="auto"
        maxWidth="1080px"
      >
        <View paddingX="size-600">
          <Redirect exact from="/" to="/standups" />
          <Route path="/standups"></Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/settings">
            <AppSettings />
          </Route>
        </View>
      </Flex>
    </Switch>
  );
};
