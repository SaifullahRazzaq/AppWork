import React, { Component } from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';
import { Header, Input, Button, Icon, Avatar } from 'react-native-elements';
import Message from './Message';
class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{flexDirection:'row',height:'110%'}}>

            <View style={{ backgroundColor: "#EBEBEB", height: '90%',flex:10 }}>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'CAMPUSGRUv', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
<Message left/>            
<Message right/>

<View style={{justifyContent:'flex-end',flex:2}}>
    <View style={{flexDirection:'row'}}>
<TextInput
                        underlineColorAndroid='transparent'
                        style={{flex:1,textAlign: 'center', height: 50, borderWidth: 2, borderColor: '#FEFEFE', borderRadius: 10, backgroundColor: "#FEFEFE"}}/>
 <Icon iconStyle={{marginTop:8}}
 containerStyle={{width:40}}
  name='sc-telegram'
  type='evilicon'
  color='blue'
  size={50}
  onPress={()=>{console.log("messgae send")}}
/>
</View>

</View>
            </View>
  </View>
        );
    }
}

export default Messenger;