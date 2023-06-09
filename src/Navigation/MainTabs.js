import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon,{CustomTabBarButton,CustomTabBarIcon} from '../Components/Nav/BottomTabFunctions';


import SampleScreen from "../Screens/Main/Sample.screen";
import ExploreScreen from '../Screens/Main/Explore.screen';
import ExploreSampleScreen from "../Screens/Main/ExploreSample";
import HomeScreen from '../Screens/Main/Home.screen';
import ProfileScreen from '../Screens/Main/Profile.screen';
import NotificationsScreen from '../Screens/Main/Notifications.screen';
import RewardsScreen from '../Screens/Main/Rewards.screen';

const Tab=createBottomTabNavigator();

const MainTabs=()=>{
  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        scrollEnabled: true,
        tabBarStyle:{
          position:"absolute",
          bottom:0,
          elevation:20,
          backgroundColor:"white",
          height:70,
          borderTopWidth:1,
          borderTopColor:"black",
          justifyContent:"center",
        }
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="home" labelName="Home" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="wallet" labelName="Explore" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          tabBarIcon:(focused)=>(
            <CustomTabBarIcon focused={focused}/>
          ),
          tabBarButton:(props)=>(
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={NotificationsScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="bookmark-o" labelName="Recent" focused={focused}/>),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon:({ focused}) =>
          (<TabBarIcon name="user" labelName="Profile" focused={focused}/>),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabs
