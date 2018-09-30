import React from "react";
import { AppRegistry, StyleSheet, NavigatorIOS ,Text ,View } from "react-native";
import UIListView from "./iosModule/UIListView.js"

class RNIOS extends React.Component {
  render() {
    return (
      <NavigatorIOS 
      initialRoute={{
        component:UIListView,
        title:"UI",
      }}
      style={{flex:1}}
      />
    );
  }
}

AppRegistry.registerComponent("RNIOS", () => RNIOS);