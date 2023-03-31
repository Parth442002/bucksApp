import { View, Text,FlatList,StyleSheet, TouchableOpacity,Image} from 'react-native'
import React,{useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import constants from '../../Assets/constants';

const PartnerCards = () => {
  const data=[1,2,3,4,5]
  return (
    <View style={styles.partnerContainer}>
      <Text style={styles.topic}>Shops Near You</Text>
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
        <Image
          style={styles.image}
          source="../../Assets/Images/shop.png"
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.offer}>50%</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.company}>Nike Football</Text>
        <View style={styles.metaInfo}>
          <AntDesign name="star" size={20} color={constants.lightGreen}/>
          <Text style={styles.rating}>5</Text>
          <Text style={styles.open_close}>Open</Text>
        </View>
        <View style={styles.desc_section}>
          <Text style={styles.desc}>Shoes, Footballs, Clothes</Text>
          <Text style={styles.distance}>4 Km</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}



const styles=StyleSheet.create({
  partnerContainer:{
    //position:"absolute",
    backgroundColor:constants.backGroundColor
  },
  topic:{
    fontSize:24,
    textAlign:"left",
    paddingHorizontal:"5%",
    fontWeight:"600",
    marginVertical:10,

  },
  cardItem:{
    alignSelf:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:10,
    borderRadius:20,
    //height:120,
  },
  left:{
    position:"relative",
    borderRadius:20,
  },
  image:{
    height:120,
    width:120,
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
    color:constants.darkGreen,
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
    color:constants.lightGreen,
  },
  open_close:{
    marginLeft:10,
    fontWeight:"200"
  },
  desc_section:{
    paddingTop:10,
    marginLeft:20,
    bottom:0,
    marginRight:20,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  desc:{
    fontSize:16,
    maxWidth:"80%",
  },
  distance:{
    fontSize:16,
    fontWeight:"400",
  }
})