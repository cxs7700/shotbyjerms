'use client';

import Image from 'next/image';
import Link from 'next/link';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  slug: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Project 1',
    imageUrl: '/placeholder.jpeg', // You'll need to add this image to your public folder
    category: 'Portrait',
    slug: 'project-1',
  },
  {
    id: '2',
    title: 'Project 2',
    imageUrl: '/placeholder.jpeg',
    category: 'Creative',
    slug: 'project-2',
  },
  {
    id: '3',
    title: 'Project 3',
    imageUrl: '/placeholder.jpeg',
    category: 'Portrait',
    slug: 'project-3',
  },
  {
    id: '4',
    title: 'Project 4',
    imageUrl: '/placeholder.jpeg',
    category: 'Creative',
    slug: 'project-4',
  },
  {
    id: '5',
    title: 'Project 5',
    imageUrl: '/placeholder.jpeg',
    category: 'Portrait',
    slug: 'project-5',
  },
  {
    id: '6',
    title: 'Project 6',
    imageUrl: '/placeholder.jpeg',
    category: 'Creative',
    slug: 'project-6',
  },
];

const Gallery = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[90%] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {galleryItems.map((item) => (
            <Link href={`/projects/${item.slug}`} key={item.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-medium">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
