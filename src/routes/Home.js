export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Customer Feedback Portal!!!</h1>
      <p>
        This platform serves as a testing ground for the APIs we have developed, aimed at
        simplifying the analysis of customer feedback.
      </p>
      <h2>Features</h2>
      <ol>
        <li>
          Our API leverages the DaVinci model, developed by openAI, to address customer issues
          encountered while analyzing feedback for a specific product. This model, known for its
          lightweight design, plays a crucial role in generating a concise summary that encompasses
          both positive and negative responses. By condensing the feedback into a summary, we can
          easily grasp the overall sentiment and identify key points without having to go through
          lengthy reviews.
        </li>
        <li>
          Additionally, our API goes beyond generating a summary by providing appropriate replies to
          customers based on their feedback. This feature ensures that customers receive timely and
          personalized responses, fostering a sense of engagement and satisfaction.
        </li>
        <li>
          Moreover, by considering all the received reviews, our API compiles a comprehensive set of
          positive and negative responses, including the average product rating. This compilation
          helps customers in making informed decisions as they can quickly assess the overall
          sentiment and gauge the general satisfaction level of other users. It also saves time by
          providing a consolidated view of feedback, eliminating the need to individually analyze
          numerous reviews.
        </li>
        <li>
          In summary, these features collectively enhance the customer experience by simplifying the
          analysis of feedback, empowering customers with a clear overview, and facilitating prompt
          and tailored responses. Ultimately, this automated approach helps in effectively resolving
          customer issues and improving overall satisfaction.
        </li>
      </ol>
      <h2>Playground Components</h2>
      <ol>
        <li>
          <strong>Overall Insight:</strong> Creates a comprehensive perspective by consolidating the
          entirety of the customer review database
        </li>
        <li>
          <strong>Reviews:</strong> Compilation of reviews, encompassing their respective positive
          and negative feedback, accompanied by appropriate customer replies.
        </li>
        <li>
          <strong>Add Review:</strong> A module designed for incorporating fresh reviews
        </li>
      </ol>
    </div>
  );
}
