import React from 'react';

export default function Grid(props) {
	const classes = 'grid ' + props.className;
	return <div className={classes}>{props.children}</div>;
}
