import { Nav } from '@/layouts/Nav';
import { Footer } from '@/layouts/Footer';

export const MainLayout = ({ children }: any) => {
  return (
    <div>
      <div className="flex px-24 py-6 min-h-screen flex-col items-center justify-between">
        <Nav />
        <main className="w-full mt-10 mb-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}