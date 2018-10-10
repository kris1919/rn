import React ,{Component} from 'react'
import {Text , StyleSheet ,SafeAreaView ,View,TouchableHighlight} from 'react-native'

import UtilsComponent from './UtilsComponent.js'

export default class TextComponent extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	clickTimes : 1,
	  };
	}
	_onPress = () => {
		this.setState({
			clickTimes: this.state.clickTimes + 1
		})
	}
	render () {
		return <SafeAreaView>

					<View style={{flexDirection:'row'}}>
						<TouchableHighlight onPress={this._onPress} underlayColor='white'>	
							<Text style={styles.plain}> 你可以点我试试！你可以点我试试！你可以点我试试！ </Text>
						</TouchableHighlight>
						<View style={{alignItems:'center',justifyContent:'center',flex:1}}><Text style={[{backgroundColor: 'pink'},styles.border]}>点击了{this.state.clickTimes}次</Text></View>
					</View>

					<View style={styles.container}>
						<Text style={styles.border}> 我是边框文字文字 </Text>
					</View>

					<View>
						<Text style={styles.bg}> 我是背景色 </Text>
					</View>
				</SafeAreaView>
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor: 'white',
		height: 20,
	},
	plain : {
		width: 80,
	},
	border : {
		marginLeft: 15,
		borderColor: 'red',
		borderWidth: 1,
		borderRadius: 5,
		position: 'absolute'
	},
	bg : {
		backgroundColor: 'gray',
	}
})