import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class Upload extends React.Component {
  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    
    // fetch('http://192.168.100.1/api/upload').then((user)=>{


        fetch('http://192.168.100.1/api/upload').then((resp)=>{ return resp.json()}).then((data)=>{ console.log(data)});


//         fetch('http://localhost:3002/api/upload', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//    item:'C:\Users\Digital Waze 2\Desktop\myimage.jpg'
//   })
// }).then((resp)=>{ return resp}).then((data)=>{ console.log(data)});

    // const options = {
    //   noData: true,
    // }
    // ImagePicker.launchImageLibrary(options, response => {
    //   if (response.uri) {
    //     this.setState({ photo: response })
    //   }
    // })
  }

  render() {
    const { photo } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    )
  }
}