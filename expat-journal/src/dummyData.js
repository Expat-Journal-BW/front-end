import ginzaDistrict from "./images/TokyoGinzaDistrict.jpg";
import kabukiTheatre from "./images/TokyoKabuki-zaTheatre.jpg";
import meijiShrine from "./images/TokyoMeijiShrine.jpeg";
import miraikanMuseum from "./images/TokyoMiraikanMuseum.jpg";
import natArtCenter from "./images/TokyoNationalArtCenter.jpg";
import sensojiTemple from "./images/TokyoSensojiTemple.jpg";
import tokyoShibuya from "./images/TokyoShibuya.jpg";
import tokyoSkytree from "./images/TokyoSkytree.jpg";
import tokyoUenoPark from "./images/TokyoUenoPark.jpg";

const tokyoPhotos = [
	{
		img: ginzaDistrict,
		title: "Ginza District",
	},
	{
		img: kabukiTheatre,
		title: "Kubuki Theatre",
	},
	{
		img: meijiShrine,
		title: "Meiji Shrine",
	},
	{
		img: miraikanMuseum,
		title: "Miraikan Museum",
	},
	{
		img: natArtCenter,
		title: "National Arts Center",
	},
	{
		img: sensojiTemple,
		title: "Sensoji Temple",
	},
	{
		img: tokyoShibuya,
		title: "Tokyo Shibuya",
	},
	{
		img: tokyoSkytree,
		title: "Tokyo Skytree",
	},
	{
		img: tokyoUenoPark,
		title: "Ueno Park",
	},
];

const initialState = {
	users: [
		{
			user: {
				id: 1,
				credentials: {
					email: "test@test.com",
					password: "testpass",
				},
				nameOfUser: {
					firstName: "testFirst",
					lastName: "testLast",
				},
				posts: [
					{
						post: {
							photos: [...tokyoPhotos],
							story:
								"My trip to Japan! My first trip to The Land of the Rising Sun was amazing, to say the least. I started my journey, like most travelers tend to do, at the airport. From there my next stop was the hotel. From the moment I got there I had nothing but good vibes. It is a cozy, little hotel on the outskirts of ...",
							date: "01/29/2020",
							title: "Anime Week 2020",
							location: "Tokyo, Japan",
						},
					},
				],
			},
		},
	],
};

export const initUserId = initialState.users.length + 1;

export const currentUser = {};

export default initialState;
