import React from 'react';
import './App.scss';
import Footer from './Footer';

function App() {
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
              <input type="number" name="time"/>
            </label>
          </form>
          <h2>Balance Sheet From Beginning of Period:</h2>
          <form>
            <label>
              Total  Assests
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
            Total Shareholders Equity 
              <input type="number" name="time"/>
            </label>
          </form>
          <h2>Balance Sheet From End of Period:</h2>
          <form>
            <label>
              Cash / Total Bank Accounts
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Cash Equivalents  / Undeposited Funds
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Accounts Receivable
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Current Assets
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Total Assests
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Current Liabilities
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Total Shareholders Equity
              <input type="number" name="time"/>
            </label>
          </form>
          <h2>Profit and Loss Statement</h2>
          <form>
            <label>
              Sales Revenue / Total Sales of Product Income
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              COGS / Total Cost of Goods Sold
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Gross Profit
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Net Operating Income
              <input type="number" name="time"/>
            </label>
          </form>
          <form>
            <label>
              Net Income
              <input type="number" name="time"/>
            </label>
          </form>
          <h2>Statement of Cash Flows</h2>
          <form>
            <label>
              Cash Flow From Operating Activities / Net Cash provided by operating activities
              <input type="number" name="time"/>
            </label>
          </form>
          <input type="submit" value="Submit" />
        </section>
        <section className="column" id="OutputColumn">
          <h2>Results</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
