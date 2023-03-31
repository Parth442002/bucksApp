import { View, Text,FlatList,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';

const PartnerCards = () => {
  const data=[1,2,3,4,5]
  return (
    <View style={styles.partnerContainer}>
      <Text style={styles.topic}>PartnerCards</Text>
      <FlatList
      data={data}
      horizontal={false}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_,index)=>index.toString()}
      renderItem={(item)=>{
        return(
          <CardItem/>
        )
      }}
    />
    </View>
  )
}

export default PartnerCards



const CardItem=()=>{
  useEffect(() => {
    AntDesign.loadFont();
  }, [])

  return(
    <TouchableOpacity
      style={styles.cardItem}
    >
      <View style={styles.left}>
        <View style={styles.image}/>
        <Text style={styles.offer}>50%</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.company}>Nike Football</Text>
        <View style={styles.metaInfo}>
          <AntDesign name="star" size={20} color="black" />
          <Text style={styles.rating}>5</Text>
          <Text style={styles.open_close}>Open</Text>
        </View>
        <View style={styles.desc_section}>
          <Text style={styles.desc}>Shoes, Footballs, Clothes</Text>
          <Text style={styles.distance}>4 Km</Text>
        </View>
        <Text>Offer Zone</Text>
      </View>
    </TouchableOpacity>
  )
}



const styles=StyleSheet.create({
  partnerContainer:{
    //position:"absolute",
  },
  topic:{
    fontSize:24,
    textAlign:"center"
  },
  cardItem:{
    alignSelf:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:10,
    borderWidth:1,
    borderRadius:20,
    //height:120,
  },
  left:{
    position:"relative",
    borderRadius:20,
  },
  image:{
    height:100,
    width:100,
    backgroundColor:"lightgray",
    position:"relative",
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
  },
  offer:{
    fontSize:20,
    position:"absolute",
    bottom:4,
    right:5,
    fontWeight:"700",
    color:"blue",
  },
  right:{
    height:100,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    width:275,
  },
  company:{
    fontSize:20,
    fontWeight:"600",
    paddingLeft:20,
    paddingTop:4,
  },
  metaInfo:{
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:20,
    paddingTop:6,
  },
  rating:{
    fontSize:16,
    marginLeft:5,
    fontWeight:"500",
  },
  open_close:{
    marginLeft:10,
    fontWeight:"200"
  },
  desc_section:{
    paddingTop:10,
    marginLeft:20,
    marginRight:20,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  distance:{
    fontSize:16,
    fontWeight:"400",
  }
})