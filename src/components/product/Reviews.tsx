import StarRating from "@/components/common/StarRating";

const reviews = [
  {
    name: "Rahul",
    rating: 5,
    comment: "Amazing product! Totally worth the price.",
  },
  {
    name: "Priya",
    rating: 4.2,
    comment: "Good quality, but delivery was slightly delayed.",
  },
];

export default function Reviews() {
  return (
    <div className="mt-12">
      
      <h2 className="text-xl font-semibold mb-6">
        Customer Reviews
      </h2>

      <div className="space-y-4">
        
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-sm transition"
          >
            
            
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-gray-800">
                {review.name}
              </p>

              <StarRating rating={review.rating} />
            </div>

            
            <p className="text-gray-600 text-sm leading-relaxed">
              {review.comment}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}