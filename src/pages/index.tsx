import { RecentUpdates } from '@/components/general/RecentUpdates';
import { HeroSection } from '@/components/general/HeroSection';
import { About } from '@/components/general/About';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mt-12">
        <RecentUpdates />
      </div>
      <div className="mt-12">
        <About /> 
      </div>
    </>
  )
}
