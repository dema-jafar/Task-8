import React from 'react'
import './Pricing.css'

export default function Pricing() {
    const servicePrice = [
        {
            title: "Basic",
            description: "for very small businesses and freelancers.",
            price: "$2.5/mo",
            space: "500 M.B",
            bandwidth: "500 G.B",
            subdomain: "Unlimited",
            domain: "Unlimited",
            email: "Unlimited",
            cPanel: "Yes",
            monyBack: "14 Days",
            gift: "You will have 1 Gift"
        },
        {
            title: "Pro",
            description: "for Individuals that need sharing vlogs or need huge portfolio.",
            price: "$5/mo",
            space: "3000 M.B",
            bandwidth: "3 TERA",
            subdomain: "Unlimited",
            domain: "Unlimited",
            email: "Unlimited",
            cPanel: "Yes",
            monyBack: "14 Days",
            gift: "1 Gift per/mo for year"
        },{
            title: "Business",
            description: "for Team that need sharing and reporting.",
            price: "$8/mo",
            space: "5000 M.B",
            bandwidth: "5 TERA",
            subdomain: "Unlimited",
            domain: "Unlimited",
            email: "Unlimited",
            cPanel: "Yes",
            monyBack: "14 Days",
            gift: "3 Gift per/mo for year"
        },
        {
            title: "Enterprise",
            description: "for large companies that need admins & security",
            price: "$12/mo",
            space: "10000 M.B",
            bandwidth: "10 TERA",
            subdomain: "Unlimited",
            domain: "Unlimited",
            email: "Unlimited",
            cPanel: "Yes",
            monyBack: "14 Days",
            gift: "Just Call Us"
        }
    ]
    return (
        <section className='pricing'>
            <h2>Hosting Pricing</h2>
            <div className="pricingContent">
                {
                    servicePrice.map((service,index) => {
                        return (
                            <div key={index} className={"pricingItem" + " item"+index}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <span>{service.price}</span>
                                <ul>
                                    <li>Disk Space: {service.space}</li>
                                    <li>Bandwidth: {service.bandwidth}</li>
                                    <li>SubDomains: {service.subdomain}</li>
                                    <li>Parked Domains: {service.domain}</li>
                                    <li>E-mail Accounts: {service.email}</li>
                                    <li>Cpanel(control panel): {service.cPanel}</li>
                                    <li>Money Back Guarantee: {service.monyBack}</li>
                                </ul>
                                <p className='gift'>{service.gift}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="support">
                <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
                <p>Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
            </div>
        </section>
    )
}
