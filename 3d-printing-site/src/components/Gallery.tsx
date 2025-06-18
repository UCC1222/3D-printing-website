import ImageCarousel from './ImageCarousel';

// 示例数据：每个作品一组图片
const galleryData = [
  {
    title: 'Client Showcase',
    description: 'A carousel of amazing 3D prints from our clients. You can upload your print images to this gallery folder anytime.',
    images: [
      '/images/carousel1-1.jpg',
      '/images/carousel1-2.jpg',
      '/images/carousel1-3.jpg',
    ],
  },
  {
    title: 'Featured Print',
    description: 'Another great example of our 3D printing capabilities.',
    images: [
      '/images/carousel2-1.jpg',
      '/images/carousel2-2.jpg',
      '/images/carousel2-3.jpg',
    ],
  },
];

export default function Gallery() {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {galleryData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <ImageCarousel images={item.images} />
            <div className="mt-4 text-white text-left w-full">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 