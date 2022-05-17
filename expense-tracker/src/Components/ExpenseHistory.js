import React, { useState } from 'react'

export const ExpenseHistory = (props) => {	

	const {
		history 
	} = props;
    
  return (
    <div className="expense-history">
        <div className="history-header">
            History
        </div>
				<div className="history-list">
					{history.map((item, index) => {
						return (
							<div className={item.type === "expense" ? 'ex-red single-expense' : 'in-green single-expense'} key={index}>
								<span className="description"> {item.description} </span>
								<span className="value"> ${item.value} </span>
							</div>
						)
					})}
				</div>
    </div>
  )
}
