import React from "react";
import {FlatList,StyleSheet,Text,View,TouchableHighlight} from "react-native"

import TextComponent from './TextComponent.js'

export default class UIListView extends React.Component {
	static defaultProps = {
		data:[
			{key:'a',title:'A'},
			{key:'b',title:'B'},
			{key:'c',title:'C'}
		]
	}
	_renderItem = (item) => {
		var color = (item.index % 2 == 0) ? 'white' : 'white';
		return 	<TouchableHighlight onPress={this._itemOnPress}>
					<View style={[styles.itemViewStyle,{backgroundColor:color}]}>
						<Text style={styles.itemTextStyle}>
						我是第{item.index}个item,我的key={item.item.key}
						</Text>
					</View>
				</TouchableHighlight>
	}
	_renderSeparator = () => {
		return <View style={{height:.5,backgroundColor:'gray'}}></View>
	}
	_renderFooter = () => {
		return <View style={{justifyContent: 'center',alignItems:'center' ,height:40}}>
			<Text>我是尾部</Text>
		</View>
	}
	_renderHeader = () => {
		return 	<View style={{justifyContent: 'center',alignItems: 'center', height:40}}>
					<Text>我是头部</Text>
				</View>
	}
	_itemOnPress = (item) => {
		this.props.navigator.push({
			component:TextComponent,
      		title: 'Text',
    	})
	}
	render() {
		return (
			<FlatList
				style={styles.container}
  				data={this.props.data}
  				renderItem={this._renderItem}
  				ItemSeparatorComponent={this._renderSeparator}
  				ListFooterComponent={this._renderFooter}
  				ListHeaderComponent={this._renderHeader}
			/>
		)
	}
}

class testView extends React.Component {
	render() {
		return <View style={{flex:1}}></View>	
	}
}

const styles = StyleSheet.create({
	container: {
		flex : 1,
		backgroundColor:'white'
	},
	itemTextStyle: {
		marginLeft:15,
		marginRight:15,
		color:'black',
		fontSize:18
	},
	itemViewStyle: {
		height:50,
		justifyContent:'center'
	}
})