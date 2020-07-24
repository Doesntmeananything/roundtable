import React from "react";
import { Text, Flex, View } from "@adobe/react-spectrum";
import Settings from "@spectrum-icons/workflow/Settings";
import PeopleGroup from "@spectrum-icons/workflow/PeopleGroup";
import Launch from "@spectrum-icons/workflow/Launch";
import { NavLink } from "react-router-dom";
import "@spectrum-css/sidenav";

export const AppSidebar = () => {
  return (
    <View paddingX="size-200">
      <ul className="spectrum-SideNav">
        <li className="spectrum-SideNav-item">
          <NavLink
            to="/standups"
            className="spectrum-SideNav-item"
            activeClassName="is-selected"
          >
            <Flex
              gap="size-100"
              id="standups"
              UNSAFE_className="spectrum-SideNav-itemLink"
            >
              <Launch size="S" />
              <Text>Daily Standups</Text>
            </Flex>
          </NavLink>
        </li>
        <li className="spectrum-SideNav-item">
          <NavLink
            to="/teams"
            className="spectrum-SideNav-item"
            activeClassName="is-selected"
          >
            <Flex
              gap="size-100"
              id="teams"
              UNSAFE_className="spectrum-SideNav-itemLink"
            >
              <PeopleGroup size="S" />
              <Text>Teams</Text>
            </Flex>
          </NavLink>
        </li>
        <li className="spectrum-SideNav-item">
          <NavLink
            to="/settings"
            className="spectrum-SideNav-item"
            activeClassName="is-selected"
          >
            <Flex
              gap="size-100"
              id="settings"
              UNSAFE_className="spectrum-SideNav-itemLink"
            >
              <Settings size="S" />
              <Text>Settings</Text>
            </Flex>
          </NavLink>
        </li>
      </ul>
    </View>
  );
};
