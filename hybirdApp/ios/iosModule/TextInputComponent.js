import React, {Component} from 'react'
import {Keyboard,View,SafeAreaView,TextInput,StyleSheet,Text,TouchableWithoutFeedback,
findNodeHandle,UIManager} from 'react-native'

export default class TextInputComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            containerViewMarginTop:10,
            text:'记录输入框状态',
            keyboardShowListener:null,
            keyboardHideListener:null
        }
    }
    //页面加载完成。设置键盘监听
    componentWillMount() {
        console.log('开始加载');
        this.keyboardShowListener = Keyboard.addListener('keyboardDidShow',this._keyboardDidShowEvent);
        this.keyboardHideListener = Keyboard.addListener('keyboardDidHide',this._keyboardDidHideEvent)
    }
    _keyboardDidShowEvent = () => {
        console.log('键盘弹起')
    };
    _keyboardDidHideEvent = () => {
        console.log('键盘收起')
    };
    componentWillUnmount(){
        if (this.keyboardShowListener != null){
            this.keyboardShowListener.remove()
        }
        if (this.keyboardHideListener != null){
            this.keyboardHideListener.remove()
        }
    }

    //输入框状态变更回调
    _textFieldBeginEditing = (event) => {
        console.log(event.nativeEvent)
        // console.log(event.nativeEvent)
        // this.setState({
        //     text:"开始输入..." + event.nativeEvent.text
        // })
        // console.log(this.ref)
        // var handle = findNodeHandle(this.ref)
        // UIManager.measure(handle,(pageX,pageY) => {
        //     console.log(pageX)
        //     console.log(pageY)
        // })

    };
    _textFieldIsEditing = (value) => {
        this.setState({
            text: value
        })
    };
    _textFieldEndEditing = (event) => {
        this.setState({
            text: event.nativeEvent.text + "...结束编辑"
        })
    };
    //点击屏幕收起键盘
    _fullScreemViewDidPressed = (e) => {
        console.log(e.nativeEvent)
        Keyboard.dismiss()
    };
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <TouchableWithoutFeedback onPress={this._fullScreemViewDidPressed} style={{flex:1}}>
                <View style={{flex:1,margin:this.state.containerViewMarginTop,backgroundColor:'white'}}>
                <TextInput
                    style={textFieldStyles.tfStyle1}
                    autoFocus={false}
                    clearButtonMode={'while-editing'}
                    placeholder={'文字输入框'}
                    placeholderTextColor={'red'}
                />

                <TextInput
                    style={textFieldStyles.tfStyle1}
                    clearButtonMode={'while-editing'}
                    placeholder={'数字密码输入框'}
                    secureTextEntry={true}
                    keyboardType={'number-pad'}
                    maxLength={11}
                />

                <TextInput
                    style={textFieldStyles.tfStyle1}
                    clearButtonMode={'while-editing'}
                    placeholder={'事件响应'}
                    onFocus={this._textFieldBeginEditing}
                    onChangeText={this._textFieldIsEditing}
                    onBlur={this._textFieldEndEditing}
                />

                <Text
                    style={{margin: 10,backgroundColor:'white'}}
                >{this.state.text}</Text>

                <View style={{flex:1,backgroundColor:'white',flexDirection:'column-reverse'}}>
                    <TextInput ref="botTF" style={{height:30,marginLeft:10,marginRight:10,borderColor:'gray',borderWidth:1,marginBottom:50}}
                                onFocus={this._textFieldBeginEditing}
                    >
                    </TextInput>
                </View>

                </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>

        )
    }
}

const textFieldStyles = StyleSheet.create({
    tfStyle1: {
        margin:10,
        height:30,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
    }
});