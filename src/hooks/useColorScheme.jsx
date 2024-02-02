import {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';

export function useColorScheme() {
	const systemPrefersDark = useMediaQuery({
		query: '(prefers-color-scheme: dark)',
	});

	const getInitialColorScheme = () => {
		const storedValue = localStorage.getItem('colorScheme');
		if (storedValue !== null) {
			try {
				return JSON.parse(storedValue);
			} catch (error) {
				console.error('Error parsing persisted state:', error, 'Value:', storedValue);
				return !!systemPrefersDark;
			}
		}
		return !!systemPrefersDark;
	};

	const [isDark, setIsDark] = useState(getInitialColorScheme);

	useEffect(() => {
		localStorage.setItem('colorScheme', JSON.stringify(isDark));
		if (isDark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDark]);

	return {
		isDark,
		setIsDark,
	};
}
