interface ResponsiveVideoProps {
  src: string;
  title: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

/**
 * ResponsiveVideo Component
 * Ensures all embedded videos (YouTube, etc.) are properly responsive
 */
export default function ResponsiveVideo({
  src,
  title,
  className = '',
  aspectRatio = 'video',
}: ResponsiveVideoProps) {
  const aspectRatioClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[9/16]',
  };

  return (
    <div className={`relative overflow-hidden rounded-lg ${aspectRatioClasses[aspectRatio]} ${className}`}>
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
