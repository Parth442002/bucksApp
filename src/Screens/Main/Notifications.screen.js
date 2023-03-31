import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';

const NotificationsScreen = () => {
  useEffect(() => {
    Feather.loadFont();
    AntDesign.loadFont();
  }, [])

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <View style={styles.top}>
        <Text style={styles.heading}>Activity</Text>
        <View style={styles.topRight}>
          <Feather name='search' size={32} style={{marginRight:20}}/>
          <Feather name='bell' size={32}/>
        </View>
      </View>
      <View style={styles.mainBody}>
        <Text style={styles.month} >March '23</Text>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <Text style={styles.month} >Feb '23</Text>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
      </View>
    </SafeAreaView>
  )
}

const NotificationCard=()=>{
  return(
    <View style={styles.notificationCardContainer}>
      <AntDesign name="wallet" size={32} color="black" />
      <Text style={styles.notificationName}>Expense Name</Text>
      <View style={styles.leftNotification}>
        <Text style={styles.amount}>500</Text>
        <Text style={styles.action}>Cashback</Text>
      </View>
    </View>
  )
}

export default NotificationsScreen


const styles=StyleSheet.create({
  top:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:"5%",
    marginTop:10
  },
  heading:{
    fontSize:32,
    fontWeight:"400",
    fontStyle:"italic",
  },
  topRight:{
    flexDirection:"row",
  },
  mainBody:{
    paddingHorizontal:"5%",
    marginTop:20,
  },
  month:{
    fontSize:20,
    fontWeight:"600",
    marginVertical:10,
  },
  notificationCardContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:8,
  },
  notificationName:{
    fontSize:18,
    fontWeight:"500",
  },
  amount:{
    fontSize:16,
    fontWeight:"700",
  },
  action:{
    fontSize:12,
    marginTop:4,
    fontStyle:"italic",
  }
})