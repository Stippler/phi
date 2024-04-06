import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="font-inter text-gray-700">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">A Scrolling Page with Lots of Text</h1>
        
        {/* Example of a section with text */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Section Title</h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
            Donec in efficitur ipsum, et porta sapien. Duis accumsan dolor sed neque consectetur lobortis. 
            Nulla vitae elit libero, a pharetra augue. Vestibulum in felis nec nisl fermentum venenatis eu eget metus. 
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo sapien, vehicula at venenatis eu, dapibus a neque. 
            Nullam quis risus eget urna mollis ornare vel eu leo.
          </p>
          {/* Repeat this block as needed to create more text content */}
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
