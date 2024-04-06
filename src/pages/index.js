import Hero from '@/components/hero';
import Card from '@/components/card';
import TaskForm from '@/components/taskForm';
import { useRef } from 'react';
import TaskList from '@/components/taskList';
import Chat from '@/components/chat';

export default function Home() {
  const nextSectionRef = useRef(null);

  return (
    <main className="font-inter text-gray-700">
      <Hero nextSectionRef={nextSectionRef} />
      <div ref={nextSectionRef} className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <Chat />
          </Card>
          <Card>
            <TaskList />
          </Card>
        </div>
      </div>
    </main>
  );
}
