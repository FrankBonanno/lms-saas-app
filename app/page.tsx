import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';
import React from 'react';

const HomePage = () => {
	return (
		<main>
			<h1 className="text-2xl">Popular Companions</h1>

			<section className="home-section">
				<CompanionCard
					id="123"
					name="Neura the Brainy Explorer"
					topic="Neural Network of the Brain"
					subject="science"
					duration={45}
					color="#ffda6e"
				/>
				<CompanionCard
					id="345"
					name="Countsy the Number Wizard"
					topic="Derivatives & Integrals"
					subject="maths"
					duration={30}
					color="#e5d0ff"
				/>
				<CompanionCard
					id="456"
					name="Verba the Vocabulary Builder"
					topic="English Literature"
					subject="language"
					duration={30}
					color="#bde7ff"
				/>
			</section>

			<section className="home-section">
				<CompanionsList
					title="Recently Completed Lessons"
					companions={recentSessions}
					classNames="w-2/3 max-lg:w-full"
				/>
				<CTA />
			</section>
		</main>
	);
};

export default HomePage;
