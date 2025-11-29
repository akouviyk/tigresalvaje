interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

/**
 * ResponsiveImage Component
 * Ensures all images are properly responsive and optimized for different screen sizes
 */
export default function ResponsiveImage({
  src,
  alt,
  className = '',
  aspectRatio = 'landscape',
}: ResponsiveImageProps) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  return (
    <div className={`relative overflow-hidden rounded-lg ${aspectRatioClasses[aspectRatio]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
