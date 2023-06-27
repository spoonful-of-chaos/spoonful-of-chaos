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
  return (
    <>
      <h1 className="mb-12 reverse-moon">Blog</h1>
      {allPostsData.map((p: Post, i: number) => (
        <div key={`posts-${p.id}`} className="mb-6">
          <div className="md:grid md:grid-cols-4">
            <div className="md:col-span-3">
              <p className="italic  text-moonstone">{formatDate(p.date)} | {p.categories}</p>
              <h3 className="text-moonstone mb-2">{p.title}</h3>
              <p>{p.excerpt}</p>
            </div>
            {p.link && <NavigationButton link={`/blog/posts/${p.id}`}>Read more</NavigationButton>}
          </div>
        </div>
      )
      )}
    </>
  )
}

export default Blog;