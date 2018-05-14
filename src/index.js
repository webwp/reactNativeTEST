import React , { Component } from 'react';
import { BackHandler, Animated, Easing , Text , View } from 'react-native'
import {Actions, Scene, Router} from 'react-native-router-flux';

import scenes from './router';



class Index extends Component{
	static navigationOptions = {
        title: 'Welcome',//在导航中显示的标题内容
    };
	render(){
		console.log(scenes)
		return (
			<Router scenes={scenes}/>
		)
	}
}
export default Index;