import { Card } from '@/components/general/Card';
import { TabHeader } from '@/components/general/TabHeader';
import { NavigationButton } from './NavigationButton';
import { formatDate } from '@/utils/formatting';

type Post = {
  categories: string,
  content: string,
  date: string,
  excerpt: string,
  id: string,
  title: string,
  link?: string,
}

export const RecentUpdates = ({ posts }: { posts: Post[] }) => {

  return (
    <div className="mt-6">
      <TabHeader variant="ghost"><span className="text-black">Recent Updates</span></TabHeader>
        <div className="md:flex md:gap-6">
          {posts.map((p: Post, i: number) => i < 3 && (
              <Card>
                <p className="italic mb-2">{formatDate(p.date)}</p>
                <span className="text-xl font-display">{p.categories}</span>
                <p>{p.excerpt}</p>
                {p.link && <NavigationButton link={p.link}>See more</NavigationButton>}
              </Card>
            )
          )}
        </div>
    </div>
  )
}