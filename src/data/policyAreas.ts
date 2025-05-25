import { Users, TrendingUp, Shield, GraduationCap, Heart, Leaf } from 'lucide-react';
import { PolicyArea } from '@/types';

export const policyAreas: PolicyArea[] = [
  { id: 'economy', name: '경제', icon: TrendingUp, color: 'from-blue-400 to-blue-600' },
  { id: 'welfare', name: '복지', icon: Heart, color: 'from-red-400 to-red-600' },
  { id: 'education', name: '교육', icon: GraduationCap, color: 'from-green-400 to-green-600' },
  { id: 'security', name: '외교안보', icon: Shield, color: 'from-purple-400 to-purple-600' },
  { id: 'society', name: '사회', icon: Users, color: 'from-orange-400 to-orange-600' },
  { id: 'environment', name: '환경', icon: Leaf, color: 'from-emerald-400 to-emerald-600' }
];