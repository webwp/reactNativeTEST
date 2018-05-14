import React, {
    Component, } from 'react';
import {
    Image,
    TextInput,
    View,
    Platform,
    StyleSheet
} from 'react-native';

class Header extends Component{
	render(){
		return (
            <View style={styles.container}>
	            <Image source={require('../../assets/images/qrcode.png')} style={styles.logo}/>
                <Image source={require('../../assets/images/Scan.png')} style={styles.searchIcon}/>
	            <View style={styles.searchBox}>
	                 
	                 <TextInput style={styles.inputText}
	                            keyboardType='web-search'
	                            placeholder='输入关键词' />
	                  <Image source={require('../../assets/images/search.png')} style={styles.voiceIcon}/>
	            </View>
	            <Image source={require('../../assets/images/share.png')} style={styles.scanIcon}/>

            </View>
		)
	}
}

export default Header;


//样式
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: 'white',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {//图片logo
        height: 24,
        width: 24,
        resizeMode: 'stretch',  // 设置拉伸模式
        marginLeft:3,
        marginRight:3,
    },
    searchBox:{//搜索框
      height:30,
      flexDirection: 'row',   // 水平排布
      flex:1,
      borderRadius: 5,  // 设置圆角边
      backgroundColor: 'white',
      alignItems: 'center',
      marginLeft: 8,
      marginRight: 8,
    },
    searchIcon: {//搜索图标
        height: 24,
        width: 24,
        marginLeft:13,
        marginRight:3,
        resizeMode: 'stretch'
    },
    inputText:{
      flex:1,
      backgroundColor:'#f1f1f1',
      fontSize:15,
      height:32,
      paddingLeft:5,
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 16,
        height: 16,
        resizeMode: 'stretch'
    },
    scanIcon: {//搜索图标
        height: 24,
        width: 24,
        resizeMode: 'stretch'
    },
});
