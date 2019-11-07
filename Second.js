import React, { Component } from 'react';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
import {Header,ListItem,Avatar,ButtonGroup} from 'react-native-elements';




class Second extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedIndex: 2,
            list:[
                {
                  name: 'Amy Farha',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  subtitle: 'Vice President'
                },
                {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
                },
                {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },
                  {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                  },
                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },
                  {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                  },
                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },
                  

              ]

              
         }
         this.updateIndex = this.updateIndex.bind(this)

         
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
    render() {
        const buttons = ['Notifications', 'Inbox']
        const { selectedIndex } = this.state
         
        return (
            <View style={styles.container}>
        <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'CAMPUSGRUv', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

  <View style={{marginTop:'1.5%'}}>
  <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height:'8%'}}
    />
  <View>
  {this.state.list.map((l, i) => (
      <ListItem
      key={i}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      title={l.name}
      subtitle={l.subtitle}
      bottomDivider
      />
      ))
    }
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

export default Second; 