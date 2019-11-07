import React, { Component } from 'react';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
import {Header,Avatar,Button} from 'react-native-elements';




class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
      
              
         }
    }
    render() {
         
        return (
            <View style={styles.container}>
        <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'CAMPUSGRUv', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<Text style={{fontWeight:"bold",fontSize:22,textAlign:"center",marginTop:'8%'}}>Welcome</Text>
<Text style={{fontWeight:"bold",fontSize:22,textAlign:"center"}}>RON I</Text>

<View style={{justifyContent:"center",alignItems:'center',marginTop:'5%'}}>

<Avatar
  size="xlarge"
  rounded
  title="CR"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
  
  </View>
  <TouchableOpacity>
  <Button
  title="Upload Profile Photo"
  type="clear"
/>
  </TouchableOpacity>


<View style={{marginTop:'5%'}}>
<Picker
  selectedValue={this.state.language}
  style={{height:'20%', width:'50%',marginLeft:'30%',color:'#4388d6',borderBottomColor: 'grey'}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Select your Campus" value="Select your Campus"/>
  <Picker.Item label="Organziation" value="Organziation" />
  <Picker.Item label="Student" value="Student"/>
  <Picker.Item label="Campus" value="Campus"/>
</Picker>
<View style={{marginTop:'10%'}}>
<TouchableOpacity>
  <Button 
  title="Update"
  type="Solid"
/>
  </TouchableOpacity>
  </View>

  </View>
  
        </View>
          )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)"
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)"
    },
});

export default MyApp; 