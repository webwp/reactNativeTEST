import React , { Component } from 'react';
import { Grid } from 'antd-mobile';
import { Text,View,StyleSheet,Image,Dimensions,ListView } from 'react-native';
const data = [
    {title:'react-native 调用原生模块详解 - CSDN博客',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525863216555&di=ddfa6bbe05dfa63ddf35c2e50e14c7f4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3De860bf1fd333c895b2739038b97a1985%2Fd043ad4bd11373f06546a717ae0f4bfbfbed0439.jpg',recordTime:'03-15'},
    {title:'React Native 之 定义的组件 (跨文件使用) - 谢玉胜 - 博客园',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525863216555&di=ddfa6bbe05dfa63ddf35c2e50e14c7f4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3De860bf1fd333c895b2739038b97a1985%2Fd043ad4bd11373f06546a717ae0f4bfbfbed0439.jpg',recordTime:'03-15'},
    {title:'ReactNative中如何使用React的组件? - SegmentFault',image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525863216555&di=ddfa6bbe05dfa63ddf35c2e50e14c7f4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3De860bf1fd333c895b2739038b97a1985%2Fd043ad4bd11373f06546a717ae0f4bfbfbed0439.jpg',recordTime:'03-15'},
    
];
class Index extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(data),
        };
    }
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => 
                    <View style={styles.listItem}>
                        <View style={styles.listItemView}>
                            <Image style={styles.image} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525863216555&di=ddfa6bbe05dfa63ddf35c2e50e14c7f4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3De860bf1fd333c895b2739038b97a1985%2Fd043ad4bd11373f06546a717ae0f4bfbfbed0439.jpg'}} style={{width: 80, height: 80}} />
                        </View>
                        <View style={styles.listItemText}>
                            <Text style={styles.setheight}>{rowData.title}</Text>
                            <Text style={styles.listItemTextBotton}>{rowData.recordTime}</Text>
                        </View>
                    </View>
                }
            />
        )
    }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    listItem:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:12.5,
        borderBottomWidth:1,
        borderBottomColor:"#f1f1f1",
    },
    listItemView:{
        width:80
    },
    listImg:{
        borderRadius:5,
        overflow:'hidden'
    },
    listItemText:{
        width:width-80-25,
        paddingLeft:12.5,
        height:80,
    },
    setheight:{
        height:60
    },
    listItemTextBotton:{
        flex:1,
        flexDirection: 'row',
        alignItems:'flex-end',
        marginBottom:0,
        color:'#dbdbdb'
    }
})

export default Index;