import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react';

const HomePage = async () => {
	const companions = await getAllCompanions({ limit: 3 });
	const recentSessionsCompanions = await getRecentSessions(10);

	return (
		<main>
			<h1 className="text-2xl">Popular Companions</h1>

			<section className="home-section">
				{companions.map((companion) => (
					<CompanionCard {...companion} key={companion.id} color={getSubjectColor(companion.subject)} />
				))}
			</section>

			<section className="home-section">
				<CompanionsList
					title="Recently Completed Lessons"
					companions={recentSessionsCompanions}
					classNames="w-2/3 max-lg:w-full"
				/>
				<CTA />
			</section>
		</main>
	);
};

export default HomePage;
