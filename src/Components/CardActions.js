import PropTypes from 'prop-types';
import { Button, CardActions } from '@mui/material';
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
        url={`${process.env.PUBLIC_URL.toString()}/${bee.id}/`}
        hashtag="#beeTeam"
      >
        <Button size="large" color="inherit">
          <FacebookRoundedIcon />
        </Button>
      </FacebookShareButton>
      <TwitterShareButton
        url={`${process.env.PUBLIC_URL.toString()}/${bee.id}/`}
        title={`Hey! Checkout this awesome bee 🐝. I'll be booking ${bee.name} soon!`}
      >
        <Button size="large" color="inherit">
          <TwitterIcon />
        </Button>
      </TwitterShareButton>
      <WhatsappShareButton
        url={`${process.env.PUBLIC_URL.toString()}/${bee.id}/`}
        title={`Hey! Checkout this awesome bee 🐝. I'll be booking ${bee.name} soon!`}
        separator=" "
      >
        <Button size="large" color="inherit">
          <WhatsAppIcon />
        </Button>
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
