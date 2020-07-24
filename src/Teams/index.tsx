import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { NoTeams } from "./NoTeams";
import { CreateTeam } from "./CreateTeam";

export const Teams = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/create`}>
        <CreateTeam />
      </Route>
      <NoTeams />
    </Switch>
  );
};
