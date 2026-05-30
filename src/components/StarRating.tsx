interface StarRatingProps {
  rating: string;
  reviews: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, reviews, size = "md" }: StarRatingProps) {
  const numRating = parseFloat(rating);
  const isRated = !isNaN(numRating) && numRating > 0;

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const starSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className={`flex items-center gap-1 ${sizeClasses[size]}`}>
      {isRated ? (
        <>
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`${starSize[size]} ${
                star <= Math.round(numRating)
                  ? "text-amber-400"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="font-semibold text-amber-500">{rating}</span>
          <span className="text-gray-500 dark:text-gray-400">({reviews})</span>
        </>
      ) : (
        <span className="text-gray-400 dark:text-gray-500 text-xs">Not rated</span>
      )}
    </div>
  );
}
