import Hero from '@/components/hero';
import Card from '@/components/card';
import TaskForm from '@/components/taskForm';
import { useRef } from 'react';
import TaskList from '@/components/taskList';

export default function Home() {

  const nextSectionRef = useRef(null);

  return (
    <main className="font-inter text-gray-700">
      <Hero nextSectionRef={nextSectionRef} />
      <div ref={nextSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <TaskList />
          <TaskForm />
        </Card>
      </div>
    </main>
  );
}
