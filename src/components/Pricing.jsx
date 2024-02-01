import React from "react";
import '../design/Section.css';

export default function Pricing() {

    return (
        <section id="pricing" className="pricings">
            <h2>Tarifs</h2>
            <div className="pricing-container">
                <div className="pricing">
                    <h3 className="time">2 ans</h3>
                    <p className="price">150€</p>
                </div>
                <div className="pricing">
                    <h3 className="time">1 an</h3>
                    <p className="price">90€</p>
                </div>
                <div className="pricing">
                    <h3 className="time">6 mois</h3>
                    <p className="price">50€</p>
                </div>
                <div className="pricing">
                    <h3 className="time">3 mois</h3>
                    <p className="price">40€</p>
                </div>
                <div className="pricing">
                    <h3 className="time">1 mois</h3>
                    <p className="price">10€</p>
                </div>
            </div>
        </section>
    )
}