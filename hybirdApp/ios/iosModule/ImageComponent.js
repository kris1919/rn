import React,{Component} from 'react'
import {View,Image,SafeAreaView,StyleSheet,Text} from 'react-native'


export default class ImageComponent extends Component{


    render(){
        return <SafeAreaView style={{flex:1}}>
            <Text>Image的resizeMode属性：cover\contain\stretch\repeat\center;</Text>
            <Text>cover：按照最长边缩放图片</Text>
            <Text>contain：按照最短边缩放图片</Text>
            <Text>stretch：铺满整个视图，可能会改变图片本来的长宽比例</Text>
            <View>
                <Image
                    style={imageStyles.localImage}
                    source={require('./source/icon_info_photo.png')}
                ></Image>
            </View>

            <Text>网络图片加载需要给定大小，否则无法加载</Text>
            <Image
                style={imageStyles.urlImage}
                source={{uri:'http://img0.bdstatic.com/static/searchdetail/img/logo-2X_b99594a.png'}}
            >
            </Image>
        </SafeAreaView>
    }
}
//resizeMode{cover/contain/stretch}
const imageStyles = StyleSheet.create({
    localImage: {
        marginTop:10,
        marginLeft:10,
        width:50,
        height:100,
        // backgroundColor:'red',
        resizeMode:'center',
        shadowColor:'blue',
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity:0.5
    },
    urlImage: {
        width:100,
        height:100,
        backgroundColor:'gray',
        resizeMode:'contain',
    }
})