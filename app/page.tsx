import Navbar from './components/Navbar';
import NotificationDemo from './components/NotificationDemo';

export default function Home() {
  return (
    <div className="min-h-screen bg-airbnb-gray-50">
      <Navbar />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <NotificationDemo />
      </main>
    </div>
  );
}
