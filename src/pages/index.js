import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/hero';
import FileButton from '@/components/fileButton';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="font-inter text-gray-700">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">A Scrolling Page with Lots of Text</h1>

        {/* Example of a section with text */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Upload File</h2>
          <p className="mb-3">
            Here you can upload files.
          </p>
          <FileButton text="Upload File" />
        </section>

        {/* ... More content sections ... */}

        {/* Example Image 
        <div className="my-8">
          <Image src="/path-to-your-image.jpg" alt="Descriptive Alt Text" width={600} height={400} />
        </div>

        /* ... More content sections ... */}
      </div>
    </main>
  );
}
