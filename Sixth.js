import React, { Component } from 'react';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
import { SearchBar,ListItem,Icon } from 'react-native-elements';

class Sixth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            list : [
                {
                  name: 'Amy Farha',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  subtitle: 'Vice President',
                  icon:'dots-three-vertical',
                },
                {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman',
                  icon:'dots-three-vertical'
                },
                {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President',
                    icon:'dots-three-vertical'
                 
                },
                {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman',
                    icon:'dots-three-vertical',
                    
                  },
             
                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President',
                    icon:'dots-three-vertical'
                 
                },
             
                  
                  {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman',
                    icon:'dots-three-vertical'
                  },
             
                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President',
                    icon:'dots-three-vertical'
                 
                },
                  

                  {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman',
                    icon:'dots-three-vertical'
                  },
                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President',
                    icon:'dots-three-vertical'
                 
                },
             
               
              ]
         }
    }
    updateSearch = search => {
    const {list}=this.state;
      this.setState({ search });
        console.log("Value============>",this.state.search)
    
      };
     
      


      
    render() { 
        const { search } = this.state;

        return (  
            <ScrollView>

            <View>
  {/* <SearchBar
  platform="ios"
        placeholder="Search Follwers..."
        onChangeText={this.updateSearch}
        value={search}
        />     */}
      <View style={{justifyContent:'space-between'}}>
    {this.state.list.map((l, i) => (
        <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        rightIcon={{ name: l.icon, type: 'entypo'}}
        bottomDivider
        accessibilityComponentType/>
        ))}
         </View>
            
          </View>
        </ScrollView>
            
        );
    
    }
    
}
 
export default Sixth;