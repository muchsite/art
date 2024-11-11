import React from "react";
import "./support.scss";
import SearchNav from "../../components/searchNav/SearchNav";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
const Support: React.FC = () => {
  const arr = [
    {
      img: s1,
      title: "Technical Support",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin orci quis tempus posuere. Curabitur facilisis elit molestie vehicula commodo",
    },
    {
      img: s2,
      title: "Account Support",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin orci quis tempus posuere. Curabitur facilisis elit molestie vehicula commodo",
    },
    {
      img: s3,
      title: "Apply for Creator Account",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin orci quis tempus posuere. Curabitur facilisis elit molestie vehicula commodo",
    },
    {
      img: s4,
      title: "Security Issue",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin orci quis tempus posuere. Curabitur facilisis elit molestie vehicula commodo",
    },
  ];
  return (
    <div className="support_container">
      <SearchNav />
      <div className="support_text_container">
        <div className="support_text_div">
          <h2>Rules for Content Creating</h2>
          <div className="support_text_p">
            <p>
              {`Welcome to [Art Website Name]! We're excited to have you as a part of our community of talented artists and creators. To ensure that our platform remains a positive and inspiring space for everyone, please adhere to the following guidelines when sharing your content:`}
            </p>
            <p>
              1. Originality and Authenticity: <br />
              {`Create Original Work: Only submit content that you have created yourself. Plagiarism or copying the work of others is strictly prohibited. No Copyrighted Material: Do not upload content that infringes on the intellectual property rights of others. This includes images, music, or text that you do not have permission to use.`}
            </p>
            <p>
              2. Quality Standards: <br />
              {`High-Resolution Images: Ensure that all artwork uploaded is of high quality. Blurry or pixelated images may be removed. Clear Descriptions: Provide accurate and thoughtful descriptions of your work. This helps viewers understand and appreciate your art.`}
            </p>
            <p>
              3. Respectful Content: <br />
              {`No Offensive Material: Avoid posting content that could be considered offensive, harmful, or inappropriate. This includes, but is not limited to, hate speech, violence, explicit content, and discriminatory language. Respect Cultural Sensitivities: Be mindful of cultural symbols, practices, and traditions. Avoid content that could be interpreted as culturally insensitive.`}
            </p>
            <p>
              4. Engagement and Interaction:
              <br />
              {` Constructive Feedback: When commenting on other creators’ work, provide constructive and respectful feedback. Personal attacks or negative criticism will not be tolerated. Positive Community Contribution: Engage with the community in a positive and supportive manner. Share your insights, ask questions, and celebrate the work of others.`}
            </p>
            <p>
              5. Promotion and Sales: <br />
              {`No Spam: Refrain from excessive self-promotion or posting irrelevant content. Keep the focus on sharing and discussing art. Selling Art: If you wish to sell your artwork through the platform, ensure that you follow all applicable laws and provide accurate pricing and transaction details.`}
            </p>
          </div>
        </div>
        <div className="support_text_div">
          <h2>Creator Application Requirements</h2>
          <div className="support_text_p">
            <p>
              To join [Art Website Name] as a creator, please ensure you meet
              the following criteria:
            </p>
            <ul>
              <li>
                Original Work: Submit only your original artwork. Plagiarism or
                using others' work is not allowed.
              </li>
              <li>
                Portfolio: Provide a portfolio showcasing at least 5 pieces of
                your best work.
              </li>
              <li>
                Quality: All submissions must be high-resolution and meet our
                quality standards.
              </li>
              <li>
                Description: Include clear and accurate descriptions of your
                work.
              </li>
              <li>
                Active Engagement: Be prepared to engage positively with our
                community, offering constructive feedback and participating in
                discussions.
              </li>
              <li>
                Respect: Adhere to our guidelines, respecting cultural
                sensitivities and avoiding offensive content.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="support_cards_container">
        <h2>How can we help you?</h2>
        <div className="support_cards">
          {arr.map((item, index) => {
            return (
              <div className="support_card" key={index}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <p>{item.des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Support;
