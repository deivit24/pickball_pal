// React
import React from 'react';
// React Loading
import ReactLoading from 'react-loading';
// Loading CSS
import '../../assets/css/Loading.css';
const Loading = ({ type, color }) => {
  return (
    <div className="container Loading">
      <ReactLoading type={type} color={color} height={100} width={100} />
    </div>
  );
};

export default Loading;
