import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import Home from '@/Containers/home'
import {
 
  Image,
} from 'react-native'
const Tab = createBottomTabNavigator()
const bookmark = { uri : 'https://image.shutterstock.com/image-vector/home-icon-trendy-flat-style-260nw-675381382.jpg'}
const like ={uri : 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png'}
const search ={uri : 'https://cdn-icons-png.flaticon.com/512/54/54481.png'}
const notif = {uri : 'https://static.vecteezy.com/system/resources/previews/001/505/138/original/notification-bell-icon-free-vector.jpg'}
const profilePic = {
  uri: 'https://www.syracuse.com/resizer/LjTbKFiHmJSEJyboi68vnEYh40U=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EAACMW43EZAVNDPNCAV26JZAFI.jpg',
}

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,

}
}> 
      {/* <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      /> */}
       <Tab.Screen
        name="home"
        component={Home}
        
        options={{
          // tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Image
              style={{width: 30, height: 30}}
              source={bookmark               
              }/>
         ), 
     
        }}
        
      />
      <Tab.Screen
        name="Likes"
        component={ExampleContainer}
        options={{
        
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Image
              style={{width: 30, height: 30}}
              source={like               
              }/>
         ), 
        }}
      />
      <Tab.Screen
        name="Search"
        component={ExampleContainer}
        options={{
  
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Image
              style={{width: 30, height: 30}}
              source={search               
              }/>
         ), 
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ExampleContainer}
        options={{
          
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Image
              style={{width: 30, height: 30}}
              source={notif               
              }/>
         ), 
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ExampleContainer}
        options={{
   
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Image
              style={{width: 30, height: 30, borderRadius: 15}}
              source={profilePic               
              }/>
         ), 
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
