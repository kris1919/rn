import React,{Component} from 'react'
import {View,StyleSheet,SafeAreaView} from 'react-native'


export default class ViewComponent extends Component {
	render () {
		return 	<SafeAreaView style={viewStyles.container}>

					<View style={{height:100,flexDirection:'row'}}>

						<View style={viewStyles.innerView}></View>

						<View style={viewStyles.innerView}></View>

						<View style={viewStyles.innerView}></View>

						<View style={viewStyles.innerView}></View>

					</View>

					<View style={viewStyles.radiusView}>
					
					</View>

				</SafeAreaView>
	}
}

const viewStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	innerView: {
		marginBottom: 10,
		marginRight: 10,
		flex: 1,
		backgroundColor: 'red'
	},
	radiusView: {
		backgroundColor: 'pink',
		borderRadius: 10,
		marginLeft: 50,
		width: 100,
		height: 100,
		shadowColor: 'black',
		shadowOpacity: .5,
		shadowOffset: {
			width: 1,
			height: -1
		}
	}
})
