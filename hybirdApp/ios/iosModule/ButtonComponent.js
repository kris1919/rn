import React,{Component} from 'react'
import {
    Button,
    TouchableOpacity,
    TouchableHighlight,
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    ActivityIndicator} from 'react-native'


export default class ButtonComponent extends Component {

    _buttonPressHandle = () => {
        alert("clicked!")
    }

	render() {
		return <SafeAreaView style={buttonStyles.container}>

            <Button
                style={buttonStyles.button1}
                title='Button'
                onPress={this._buttonPressHandle}
            ></Button>

            <TouchableOpacity
                style={buttonStyles.button2}
            >
                <Text style={buttonStyles.buttonText}>TouchableOpacity</Text>
            </TouchableOpacity>

            <TouchableHighlight
                style={buttonStyles.button3}
                onPress={this._buttonPressHandle}
            >
                <Text style={buttonStyles.buttonText}>TouchableHighlight</Text>
            </TouchableHighlight>

            <TouchableOpacity
                style={buttonStyles.imageButton}
            >
                <Image
                    source={require('./source/icon_info_photo.png')}
                ></Image>
            </TouchableOpacity>

            <Text
                style={{marginTop:50}}
            >
                Button类只可以作为文字按钮,没有样式背景色
            </Text>
            <Text
                style={{marginTop:10}}
            >
                具有样式的button可以用TouchableOpacity或者TouchableHighlight代替
                前者点击的时候，只是改变了透明度；后者有明显的黑色背景。前者更接近前端按钮样式
            </Text>

        </SafeAreaView>
	}
}

const buttonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    button1: {
        marginTop:10,
        width:40,
        height:100,
    },
    button2: {
        marginTop:10,
        marginLeft:10,
        backgroundColor:'blue',
        height:40,
        width:100,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    button3: {
        marginTop:10,
        marginLeft:10,
        backgroundColor:'green',
        height:40,
        width:100,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText: {
        color:'white',
    },
    imageButton: {
        marginTop:10,
        marginLeft:10,
        width:40,
        height:40,
        backgroundColor:'red'
    }
})


