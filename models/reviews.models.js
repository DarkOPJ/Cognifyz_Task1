const reviews = [
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9a",
    name: " Sophia Bennett",
    rating: "4",
    description:
      "The discounts are great, but I think there could be more clarity about the expiration dates on some deals. I missed out on one because I didn’t realize it was ending soon. Otherwise, this is a fantastic initiative!",
  },
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9b",
    name: "John Michaels",
    rating: "5",
    description:
      "Absolutely love this platform! I was able to snag a deal on a premium blender that I had been eyeing for months. The customer service team was also very helpful when I had a question about the delivery timeline. Keep up the great work!",
  },
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9c",
    name: "Daniel Roberts",
    rating: "2",
    description:
      "I was a bit disappointed. I found a deal on a gaming headset, but when I tried to check out, the item was out of stock. It would be great if stock levels were updated in real-time.",
  },
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9d",
    name: "Michael Andrews",
    rating: "3",
    description:
      "I found the platform useful, but the checkout process was a bit confusing. I had to reload the page a couple of times before it worked. The deal I got on the product was good, but the user experience could be better.",
  },
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9e",
    name: "Emily Watson",
    rating: "5",
    description: "This site is a lifesaver! As a student on a tight budget, finding reduced prices on everyday essentials has been a blessing."
      // "This site is a lifesaver! As a student on a tight budget, finding reduced prices on everyday essentials has been a blessing. The navigation is smooth, and the variety of products is impressive. Highly recommended!",
  },
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9f",
    name: "Grace Patterson",
    rating: "4",
    description:
      "I’m impressed by the concept of this site. I managed to get a fantastic deal on some skincare products I couldn’t afford at their original price. The platform is user-friendly, and the email updates are very informative.",
  },
];

const getReviewsList = () => reviews.slice(-6).reverse();

module.exports = {
  reviews,
  getReviewsList,
};
