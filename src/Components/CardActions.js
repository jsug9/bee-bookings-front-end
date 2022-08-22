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

const CardActionsContainer = (props) => {
  const { bee } = props;

  return (
    <CardActions className="social-icons-container">
      <FacebookShareButton
        url={`https://62fffb905257070009431802--beebookcapstone.netlify.app/${bee.id}/`}
        hashtag="#beeTeam"
      >
        <FacebookRoundedIcon size="large" color="inherit" />
      </FacebookShareButton>
      <TwitterShareButton
        url={`https://62fffb905257070009431802--beebookcapstone.netlify.app/${bee.id}/`}
        title={`Hey! Checkout this awesome bee 🐝. I'll be booking ${bee.name} soon!`}
      >
        <TwitterIcon size="large" color="inherit" />
      </TwitterShareButton>
      <WhatsappShareButton
        url={`https://62fffb905257070009431802--beebookcapstone.netlify.app/${bee.id}/`}
        title={`Hey! Checkout this awesome bee 🐝. I'll be booking ${bee.name} soon!`}
        separator=" "
      >
        <WhatsAppIcon size="large" color="inherit" />
      </WhatsappShareButton>
    </CardActions>
  );
};

CardActionsContainer.propTypes = {
  bee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardActionsContainer;
