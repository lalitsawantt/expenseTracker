import React, { useState } from 'react'

export const Overview = (props) => {
  const {
    income,
    expense
  } = props;

  return (
    <div className="overview">
         <div className="income">INCOME <br/>
				 <h3 className="income-text">
					 ${income}
				 </h3>
				 </div>
         <div className="expense">EXPENSE
				 <h3 className="expense-text">
					 ${expense}
				 </h3>
				 </div>
    </div>
  )
}
