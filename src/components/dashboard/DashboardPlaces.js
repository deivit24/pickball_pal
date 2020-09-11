import React, { useEffect } from 'react';
import { getCurrentProfile, deletePlace } from '../../_actions/profile';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Loading from '../layout/Loading';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    width: '100%',
    boxShadow: '0 0 8px 2px #afafaf',
    borderRadius: '25px',
  },
  tableHead: {
    fontWeight: '700',
  },
});
const DashboardPlaces = () => {
  const classes = useStyles();
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
      <div className="yes-profile text-center">
        <h2 className="mb-3">
          {' '}
          Add a place to let other users know where you usually play
        </h2>
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
      <TableContainer className={classes.table}>
        <h3 className="p-3">
          Your locations:{' '}
          <Link className="float-right" to="/add-places">
            <Button variant="outlined" color="primary">
              {' '}
              <i className="fas fa-map-marker-alt mr-2"></i> Add Places
            </Button>
          </Link>
        </h3>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Action</TableCell>
              <TableCell className={classes.tableHead}>Name</TableCell>
              <TableCell className={classes.tableHead} align="right">
                Location
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
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
