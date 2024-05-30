import React from 'react'
import './Services.css'

export default function Services() {
    return (
        <section className='services' id='services'>
            <h2>Our Services</h2>
            <div className="servicesContent">
                <div className="serviceItem branding">
                    <h3>Branding</h3>
                    <p>The brand is hope,It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your brand and visual identity represents an intrinsic value to your company.</p>
                    <h3>In focal X agency, we provide:</h3>
                    <ul>
                        <li>Visual identity design.</li>
                        <li>Define Brand Identity.</li>
                        <li>Define Brand personality.</li>
                        <li>Building Your brand strategy.</li>
                        <li>Market research and competitors study.</li>
                    </ul>
                    <h3>We walk with you from A to Z.</h3>
                    <img src="./../../../public/image/brandingOrange.png" alt="X branding logo" />
                </div>
                <div className="serviceItem marketing">
                    <h3>Marketing</h3>
                    <p>Talk to your customers and tell them about you and your company's story through us the way you want. Let us plan the content that will bring your audience closer to you.</p>
                    <h3>In our marketing agency, we provide:</h3>
                    <ul>
                        <li>E-mail marketing.</li>
                        <li>Affiliate marketing.</li>
                        <li>Influencer marketing.</li>
                        <li>Copy & content writing</li>
                        <li>Market research and Analysis.</li>
                        <li>App store optimization ( ASO ).</li>
                        <li>Search engine Marketing ( SEM ).</li>
                        <li>Search engine optimization ( SEO ).</li>
                        <li>Social media marketing & campaigns.</li>
                    </ul>
                    <img src="./../../../public/image/marketing.png" alt="X marketing logo" />
                </div>
            </div>
        </section>
    )
}
