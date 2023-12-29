/* eslint-disable no-undef */
import React from 'react';


const FeatureCard = ({ iconSrc, altText, title, description, link }) => {
    return (
        <>


            <div className='card-container-fluid'>
                <div className='col-6 col-md-3' style={{ marginBottom: '40px' }}>
                    <div className="ctm_ftrset ctm_main_ftrset">
                        <img loading="lazy" className="ctm_blue_image" src={iconSrc} alt={altText} width={70} height={70} />
                        <img loading="lazy" className="ctm_white_image" src={iconSrc.replace('.png', '_white.png')} alt={altText} width={70} height={70} />
                        <p />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>
                            <a className="ctm_bluebtn" href={link}>
                                Know More
                            </a>
                        </p>
                    </div>
                </div>
            </div>





        </>
    );
};

export default FeatureCard;
