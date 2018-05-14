import React, { Component, } from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import { Carousel, WingBlank } from 'antd-mobile';

class Cd extends Component{
    state = {
    data: ['01', '02', '03'],
    imgHeight: 160,
  }
  
	render(){
		return (
            <View>
                <Carousel
                  autoplay={true}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                >
                  {this.state.data.map(val => (
                    
                      <Image
                        source={require('../../assets/images/03.jpeg')}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top',height:160 }}
                        onLoad={() => {
                          this.setState({ imgHeight: 160 });
                        }}
                      />
                  ))}
                </Carousel>
            </View>
		)
	}
}

export default Cd;

const styles = StyleSheet.create({
  bigblue: {  width: '100%', height: 140,display: 'flex' },
  red: {
    color: 'red',
  },
});

