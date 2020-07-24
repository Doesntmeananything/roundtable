import { openDB, DBSchema } from "idb";
import { nanoid } from "nanoid";

export type Teams = {
  name: string;
  description?: string;
  members?: string[];
};

interface RoundtableDB extends DBSchema {
  teams: {
    key: string;
    value: Teams;
  };
  people: {
    key: string;
    value: {
      name: string;
      memberOf: string[];
    };
    indexes: { "by-price": number };
  };
}

const dbPromise = openDB<RoundtableDB>("roundtable", 1, {
  upgrade(db) {
    db.createObjectStore("teams");
    db.createObjectStore("people");
  },
});

export const db = {
  async createTeam(name: string, description?: string) {
    return (await dbPromise).put("teams", { name, description }, nanoid());
  },
  async getTeams() {
    return (await dbPromise).getAll("teams");
  },
};
