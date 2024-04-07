import Hero from '@/components/hero';
import Card from '@/components/card';
import TaskForm from '@/components/taskForm';
import { useRef } from 'react';
import TaskList from '@/components/taskList';
import Chat from '@/components/chat';

export default function Home() {
  const nextSectionRef = useRef(null);

  return (
    <main className="text-gray-700">
      <Hero nextSectionRef={nextSectionRef} />
      <div
        style={{ height: '100%' }}
        ref={nextSectionRef}
        className="min-h-screen flex flex-col items-center justify-center px-0 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl min-h-screen w-full h-full py-8">
          <Card className="h-full w-full">
            <Chat />
          </Card>
          <Card className="h-full w-full">
            <TaskList />
          </Card>
        </div>
      </div>
    </main>
  );
}
