import { Card } from "@/components/general/Card";
import { HeroSection } from "@/components/general/HeroSection";
import { NavigationButton } from "@/components/general/NavigationButton";
import { getSortedPostsData } from '@/lib/posts';
import { formatDate } from "@/utils/formatting";

type Post = {
  categories: string,
  content: string,
  date: string,
  excerpt: string,
  id: string,
  title: string,
  link?: string,
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Blog = ({ allPostsData }: { allPostsData: Post[] }) => {
  console.log(allPostsData)

  return (
    <>
      <h1 className="mb-12 reverse-spoon">Blog</h1>
      {allPostsData.map((p: Post, i: number) => (
        <div key={`posts-${p.id}`} className="mb-4 border-b border-ghost">
          <div className="md:grid md:grid-cols-4">
            <p className="italic mb-2 md:col-span-3">{formatDate(p.date)}</p>
          {p.link && <NavigationButton link={p.link}>See more</NavigationButton>}
          </div>
          <span className="text-xl font-display">{p.categories}</span>
            <p>{p.excerpt}</p>
        </div>
      )
      )}
    </>
  )
}

export default Blog;