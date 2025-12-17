import axios, { Axios } from "axios";
import { useEffect, useState } from 'react';

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch=axios.create({
    baseURL:productionUrl
})

export const formatPrice = (price) => {
	const dollarsAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format((price / 100).toFixed(2))
	return dollarsAmount
}

export const generateAmountOptions = (number) => {
	return Array.from({ length: number }, (_, index) => {
		const amount = index + 1
		return <option key={amount} value={amount}>{amount}</option>
	})
}

export const useTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = document.documentElement;

    // Barcha eski theme classlarini olib tashlash
    root.classList.remove('light', 'dark');

    // Yangi theme class qo'shish
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
