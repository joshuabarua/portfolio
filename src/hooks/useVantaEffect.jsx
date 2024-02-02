import {useState, useRef, useLayoutEffect} from 'react';

const useVantaEffect = ({isDark, myRef, THREE, TRUNK, spacing}) => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaEffectRef = useRef(vantaEffect);
	const initializedRef = useRef(false);

	useLayoutEffect(() => {
		vantaEffectRef.current = vantaEffect;
	}, [vantaEffect]);

	useLayoutEffect(() => {
		const initializeVanta = () => {
			console.log('initialised vanta effexct');
			return TRUNK({
				el: myRef.current,
				THREE: THREE,
				mouseControls: false,
				touchControls: false,
				gyroControls: false,
				minHeight: 400.0,
				minWidth: 400.0,
				scale: 1,
				scaleMobile: 0.5,
				color: isDark ? 0x959393 : 0x0d0d0d,
				spacing: spacing,
				chaos: isDark ? 3.2 : 3.0,
			});
		};

		if (!initializedRef.current || vantaEffectRef.current.isDark !== isDark || vantaEffectRef.current.spacing !== spacing) {
			if (vantaEffectRef.current) {
				vantaEffectRef.current.destroy();
				console.log('vantaEffect Destroyed');
			}
			setVantaEffect(initializeVanta());
			initializedRef.current = true;
		}

		return () => {
			if (vantaEffectRef.current) {
				vantaEffectRef.current.destroy();
				initializedRef.current = false;
				console.log('vantaEffect cleanup');
			}
		};
	}, [isDark, spacing, myRef, THREE, TRUNK]);

	return [vantaEffect, setVantaEffect];
};

export default useVantaEffect;
