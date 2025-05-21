import { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Jyothi Vardhana Rao Metta - Portfolio',
  description: 'Full Stack Developer and Cloud Engineer specializing in modern web applications and cloud solutions.',
  keywords: ['Full Stack Developer', 'Cloud Engineer', 'DevOps', 'UI/UX Designer', 'Portfolio'],
};

export default function HomePage() {
  return <HomePageClient />;
}

