// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Proptypes
import PropTypes from 'prop-types';
// Keeping this here becasue I copied the staright from material ui
import { makeStyles } from '@material-ui/core/styles';
// Message From Components
import MessageForm from './MessageForm';
import {
  Modal,
  Button,
  Backdrop,
  Typography,
  Popover,
} from '@material-ui/core';
// Modal copied staright from from Material UI
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  typography: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 360,
    padding: theme.spacing(3),
    fontSize: theme.typography.pxToRem(16),
    border: '1px solid #dadde9',
  },
  link: {
    fontWeight: '700',
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const MessageModal = ({ messageMe, display, name, id, handleSubmit }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickPopover = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const popoverId = openPopover ? 'simple-popover' : undefined;
  const handleOpen = (e) => {
    e.preventDefault();
    handleSubmit();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let messageButton;
  if (!messageMe) {
    messageButton = (
      <>
        <Button
          className={`mx-auto ${display}`}
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Message Me
        </Button>
      </>
    );
  } else {
    messageButton = (
      <>
        <Button
          aria-describedby={popoverId}
          onClick={handleClickPopover}
          className={`mx-auto ${display}`}
          variant="contained"
          color="primary"
        >
          Message Me
        </Button>
        <Popover
          id={popoverId}
          open={openPopover}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            <p>
              You need to{' '}
              <Link className={classes.link} to="/login">
                login
              </Link>{' '}
              to message me.
            </p>
            <p>
              Don't have an account?{' '}
              <Link className={classes.link} to="/register">
                Register Now!
              </Link>
            </p>
          </Typography>
        </Popover>
      </>
    );
  }

  return (
    <>
      {messageButton}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">{name}</h2>
            <MessageForm replyId={id} handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default MessageModal;
