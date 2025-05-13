import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [club, setClub] = useState('Chelsea');
	const [globalSearchTerm, setGlobalSearchTerm] = useState(''); // Thêm state cho tìm kiếm toàn cục
	const [cartCount, setCartCount] = useState(0); // Add cartCount state

	return (
		<AppContext.Provider
			value={{
				club,
				setClub,
				globalSearchTerm,
				setGlobalSearchTerm,
				cartCount,
				setCartCount,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
