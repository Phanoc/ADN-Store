import React from 'react';

const FlexWrap = (props) => {
	const classes = 'flex flex-wrap ' + props.className;
	return <div className={classes}>{props.children}</div>;
};

export default FlexWrap;
