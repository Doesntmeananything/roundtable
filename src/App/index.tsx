import React, { useContext } from "react";
import { Provider, defaultTheme, Grid, View } from "@adobe/react-spectrum";
import { BrowserRouter as Router } from "react-router-dom";

import { AppHeader } from "./AppHeader";
import { AppSidebar } from "./AppSidebar";
import { AppFooter } from "./AppFooter";
import { AppContent } from "./AppContent";
import { ColorSchemeContext } from "./ColorSchemeProvider";

export const App = () => {
  const colorContext = useContext(ColorSchemeContext);
  return (
    <Provider theme={defaultTheme} colorScheme={colorContext.colorScheme}>
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
