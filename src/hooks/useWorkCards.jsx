import {useState, useEffect} from 'react';
import gsap from 'gsap';
import {Flip} from 'gsap/Flip';

export const useWorkCards = (selector) => {
	gsap.registerPlugin(Flip);
	const [activeIndex, setActiveIndex] = useState(null);
    
	useEffect(() => {
        const workCards = document.querySelectorAll(selector);
        const state = Flip.getState(workCards);
		console.log('workCards', workCards);
		workCards.forEach((card, idx) => {
			card.classList.remove('active', 'is-inactive');
			if (idx === activeIndex) {
				card.classList.add('active');
			} else if (activeIndex !== null) {
				card.classList.add('is-inactive');
			}
		});

		Flip.from(state, {
			duration: 1,
			ease: 'expo.out',
			absolute: true,
		});
	}, [activeIndex, selector]);

	const handleCardClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return {handleCardClick, activeIndex};
};
