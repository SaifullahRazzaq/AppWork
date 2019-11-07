import React, { Component } from "react";
import {Text, View} from "react-native";
import { Input,Icon ,Header, Card, ListItem, Button,Image,Avatar} from 'react-native-elements';
export default class ModalTester extends Component {
  state = {
     users:[
      {
         name: 'brynn',
         avatar:"https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg"
      },
     ]
  };

 

  render() {
    return (
      <View>
     <Header
  placement="left"
  leftComponent={{ icon: 'ios-arrow-back', color: '#fff', type:'ionicons' }}
  centerComponent={{ text: 'CampusGruv', style: { color: '#fff',alignItems:'center',justifyContent:'center' } }}/>


<View style={{backgroundColor:'#EBEBEB',height:'78%'}}>
  {/* Icon view */}
<View style={{flexDirection:'row'}}>  
<Text style={{color:'#A09B9B',marginLeft:'4%',fontWeight:'bold',fontSize:14,marginTop:'1%'}}>Blog</Text>
<Text style={{color:'#484848',marginLeft:'35%',fontWeight:'bold',fontSize:14,marginTop:'1%'}}>1.2K
</Text>
<Icon iconStyle={{}}
name="pin"
type="octicon"
color="#979393"
/>
  <Text style={{color:'#484848',marginLeft:35,fontWeight:'bold',fontSize:14,marginTop:'1%'}}>35</Text>
  <Icon iconStyle={{}}
name="pin"
type="octicon"
color="#979393"
/>


<Icon iconStyle={{marginLeft:30}}
name="dots-three-horizontal"
type="entypo"
color="#979393"
/>
</View>
{/* end of icon view */}


<View>
  <Text style={{fontWeight:'bold',marginTop:15,color:'#0C0C0C',fontSize:16,marginLeft:'4%'}}>The Best Blueberry Pancake  Recipe ever </Text>
<Card containerStyle={{height:165}}>
  {
    this.state.users.map((u, i) => {
      return (
        <View key={i}>
          <Image
            resizeMode="cover"
            source={{ uri:'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg'}}/>
        </View>
      );
    })
  }
</Card>
  </View>
{/* ccard end */}

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{marginTop:'5%',marginLeft:'4%',flexDirection:'row'}}>
<Avatar 
source={{
  uri:
  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  
}}
size="small"
rounded/>
<Text style={{color:'#969595',fontSize:12,marginLeft:'8%',}}>Saifullah
{'\n'}
<Text style={{color:'#969595',fontSize:12,marginLeft:'8%',}}>January  25</Text>
</Text>
</View>

<View style={{marginTop:10,width:120,marginRight:20}}>
<Button title="Message"></Button>
</View>
</View>


<View style={{marginLeft:'5%',marginTop:5}}>
<Text style={{color:'#919090'}}>The meat comes from butcher Ruby and White’s; the buns are artisan ciabatta; ingredients are locally sourced – no wonder this is the best place to eat burgers in Bristol.</Text>

<Text style={{marginTop:5,fontWeight:'bold'}}>Comments</Text>

<View style={{marginRight:'7%',justifyContent:'flex-end'}}>
<View style={{alignItems:'center',width:'100%',marginTop:'3%',height: 50, borderWidth: 2, borderColor: '#FEFEFE', borderRadius: 10, backgroundColor: "#FEFEFE",flexDirection:'row',}}>
<Avatar
source={{
  uri:
  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  
}}
size="small"
rounded/>
<Text style={{color:'#919090',marginLeft:'2%'}}>The meat comes from butcher Ruby and White.The meat comes from butcher Ruby and White.</Text>

</View>

<View style={{alignItems:'center',width:'100%',marginTop:'3%',height: 50, borderWidth: 2, borderColor: '#FEFEFE', borderRadius: 10, backgroundColor: "#FEFEFE",flexDirection:'row',}}>
<Avatar
source={{
  uri:
  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  
}}
size="small"
rounded/>
<Text style={{color:'#919090',marginLeft:'2%'}}>The meat comes from butcher Ruby and White.The meat comes from butcher Ruby and White.</Text>
</View>

</View>
</View>


</View>

<View style={{marginTop:'3%'}}>
<Input
   size={50}
  placeholder='Enter a Comments Here'
  />
  </View>


      </View>
    
    
    
    );
  }
}