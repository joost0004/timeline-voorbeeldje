import React from 'react';
import './Card.scss';

/**
 * @typedef {Object} JobExperience
 * @property {string} title
 * @property {string} company
 * @property {string} location
 * @property {string} description
 * @property {string[]} highlights
 */

const Card = ({ job }) => {
    if (!job) return null;

    const { title, company, location, description, highlights } = job;

    return (
        <div className="card">
            <div className="card__header">
                <h2 className="card__header-title">{title}</h2>
                <div className="card__header-subtitle">
                    <p>{company}</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card__body">
                <p className="card__description">{description}</p>
                {highlights && highlights.length > 0 && (
                    <ul className="card__highlights">
                        {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Card;
