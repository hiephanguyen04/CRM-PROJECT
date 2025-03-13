// src/data/opportunityMockData.ts
import { Opportunity, OpportunityPhase } from '../types/opportunity.types';

export const opportunities: Opportunity[] = [
  {
    id: 'opp-1',
    name: 'Affaire Romain',
    organization: 'Studio Gillig',
    contact: 'Romain Gillig',
    phase: 'Non traité',
    value: 1500,
    closingDate: '29/06/2023',
    email: 'romain@gillig.studio',
    phone: '06 88 65 26 87',
    owner: {
      id: 'owner-1',
      name: 'Sébastien',
      avatar: '/assets/images/avatar.jpg',
    },
    tags: ['BTP', 'BtoB'],
    score: 10
  },
  {
    id: 'opp-2',
    name: 'Affaire Romain',
    organization: 'Studio Gillig',
    contact: 'Romain Gillig',
    phase: 'Injoignable',
    value: 1500,
    closingDate: '29/06/2023',
    email: 'romain@gillig.studio',
    phone: '06 88 65 26 87',
    owner: {
      id: 'owner-1',
      name: 'Sébastien',
      avatar: '/assets/images/avatar.jpg',
    },
    tags: ['BTP', 'BtoB'],
    score: 10
  },
  {
    id: 'opp-3',
    name: 'Affaire Romain',
    organization: 'Studio Gillig',
    contact: 'Romain Gillig',
    phase: 'En cours',
    value: 1500,
    closingDate: '29/06/2023',
    email: 'romain@gillig.studio',
    phone: '06 88 65 26 87',
    owner: {
      id: 'owner-1',
      name: 'Sébastien',
      avatar: '/assets/images/avatar.jpg',
    },
    tags: ['BTP', 'BtoB'],
    score: 10
  },
  {
    id: 'opp-4',
    name: 'Affaire Romain',
    organization: 'Studio Gillig',
    contact: 'Romain Gillig',
    phase: 'En négociation',
    value: 1500,
    closingDate: '29/06/2023',
    email: 'romain@gillig.studio',
    phone: '06 88 65 26 87',
    owner: {
      id: 'owner-1',
      name: 'Sébastien',
      avatar: '/assets/images/avatar.jpg',
    },
    tags: ['BTP', 'BtoB'],
    score: 10
  },
  {
    id: 'opp-5',
    name: 'Affaire Romain',
    organization: 'Studio Gillig',
    contact: 'Romain Gillig',
    phase: 'Gagné',
    value: 1500,
    closingDate: '--/--/----',
    email: 'romain@gillig.studio',
    phone: '06 88 65 26 87',
    owner: {
      id: 'owner-1',
      name: 'Sébastien',
      avatar: '/assets/images/avatar.jpg',
    },
    tags: ['BTP', 'BtoB'],
    score: 10,
    reason: 'Client a accepté l\'offre'
  },
  {
    id: 'opp-6',
    name: 'Affaire Romain',
    organization: 'Studio Gillig',
    contact: 'Romain Gillig',
    phase: 'Perdu',
    value: 1500,
    closingDate: '29/06/2023',
    email: 'romain@gillig.studio',
    phone: '06 88 65 26 87',
    owner: {
      id: 'owner-1',
      name: 'Sébastien',
      avatar: '/assets/images/avatar.jpg',
    },
    tags: ['BTP', 'BtoB'],
    score: 10
  }
];

// Generate more opportunities for each phase to make the demo more realistic
export const generateOpportunities = (): Opportunity[] => {
  const phases: OpportunityPhase[] = [
    'Non traité', 
    'Injoignable', 
    'Closing en cours', 
    'En négociation', 
    'En cours',
    'Gagné', 
    'Perdu'
  ];
  
  const result: Opportunity[] = [...opportunities];
  
  // Generate additional opportunities
  for (let i = 0; i < 20; i++) {
    const phase = phases[Math.floor(Math.random() * phases.length)];
    result.push({
      id: `opp-${i + 7}`,
      name: 'Affaire Romain',
      organization: 'Studio Gillig',
      contact: 'Romain Gillig',
      phase: phase,
      value: 1500,
      closingDate: '29/06/2023',
      email: 'romain@gillig.studio',
      phone: '06 88 65 26 87',
      owner: {
        id: 'owner-1',
        name: 'Sébastien',
        avatar: '/assets/images/avatar.jpg',
      },
      tags: ['BTP', 'BtoB'],
      score: 10
    });
  }
  
  return result;
};