import {
	Dimensions,
	Platform
} from 'react-native'

export let screenWidth = Dimensions.get('window').width;
export let screenHeight = Dimensions.get('window').height;

export function isIOS() {
	console.log('is  ios  ?')
	return Platform.OS == 'ios'
}

export function isIphonX() {
	return this.isIOS && (screenWidth == 375 && screenHeight == 812)
}

export default class UtilsComponent {
	age = 12
	name = 'Jane'
}