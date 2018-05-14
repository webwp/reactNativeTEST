import React,{Component} from 'react';
import { Text,View } from 'react-native';

import Girds from '../../components/Gird/index';

const data = [ { icon: '../../assets/images/home/home/Chargingpile.png',
text: '公交' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '邮轮码头' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '停车' }, ];

class UserGird extends Component{
    render(){
        return(
            <View>
                <Girds data={data} />
            </View>
        )
    }
}

export default UserGird;