import {useState, useEffect, useRef} from 'react';

const useVantaEffect = ({isDark, myRef, THREE, TRUNK, spacing}) => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaEffectRef = useRef(vantaEffect);
	useEffect(() => {
		vantaEffectRef.current = vantaEffect;
	}, [vantaEffect]);

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
				scaleMobile: 0.5,
				color: isDark ? 0x959393 : 0x0d0d0d,
				spacing: spacing,
				chaos: isDark ? 3.2 : 3.0,
			});
		};

		if (!vantaEffectRef.current) {
			setVantaEffect(initializeVanta());
		} else if (vantaEffectRef.current.isDark !== isDark) {
			vantaEffectRef.current.destroy();
			setVantaEffect(initializeVanta());
		}

		// Cleanup function
		return () => {
			if (vantaEffectRef.current) {
				vantaEffectRef.current.destroy();
			}
		};
	}, [isDark, spacing]);

	return [vantaEffect, setVantaEffect];
};

export default useVantaEffect;
