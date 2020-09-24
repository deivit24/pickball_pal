// React
import React, { useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// React Router DOM
import { Link } from 'react-router-dom';
// Get Current profile and delete place action
import { getCurrentProfile, deletePlace } from '../../_actions/profile';
// Moment
import Moment from 'react-moment';
// Loading component
import Loading from '../layout/Loading';

import {
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import '../../assets/css/DashboardPlaces.css';

const DashboardPlaces = () => {
  const meProfile = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const { profile, loading } = meProfile;

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  if (loading && profile === null) {
    return <Loading type="spin" color="#3f50b5" />;
  }

  if (profile !== null && profile.places.length === 0) {
    return (
      <div id="DashboardPlaces" className=" text-center">
        <h4 className="mb-3">
          {' '}
          Add a place to let other users know where you usually play
        </h4>
        <img
          className="mx-auto"
          src="https://cliply.co/wp-content/uploads/2019/03/371903340_LOCATION_MARKER_400.gif"
          alt=""
        />
        <br />
        <Link to="/add-places">
          <Button variant="outlined" color="primary">
            {' '}
            <i className="fas fa-map-marker-alt mr-2"></i> Add Places
          </Button>
        </Link>
      </div>
    );
  }
  if (profile !== null && profile.places.length > 0) {
    return (
      <TableContainer id="DashboardPlaces">
        <h4>
          <span className="title">Your Places:</span>
          <Link className="float-right" to="/add-places">
            <Button variant="outlined" color="primary">
              {' '}
              <i className="fas fa-map-marker-alt mr-2"></i> Add Places
            </Button>
          </Link>
        </h4>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head">Action</TableCell>
              <TableCell className="table-head">Name</TableCell>
              <TableCell className="table-head" align="right">
                Location
              </TableCell>
              <TableCell className="table-head" align="right">
                Created
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profile.places.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <IconButton
                    onClick={() => dispatch(deletePlace(row._id))}
                    color="secondary"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">
                  <Moment to={row.createdAt}></Moment>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return null;
};

export default DashboardPlaces;
