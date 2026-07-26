import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number; // e.g. 4.2
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = rating >= star;
        const isHalf = rating >= star - 0.5 && rating < star;

        return (
          <div key={star} className="relative">
            
            
            <Star className="w-4 h-4 text-gray-300" />

           
            {isFull && (
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500 absolute top-0 left-0" />
            )}

            
            {isHalf && (
              <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              </div>
            )}
          </div>
        );
      })}

      <span className="text-xs text-gray-500 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}