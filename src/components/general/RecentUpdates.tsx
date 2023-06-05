import { Card } from '@/components/general/Card';
import { TabHeader } from '@/components/general/TabHeader';

export const RecentUpdates = () => {
  return (
    <div className="mt-6">
      <TabHeader variant="ghost"><span className="text-black">Recent Updates</span></TabHeader>
        <div className="md:flex md:gap-6">
          <Card variant="black">
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
              <li>Added encounter generator: the goal of this is to provide balanced encounters within the world of <span className="italics">The Last of Us</span>. I&apos;ll probably update this in the future to include more general monsters.</li>
            </ul>
          </Card>
          <Card>
            <p className="italic mb-2">Sun, June 4, 2023</p>
            <span className="text-xl font-display">Last of Us</span>
            <ul>
              <li>Added Smuggler class</li>
              <li>Added Survivor class</li>
              <li>Added Prepper class</li>
              <li>Added Soldier class</li>
              <li>Added Bandit class</li>
            </ul>
          </Card>
        </div>
    </div>
  )
}