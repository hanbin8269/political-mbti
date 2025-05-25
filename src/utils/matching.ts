import { Candidate, Answer, MatchResult } from '@/types';

export const calculateMatch = (
  candidates: Candidate[],
  answers: { [key: number]: Answer },
  priorities: { [key: string]: number }
): MatchResult[] => {
  const results = candidates.map(candidate => {
    let totalScore = 0;
    let maxScore = 0;

    Object.entries(answers).forEach(([, answer]) => {
      const candidateScore = candidate.positions[answer.area][answer.policy_key];
      const userScore = answer.value;
      const priority = priorities[answer.area] || 3;
      
      const scoreDiff = Math.abs(candidateScore - userScore);
      const matchScore = (5 - scoreDiff) * priority;
      
      totalScore += matchScore;
      maxScore += 5 * priority;
    });

    return {
      ...candidate,
      matchPercentage: Math.round((totalScore / maxScore) * 100)
    };
  });

  return results.sort((a, b) => b.matchPercentage - a.matchPercentage);
};