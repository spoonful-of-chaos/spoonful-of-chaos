import { MainLayout } from '@/layouts/MainLayout';
import { RecentUpdates } from '@/components/general/RecentUpdates';
import { HeroSection } from '@/components/general/HeroSection';
import { About } from '@/components/general/About';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <div className="mt-6">   
        <About />
        <RecentUpdates />     
      </div>
    </MainLayout>
  )
}
