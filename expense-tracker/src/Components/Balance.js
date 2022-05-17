import React from 'react'

export const Balance = (props) => {

	const {
		balance, 
		setBalance
	} = props;

  return (
    <div className="balance">
			<div className="balance-text">
				Your Balance
			</div>
			<div className="balance-number">
				${balance}
			</div>
		</div>
  )
}
