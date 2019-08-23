// import React from 'react';
import React, {useState} from 'react';
import './App.scss';
import Footer from './Footer';

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

  
  
  // const timeChange = () => {
  //     console.log({timePeriod});
  //     if(timePeriod > 0 )
  //     setTimePeriod(5);
  //   }

  // const updateHooks = (event) => {
  //   var timeItem = event.target.value;
  //   console.log(timeItem);
  //   setTimePeriod(timeItem);    
  // };


  return (
    <div className="App">
      <header className="App-header">
      <h1>Business Financial Analysis</h1>
      </header>
      <main id="main">        
        <section className="column" id="InputColumn">
          <h2>Input</h2>
          <form>
            <label>
              Days in Time Period Reviewing:
              <input 
                type="number" 
                value={timePeriod}
                onChange={e=>setTimePeriod(e.target.value)}
              />
            </label>
          </form>
          <h2>Balance Sheet From Beginning of Period:</h2>
          <form>
            <label>
              Total  Assests
              <input 
                type="number" 
                name="time" 
                value={totalAssets}  
                onChange={e=>setTotalAssets(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
            Total Shareholders Equity 
              <input 
                type="number" 
                name="time"
                value={begShareholderEquity}  
                onChange={e=>setBegShareholderEquity(e.target.value)}
              />
            </label>
          </form>
          <h2>Balance Sheet From End of Period:</h2>
          <form>
            <label>
              Cash / Total Bank Accounts
              <input 
                type="number" 
                name="time"
                value={bankAccount}  
                onChange={e=>setBankAccount(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Cash Equivalents  / Undeposited Funds
              <input 
                type="number" 
                name="time"
                value={cashFunds}  
                onChange={e=>setCashFunds(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Accounts Receivable
              <input 
                type="number" 
                name="time"
                value={accountRec}  
                onChange={e=>setAccountRec(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Current Assets
              <input 
                type="number" 
                name="time"
                value={currentAssets}  
                onChange={e=>setCurrentAssets(e.target.value)}
              />
            </label>
          </form>
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
              <p>details </p>
            </details>
            <details>
              <summary>Average Total Current Assests	 {(totalAssets+endTotalAssets)/2}	</summary>
              <p>details </p>
            </details>
            <details>
              <summary>Current Ratio {(currentAssets/currentLiabilities)}	 	</summary>
              <p>details </p>
            </details>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
