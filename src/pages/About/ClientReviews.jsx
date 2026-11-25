
import { useState } from "react";

const initialReviews = [
  {
    rating: 5,
    name: "BMX Adventure",
    role: "Customer",
    review:
      "Codes Thinker provided a great experience. The website looks clean and professional.",
  },
];

export default function ClientReviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [reviewError, setReviewError] = useState(false);

  function resetForm() {
    setRating(0);
    setReviewText("");
    setReviewerName("");
    setNameError(false);
    setRatingError(false);
    setReviewError(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedReview = reviewText.trim();
    const trimmedName = reviewerName.trim();
    setNameError(!trimmedName);
    setRatingError(rating === 0);
    setReviewError(!trimmedReview);

    if (rating === 0 || !trimmedReview || !trimmedName) {
      return;
    }

    setReviews((currentReviews) => [
      {
        rating,
        name: trimmedName,
        role: "Customer",
        review: trimmedReview,
      },
      ...currentReviews,
    ]);
    setShowModal(false);
    resetForm();
  }


  function handleCancel() {
    setShowModal(false);
    resetForm();
  }

  return (
    <>
      <section className="client-reviews-section [width:100%] [padding:65px_6%] [background:linear-gradient(120deg,_#060145,_#102b83)] [color:#fff] [font-family:'Poppins',_sans-serif] max-[450px]:[padding:45px_5%]">
        <div className="client-reviews-container [display:grid] [grid-template-columns:0.8fr_1.2fr] [align-items:center] [gap:45px] [max-width:1100px] [margin:0_auto] max-[750px]:[grid-template-columns:1fr] max-[750px]:[gap:28px]">
          <div className="client-reviews-heading [text-align:center] [&_h2]:[margin:0] [&_h2]:[color:#fff] [&_h2]:[font-size:30px] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.5] [&_h2_span]:[color:#ffdf35] max-[750px]:[&_h2]:[font-size:26px]">
            <h2>
              Our <span>Clients,</span>
              <br />
              In Their Own Words
            </h2>
          </div>

          <div className="client-reviews-content">
            {reviews.map((review, index) => (
              <div className="client-review-card [padding:24px] [border:1px_solid_rgba(255,_255,_255,_0.08)] [border-radius:12px] [background:linear-gradient(120deg,_#1556b9,_#102c85)] [box-shadow:0_8px_25px_rgba(0,_0,_0,_0.12)] max-[450px]:[padding:18px]" key={`${review.name}-${index}`}>
                <div className="client-review-rating [display:flex] [align-items:center] [gap:10px] [margin-bottom:14px] [&_strong]:[font-size:20px] [&_span]:[color:#ffdf35] [&_span]:[font-size:20px] [&_span]:[letter-spacing:1px] max-[450px]:[&_span]:[font-size:17px]">
                  <strong>{review.rating.toFixed(1)}</strong>
                  <span aria-label={`${review.rating} out of 5 stars`}>
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>
                </div>

                <div className="client-review-person [display:flex] [align-items:center] [gap:14px] [margin-bottom:18px] [&_h3]:[margin:0_0_4px] [&_h3]:[font-size:17px] [&_h3]:[font-weight:600] [&_p]:[margin:0] [&_p]:[color:#e0e7ff] [&_p]:[font-size:13px]">
                  <div className="client-review-avatar [display:flex] [align-items:center] [justify-content:center] [width:62px] [height:62px] [flex-shrink:0] [border-radius:50%] [background:#fff] [font-size:36px]">👤</div>

                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                  </div>
                </div>

                <p className="client-review-text [margin:0] [color:#f3f5ff] [font-size:13px] [line-height:1.8]">{review.review}</p>
              </div>
            ))}

            <div className="client-reviews-action [display:flex] [justify-content:center] [margin-top:24px]">
              <button
                type="button"
                className="client-review-button [display:inline-block] [padding:12px_26px] [border-radius:12px] [background:#ffdf35] [color:#222] [font-size:13px] [font-weight:500] [text-decoration:none] [transition:background_0.3s_ease,_transform_0.3s_ease] [&:hover]:[background:#ffe96b] [&:hover]:[transform:translateY(-2px)]"
                onClick={() => setShowModal(true)}
              >
                Add Your Reviews
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="review-modal-overlay [position:fixed] [inset:0] [z-index:9999] [display:flex] [align-items:center] [justify-content:center] [padding:20px] [background:rgba(0,_0,_0,_0.65)] [backdrop-filter:blur(4px)]"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              handleCancel();
            }
          }}
        >
          <div
            className="review-modal [width:100%] [max-width:570px] [max-height:90vh] [overflow-y:auto] [padding:28px_32px] [border-radius:18px] [background:#fff] [color:#333] [box-shadow:0_15px_50px_rgba(0,_0,_0,_0.3)] [font-family:'Poppins',_sans-serif] [&_h2]:[margin:0_0_22px] [&_h2]:[color:#252525] [&_h2]:[font-size:25px] [&_h2]:[font-weight:600] [&_h2]:[text-align:center] [&_input]:[display:block] [&_input]:[width:100%] [&_input]:[padding:12px] [&_input]:[border:1px_solid_#aaa] [&_input]:[border-radius:10px] [&_input]:[outline:none] [&_input]:[background:#fff] [&_input]:[color:#222] [&_input]:[font:inherit] [&_input]:[font-size:15px] [&_textarea]:[display:block] [&_textarea]:[width:100%] [&_textarea]:[padding:12px] [&_textarea]:[border:1px_solid_#aaa] [&_textarea]:[border-radius:10px] [&_textarea]:[outline:none] [&_textarea]:[background:#fff] [&_textarea]:[color:#222] [&_textarea]:[font:inherit] [&_textarea]:[font-size:15px] [&_input:focus]:[border-color:#1680d7] [&_input:focus]:[box-shadow:0_0_0_3px_rgba(22,_128,_215,_0.12)] [&_textarea:focus]:[border-color:#1680d7] [&_textarea:focus]:[box-shadow:0_0_0_3px_rgba(22,_128,_215,_0.12)] [&_textarea]:[resize:vertical] [&_textarea]:[min-height:120px] max-[500px]:[padding:24px_20px] max-[500px]:[&_h2]:[font-size:22px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
          >
            <h2 id="review-modal-title">Submit Your Review</h2>

            <form onSubmit={handleSubmit}>
              <label className="review-form-label [display:block] [margin:15px_0_8px] [color:#555] [font-size:15px] [font-weight:500]" htmlFor="reviewer-name">
                Your name
              </label>
              <input
                id="reviewer-name"
                value={reviewerName}
                onChange={(event) => {
                  setReviewerName(event.target.value);
                  if (event.target.value.trim()) {
                    setNameError(false);
                  }
                }}
                placeholder="Your name"
                required
              />
              {nameError && (
                <p className="review-validation [margin:8px_0_0] [color:#c62828] [font-size:13px]">
                  Please enter your name.
                </p>
              )}

              <label className="review-form-label [display:block] [margin:15px_0_8px] [color:#555] [font-size:15px] [font-weight:500]">Rating</label>

              <div className="review-star-picker [display:flex] [gap:7px] [&_button]:[padding:0] [&_button]:[border:none] [&_button]:[background:transparent] [&_button]:[color:#cbd0d8] [&_button]:[font-size:30px] [&_button]:[cursor:pointer] [&_button]:[transition:color_0.2s_ease,_transform_0.2s_ease] [&_button.selected]:[color:#ffc928] [&_button:hover]:[color:#ffc928] [&_button:hover]:[transform:scale(1.12)]" aria-label="Choose a rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={star <= rating ? "selected" : ""}
                    onClick={() => {
                      setRating(star);
                      setRatingError(false);
                    }}
                    aria-label={`${star} star${star > 1 ? "s" : ""}`}
                    aria-pressed={rating === star}
                  >
                    ★
                  </button>
                ))}
              </div>

              <p className="review-rating-count [margin:8px_0_18px] [color:#666] [font-size:14px]">Rating: {rating} / 5</p>

              
              <label className="review-form-label [display:block] [margin:15px_0_8px] [color:#555] [font-size:15px] [font-weight:500]" htmlFor="review-text">
                Review
              </label>

              <textarea
                id="review-text"
                value={reviewText}
                onChange={(event) => {
                  setReviewText(event.target.value);
                  if (event.target.value.trim()) {
                    setReviewError(false);
                  }
                }}
                placeholder="Write your review..."
                rows="4"
                required
              />
              {reviewError && (
                <p className="review-validation [margin:8px_0_0] [color:#c62828] [font-size:13px]">
                  Please enter your review.
                </p>
              )}

              {ratingError && (
                <p className="review-validation [margin:8px_0_0] [color:#c62828] [font-size:13px]">
                  Please select a star rating.
                </p>
              )}

              <div className="review-modal-actions [display:flex] [align-items:center] [justify-content:space-between] [gap:15px] [margin-top:25px]">
                <button
                  type="button"
                  className="review-cancel-button [padding:12px_22px] [border:none] [border-radius:10px] [color:#fff] [font:inherit] [font-size:15px] [cursor:pointer] [transition:background_0.2s_ease] [background:#9ca3af] [&:hover]:[background:#7b8492]"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="review-submit-button [padding:12px_22px] [border:none] [border-radius:10px] [color:#fff] [font:inherit] [font-size:15px] [cursor:pointer] [transition:background_0.2s_ease] [background:#1680d7] [&:hover]:[background:#0868b8]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
