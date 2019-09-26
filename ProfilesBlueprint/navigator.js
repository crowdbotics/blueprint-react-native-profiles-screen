import { createStackNavigator } from "react-navigation-stack";

import Profile1 from "./screens/profile1";

import Home from "./screens";

export const ProfilesBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Profile1: { screen: Profile1 },
  },
  {
    initialRouteName: "Home"
  }
);
