import React from 'react';
import PropTypes from 'prop-types';
import { CardActions } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';

const NavSocialButtons = () => {
  const url = 'https://beebookcapstone.netlify.app';

  return (
    <CardActions className="social-icons-container">
      <FacebookShareButton
        url={url}
        hashtag="#beeTeam"
      >
        <FacebookRoundedIcon size="large" color="inherit" />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title="Book your favorite bee using this awesome new Bee Store!"
      >
        <TwitterIcon size="large" color="inherit" />
      </TwitterShareButton>
      <WhatsappShareButton
        url={url}
        title="Book your favorite bee using this awesome new Bee Store!"
        separator=" "
      >
        <WhatsAppIcon size="large" color="inherit" />
      </WhatsappShareButton>
    </CardActions>
  );
};

NavSocialButtons.propTypes = {
  bee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavSocialButtons;
