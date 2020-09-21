import ginzaDistrict from "./images/TokyoGinzaDistrict.jpg";
import kabukiTheatre from "./images/TokyoKabuki-zaTheatre.jpg";
import meijiShrine from "./images/TokyoMeijiShrine.jpeg";
import miraikanMuseum from "./images/TokyoMiraikanMuseum.jpg";
import natArtCenter from "./images/TokyoNationalArtCenter.jpg";
import sensojiTemple from "./images/TokyoSensojiTemple.jpg";
import shibuya from "./images/TokyoShibuya.jpg";
import skytree from "./images/TokyoSkytree.jpg";
import uenoPark from "./images/TokyoUenoPark.jpg";

const tokyoPhotos = [
	ginzaDistrict,
	kabukiTheatre,
	meijiShrine,
	miraikanMuseum,
	natArtCenter,
	sensojiTemple,
	shibuya,
	skytree,
	uenoPark,
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
