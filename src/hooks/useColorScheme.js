import {useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import createPersistedState from 'use-persisted-state';

const useColorSchemeState = createPersistedState('colorScheme');

export function useColorScheme() {
	const systemPrefersDark = useMediaQuery({
		query: '(prefers-color-scheme: dark)',
	});

	const [isDark, setIsDark] = useColorSchemeState(undefined);

	useEffect(() => {
		let parsedValue;
		try {
			parsedValue = typeof isDark === 'string' ? JSON.parse(isDark) : isDark;
		} catch (error) {
			console.error('Error parsing persisted state:', error);
			parsedValue = !!systemPrefersDark;
		}

		if (parsedValue) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDark, systemPrefersDark]);

	return {
		isDark: isDark === undefined ? !!systemPrefersDark : isDark,
		setIsDark,
	};
}
