import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';

const sliderImgs = [
	'https://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	'https://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	'https://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg',
];

const Images = [
	'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
	'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg',
];

const viewInfo = [
	{
		bg: 'red',
		imgUrl:
			'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
		text: ['酒店', '海外', '周边', '团购.特惠', '客栈.公寓'],
	},
	{
		bg: 'blue',
		imgUrl:
			'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
		text: ['机票', '火车票', '接收机', '汽车票', '自驾.专车'],
	},
	{
		bg: 'green',
		imgUrl:
			'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
		text: ['旅游', '门票.玩乐', '出境WiFi', '邮轮', '签证'],
	},
	{
		bg: 'yellow',
		imgUrl:
			'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png',
		text: ['攻略', '周末游', '礼品卡', '美食.购物', '更多'],
	},
];

const Index = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Swiper style={styles.wrapper} autoplay={true}>
					{sliderImgs.map((url, index) => {
						return (
							<View key={index}>
								<Image
									style={styles.slide}
									source={{
										uri: url,
									}}
								/>
							</View>
						);
					})}
				</Swiper>
				{viewInfo.map(({ bg, imgUrl, text }) => {
					return (
						<View style={[styles.subView, styles[`sub_${bg}`]]}>
							<View style={[styles.subViewFlex, styles.subBorderLeft]}>
								<View style={[styles.subViewFlex, styles.flexCenter]}>
									<Text style={[[styles.font16]]}>{text[0]}</Text>
								</View>
								<View style={[styles.subViewFlex, styles.flexCenter]}>
									<Image
										style={[styles.sub_icon_img]}
										source={{ uri: imgUrl }}
									/>
								</View>
							</View>
							<View style={styles.subViewFlex}>
								<View
									style={[
										styles.subViewFlex,
										styles.flexCenter,
										styles.subBorderCenter,
									]}>
									<Text style={[[styles.font16]]}>{text[1]}</Text>
								</View>
								<View style={[styles.subViewFlex, styles.flexCenter]}>
									<Text style={[[styles.font16]]}>{text[2]}</Text>
								</View>
							</View>
							<View style={[styles.subViewFlex, styles.subBorderRight]}>
								<View
									style={[
										styles.subViewFlex,
										styles.flexCenter,
										styles.subBorderCenter,
									]}>
									<Text style={[[styles.font16]]}>{text[3]}</Text>
								</View>
								<View style={[styles.subViewFlex, styles.flexCenter]}>
									<Text style={[[styles.font16]]}>{text[4]}</Text>
								</View>
							</View>
						</View>
					);
				})}
			</View>
			<View style={[styles.imgView]}>
				<View style={[styles.imgFlex, { borderRightWidth: 0.5 }]}>
					<Image style={[styles.imgWh]} source={{ uri: Images[0] }}></Image>
				</View>
				<View style={[styles.imgFlex, { borderLeftWidth: 0 }]}>
					<Image style={[styles.imgWh]} source={{ uri: Images[1] }}></Image>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	//container
	container: {
		backgroundColor: '#F2F2F2',
		flex: 1,
	},
	//slider
	wrapper: {
		height: 80,
		marginBottom: 5,
	},
	slide: {
		height: 80,
		resizeMode: 'cover',
	},
	subView: {
		height: 84,
		marginLeft: 5,
		marginRight: 5,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		flexDirection: 'row',
	},
	subViewFlex: {
		flex: 1,
	},
	subBorderLeft: {
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3,
		borderRightColor: '#ffffff',
		borderRightWidth: 0.5,
	},
	subBorderRight: {
		borderBottomRightRadius: 3,
		borderTopRightRadius: 3,
		borderLeftColor: '#ffffff',
		borderLeftWidth: 0.5,
	},
	subBorderCenter: {
		borderBottomColor: '#ffffff',
		borderBottomWidth: 0.5,
	},
	flexCenter: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	sub_red: {
		backgroundColor: '#FA6778',
		borderColor: '#FA6778',
	},

	sub_blue: {
		backgroundColor: '#3D98FF',
		borderColor: '#3D98FF',
	},

	sub_green: {
		backgroundColor: '#5EBE00',
		borderColor: '#5EBE00',
	},

	sub_yellow: {
		backgroundColor: '#FC9720',
		borderColor: '#FC9720',
	},
	subFlex: {
		flex: 1,
	},
	sub_icon_img: {
		height: 40,
		width: 40,
		resizeMode: 'contain',
	},
	font16: {
		fontSize: 17,
		color: '#FFF',
		fontWeight: '900',
	},
	imgView: {
		height: 62,
		marginLeft: 5,
		marginRight: 5,
		flexDirection: 'row',
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	imgFlex: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
	},
	imgWh: {
		height: 59,
		borderRightWidth: 0,
		resizeMode: 'contain',
	},
});

export default Index;
