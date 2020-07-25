import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { CreateTeam } from "./CreateTeam";
import { TeamsList } from "./TeamsList";
import { PeopleList } from "./PeopleList";

export const Teams = () => {
  const match = useRouteMatch();

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={`${match.path}/create-team`}>
          <CreateTeam />
        </Route>
        <>
          <TeamsList />
          <PeopleList />
        </>
      </Switch>
    </React.Suspense>
  );
};
