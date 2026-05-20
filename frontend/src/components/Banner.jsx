import React from 'react';
import { bannerStyles } from '../assests/dummyStyles';
import { Calendar, Clock, Phone, Ribbon, ShieldUser, Star, Stethoscope, UsersIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import banner from '../assests/BannerImg.png';

const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className={bannerStyles.bannerContainer}>
        <div className={bannerStyles.mainContainer}>
            <div className={bannerStyles.borderOutline}>
                <div className={bannerStyles.outerAnimatedBand}></div>
                <div className={bannerStyles.innerWhiteBorder}></div>
            </div>

            <div className={bannerStyles.contentContainer}>
                <div className={bannerStyles.flexContainer}>
                    <div className={bannerStyles.leftContent}>
                        <div className={bannerStyles.headerBadgeContainer}>
                            <div className={bannerStyles.stethoscopeContainer}>
                                <div className={bannerStyles.stethoscopeInner}>
                                   <Stethoscope className={bannerStyles.stethoscopeIcon} />
                                </div>
                            </div>

                            <div className={bannerStyles.titleContainer}>
                              <h1 className={bannerStyles.title}>
                                Cure
                                <span className={bannerStyles.titleGradient}>Fast+</span>
                              </h1>

                              <div className={bannerStyles.starsContainer}>
                                <div className={bannerStyles.starsInner}>
                                    {[1,2,3,4,5].map((star) => (
                                        <Star className={bannerStyles.starIcon} key={star} />
                                    ))}
                                </div>
                              </div>
                            </div>
                        </div>

                        <p className={bannerStyles.tagline}>
                            Premium Healthcare
                            <span className={bannerStyles.taglineHighlight}>
                                At Your Fingertips
                            </span>
                        </p>

                        <div className={bannerStyles.featuresGrid}>
                            <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderGreen}`}>
                                <Ribbon className={bannerStyles.featureIcon} />
                                <span className={bannerStyles.featureText}>
                                    Certified Specialists
                                </span>
                            </div>

                            <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderBlue}`}>
                                <Clock className={bannerStyles.featureIcon} />
                                <span className={bannerStyles.featureText}>
                                    24/7 Availability
                                </span>
                            </div>

                            <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderEmerald}`}>
                                <ShieldUser className={bannerStyles.featureIcon} />
                                <span className={bannerStyles.featureText}>
                                    Safe &amp; Secure
                                </span>
                            </div>

                            <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderPurple}`}>
                                <UsersIcon className={bannerStyles.featureIcon} />
                                <span className={bannerStyles.featureText}>
                                    500+ Doctors
                                </span>
                            </div>
                        </div>

                        <div className={bannerStyles.ctaButtonsContainer}>
                            <button onClick={() => navigate("/doctors")} className={bannerStyles.bookButton}>
                                <div className={bannerStyles.bookButtonOverlay}></div>
                                <div className={bannerStyles.bookButtonContent}>
                                    <Calendar className={bannerStyles.bookButtonIcon} />
                                    <span>Book Appointments Now</span>
                                </div>
                            </button>

                            <button onClick={() => (window.location.href = "tel:8299431275")} className={bannerStyles.emergencyButton}>
                                <div className={bannerStyles.emergencyButtonContent}>
                                    <Phone className={bannerStyles.emergencyButtonIcon} />
                                    <span>Emergency Call</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className={bannerStyles.rightImageSection}>
                        <div className={bannerStyles.imageContainer}>
                            <div className={bannerStyles.imageFrame}>
                                <img src={banner} alt='banner' className={banner.image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
