import Chelsea_logo from '../images/logo_clubs/Chelsea.png';
import ManUnited_logo from '../images/logo_clubs/ManUnited.png';
import Arsenal_logo from '../images/logo_clubs/Arsenal.png';
import Background_ManUnited from '../images/logo_clubs/Background_ManUnited.png';
import Background_Arsenal from '../images/logo_clubs/Background_Arsenal.png';
import Background_Chelsea from '../images/logo_clubs/Background_Chelsea.png';

export const teams = {
	Chelsea: {
		color_title: '#FFFFFF',
		main_color: '#034694',
		second_color: '#FFFFFF',
		brighter_color: '#1c7ed6',
		text: '#1D428A',
		logo: Chelsea_logo,
		font_logo: 'Gotham',
		font_text: 'Futura PT',
		background: Background_Chelsea,
	},
	ManUnited: {
		color_title: '#FFF',
		second_color: '#FBE122',
		brighter_color: '#f03e3e',
		main_color: '#DA291C',
		font_logo: 'Druk Wide Bold',
		font_text: 'TT Firs Neue',
		logo: ManUnited_logo,
		background: Background_ManUnited,
	},
	Arsenal: {
		color_title: '#FFFFFF',
		second_color: '#FFFFFF',
		main_color: '#EF0107',
		brighter_color: '#fa5252',
		font_logo: 'TT Firs Neue',
		font_text: 'Eurostile',
		logo: Arsenal_logo,
		background: Background_Arsenal,
	},
};

export const applyTheme = (clubName) => {
	const clubColors = teams[clubName];

	if (!clubColors) {
		console.warn(`Club ${clubName} không tồn tại trong danh sách.`);
		return;
	}

	Object.keys(clubColors).forEach((key) => {
		document.documentElement.style.setProperty(`--${key}`, clubColors[key]);
	});
};
