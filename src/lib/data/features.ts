import type { Feature } from "$lib/utils/types";

export default [ 
  {
    name: 'Social Engagement',
    description:
      'Share your workouts with your friends, train together and earn badges and achievements.',
    image: 'images/features/feature-social-engagement.png',
  }, 
  {
    name: 'Supreme Game Mode',
    description:
      'Climb up to the top of the leaderboard, earn badges and achievements which unlock new features, discounts at our partners and even earn you special belts.',
    image: 'images/features/feature-game-mode.png',
    tags: [{ label: 'Gamification' }, { label: 'Engagement', color: 'secondary' }]
  }, 
  {
    name: 'Missions and Quests',
    description:
      'There are a lot of missions and quests, which you can complete to unlock new features',
    image: 'images/features/feature-missions.png',
  }, 
  {
    name: 'Workouts on-demand',
    description:
      'It\'s like  uber for the fitness world, earn via our platform by becoming a creator or workout by joining our community',
    image: 'images/features/feature-on-demand.png',
  }, 
  {
    name: 'Workouts in more than X cities',
    description:
      'The mission of Fitworld is to be available in more than 10.000 cities around the globe. We want to be the best fitness app in the world',
    image: 'images/features/feature-cities.png',
  },
  {
    name: 'Fitworld',
    description:
      'We want this app to be the best fitness app in the world, so we are open-source. You can see the code on GitHub',
    image: 'images/features/feature-fitworld.png'
  },
] as Feature[];