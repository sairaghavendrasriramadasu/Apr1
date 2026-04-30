import React from 'react'
import phonecall from '../../assets/phone0.png'
import customercare from '../../assets/customercare.jpg'
import './index.css'

export default function Contact() {
  return (
    <div>
      <div className='main-bg-container-contact'>
        <div className='contact-card-container'>
            <div className='contact-card'>
                <div>
                    <img src={phonecall} className='contact-image-1' alt='contact-phone'/>
                </div>
                <div>
                    <p>For direct assistance, you can reach us through our dedicated phone support line. Our team is available to handle inquiries related to orders, payments, and general information about our products. Call us at +91 98765 43210 between 9:00 AM and 7:00 PM, Monday to Saturday. We aim to provide quick and helpful responses to ensure a smooth shopping experience. Please keep your order details ready for faster assistance when contacting our support team.</p>
                </div>
            </div>
             <div className='contact-card'>
                <div>
                    <img src={customercare} className='contact-image-1' alt='contact-phone'/>
                </div>
                <div>
                    <p>Our customer care team is committed to providing you with the best service and support at every step of your shopping journey. For any issues, feedback, or complaints, you can email us at care@yourstore.com
. We also offer live chat support on our website for instant help. Our team works around the clock to resolve queries efficiently and ensure customer satisfaction. Your trust is important to us, and we continuously strive to improve our services based on your feedback.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}