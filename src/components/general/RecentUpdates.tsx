import { Card } from '@/components/general/Card';
import { TabHeader } from '@/components/general/TabHeader';

export const RecentUpdates = () => {
  return (
    <div className="mt-6">
      <TabHeader variant="secondary">Recent Updates</TabHeader>
        <div className="md:flex md:gap-6">
          <Card>
            <p className="italic mb-2">Tue, May 9, 2023</p>
            <span className="text-xl font-display">Last of Us</span>
            <ul>
              <li>Added classes sections</li>
            </ul>
          </Card>
          <Card>
            <p className="italic mb-2">Thu, May 25, 2023</p>
            <span className="text-xl font-display">Last of Us</span>
            <ul>
              <li>Additional class information</li>
            </ul>
          </Card>
          <Card>
            <p className="italic mb-2">Sun, June 4, 2023</p>
            <span className="text-xl font-display">Last of Us</span>
            <ul>
              <li>Finalized Smuggler class through level 5</li>
            </ul>
          </Card>
        </div>
    </div>
  )
}