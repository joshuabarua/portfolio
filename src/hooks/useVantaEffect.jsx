import {useState, useEffect} from 'react';

const useVantaEffect = ({isDark, myRef, THREE, TRUNK, spacing}) => {
	const [vantaEffect, setVantaEffect] = useState(null);

	useEffect(() => {
		const initializeVanta = () => {
			return TRUNK({
				el: myRef.current,
				THREE: THREE,
				mouseControls: false,
				touchControls: false,
				gyroControls: false,
				minHeight: 400.0,
				minWidth: 400.0,
				scale: 1,
				scaleMobile: 2,
				color: isDark ? 0x959393 : 0x0d0d0d,
				spacing: spacing,
				chaos: isDark ? 3.5 : 3.0,
			});
		};

		if (!vantaEffect || vantaEffect.isDark !== isDark) {
			if (vantaEffect) vantaEffect.destroy();
			setVantaEffect(initializeVanta());
		}

		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [isDark, myRef, TRUNK, THREE, spacing]);

	return [vantaEffect, setVantaEffect];
};

export default useVantaEffect;
