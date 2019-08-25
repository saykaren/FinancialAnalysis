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

const AnswerDiv = ({title, answer, titleDetails, className, details})=>{
  return(
    <details>
      <summary>{title} {answer}{titleDetails}</summary>
      <p className={className}>
        {details}
      </p>
    </details>
  )
}

function App() {

  const [timePeriod, setTimePeriod] = useState(1);
  const [totalAssets, setTotalAssets] = useState(1); 
  const [begShareholderEquity, setBegShareholderEquity] = useState(1);
  const [bankAccount, setBankAccount] = useState(1);
  const [cashFunds, setCashFunds] = useState(1);
  const [accountRec, setAccountRec] = useState(1);
  const [currentAssets, setCurrentAssets] = useState(1);
  const [endTotalAssets, setEndTotalAssets] = useState(1);
  const [currentLiabilities, setCurrentLiabilities] = useState(1);
  const [shareholderEquity, setShareholderEquity] = useState(1);
  const [salesRev, setSalesRev] = useState(1);
  const [cogs, setCogs] = useState(1);
  const [grossProf, setGrossProf] = useState(1);
  const [netOper, setNetOper] = useState(1);
  const [netIncome, setNetIncome] = useState(1);
  const [cashFlow, setCashFlow] = useState(1);

  const currentRatioCalculation = (Number(currentAssets)/Number(currentLiabilities));	
  const currentRatioCalculationAnswer = currentRatioCalculation.toFixed(2);
  const quickRatioCalculation = (Number(bankAccount)+Number(cashFunds)+Number(accountRec))/(Number(currentLiabilities));
  const quickRatioAnswer = quickRatioCalculation.toFixed(2);
  const averageSalesPerDay = (Number(salesRev)/Number(timePeriod));
  const averageSalesPerDayAnswer = averageSalesPerDay.toFixed(2);
  const collectionPeriod = (Number(accountRec)/(Number(salesRev)/Number(timePeriod)));
  const collectionPeriodAnswer= collectionPeriod.toFixed(0);
  const COGSCalculation = (Number(cogs)/Number(timePeriod));
  const COGSCalculationAnswer = COGSCalculation.toFixed(2);
  const grossProfitCalculation = (Number(grossProf)/Number(salesRev)*100);
  const grossProfitCalculationAnswer = grossProfitCalculation.toFixed(2);
  const operatingIncomeCalculation = (netOper/salesRev);
  const operatingIncomeCalculationAnswer = operatingIncomeCalculation.toFixed(2);
  const returnOnEquity = (Number(netIncome)/((Number(begShareholderEquity)+Number(shareholderEquity))/2));
  const returnOnEquityAnswer = returnOnEquity.toFixed(2);
  const returnOnAssets = (Number(netIncome)/((Number(totalAssets)+Number(endTotalAssets))/2));
  const returnOnAssetsAnswer = returnOnAssets.toFixed(2);
  const cashReturnOnAssets = ((Number(cashFlow)/((Number(totalAssets)+Number(endTotalAssets))/2))*100);
  const cashReturnOnAssetsAnswer = cashReturnOnAssets.toFixed(2);
  const qualityOfIncome = ((Number(cashFlow)/Number(netIncome))*100);	 
  const qualityOfIncomeAnswer = qualityOfIncome.toFixed(2);


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
            <FormDiv 
              title={"Total Assests"}
              value={endTotalAssets}
              changeParameter={setEndTotalAssets}
            />
            <FormDiv 
              title={"Current Liabilities"}
              value={currentLiabilities}
              changeParameter={setCurrentLiabilities}
            />
            <FormDiv 
              title={"Total Shareholders Equity"}
              value={shareholderEquity}
              changeParameter={setShareholderEquity}
            />
          <h2>Profit and Loss Statement</h2>
            <FormDiv 
              title={"Sales Revenue / Total Sales of Product Income"}
              value={salesRev}
              changeParameter={setSalesRev}
            />
            <FormDiv 
              title={"COGS / Total Cost of Goods Sold"}
              value={cogs}
              changeParameter={setCogs}
            />
            <FormDiv 
              title={"Gross Profit"}
              value={grossProf}
              changeParameter={setGrossProf}
            />
            <FormDiv 
              title={"Net Operating Income"}
              value={netOper}
              changeParameter={setNetOper}
            />
            <FormDiv 
              title={"Net Income"}
              value={netIncome}
              changeParameter={setNetIncome}
            />
          <h2>Statement of Cash Flows</h2>
            <FormDiv 
              title={" Cash Flow From Operating Activities / Net Cash provided by operating activities"}
              value={cashFlow}
              changeParameter={setCashFlow}
            />          
        </section>
        <section className="column" id="OutputColumn">
          <h2>Results</h2> 
            <AnswerDiv
              title="Current Ratio"
              answer={currentRatioCalculationAnswer}
              titleDetails="%"
              className="calculationDetails"
              details="Ratio under 1 indicates that a company's liabilities are greater than its assets and suggests that the company in question would be unable to pay off it's obligations if they came due at that point. Ration below 1 shows that the company is not in good financial health. On the other hand, a high ratio (over 3) does not necessarily indicate that a company is in a state of financial well-being either. Depending on how the company’s assets are allocated, a high current ratio may suggest that that company is not using its current assets efficiently, is not securing financing well or is not managing its working capital well. To better assess whether or not these issues are present, a liquidity ratio more specific than the current ratio is needed.     Unlike many other liquidity ratios, it incorporates all of a company’s current assets, even those that cannot be easily liquidated. As such, a high current ratio cannot be used to effectively determine if a company is inefficiently deploying its assets, whereas certain other liquidity ratios can."
            />
             <AnswerDiv
              title="Quick Ratio: Company has $"
              answer={quickRatioAnswer}
              titleDetails=" of liquid assets available to cover each $1.00 of current liabilities"
              className="calculationDetails"
              details="The quick ratio is an indicator of a company's short-term liquidity. The quick ratio measures a company's ability to meet its short-term obligations with its most liquid assets. Thus a quick ratio of 1.5 means that a company has $1.50 of liquid assets available to cover each $1 of current liabilities. The higher the quick ratio, the better the company's liquidity position.                                                  Per accounting book values for quick ratio are often less than 1.0 and rule of thumb used by some analysts is that a quick ratio should not be less than .30 "
            />
            <AnswerDiv
              title="Average Sales Per Day $"
              answer={averageSalesPerDayAnswer}
              titleDetails=""
              className="calculationDetails"
              details="Average Sales Per Day"
            />
            <AnswerDiv
              title="Collection Period: Company takes "
              answer={collectionPeriodAnswer}
              titleDetails=" Days to collect "
              className="calculationDetails"
              details="Average collection period is the approximate amount of time that it takes for business to receive payments owed in terms of accounts receivable.  "
            />
            <AnswerDiv
              title="Cost of Goods Sold Per Day $"
              answer={COGSCalculationAnswer}
              titleDetails=""
              className="calculationDetails"
              details="Cost of Goods Sold Per Day "
            />
            <AnswerDiv
              title="Gross Profit Percentage "
              answer={grossProfitCalculationAnswer}
              titleDetails="% "
              className="calculationDetails"
              details="Financial metric used to access a company's financial health and business model by revealing the proportion of money left over from revenues after accounting for the COGS. In general a company's gross profit margin should be stable unless there have been changes to the company's business model. "
            />
            <AnswerDiv
              title="Operating Income Percentage: Company is earning $"
              answer={operatingIncomeCalculationAnswer}
              titleDetails=" before interest and taxes for every dollar of sales"
              className="calculationDetails"
              details="Operating income is a measurement of what proportion of a company's revenue is left over after paying for variable costs of production such as wages, raw materials, etc. Gives analysts an idea of how much a company makes (before interest and taxes) on each dollar of sales. Generally speaking the higher a company's operating margin is, the better off the company is. If a company's margin is increasing, it is earning more per dollar of sales.  "
            />
            <AnswerDiv
              title="Return on Equity: Owners generated $"
              answer={returnOnEquityAnswer}
              titleDetails=" of profit for every $1 of shareholders equity"
              className="calculationDetails"
              details="Return on equity (ROE) is a measure of profitability that calculates how many dollars of profit a company generates with each dollar of shareholders' equity. "
            />
            <AnswerDiv
              title="Return on Assets: Company is generating $"
              answer={returnOnAssetsAnswer}
              titleDetails=" in earnings for each dollar of assets "
              className="calculationDetails"
              details="The answer tells financial analysts how well a company is managing assets. In other words, ROA tells analysts how much each dollar of assets is generating in earnings. A high ratio means the company earns more net income from $1 of assets than the average company, which is a sign of efficiency. A low ratio means a company makes less net income per $1 of assets, which is a sign of inefficiency.  "
            />
            <AnswerDiv
              title="Cash Return on Assets "
              answer={cashReturnOnAssetsAnswer}
              titleDetails="%"
              className="calculationDetails"
              details="It is an efficiency ratio that rates actual cash flows to company assets without being affected by income recognition or income measurements. The ratio can be used internally by the company's analysts or by potential and current investors. "
            />
            <AnswerDiv
              title="Quality of Income "
              answer={qualityOfIncomeAnswer}
              titleDetails="%"
              className="calculationDetails"
              details="This ratio indicates the proportion of income that has been realized in cash. High levels of this ratio are desirable.  "
            />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
