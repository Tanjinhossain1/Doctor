import React from 'react';
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/PuffLoader";

const Loading = ({loading}) => {
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    return (
        <div>
            <div className='text-center mt-32'> <CircleLoader loading={loading} css={override} size={100} /></div>
        </div>
    );
};

export default Loading;