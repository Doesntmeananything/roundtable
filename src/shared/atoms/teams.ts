import { atom, selector, DefaultValue } from "recoil";

import { db, Teams } from "shared/db";

export const teamsState = atom({
  key: "teamsState",
  default: db.getTeams(),
});

export const currentTeams = selector<Teams[]>({
  key: "currentTeams",
  get: ({ get }) => get(teamsState),
  set: async ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      const { name, description } = newValue[newValue.length - 1];
      set(teamsState, newValue);
      await db.createTeam(name, description);
    }
  },
});
