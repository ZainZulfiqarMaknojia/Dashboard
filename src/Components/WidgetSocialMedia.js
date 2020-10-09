import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function WidgetSocialMedia(props) {
    return (
           <div class="social-container">
               {props?.title === "youtube" &&
                    <a href="https://www.youtube.com">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                }
                {props?.title === "facebook" &&
                    <a href="https://www.facebook.com">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                }
                {props?.title === "twitter" &&
                    <a href="https://www.twitter.com">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                }
                {props?.title === "instagram" &&
                    <a href="https://www.instagram.com">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                }
            </div>
    )
}
