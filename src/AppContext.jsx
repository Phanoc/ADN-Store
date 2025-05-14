import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [club, setClub] = useState('Chelsea');
	const [globalSearchTerm, setGlobalSearchTerm] = useState('');
	const [cartCount, setCartCount] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [gender, setGender] = useState('All');
	const [filter, setFilter] = useState("");

	const addToCart = (item) => {
		setCartItems((prevItems) => [...prevItems, item]);
	};

	const deleteAddedItem = (id, selectedSize) => {
		console.log('Before deletion:', cartItems);
		console.log('Deleting item with:', id, selectedSize);
		setCartItems((prevItems) =>
			prevItems.filter(
				(item) => !(item.id === id && item.selectedSize === selectedSize)
			)
		);
		console.log('item deleted');
	};

	return (
		<AppContext.Provider
			value={{
				club,
				setClub,
				globalSearchTerm,
				setGlobalSearchTerm,
				cartCount,
				setCartCount,
				cartItems,
				setCartItems,
				addToCart,
				gender,
				setGender,
				deleteAddedItem,
				filter,
				setFilter
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
