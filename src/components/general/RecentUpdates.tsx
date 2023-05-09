import { Card } from '@/components/general/Card';
import { TabHeader } from '@/components/general/TabHeader';

export const RecentUpdates = () => {
  return (
    <div className="mt-6">
      <TabHeader variant="secondary">Recent Updates</TabHeader>
        <div className="md:flex md:gap-6">
          <Card>
            <span className="text-xl font-display">Last of Us</span>
            <p className="italic mb-2">Tue, May 9, 2023</p>
            <ul>
              <li>Added classes sections</li>
            </ul>
          </Card>
        </div>
    </div>
  )
}