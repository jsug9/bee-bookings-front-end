import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Icon } from '@iconify/react';

const BeeItem = (props) => {
  const { bee } = props;
  const navigate = useNavigate();

  const redirect = () => {
    navigate(
      `/${bee.id}`,
      { state: { bee } },
    );
  };

  const imageStyle = {
    height: 0,
    paddingTop: '80%',
    width: '100%',
    objectFit: 'cover',
  };

  const cardStyle = {
    margin: '0 20px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Card style={cardStyle}>
      <CardActionArea onClick={redirect}>
        <CardMedia image={bee.image} title={bee.name} style={imageStyle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            {bee.name}
          </Typography>
          <Typography component="p">{bee.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="social-icons-container">
        <Button size="large" color="inherit">
          <Icon icon="bi:facebook" className="social-icon" />
        </Button>
        <Button size="large" color="inherit">
          <Icon icon="bi:twitter" className="social-icon" />
        </Button>
        <Button size="large" color="inherit">
          <Icon icon="bi:instagram" className="social-icon" />
        </Button>
      </CardActions>
    </Card>
  );
};

BeeItem.propTypes = {
  bee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeeItem;
