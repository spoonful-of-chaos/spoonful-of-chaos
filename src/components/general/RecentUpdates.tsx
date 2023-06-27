import { Card } from '@/components/general/Card';
import { TabHeader } from '@/components/general/TabHeader';
import { NavigationButton } from './NavigationButton';
import { formatDate } from '@/utils/formatting';
import { Post } from '@/lib/types';

export const RecentUpdates = ({ posts }: { posts: Post[] }) => {

  return (
    <div className="mt-6">
      <TabHeader variant="ghost"><span className="text-black">Recent Updates</span></TabHeader>
        <div className="md:flex md:gap-6">
          {posts.map((p: Post, i: number) => i < 3 && (
              <Card key={`recent-${p.id}`}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="italic">{formatDate(p.date)} | {p.categories}</p>
                    <p className="text-xl font-display">{p.title}</p>
                    <p className="text-sm">{p.excerpt}</p>
                  </div>
                {p.link && <NavigationButton link={p.link}>See more</NavigationButton>}
                </div>
              </Card>
            )
          )}
        </div>
    </div>
  )
}