import React from "react";
import "./index.css";

export default function About() {
  return (
    <div className='main-bg-container-about'>
  
  <div className='main-containerabout-grids'>

    <div className='mission-content'>
      <h4 className='about-heading-section'>Mission Statement</h4>
      <p className='about-para-section'>Our mission is to deliver high-quality products to customers through a seamless and trustworthy online shopping experience. We aim to combine affordability with reliability, ensuring every customer finds value in what they purchase. By leveraging technology, we simplify the buying process and make products accessible to everyone. We are committed to customer satisfaction, fast delivery, and responsive support. Our goal is to build lasting relationships with our customers by consistently exceeding expectations and maintaining transparency in all our operations.</p>
    </div>

    <div>
      <h4 className='about-heading-section'>Vision Statement</h4>
      <p className='about-para-section'>Our vision is to become a leading global e-commerce platform known for innovation, customer-centric services, and product diversity. We aspire to redefine online shopping by integrating advanced technology and personalized experiences. By expanding our reach, we aim to serve customers across different regions with efficiency and care. We envision a future where shopping is effortless, secure, and enjoyable for everyone. Through continuous growth and adaptation, we strive to set new standards in the e-commerce industry.</p>
    </div>

    <div>
      <h2 className='about-heading-section'>Target Market</h2>
      <p className='about-para-section'>Our target market includes tech-savvy individuals who prefer convenient online shopping solutions. We focus on young adults, working professionals, and families looking for quality products at competitive prices. Our platform caters to both urban and semi-urban customers who value fast delivery and easy returns. We also aim to reach small business owners seeking reliable suppliers. By understanding customer needs and preferences, we tailor our offerings to suit diverse demographics and lifestyles.</p>
    </div>

    <div>
      <h2 className='about-heading-section'>Core Values</h2>
      <p className='about-para-section'>We believe in integrity, ensuring honesty and transparency in every transaction. Customer satisfaction is at the heart of everything we do, guiding our decisions and services. We value innovation, constantly improving our platform to enhance user experience. Reliability and accountability define our operations, ensuring timely delivery and consistent quality. We also promote inclusivity and respect, creating a positive environment for customers, employees, and partners alike.</p>
    </div>

    <div style={{ gridColumn: "span 2", backgroundColor: "#FFA92E" }}>
      <h2 className='about-heading-section'>Brief Company History</h2>
      <p className='about-para-section'>Our company was founded with the vision of simplifying online shopping for everyday consumers. Starting as a small startup, we initially offered a limited range of products but quickly expanded due to growing demand. With dedication and innovation, we improved our platform and services over time. Our journey has been driven by customer feedback and a commitment to excellence. Today, we continue to grow, striving to become a trusted name in the e-commerce industry.</p>
    </div>

  </div>
</div>
  );
}