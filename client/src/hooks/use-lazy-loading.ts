
import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useLazyLoading(options: UseLazyLoadingOptions = {}) {
  const { threshold = 0.1, rootMargin = '50px' } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return {
    elementRef,
    isLoaded,
    isInView,
    handleLoad
  };
}

// Component de imagem com lazy loading
export function LazyImage({ 
  src, 
  alt, 
  className = '',
  placeholder = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23374151"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%236B7280">Loading...</text></svg>'
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}) {
  const { elementRef, isLoaded, isInView, handleLoad } = useLazyLoading();

  return (
    <div ref={elementRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Skeleton */}
      <div className={`absolute inset-0 bg-gray-700 animate-pulse transition-opacity duration-300 ${
        isLoaded ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-full h-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer"></div>
      </div>
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
