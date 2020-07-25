import React from "react";
import { Provider, defaultTheme, Grid, View } from "@adobe/react-spectrum";
import { BrowserRouter as Router } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { AppHeader } from "./AppHeader";
import { AppSidebar } from "./AppSidebar";
import { AppFooter } from "./AppFooter";
import { AppContent } from "./AppContent";
import { colorSchemeState } from "shared/atoms/colorScheme";

export const App = () => {
  const colorScheme = useRecoilValue(colorSchemeState);

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme}>
      <Router>
        <Grid
          areas={["header  header", "sidebar content", "sidebar  footer"]}
          columns={["size-2400", "1fr"]}
          rows={["size-1000", "auto", "size-1000"]}
          height="100vh"
        >
          <View
            elementType="header"
            gridArea="header"
            backgroundColor="gray-100"
          >
            <AppHeader />
          </View>
          <View elementType="nav" gridArea="sidebar" backgroundColor="gray-100">
            <AppSidebar />
          </View>
          <View
            elementType="main"
            gridArea="content"
            backgroundColor="gray-100"
          >
            <AppContent />
          </View>
          <View
            elementType="footer"
            gridArea="footer"
            backgroundColor="gray-100"
          >
            <AppFooter />
          </View>
        </Grid>
      </Router>
    </Provider>
  );
};
