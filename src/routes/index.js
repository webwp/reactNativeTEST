
import React, { Component } from 'react'
import { BackHandler, Animated, Easing,Text,View,StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import TabBar from './Index/tabBar'


class Index extends Component {
	render(){
		return (
            <View style={styles.bigblue}>
            	<TabBar />
            </View>
		)
	}
}

export default Index;

const styles = StyleSheet.create({
	bigblue: {
		height:'100%',
		width:'100%',
	},
	red: {
	  color: 'red',
	},
  });