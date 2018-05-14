import React, { Component } from 'react'
import { BackHandler, Animated, Easing,Text,View } from 'react-native';

import UserHeader from './userHeader';
import UserGrid from './userGird';


class Index extends Component {
	render(){
		return (
            <View>
            	<UserHeader />
			<UserGrid />
            </View>
		)
	}
}

export default Index;