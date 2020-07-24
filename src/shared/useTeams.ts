import { useState, useEffect } from "react";

import { db } from "./db";
import { Teams } from "./db";

export const useTeams = () => {
  const [teams, setTeams] = useState<Teams[]>([]);

  useEffect(() => {
    const getTeams = async () => {
      const dbTeams = await db.getTeams();
      setTeams(dbTeams);
    };
    getTeams();
  }, []);

  return teams;
};
