import React, {Component} from 'react'
import {View,SafeAreaView,TextInput,StyleSheet,Text} from 'react-native'

export default class TextInputComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            text:'记录输入框状态'
        }
    }

    _textFieldBeginEditing = () => {
        this.setState({
            text:"开始输入"
        })
    }

    render() {
        return <SafeAreaView>
            <TextInput
                style={textFieldStyles.tfStyle1}
                autoFocus={true}
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
            />

            <Text
                style={{margin:10}}
            >{this.state.text}</Text>


        </SafeAreaView>
    }

}

const textFieldStyles = StyleSheet.create({
    tfStyle1: {
        margin:10,
        height:40,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
    }
})