// import React from 'react';
import React, {useState} from 'react';
import './App.scss';
import Footer from './Footer';

const FormDiv = ({title, value, changeParameter})=>{
  return(
    <form>
      <label>
        {title}
        <input 
          type="number" 
          value={value}
          onChange={e=>changeParameter(e.target.value)}
        />
      </label>
    </form>
  )
}


function App() {

  const [timePeriod, setTimePeriod] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0); 
  const [begShareholderEquity, setBegShareholderEquity] = useState(0);
  const [bankAccount, setBankAccount] = useState(0);
  const [cashFunds, setCashFunds] = useState(0);
  const [accountRec, setAccountRec] = useState(0);
  const [currentAssets, setCurrentAssets] = useState(0);
  const [endTotalAssets, setEndTotalAssets] = useState(0);
  const [currentLiabilities, setCurrentLiabilities] = useState(0);
  const [shareholderEquity, setShareholderEquity] = useState(0);
  const [salesRev, setSalesRev] = useState(0);
  const [cogs, setCogs] = useState(0);
  const [grossProf, setGrossProf] = useState(0);
  const [netOper, setNetOper] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  const [cashFlow, setCashFlow] = useState(0);

 

  

  return (
    <div className="App">
      <header className="App-header">
      <h1>Business Financial Analysis</h1>
      </header>
      <main id="main">        
        <section className="column" id="InputColumn">
          <h2>Input</h2>
          <FormDiv 
            title={"Days in Time Period Reviewing:"}
            value={timePeriod}
            changeParameter={setTimePeriod}
          />
          <h2>Balance Sheet From Beginning of Period:</h2>
          <FormDiv 
            title={"Total  Assests"}
            value={totalAssets}
            changeParameter={setTotalAssets}
          />
          <FormDiv 
            title={"Total Shareholders Equity "}
            value={begShareholderEquity}
            changeParameter={setBegShareholderEquity}
          />
  

          <h2>Balance Sheet From End of Period:</h2>
          <FormDiv 
            title={"Cash / Total Bank Accounts "}
            value={bankAccount}
            changeParameter={setBankAccount}
          />
          <FormDiv 
            title={"Cash Equivalents  / Undeposited Funds"}
            value={cashFunds}
            changeParameter={setCashFunds}
          />
          <FormDiv 
            title={"Accounts Receivable"}
            value={accountRec}
            changeParameter={setAccountRec}
          />

          <FormDiv 
            title={"Current Assets"}
            value={currentAssets}
            changeParameter={setCurrentAssets}
          />

          <form>
            <label>
              Total Assests
              <input 
                type="number" 
                name="time"
                value={endTotalAssets}  
                onChange={e=>setEndTotalAssets(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Current Liabilities
              <input 
                type="number" 
                name="time"
                value={currentLiabilities}  
                onChange={e=>setCurrentLiabilities(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Total Shareholders Equity
              <input 
                type="number" 
                name="time"
                value={shareholderEquity}  
                onChange={e=>setShareholderEquity(e.target.value)}
              />
            </label>
          </form>
          <h2>Profit and Loss Statement</h2>
          <form>
            <label>
              Sales Revenue / Total Sales of Product Income
              <input 
                type="number" 
                name="time"
                value={salesRev}  
                onChange={e=>setSalesRev(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              COGS / Total Cost of Goods Sold
              <input 
                type="number" 
                name="time"
                value={cogs}  
                onChange={e=>setCogs(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Gross Profit
              <input 
                type="number" 
                name="time"
                value={grossProf}  
                onChange={e=>setGrossProf(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Net Operating Income
              <input 
                type="number" 
                name="time"
                value={netOper}  
                onChange={e=>setNetOper(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Net Income
              <input 
                type="number" 
                name="time"
                value={netIncome}  
                onChange={e=>setNetIncome(e.target.value)}
              />
            </label>
          </form>
          <h2>Statement of Cash Flows</h2>
          <form>
            <label>
              Cash Flow From Operating Activities / Net Cash provided by operating activities
              <input 
                type="number" 
                name="time"
                value={cashFlow}  
                onChange={e=>setCashFlow(e.target.value)}
              />
            </label>
          </form>
          <input type="submit" />
        </section>
        <section className="column" id="OutputColumn">
          <h2>Results</h2>
         Time Period {timePeriod} <br></br><br></br>
          Total Assets {totalAssets}<br></br>
          Beginning Shareholders Equity {begShareholderEquity} <br></br>

          <br></br>
          Bank Account {bankAccount}<br></br>
          Cash {cashFunds}<br></br>
          Accounts Receivable {accountRec}<br></br>
          Current Assets {currentAssets}<br></br>
          End Total Assets {endTotalAssets}<br></br>
          Current Liabilities {currentLiabilities}<br></br>
          Shareholders {shareholderEquity}<br></br>
          Sales Revenue{salesRev}<br></br>
          COGS {cogs}<br></br>
          Gross Profit {grossProf}<br></br>
          Net Operating {netOper}<br></br>
          Net Income {netIncome}<br></br>
          Cash Flow {cashFlow} 


            <details>
              <summary>Average Shareholders Equity {(begShareholderEquity+shareholderEquity)/2}	</summary>
              <p className="calculationDetails">Average Shareholders Equity  </p>
            </details>
            <details>
              <summary>Average Total Current Assests	 {(totalAssets+endTotalAssets)/2}	</summary>
              <p className="calculationDetails">Average Total Current Assests </p>
            </details>
            <details>
              <summary>Current Ratio {(currentAssets/currentLiabilities)}	 	</summary>
              <p className="calculationDetails">Ratio under 1 indicates that a company's liabilities are greater than its assets and suggests that the company in question would be unable to pay off it's obligations if they came due at that point. Ration below 1 shows that the company is not in good financial health. On the other hand, a high ratio (over 3) does not necessarily indicate that a company is in a state of financial well-being either. Depending on how the company’s assets are allocated, a high current ratio may suggest that that company is not using its current assets efficiently, is not securing financing well or is not managing its working capital well. To better assess whether or not these issues are present, a liquidity ratio more specific than the current ratio is needed.     Unlike many other liquidity ratios, it incorporates all of a company’s current assets, even those that cannot be easily liquidated. As such, a high current ratio cannot be used to effectively determine if a company is inefficiently deploying its assets, whereas certain other liquidity ratios can. </p>
            </details>
            <details>
              <summary>Quick Ratio: Company has {(cashFunds+cashFunds+accountRec)/currentLiabilities}of liquid assets available to cover each $1.00 of current liabilities	 	</summary>
              <p className="calculationDetails">The quick ratio is an indicator of a company's short-term liquidity. The quick ratio measures a company's ability to meet its short-term obligations with its most liquid assets. Thus a quick ratio of 1.5 means that a company has $1.50 of liquid assets available to cover each $1 of current liabilities. The higher the quick ratio, the better the company's liquidity position.                                                  Per accounting book values for quick ratio are often less than 1.0 and rule of thumb used by some analysts is that a quick ratio should not be less than .30 </p>
            </details>
            <details>
              <summary>Average Sales Per Day{(salesRev/timePeriod)}	 	</summary>
              <p className="calculationDetails">Average Sales Per Day </p>
            </details>
            <details>
              <summary>Collection Period: Company takes {(accountRec/(salesRev/timePeriod))} Days to collect 	</summary>
              <p className="calculationDetails">Average collection period is the approximate amount of time that it takes for business to receive payments owed in terms of accounts receivable.  </p>
            </details>
            <details>
              <summary>Cost of Goods Sold Per Day{(cogs/timePeriod)}	 	</summary>
              <p className="calculationDetails">Cost of Goods Sold Per Day </p>
            </details>
            <details>
              <summary>Gross Profit Percentage{(grossProf/salesRev)}	 	</summary>
              <p className="calculationDetails">Financial metric used to access a company's financial health and business model by revealing the proportion of money left over from revenues after accounting for the COGS. In general a company's gross profit margin should be stable unless there have been changes to the company's business model.  </p>
            </details>
            <details>
              <summary>Operating Income Percentage: Company is earning {(netOper/salesRev)}	before interest and taxes for every dollar of sales 	</summary>
              <p className="calculationDetails">Operating income is a measurement of what proportion of a company's revenue is left over after paying for variable costs of production such as wages, raw materials, etc. Gives analysts an idea of how much a company makes (before interest and taxes) on each dollar of sales. Generally speaking the higher a company's operating margin is, the better off the company is. If a company's margin is increasing, it is earning more per dollar of sales.  </p>
            </details>
            <details>
              <summary>Return on Equity: Owners generated {(netIncome/((begShareholderEquity+shareholderEquity)/2))} of profit for every $1 of shareholders equity	 	</summary>
              <p className="calculationDetails">Return on equity (ROE) is a measure of profitability that calculates how many dollars of profit a company generates with each dollar of shareholders' equity. </p>
            </details>
            <details>
              <summary>Return on Assets: Company is generating {(netIncome/((totalAssets+endTotalAssets)/2))}	in earnings for each dollar of assets 	</summary>
              <p className="calculationDetails">The answer tells financial analysts how well a company is managing assets. In other words, ROA tells analysts how much each dollar of assets is generating in earnings. A high ratio means the company earns more net income from $1 of assets than the average company, which is a sign of efficiency. A low ratio means a company makes less net income per $1 of assets, which is a sign of inefficiency.  </p>
            </details>
            <details>
              <summary>Cash Return on Assets{(cashFlow/((totalAssets+endTotalAssets)/2))}	 	</summary>
              <p className="calculationDetails">It is an efficiency ratio that rates actual cash flows to company assets without being affected by income recognition or income measurements. The ratio can be used internally by the company's analysts or by potential and current investors. </p>
            </details>
            <details>
              <summary>Quality of Income{cashFlow/netIncome}	 	</summary>
              <p className="calculationDetails">This ratio indicates the proportion of income that has been realized in cash. High levels of this ratio are desirable.  </p>
            </details>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
