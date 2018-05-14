import React , { Component } from 'react';

import GirdIndex from '../../components/Gird';
const data = [ { icon: '../../assets/images/home/home/Chargingpile.png',
text: '公交' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '邮轮码头' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '停车' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '共享汽车' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '充电桩' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '预约车险' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '出行指南' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '更多' } ];
class Index extends Component{
    render(){
        return(
            <GirdIndex data={data}/>
        )
    }
}
export default Index;