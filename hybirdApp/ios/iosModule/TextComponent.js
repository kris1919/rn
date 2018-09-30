import React ,{Component} from 'react'
import {Text , StyleSheet} from 'react-native'

export default class TextComponent extends Component {
	render () {
		return <Text style={styles.textStyle}> 我是一段文字 </Text>
	}
}


const styles = StyleSheet.create({
	textStyle : {
		marginTop: 100,
		backgroundColor: 'white',
		flex: 1
	}
})