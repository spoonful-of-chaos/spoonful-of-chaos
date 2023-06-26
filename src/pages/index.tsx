import { RecentUpdates } from '@/components/general/RecentUpdates';
import { HeroSection } from '@/components/general/HeroSection';
import { About } from '@/components/general/About';
import { getSortedPostsData } from '@/lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <>
      <HeroSection />
      <div className="mt-12">
        <RecentUpdates posts={allPostsData} />
      </div>
      <div className="mt-12">
        <About /> 
      </div>
    </>
  )
}
