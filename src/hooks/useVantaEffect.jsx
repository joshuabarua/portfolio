import {useState, useRef, useLayoutEffect, useCallback} from 'react';

const initializeVanta = (myRef, THREE, TRUNK, isDark, spacing) => {
	return TRUNK({
		el: myRef.current,
		THREE: THREE,
		mouseControls: false,
		touchControls: false,
		gyroControls: false,
		minHeight: 400.0,
		minWidth: 400.0,
		scale: 1,
		scaleMobile: 1,
		color: isDark ? 0x959393 : 0x0d0d0d,
		spacing: spacing,
		chaos: isDark ? 6 : 3.0,
	});
};

const useVantaEffect = ({isDark, myRef, THREE, TRUNK, spacing}) => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaEffectRef = useRef(vantaEffect);
	const initializedRef = useRef(false);
	const vantaIsDarkRef = useRef(isDark);
	const vantaSpacingRef = useRef(spacing);

	useLayoutEffect(() => {
		vantaEffectRef.current = vantaEffect;
	}, [vantaEffect]);

	useLayoutEffect(() => {
		vantaIsDarkRef.current = isDark;
		vantaSpacingRef.current = spacing;
	}, [isDark, spacing]);

	const initializeVantaMemoized = useCallback((myRef, THREE, TRUNK, isDark, spacing) => {
		return initializeVanta(myRef, THREE, TRUNK, isDark, spacing);
	}, []);

	useLayoutEffect(() => {
		if (!initializedRef.current || vantaIsDarkRef.current !== isDark || vantaSpacingRef.current !== spacing) {
			if (vantaEffectRef.current) {
				vantaEffectRef.current.destroy();
			}
			setVantaEffect(initializeVantaMemoized(myRef, THREE, TRUNK, isDark, spacing));
			initializedRef.current = true;
		}

		return () => {
			if (vantaEffectRef.current) {
				vantaEffectRef.current.destroy();
				initializedRef.current = false;
			}
		};
	}, [initializeVantaMemoized, isDark, spacing, myRef, THREE, TRUNK]);

	return [vantaEffect, setVantaEffect];
};

export default useVantaEffect;
