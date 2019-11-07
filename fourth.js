import { Header, Input, Button, Icon ,ListItem,list} from 'react-native-elements';
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';


class Fourth extends Component{
    constructor(props)
    {      
    super(props);
          this.state = { 
         list : [
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


                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },


                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },

                  {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },
               
              ],
              
           }
           
        }
        keyExtractor = (item, index) => index.toString()

        renderItem = ({ item }) => (
          <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{
              source: item.avatar_url && { uri: item.avatar_url },
              title: item.name[0]
            }}
            />
        )
    

      render() { 
          return (  
              <ScrollView>

<View>
<Header style={styles.container}
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'CAMPUSGRUv', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
  <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.list}
      renderItem={this.renderItem}
      />
  
</View>
      </ScrollView>
  );
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
export default Fourth;