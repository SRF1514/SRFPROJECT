export interface Question {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  process: string;
  category: 'Quantitative' | 'Investment' | 'Portfolio' | 'Derivatives' | 'Ethics' | 'International';
}

export const batch1A: Question[] = [
  {
    id: 'q1',
    category: 'Quantitative',
    question: "A company has net income of USD 179.2 million, depreciation of USD 135.7 million, interest of USD 70.7 million, and capital expenditures of USD 208.0 million. Accounts receivable increase by USD 3.8 million, inventory increases by USD 8.3 million, cash decreases by USD 2.1 million, accounts payable decreases by USD 3.3 million, and debt increases by USD 62.2 million. The company paid USD 157.6 million in dividends and net sales of stock were USD 1.8 million. There are no other line items that affect the statement of cash flows. The cash flow from operating activities is [USD million, 1 decimal].",
    options: ["USD 287.4 million", "USD 299.5 million", "USD 302.8 million", "USD 315.0 million"],
    correctAnswer: "USD 299.5 million",
    process: "For operating cash flow using the indirect method: CFO = NI + Depreciation − ΔAR − ΔInventory + ΔAP. Interest is already included in net income, capital expenditures are investing cash flows, debt and stock/dividends are financing cash flows. CFO = 179.2 + 135.7 − 3.8 − 8.3 − 3.3 = 299.5"
  },
  {
    id: 'q2',
    category: 'Quantitative',
    question: "A loan of USD 1,000 is repaid with equal annual payments in 7 years. The first payment is in exactly one year. The interest rate on the loan is 5.2% per year. The annual payment is [USD, no decimals].",
    options: ["USD 168", "USD 174", "USD 182", "USD 195"],
    correctAnswer: "USD 174",
    process: "Using the PV of an annuity formula: 1000 = C × [(1 - (1.052^-7)) / 0.052]. Solving for C: C = 1000 / 5.754 ≈ 174."
  },
  {
    id: 'q3',
    category: 'Quantitative',
    question: "You deposit GBP 280 monthly for 61 months. The savings account has an annual percentage rate of 3.12% with monthly compounding. The balance just after the last deposit is [GBP, no decimals].",
    options: ["GBP 17,080", "GBP 18,480", "GBP 18,950", "GBP 19,120"],
    correctAnswer: "GBP 18,480",
    process: "Monthly rate = 3.12% / 12 = 0.26% (0.0026). FV of an annuity = 280 × [((1.0026^61) - 1) / 0.0026] ≈ 18,480."
  },
  {
    id: 'q4',
    category: 'Investment',
    question: "A default-free bond with face value USD 1,000 has an annual coupon of 5.5% and remaining maturity of 2 years. The market price of a 1-year default-free zero-coupon bond with face value USD 1,000 is USD 975.27, and the market price of a 2-year default-free zero-coupon bond with face value USD 1,000 is USD 947.92. The market price of the coupon bond is [USD, 2 decimals].",
    options: ["USD 1,048.20", "USD 1,052.70", "USD 1,055.30", "USD 1,062.10"],
    correctAnswer: "USD 1,052.70",
    process: "CPN = 55. DF1 = 0.97527, DF2 = 0.94792. P = 55(0.97527) + 1055(0.94792) = 53.64 + 999.06 = 1052.70."
  },
  {
    id: 'q5',
    category: 'Investment',
    question: "A corporate bond with face value GBP 1,000 has annual coupon of 6.4% and remaining maturity of 7 years. The yield to maturity of otherwise identical default-free bonds is 2.6%. The credit spread is 2.0%. The market price is [GBP, 2 decimals].",
    options: ["GBP 1,092.18", "GBP 1,105.32", "GBP 1,118.45", "GBP 1,130.00"],
    correctAnswer: "GBP 1,105.32",
    process: "Corporate yield = 2.6% + 2.0% = 4.6%. Price = 64 × [(1 - 1.046^-7) / 0.046] + (1000 / 1.046^7) ≈ 1,105.32."
  },
  {
    id: 'q6',
    category: 'Investment',
    question: "Investors expect next year’s dividend per share will be GBP 2.13 and future dividends will grow at 5.3% forever. The cost of equity capital is 9.3%. The share price is [GBP, 2 decimals].",
    options: ["GBP 48.75", "GBP 51.50", "GBP 53.25", "GBP 58.00"],
    correctAnswer: "GBP 53.25",
    process: "Gordon Growth Model: P0 = Div1 / (r - g) = 2.13 / (0.093 - 0.053) = 53.25."
  },
  {
    id: 'q8',
    category: 'Portfolio',
    question: "Next year’s return of an investment is 22% with probability 35% or 0% with probability 65%. The standard deviation is [percentage, 2 decimals].",
    options: ["8.80%", "9.32%", "10.49%", "11.15%"],
    correctAnswer: "10.49%",
    process: "E[R] = 0.35(22) + 0.65(0) = 7.70%. Var = 0.35(22-7.7)^2 + 0.65(0-7.7)^2 = 110.11. SD = sqrt(110.11) = 10.49%."
  },
  {
    id: 'q9',
    category: 'Portfolio',
    question: "Stock XYZ has standard deviation 60%, stock PQR has standard deviation 48%, and correlation is 0.11. The standard deviation of a portfolio of 70% XYZ and 30% PQR is [percentage, 1 decimal].",
    options: ["44.1%", "45.9%", "46.5%", "48.2%"],
    correctAnswer: "45.9%",
    process: "Var(p) = 0.7²(0.60²) + 0.3²(0.48²) + 2(0.7)(0.3)(0.11)(0.60)(0.48) = 0.2104. SD(p) = sqrt(0.2104) = 45.9%."
  },
  {
    id: 'q10',
    category: 'Portfolio',
    question: "Expected portfolio return is 10.3%, volatility is 30.6%, risk-free rate is 2.9%. The Sharpe ratio is [3 decimals].",
    options: ["0.215", "0.230", "0.242", "0.281"],
    correctAnswer: "0.242",
    process: "Sharpe = (E[Rp] - rf) / σp = (0.103 - 0.029) / 0.306 = 0.242."
  },
  {
    id: 'q11',
    category: 'Portfolio',
    question: "Risk-free rate is 3.6%, expected market return is 9.6%, market volatility is 25.6%. You aim for expected return of 6%. The weight of the risk-free asset is [percentage, 1 decimal].",
    options: ["40.0%", "55.0%", "60.0%", "65.0%"],
    correctAnswer: "60.0%",
    process: "0.06 = wM(0.096) + (1-wM)(0.036). 0.06 = 0.036 + 0.06wM. wM = 0.40. wf = 1 - 0.4 = 0.60 (60%)."
  },
  {
    id: 'q12',
    category: 'Portfolio',
    question: "Risk-free rate is 2.9%, expected market return is 9.1%, beta is 0.94. The expected return is [percentage, 2 decimals].",
    options: ["8.65%", "8.73%", "8.84%", "9.10%"],
    correctAnswer: "8.73%",
    process: "E[Ri] = rf + βi(E[Rm] - rf) = 2.9 + 0.94(9.1 - 2.9) = 8.728 ≈ 8.73%."
  },
  {
    id: 'q13',
    category: 'Quantitative',
    question: "A company has cost of debt 3.4%, cost of equity 8.1%, 23% debt, 77% equity, and tax rate 28%. The WACC is [percentage, 2 decimals].",
    options: ["6.45%", "6.80%", "6.95%", "7.12%"],
    correctAnswer: "6.80%",
    process: "WACC = wE*rE + wD*rD*(1-Tc) = 0.77(8.1%) + 0.23(3.4%)(1-0.28) = 6.80%."
  },
  {
    id: 'q14',
    category: 'Investment',
    question: "Current share price is GBP 53.83. A one-year European call with strike GBP 58 costs GBP 8.27. The company pays its next dividend after option expiry. Risk-free rate is 2.0%. The price of an otherwise identical put is [GBP, 2 decimals].",
    options: ["GBP 10.85", "GBP 11.30", "GBP 12.15", "GBP 13.40"],
    correctAnswer: "GBP 11.30",
    process: "Put-Call Parity: P = C + (K / (1+r)) - S = 8.27 + (58 / 1.02) - 53.83 = 11.30."
  },
  {
    id: 'q15',
    category: 'Investment',
    question: "The share price in one year will be EUR 136 or EUR 69. Current share price is EUR 97. Risk-free rate is 2%. A European call has exercise price EUR 94 and expires in one year. A portfolio of DELTA shares and B in the risk-free asset replicates the call. DELTA is [3 decimals].",
    options: ["0.582", "0.627", "0.654", "0.710"],
    correctAnswer: "0.627",
    process: "Cu = 42, Cd = 0. Su = 136, Sd = 69. Δ = (Cu - Cd) / (Su - Sd) = 42 / 67 ≈ 0.627."
  }
];

export const batch1B: Question[] = [
  {
    id: '1b-q1',
    category: 'Quantitative',
    question: "A company has net income of EUR 183.1 million, depreciation of EUR 210.4 million, interest of EUR 103.8 million, and capital expenditures of EUR 271.0 million. Accounts receivable increase by EUR 8.4 million, inventory increases by EUR 5.0 million, cash increases by EUR 15.0 million, accounts payable increases by EUR 10.4 million, and debt increases by EUR 18.4 million. The company paid EUR 126.9 million in dividends and net sales of stock were EUR 4.0 million. Cash flow from operating activities is [EUR million, 1 decimal].",
    options: ["EUR 375.1 million", "EUR 382.4 million", "EUR 390.5 million", "EUR 401.2 million"],
    correctAnswer: "EUR 390.5 million",
    process: "CFO = NI + Depreciation − ΔAR − ΔInventory + ΔAP = 183.1 + 210.4 - 8.4 - 5.0 + 10.4 = 390.5. Interest is already in NI. CapEx, debt, dividends, and stock are not operating activities."
  },
  {
    id: '1b-q2',
    category: 'Quantitative',
    question: "A loan of GBP 7,000 is repaid with equal annual payments in 13 years. First payment is in one year. Interest rate is 6.9%. Annual payment is [GBP, no decimals].",
    options: ["GBP 785", "GBP 812", "GBP 833", "GBP 856"],
    correctAnswer: "GBP 833",
    process: "Using the annuity formula: 7000 = C × [(1 - 1.069^-13) / 0.069]. C = 7000 / 8.406 ≈ 833."
  },
  {
    id: '1b-q3',
    category: 'Quantitative',
    question: "You deposit USD 110 monthly for 42 months. APR is 2.88% with monthly compounding. Balance just after last deposit is [USD, no decimals].",
    options: ["USD 4,620", "USD 4,855", "USD 5,120", "USD 5,340"],
    correctAnswer: "USD 4,855",
    process: "Monthly rate = 0.0288 / 12 = 0.0024. FV = 110 × [(1.0024^42 - 1) / 0.0024] ≈ 4,855."
  },
  {
    id: '1b-q4',
    category: 'Investment',
    question: "Default-free bond, face value EUR 1,000, annual coupon 3.0%, maturity 2 years. One-year zero price is EUR 965.96, two-year zero price is EUR 951.05. Market price of coupon bond is [EUR, 2 decimals].",
    options: ["EUR 1,002.45", "EUR 1,008.56", "EUR 1,012.30", "EUR 1,015.00"],
    correctAnswer: "EUR 1,008.56",
    process: "CPN = 30. P = 30(0.96596) + 1030(0.95105) = 28.98 + 979.58 = 1008.56."
  },
  {
    id: '1b-q5',
    category: 'Investment',
    question: "Corporate bond, face value EUR 1,000, annual coupon 5.2%, maturity 6 years. Default-free YTM is 1.7%, credit spread is 2.0%. Market price is [EUR, 2 decimals].",
    options: ["EUR 1,065.20", "EUR 1,079.41", "EUR 1,085.60", "EUR 1,102.15"],
    correctAnswer: "EUR 1,079.41",
    process: "YTM = 1.7% + 2.0% = 3.7%. P = 52 × [(1 - 1.037^-6) / 0.037] + (1000 / 1.037^6) = 1079.41."
  },
  {
    id: '1b-q6',
    category: 'Investment',
    question: "Expected next dividend is USD 3.85. Share price just after next dividend is expected to be USD 71.87. Cost of equity is 9.8%. Current share price is [USD, 2 decimals].",
    options: ["USD 65.42", "USD 68.96", "USD 70.15", "USD 72.80"],
    correctAnswer: "USD 68.96",
    process: "P0 = (Div1 + P1) / (1 + r) = (3.85 + 71.87) / 1.098 = 68.96."
  },
  {
    id: '1b-q7',
    category: 'Investment',
    question: "A company will generate USD 68.1 million in free cash flows next year, growing at 2.6% forever. Cost of equity is 10.7%, WACC is 8.6%. Debt market value is USD 325 million and there is no excess cash. Value of equity is [USD million, no decimals].",
    options: ["USD 785 million", "USD 810 million", "USD 845 million", "USD 1,135 million"],
    correctAnswer: "USD 810 million",
    process: "Enterprise Value (EV) = FCF1 / (WACC - g) = 68.1 / (0.086 - 0.026) = 1135. Equity Value = EV - Debt + Cash = 1135 - 325 + 0 = 810."
  },
  {
    id: '1b-q8',
    category: 'Portfolio',
    question: "Next year’s return is 7% with probability 30% or 10% with probability 70%. Standard deviation is [percentage, 2 decimals].",
    options: ["1.15%", "1.37%", "1.45%", "2.10%"],
    correctAnswer: "1.37%",
    process: "E[R] = 0.3(7) + 0.7(10) = 9.1%. Var = 0.3(7-9.1)^2 + 0.7(10-9.1)^2 = 1.89. SD = sqrt(1.89) = 1.37%."
  },
  {
    id: '1b-q9',
    category: 'Portfolio',
    question: "Stock PQR has standard deviation 60%, stock XYZ has standard deviation 66%, correlation is -0.09. Portfolio is 65% PQR and 35% XYZ. Standard deviation is [percentage, 1 decimal].",
    options: ["41.2%", "43.5%", "45.8%", "47.1%"],
    correctAnswer: "43.5%",
    process: "Var(p) = 0.65²(0.60²) + 0.35²(0.66²) + 2(0.65)(0.35)(-0.09)(0.60)(0.66). SD(p) = 43.5%."
  },
  {
    id: '1b-q10',
    category: 'Portfolio',
    question: "Expected return is 11.3%, volatility is 31.4%, risk-free rate is 2.8%. Sharpe ratio is [3 decimals].",
    options: ["0.245", "0.271", "0.298", "0.312"],
    correctAnswer: "0.271",
    process: "Sharpe = (E[Rp] - rf) / σp = (0.113 - 0.028) / 0.314 = 0.271."
  },
  {
    id: '1b-q11',
    category: 'Portfolio',
    question: "Risk-free rate is 2.9%, market expected return is 8.3%, market volatility is 28.7%. You aim for expected return of 5%. Weight of risk-free asset is [percentage, 1 decimal].",
    options: ["58.4%", "61.1%", "63.5%", "65.0%"],
    correctAnswer: "61.1%",
    process: "0.05 = wM(0.083) + (1-wM)(0.029). wM = 0.021 / 0.054 ≈ 0.3889. wf = 1 - 0.3889 = 61.11%."
  },
  {
    id: '1b-q12',
    category: 'Portfolio',
    question: "Risk-free rate is 2.7%, expected market return is 8.2%, market volatility is 24.4%. Large diversified portfolio has beta 1.10 and volatility 35.8%. Expected return is [percentage, 2 decimals].",
    options: ["8.50%", "8.75%", "9.12%", "9.50%"],
    correctAnswer: "8.75%",
    process: "E[R] = rf + β(E[Rm] - rf) = 2.7 + 1.10(8.2 - 2.7) = 2.7 + 6.05 = 8.75%."
  },
  {
    id: '1b-q13',
    category: 'Quantitative',
    question: "Cost of debt is 5.2%, cost of equity is 10.8%, capital structure is 22% debt and 78% equity, tax rate is 23%. WACC is [percentage, 2 decimals].",
    options: ["9.15%", "9.30%", "9.45%", "9.60%"],
    correctAnswer: "9.30%",
    process: "WACC = 0.78(10.8%) + 0.22(5.2%)(1-0.23) = 8.424% + 0.881% = 9.305%."
  },
  {
    id: '1b-q14',
    category: 'Investment',
    question: "Share price in one year will be USD 90 or USD 53. Current share price is USD 69. Risk-free rate is 1%. European call has strike USD 65 and expires in one year. Call price is [USD, 2 decimals].",
    options: ["USD 10.45", "USD 11.17", "USD 12.30", "USD 13.80"],
    correctAnswer: "USD 11.17",
    process: "p = (Su - Sd) / ((1+r)S0 - Sd) - Wait, correct RN prob: p = ((1+r)S0 - Sd) / (Su - Sd) = (1.01*69 - 53) / (90 - 53) = 16.69 / 37 ≈ 0.4511. Call Price = (p*Cu + (1-p)*Cd) / (1+r) = (0.4511*25) / 1.01 ≈ 11.17."
  },
  {
    id: '1b-q15',
    category: 'Investment',
    question: "Share price in one year will be EUR 67 or EUR 37. Current price is EUR 50. Risk-free rate is 1%. European call strike is EUR 45. DELTA is [3 decimals].",
    options: ["0.685", "0.712", "0.733", "0.750"],
    correctAnswer: "0.733",
    process: "Cu = 22, Cd = 0. Su = 67, Sd = 37. Delta = (Cu - Cd) / (Su - Sd) = 22 / 30 ≈ 0.733."
  }
];

export const batch1C: Question[] = [
  {
    id: '1c-q1',
    category: 'Quantitative',
    question: "Consider a perpetuity of annual cash flows. First cash flow is USD 710 in one year and grows at 3.5% forever. Interest rate is 12.4%. Present value is:",
    options: ["USD 7,978", "USD 8,967", "USD 8,257", "USD 9,120"],
    correctAnswer: "USD 7,978",
    process: "PV = C1 / (r - g) = 710 / (0.124 - 0.035) = 7977.53 ≈ 7,978."
  },
  {
    id: '1c-q2',
    category: 'Quantitative',
    question: "An annuity has 13 equal annual cash flows of GBP 400. First cash flow in one year. Interest rate 4.6%. Value is:",
    options: ["GBP 3,650", "GBP 3,780", "GBP 3,850", "GBP 4,027"],
    correctAnswer: "GBP 3,850",
    process: "PV = 400 × [(1 - 1.046^-13) / 0.046] = 3850."
  },
  {
    id: '1c-q3',
    category: 'Quantitative',
    question: "An annuity has 8 equal annual cash flows of GBP 540. Interest rate 5.1%. Value just before the first cash flow is:",
    options: ["GBP 3,476", "GBP 3,541", "GBP 3,653", "GBP 3,820"],
    correctAnswer: "GBP 3,653",
    process: "PV0 (one year before) = 3476. Value just before first cash flow is one year later = 3476 * 1.051 = 3653."
  },
  {
    id: '1c-q4',
    category: 'Quantitative',
    question: "A loan of GBP 1,000 is repaid with equal annual payments in 5 years. First payment in one year. Interest rate is 5.7%. Annual payment is:",
    options: ["GBP 185", "GBP 212", "GBP 235", "GBP 287"],
    correctAnswer: "GBP 235",
    process: "1000 = C × [(1 - 1.057^-5) / 0.057]. C = 235."
  },
  {
    id: '1c-q5',
    category: 'Quantitative',
    question: "A loan has APR 6.1% with quarterly compounding. Effective annual interest rate is:",
    options: ["6.23%", "6.24%", "6.25%", "6.28%"],
    correctAnswer: "6.24%",
    process: "EAR = (1 + 0.061/4)^4 - 1 = 6.24%."
  },
  {
    id: '1c-q6',
    category: 'Quantitative',
    question: "A loan has APR 5.0% with monthly compounding. Equivalent monthly interest rate is:",
    options: ["0.41%", "0.42%", "0.43%", "0.44%"],
    correctAnswer: "0.42%",
    process: "rm = 5.0% / 12 = 0.4167% ≈ 0.42%."
  },
  {
    id: '1c-q7',
    category: 'Quantitative',
    question: "You expect to receive USD 900 after 3 years and 6 months. Effective annual interest rate is 6.9%. Present value is:",
    options: ["USD 683", "USD 707", "USD 713", "USD 745"],
    correctAnswer: "USD 713",
    process: "PV = 900 / (1.069^3.5) = 713."
  },
  {
    id: '1c-q8',
    category: 'Quantitative',
    question: "You deposit EUR 300 monthly for 35 months. APR is 4.32% with monthly compounding. Balance just after last deposit is:",
    options: ["EUR 10,940", "EUR 11,155", "EUR 11,169", "EUR 11,320"],
    correctAnswer: "EUR 11,169",
    process: "rm = 0.0432 / 12 = 0.0036. FV = 300 × [(1.0036^35 - 1) / 0.0036] = 11169."
  },
  {
    id: '1c-q9',
    category: 'Investment',
    question: "A zero-coupon bond has face value USD 1,000, remaining maturity 3.3 years, and YTM 4.70%. Market price is:",
    options: ["USD 859.35", "USD 859.36", "USD 859.37", "USD 862.10"],
    correctAnswer: "USD 859.36",
    process: "P = 1000 / (1.047^3.3) = 859.36."
  },
  {
    id: '1c-q10',
    category: 'Investment',
    question: "A bond with face value USD 1,000 has annual coupon 2.8%, remaining maturity 6 years, YTM 4.4%. Market price is:",
    options: ["USD 917.21", "USD 940.32", "USD 1,087.25", "USD 1,012.40"],
    correctAnswer: "USD 917.21",
    process: "CPN = 28. P = 28 × [(1 - 1.044^-6) / 0.044] + 1000 / 1.044^6 = 917.21."
  },
  {
    id: '1c-q11',
    category: 'Investment',
    question: "Default-free bond with face value GBP 1,000, annual coupon 3.4%, maturity 2 years. One-year zero price is GBP 979.83, two-year zero price is GBP 968.84. Coupon bond price is:",
    options: ["GBP 1,001.78", "GBP 1,002.15", "GBP 1,035.09", "GBP 1,042.80"],
    correctAnswer: "GBP 1,035.09",
    process: "CPN = 34. P = 34(0.97983) + 1034(0.96884) = 1035.09."
  },
  {
    id: '1c-q12',
    category: 'Investment',
    question: "The market price of a bond with annual coupons of GBP 20 is GBP 914.62 just after the last coupon payment. YTM is 2.6%. Expected price just before next coupon is:",
    options: ["GBP 918.40", "GBP 932.91", "GBP 938.40", "GBP 954.10"],
    correctAnswer: "GBP 938.40",
    process: "Pbefore = Panomaly * (1 + r) = 914.62 * 1.026 = 938.40."
  }
];

export const batch1D: Question[] = [
  {
    id: '1d-q1',
    category: 'Investment',
    question: "A bond with face value GBP 1,000 has coupon 3.9%, semi-annual coupon payments, maturity 13 years, and YTM 4.5%. Market price is:",
    options: ["A. GBP 938.36", "B. GBP 941.43", "C. GBP 941.90"],
    correctAnswer: "B. GBP 941.43",
    process: "Semiannual coupon: CPN = 1000(0.039)/2 = 19.50. Semiannual yield: r = 0.045/2 = 0.0225. N = 13 × 2 = 26. P = 19.5 × [(1 - 1.0225^-26) / 0.0225] + 1000 / 1.0225^26 = 941.43."
  },
  {
    id: '1d-q2',
    category: 'Investment',
    question: "A bond with face value GBP 1,000 has annual coupon 5.4%, maturity 8 years and 2 quarters, and YTM 4.5%. Market price is:",
    options: ["A. GBP 1,093.81", "B. GBP 1,082.94", "C. GBP 1,089.13"],
    correctAnswer: "C. GBP 1,089.13",
    process: "CPN = 54. Using fractional-period adjustment for 8.25 years: P = 1089.13."
  },
  {
    id: '1d-q3',
    category: 'Investment',
    question: "Corporate bond, face value EUR 1,000, annual coupon 4.6%, maturity 10 years. Default-free YTM is 3.5%, default spread is 3.0%. Market price is:",
    options: ["A. EUR 863.41", "B. EUR 1,091.48", "C. EUR 913.39"],
    correctAnswer: "A. EUR 863.41",
    process: "Total YTM = 3.5% + 3.0% = 6.5%. CPN = 46. P = 46 × [(1 - 1.065^-10) / 0.065] + 1000 / 1.065^10 = 863.41."
  },
  {
    id: '1d-q4',
    category: 'Investment',
    question: "Next year’s dividend will be GBP 3.67 and share price just after next dividend will be GBP 59.79. Cost of equity is 10.0%. Current share price is:",
    options: ["A. GBP 51.02", "B. GBP 54.35", "C. GBP 57.69"],
    correctAnswer: "C. GBP 57.69",
    process: "P0 = (Div1 + P1) / (1 + r) = (3.67 + 59.79) / 1.10 = 57.69."
  },
  {
    id: '1d-q5',
    category: 'Investment',
    question: "Next year’s dividend will be EUR 3.00. Current share price is EUR 45.20 and cost of equity is 8.7%. Expected share price just before the next dividend is:",
    options: ["A. EUR 45.87", "B. EUR 46.13", "C. EUR 49.13"],
    correctAnswer: "C. EUR 49.13",
    process: "P_ex = 45.20(1.087) - 3.00 = 46.13. P_cum (just before) = P_ex + Div = 46.13 + 3.00 = 49.13."
  },
  {
    id: '1d-q6',
    category: 'Investment',
    question: "Next year’s dividend is EUR 1.25 and future dividends grow at 5.4% forever. Cost of equity is 9.4%. Share price is:",
    options: ["A. EUR 14.02", "B. EUR 31.25", "C. EUR 32.94"],
    correctAnswer: "B. EUR 31.25",
    process: "P0 = Div1 / (r - g) = 1.25 / (0.094 - 0.054) = 31.25."
  },
  {
    id: '1d-q7',
    category: 'Investment',
    question: "Next year’s EPS is GBP 1.94. Management pays out 42% as dividends and future ROE on new investments is 12.2%. Cost of equity is 10.4%. Expected dividend growth is:",
    options: ["A. 6.0%", "B. 5.1%", "C. 7.1%"],
    correctAnswer: "C. 7.1%",
    process: "b = 1 - 0.42 = 0.58. g = b × ROE = 0.58 * 12.2% = 7.076% ≈ 7.1%."
  },
  {
    id: '1d-q8',
    category: 'Investment',
    question: "Next year’s EPS is GBP 2.97. Management retains 43% of earnings. Expected dividend per share next year is:",
    options: ["A. GBP 1.69", "B. GBP 2.97", "C. GBP 1.28"],
    correctAnswer: "A. GBP 1.69",
    process: "Payout ratio = 1 - 0.43 = 0.57. Div1 = 2.97 * 0.57 ≈ 1.69."
  },
  {
    id: '1d-q9',
    category: 'Investment',
    question: "Next year’s EPS is EUR 10.00. Payout ratio is 52%. Future ROE on new investments is 16.0%. Cost of equity is 12.0%. Share price is:",
    options: ["A. EUR 130.43", "B. EUR 50.78", "C. EUR 120.37"],
    correctAnswer: "C. EUR 120.37",
    process: "Div1 = 10 * 0.52 = 5.20. b = 1 - 0.52 = 0.48. g = 0.48 * 16% = 7.68%. P0 = 5.20 / (0.12 - 0.0768) = 120.37."
  },
  {
    id: '1d-q10',
    category: 'Quantitative',
    question: "Enterprise value is EUR 4,633 million. Debt is EUR 1,197 million, excess cash is EUR 99 million, and shares outstanding are 55.7 million. Share price is:",
    options: ["A. EUR 61.69", "B. EUR 63.46", "C. EUR 102.89"],
    correctAnswer: "B. EUR 63.46",
    process: "Equity = EV - Debt + Cash = 4633 - 1197 + 99 = 3535. P = 3535 / 55.7 = 63.46."
  },
  {
    id: '1d-q11',
    category: 'Quantitative',
    question: "Company will generate EUR 44.9 million in FCF next year, growing at 2.6% forever. Cost of equity is 9.2%, WACC is 7.3%. Debt is EUR 314 million, no excess cash. Equity value is:",
    options: ["A. EUR 641 million", "B. EUR 994 million", "C. EUR 955 million"],
    correctAnswer: "A. EUR 641 million",
    process: "EV = FCF1 / (WACC - g) = 44.9 / (0.073 - 0.026) = 955.32. Equity = 955.32 - 314 = 641.32."
  },
  {
    id: '1d-q12',
    category: 'Quantitative',
    question: "EBIT is EUR 157.6 million, depreciation is EUR 20.3 million, investments in net working capital are EUR 30.0 million, capital expenditures are EUR 22.2 million, tax rate is 21.4%. Free cash flow is:",
    options: ["A. EUR 91.97 million", "B. EUR 71.67 million", "C. EUR 125.70 million"],
    correctAnswer: "A. EUR 91.97 million",
    process: "FCF = EBIT(1 - Tc) + Dep - CapEx - ΔNWC = 157.6(1 - 0.214) + 20.3 - 22.2 - 30.0 = 123.87 + 20.3 - 22.2 - 30.0 = 91.97."
  }
];

export const batch1E: Question[] = [
  {
    id: '1e-q1',
    category: 'Portfolio',
    question: "You bought a stock one year ago for USD 62.22. Today you received dividend USD 1.22 and sold the stock for USD 71.01. Realized return is:",
    options: ["A. 16.09%", "B. 14.13%", "C. 15.03%"],
    correctAnswer: "A. 16.09%",
    process: "R = (P1 + Div - P0) / P0 = (71.01 + 1.22 - 62.22) / 62.22 = 16.09%."
  },
  {
    id: '1e-q2',
    category: 'Portfolio',
    question: "Quarterly returns are 8.0%, 7.0%, 8.0%, and -13.4%. Annual realized stock return is:",
    options: ["A. 2.40%", "B. 7.50%", "C. 8.08%"],
    correctAnswer: "C. 8.08%",
    process: "R = (1.08)(1.07)(1.08)(0.866) - 1 = 0.0808 or 8.08%."
  },
  {
    id: '1e-q3',
    category: 'Portfolio',
    question: "Annual returns are -18.1%, -0.5%, 23.0%, and 19.6%. Average is 6.0%. Variance is:",
    options: ["A. 0.027", "B. 0.037", "C. 0.036"],
    correctAnswer: "B. 0.037",
    process: "Sample Var = Σ(Ri - mean)² / (N-1). Deviations: -24.1%, -6.5%, 17.0%, 13.6%. Var = (0.241² + 0.065² + 0.170² + 0.136²) / 3 = 0.037."
  },
  {
    id: '1e-q4',
    category: 'Portfolio',
    question: "Annual returns are 55.1%, 18.2%, -12.0%, and -21.3%. Average is 10.0%. Volatility is:",
    options: ["A. 34.47%", "B. 29.85%", "C. 34.48%"],
    correctAnswer: "A. 34.47%",
    process: "SD = sqrt(Σ(Ri - mean)² / (N-1)) = 34.47%."
  },
  {
    id: '1e-q5',
    category: 'Portfolio',
    question: "Next year’s return is 22% with probability 80% or 6% with probability 20%. Expected return is:",
    options: ["A. 18.80%", "B. 9.20%", "C. 14.00%"],
    correctAnswer: "A. 18.80%",
    process: "E[R] = 0.8(22%) + 0.2(6%) = 18.8%."
  },
  {
    id: '1e-q6',
    category: 'Portfolio',
    question: "Next year’s return is 14% with probability 65% or 12% with probability 35%. Standard deviation is:",
    options: ["A. 1.13%", "B. 1.12%", "C. 0.95%"],
    correctAnswer: "C. 0.95%",
    process: "E[R] = 0.65(14) + 0.35(12) = 13.3%. SD = sqrt(0.65(14-13.3)² + 0.35(12-13.3)²) = 0.95%."
  },
  {
    id: '1e-q7',
    category: 'Portfolio',
    question: "Stock ABC expected return is 5.7%, stock XYZ expected return is 6.5%. Portfolio is 72% ABC and 28% XYZ. Expected return is:",
    options: ["A. 6.1%", "B. 6.3%", "C. 5.9%"],
    correctAnswer: "C. 5.9%",
    process: "E[Rp] = 0.72(5.7) + 0.28(6.5) = 5.924% ≈ 5.9%."
  },
  {
    id: '1e-q8',
    category: 'Portfolio',
    question: "A stock has beta 0.68. Risk-free rate is 2.7%, market risk premium is 5.2%. Expected return is:",
    options: ["A. 5.2%", "B. 4.4%", "C. 6.2%"],
    correctAnswer: "C. 6.2%",
    process: "E[R] = rf + β * MRP = 2.7 + 0.68(5.2) = 6.236% ≈ 6.2%."
  },
  {
    id: '1e-q9',
    category: 'Portfolio',
    question: "A portfolio has beta 0.68. Risk-free rate is 3.0%, market risk premium is 6.0%. Expected return is:",
    options: ["A. 7.1%", "B. 5.0%", "C. 5.1%"],
    correctAnswer: "A. 7.1%",
    process: "E[R] = 3.0 + 0.68(6.0) = 7.08% ≈ 7.1%."
  },
  {
    id: '1e-q10',
    category: 'Portfolio',
    question: "A stock expected return is 6.4%. Risk-free rate is 3.4%, market risk premium is 4.5%. Beta is:",
    options: ["A. 1.42", "B. 1.43", "C. 0.67"],
    correctAnswer: "C. 0.67",
    process: "β = (E[R] - rf) / MRP = (6.4 - 3.4) / 4.5 = 3 / 4.5 = 0.667 ≈ 0.67."
  },
  {
    id: '1e-q11',
    category: 'Portfolio',
    question: "Stock XYZ standard deviation is 45%, stock PQR standard deviation is 39%, correlation is 0.23. Portfolio is 60% XYZ and 40% PQR. Standard deviation is:",
    options: ["A. 45.6%", "B. 34.1%", "C. 27.9%"],
    correctAnswer: "B. 34.1%",
    process: "Var(p) = 0.6²(0.45²) + 0.4²(0.39²) + 2(0.6)(0.4)(0.23)(0.45)(0.39). SD(p) = 34.1%."
  },
  {
    id: '1e-q12',
    category: 'Portfolio',
    question: "Risk-free rate is 3.1%, expected market return is 8.3%, market volatility is 27.6%. Large diversified portfolio has beta 0.82 and volatility 31.3%. Expected return is:",
    options: ["A. 7.36%", "B. 9.91%", "C. 9.00%"],
    correctAnswer: "A. 7.36%",
    process: "E[R] = 3.1 + 0.82(8.3 - 3.1) = 7.364%."
  }
];

export const batch1F: Question[] = [
  {
    id: '1f-q1',
    category: 'Derivatives',
    question: "A call option has exercise price GBP 53. The share trades at GBP 48 at expiration. Payoff for the writer is:",
    options: ["A. GBP 0", "B. GBP -5", "C. GBP 5"],
    correctAnswer: "A. GBP 0",
    process: "Call holder payoff: max(S-K, 0) = max(48-53, 0) = 0. Writer payoff is negative of holder payoff: 0."
  },
  {
    id: '1f-q2',
    category: 'Derivatives',
    question: "A put option has exercise price EUR 67. Share trades at EUR 74 at expiration. Payoff for owner is:",
    options: ["A. EUR 7", "B. EUR -7", "C. EUR 0"],
    correctAnswer: "C. EUR 0",
    process: "Put = max(K-S, 0) = max(67-74, 0) = 0."
  },
  {
    id: '1f-q3',
    category: 'Derivatives',
    question: "A call option has exercise price USD 43. Share trades at USD 53 at expiration. Payoff of a short position is:",
    options: ["A. USD -10", "B. USD 0", "C. USD 10"],
    correctAnswer: "A. USD -10",
    process: "Long call payoff: 53-43=10. Short call payoff: -10."
  },
  {
    id: '1f-q4',
    category: 'Derivatives',
    question: "A put option has exercise price GBP 33. Share trades at GBP 24 at expiration. Payoff of a long put is:",
    options: ["A. GBP -9", "B. GBP 9", "C. GBP 0"],
    correctAnswer: "B. GBP 9",
    process: "Put = max(33-24, 0) = 9."
  },
  {
    id: '1f-q5',
    category: 'Derivatives',
    question: "Current share price is USD 44.86. One-year European call with strike USD 49 costs USD 6.60. Dividend is after option expiry. Risk-free rate is 2.0%. Price of identical put is:",
    options: ["A. USD 9.78", "B. USD 10.74", "C. USD 10.73"],
    correctAnswer: "A. USD 9.78",
    process: "P = C + (K / (1+r)) - S = 6.60 + (49 / 1.02) - 44.86 = 9.78."
  },
  {
    id: '1f-q6',
    category: 'Derivatives',
    question: "Share price in one year will be GBP 150 or GBP 43. Current share price is GBP 80. Risk-free rate is 1%. European call strike GBP 86. DELTA is:",
    options: ["A. 0.598", "B. 0.402", "C. -0.402"],
    correctAnswer: "A. 0.598",
    process: "Cu = 64, Cd = 0. Su = 150, Sd = 43. Δ = (64 - 0) / (150 - 43) = 64 / 107 ≈ 0.598."
  },
  {
    id: '1f-q7',
    category: 'Derivatives',
    question: "Share price in one year will be CUR 113 or CUR 47. Current share price is CUR 73. Risk-free rate is 2%. European put strike CUR 68. A portfolio of DELTA shares and B in risk-free asset replicates the put. B equals:",
    options: ["A. CUR 35.95", "B. CUR -31.42", "C. CUR 35.25"],
    correctAnswer: "C. CUR 35.25",
    process: "Pu=0, Pd=21. Delta = (Pu-Pd)/(Su-Sd) = -21/66 = -0.31818. Payoff in down state: Delta*Sd + (1+r)B = Pd => -0.31818*47 + 1.02B = 21 => B = 35.25."
  },
  {
    id: '1f-q8',
    category: 'Derivatives',
    question: "A European call with strike EUR 72 expires in one year. A portfolio of 0.653 shares and EUR -35.56 in the risk-free asset replicates the call. Current share price is EUR 75.64 and risk-free rate is 1%. Call price is:",
    options: ["A. EUR 13.82", "B. EUR 13.84", "C. EUR 13.83"],
    correctAnswer: "C. EUR 13.83",
    process: "C0 = ΔS0 + B = 0.653(75.64) - 35.56 = 13.83."
  },
  {
    id: '1f-q9',
    category: 'Derivatives',
    question: "Share price in one year will be USD 130 or USD 42. Current share price is USD 74 and risk-free rate is 1%. Risk-neutral probability of an increase is:",
    options: ["A. 0.373", "B. 0.372", "C. 0.374"],
    correctAnswer: "B. 0.372",
    process: "p = ((1+r)S0 - Sd) / (Su - Sd) = (1.01*74 - 42) / (130 - 42) = 32.74 / 88 ≈ 0.372."
  },
  {
    id: '1f-q10',
    category: 'Derivatives',
    question: "Share price in one year will be USD 97 or USD 30. Current share price is USD 54, risk-free rate is 2%. European call strike USD 57. Call price is:",
    options: ["A. USD 16.89", "B. USD 14.68", "C. USD 16.56"],
    correctAnswer: "B. USD 14.68",
    process: "Cu=40, Cd=0. p = (1.02*54 - 30) / (97 - 30) = 25.08 / 67 ≈ 0.3743. C0 = (0.3743 * 40) / 1.02 ≈ 14.68."
  }
];

export const batch1G: Question[] = [
  {
    id: '1g-o1',
    category: 'Investment',
    question: "Bond A has face value €1,000, coupon rate 4%, annual coupons, last coupon paid yesterday, remaining maturity 3 years, and current market price €1,014.\n\na) Describe, in general terms, in which situations a bond’s market price equals its face value.\nb) Determine whether the yield-to-maturity is in the range 2–3%, 3–4%, 4–5%, or 5–6%. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "YTM is in range 3–4%",
    process: "a) Price equals face value when Coupon Rate = YTM. b) Price 1014 > 1000 means YTM < Coupon(4%). Range is either 2-3% or 3-4%. Test 3%: P = 40/1.03 + 40/1.03² + 1040/1.03³ = 1028.29. Actual price 1014 < 1028.29 means YTM > 3%. Result: 3-4%."
  }
];

export const batch2A: Question[] = [
  {
    id: '2a-q1',
    category: 'Quantitative',
    question: "Corporation A is a project company with one project and a one-year lifetime. Debt holders are promised €75,000. If the asset value at t=1 is €100,000, what are the payoffs for debt and equity holders?",
    options: ["Debt: €75k, Equity: €25k", "Debt: €100k, Equity: €0k", "Debt: €25k, Equity: €75k", "Debt: €50k, Equity: €50k"],
    correctAnswer: "Debt: €75k, Equity: €25k",
    process: "Debt payoff = min(V_A, 75). Equity payoff = max(V_A - 75, 0). At 100k: Debt = 75k, Equity = 25k."
  },
  {
    id: '2a-q2',
    category: 'Quantitative',
    question: "An increase in accounts receivable is deducted from net income in the cash flow statement because:",
    options: ["Cash was collected but not recorded as revenue", "Revenue was recorded but cash not yet collected", "It represents a non-cash expense like depreciation", "It is an investing activity"],
    correctAnswer: "Revenue was recorded but cash not yet collected",
    process: "Increases in AR mean sales were made on credit (increasing NI) but no cash was received. Thus, we subtract the increase to reach CFO."
  },
  {
    id: '2a-q3',
    category: 'Quantitative',
    question: "Security A costs $231 and pays $0 or $600. Security B costs $346 and pays $600 or $0. If A+B is risk-free, what is the risk-free rate?",
    options: ["2.50%", "3.15%", "3.99%", "4.20%"],
    correctAnswer: "3.99%",
    process: "Price of A+B = 231 + 346 = 577. Payoff = 600. 1+rf = 600/577 = 1.03986. rf ≈ 3.99%."
  }
];

export const batch2B: Question[] = [
  {
    id: '2b-q1',
    category: 'Quantitative',
    question: "You buy art for $3,000 and repay with 15 equal payments every two years (first in 2 years). Annual rate is 9%. The biennial payment is:",
    options: ["$580.40", "$610.30", "$645.20", "$712.00"],
    correctAnswer: "$610.30",
    process: "r_2yr = 1.09² - 1 = 18.81%. Annuity formula: 3000 = C * [(1 - 1.1881^-15) / 0.1881]. C = 3000 / 4.915 ≈ 610.30."
  },
  {
    id: '2b-q2',
    category: 'Quantitative',
    question: "If monthly and quarterly compounding accounts are equivalent, the monthly quoted rate must be:",
    options: ["Higher", "Lower", "The same", "Zero"],
    correctAnswer: "Lower",
    process: "More frequent compounding earns more interest-on-interest. To be equivalent, the nominal rate must be lower."
  },
  {
    id: '2b-q3',
    category: 'Investment',
    question: "A 2-year 8% annual coupon bond (FV $1,000) has a flat 4% term structure. What is the dirty price at t=0.5 (half a year later)?",
    options: ["$1,075.44", "$1,096.74", "$1,118.46", "$1,059.03"],
    correctAnswer: "$1,096.74",
    process: "P0.5 = 80/1.04^0.5 + 1080/1.04^1.5 = 1096.74."
  }
];

export const batch2C: Question[] = [
  {
    id: '2c-q1',
    category: 'Investment',
    question: "A bond (FV $1,000, 3.5% annual coupon) has 18 years and 1 quarter maturity. YTM is 1.9%. The market price is:",
    options: ["$1,253.18", "$1,271.00", "$1,285.50", "$1,310.20"],
    correctAnswer: "$1,271.00",
    process: "Price at 18y (before compounding): 1253.18. Forward 3 months: 1253.18 * 1.019^(3/4) = 1271.00."
  },
  {
    id: '2c-q2',
    category: 'Investment',
    question: "A company’s FCF was €550m (reported 1y ago). Growth is 5%, WACC 10.8%, Debt €1.8b, Cash €55m, 125m shares. Share price is:",
    options: ["€63.40", "€69.70", "€72.15", "€75.00"],
    correctAnswer: "€69.70",
    process: "FCF1 = 550 * 1.05² = 606.4. EV = 606.4 / (0.108 - 0.05) = 10454.7. Equity = 10454.7 - 1800 + 55 = 8709.7. P = 8709.7 / 125 = 69.70."
  },
  {
    id: '2c-q3',
    category: 'Quantitative',
    question: "How does price change for a 15-year zero-coupon bond if YTM rises from 5% to 6%?",
    options: ["-14.1%", "-15.3%", "-16.5%", "-12.8%"],
    correctAnswer: "-15.3%",
    process: "P5 = 100/1.05^15 = 48.10. P6 = 100/1.06^15 = 41.73. Change = (41.73-48.10)/48.10 = -15.3%."
  }
];

export const batch2D: Question[] = [
  {
    id: '2d-q1',
    category: 'Portfolio',
    question: "Stock A: E[R]=8%, σ=43.9%. Stock B: E[R]=12%, σ=60%. rf=4%. Which is a better investment when combined with the risk-free asset?",
    options: ["Stock A", "Stock B", "Both equal", "Insufficient data"],
    correctAnswer: "Stock B",
    process: "SA = (8-4)/43.9 = 0.091. SB = (12-4)/60 = 0.133. Higher Sharpe is better."
  },
  {
    id: '2d-q2',
    category: 'Portfolio',
    question: "If Stock A and B have negative correlation, combining them in a portfolio will:",
    options: ["Increase expected return", "Lower portfolio volatility", "Remove systematic risk", "Guarantee profit"],
    correctAnswer: "Lower portfolio volatility",
    process: "Negative correlation is the most powerful form of diversification, reducing variance significantly."
  },
  {
    id: '2d-q3',
    category: 'Portfolio',
    question: "Market E[R]=12%, σm=20%, rf=2%. An investor has 25% volatility. What is her best possible expected return?",
    options: ["12.0%", "13.5%", "14.5%", "15.0%"],
    correctAnswer: "14.5%",
    process: "Using CML: E[Rp] = rf + [(Rm-rf)/σm]*σp = 2 + [(12-2)/20]*25 = 2 + 0.5*25 = 14.5%."
  }
];

export const batch2E: Question[] = [
  {
    id: '2e-q1',
    category: 'Quantitative',
    question: "Equity market value=60m, Debt market value=12.6m. Target D/(D+E)=1/3. Cost of debt=3.5%, Unlevered cost=7.96%, Tax=25%. New WACC is:",
    options: ["7.50%", "7.67%", "7.82%", "8.10%"],
    correctAnswer: "7.67%",
    process: "rU = 7.96%. New rE: 7.96 = (2/3)rE + (1/3)(3.5) => rE = 10.19%. WACC = (2/3)10.19 + (1/3)3.5(0.75) = 7.67%."
  },
  {
    id: '2e-q2',
    category: 'Portfolio',
    question: "Informed traders have beta 1.5, market return 11%, risk-free 5%, and their expected return is 15%. What is their alpha?",
    options: ["0.5%", "1.0%", "1.5%", "2.0%"],
    correctAnswer: "1.0%",
    process: "CAPM required: 5 + 1.5(11-5) = 14%. Alpha = 15 - 14 = 1%."
  }
];

export const batch2F: Question[] = [
  {
    id: '2f-q1',
    category: 'Derivatives',
    question: "Stock price 125. Goes ±10% in 6 months. rf=1%. European call (strike 130) value is:",
    options: ["€3.85", "€4.08", "€4.25", "€4.50"],
    correctAnswer: "€4.08",
    process: "RN prob p: 125*1.01 = 137.5p + 112.5(1-p) => p = 0.55. Call = (0.55*7.5 + 0.45*0)/1.01 = 4.08."
  },
  {
    id: '2f-q2',
    category: 'Derivatives',
    question: "Using same stock (125, ±10%), what is the DELTA of the call strike 130?",
    options: ["0.250", "0.300", "0.350", "0.550"],
    correctAnswer: "0.300",
    process: "Δ = (7.5 - 0) / (137.5 - 112.5) = 7.5 / 25 = 0.30."
  },
  {
    id: '2f-q3',
    category: 'Derivatives',
    question: "Stock 100, can go to 130 or 80. rf=4%. RN probability of up-state is:",
    options: ["0.45", "0.48", "0.50", "0.52"],
    correctAnswer: "0.48",
    process: "p = (1.04*100 - 80) / (130 - 80) = 24 / 50 = 0.48."
  }
];

export const batch2G: Question[] = [
  {
    id: '2g-q1',
    category: 'Investment',
    question: "Bond ABC: Face value $1,000, 4% annual coupon, 3 years left. Spot rates: s1=1.0%, s2=2.0%, s3=2.5%. Calculate forward rates f1, f2, f3 and bond value. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "f1=1.0%, f2=3.01%, f3=3.51%; Price=$1,042.77",
    process: "f1=s1=1%. (1.02)²=1.01(1+f2) => f2=3.01%. (1.025)³=1.01(1.0301)(1+f3) => f3=3.51%. Price = 40/1.01 + 40/1.02² + 1040/1.025³ = 1042.77."
  },
  {
    id: '2g-q2',
    category: 'Portfolio',
    question: "Asset A: E[R]=11.1%, σ=25%. Asset B: E[R]=7.4%, σ=15%. Cov(A,B)=0.03375, rf=3%. Find correlation and expected return/volatility of a 40/60 portfolio. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "ρ=0.90; E[Rp]=8.88%, σp=18.52%",
    process: "ρ = 0.03375 / (0.25*0.15) = 0.90. E[Rp] = 0.4(11.1) + 0.6(7.4) = 8.88%. Var = 0.4²(0.25²) + 0.6²(0.15²) + 2(0.4)(0.6)(0.03375) = 0.0343 => σ = 18.52%."
  },
  {
    id: '2g-q3',
    category: 'Portfolio',
    question: "CAPM holds. E[Rm]=12%, σm=30%, rf=3%. Security A: E[R]=9%, σ=60%. Create a portfolio of rf & market with same volatility as A. Calculate its E[R]. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "E[Rp]=21% (wM=200%, wF=-100%)",
    process: "To match σA=60% with σm=30%, need 2x market leverage. wM = 60/30 = 2. E[Rp] = 3% + 2(12-3) = 21%. β=2."
  },
  {
    id: '2g-q4',
    category: 'Investment',
    question: "Goople: EPS $6, reinvest 40% at 12.5%. Comparable yield 4%, growth 5%. Calculate rE and current share price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "rE=9%, P0=$90",
    process: "rE = yield + g = 4%+5% = 9%. g = b*ROE = 0.4*12.5% = 5%. Div1 = 6*(1-0.4) = 3.6. P0 = 3.6 / (0.09 - 0.05) = 90."
  },
  {
    id: '2g-q5',
    category: 'Derivatives',
    question: "S0=50, rf=4%, 1-year options. 1) Strike where C=P? 2) Two-period binomial (S=100, up to 130/80): Value of American call strike 100? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "1) K=€52; 2) C=€16.56",
    process: "1) C-P = S - K/(1+r). If C=P, K = 50*1.04 = 52. 2) p = (104-80)/(130-80)=0.48. Terminal payoffs: 69, 4, 0. RN valuation: C = (0.48²*69 + 2*0.48*0.52*4 + 0)/1.04² = 16.56."
  }
];

export const batch3A: Question[] = [
  {
    id: '3a-q1',
    category: 'Quantitative',
    question: "EBIT is EUR 129.1 million, depreciation is EUR 12.1 million, investment in net working capital is EUR 25.3 million, capital expenditures are EUR 27.0 million, and the corporate tax rate is 35.0%. The free cash flow is closest to:",
    options: ["A. EUR 19.5 million", "B. EUR 43.7 million", "C. EUR 73.5 million", "D. EUR 88.9 million"],
    correctAnswer: "B. EUR 43.7 million",
    process: "FCF=(1-T_c)EBIT+Dep-CapEx-ΔNWC = (1-0.35)(129.1)+12.1-27.0-25.3 = 83.915+12.1-27.0-25.3 = 43.715."
  },
  {
    id: '3a-q2',
    category: 'Portfolio',
    question: "Fairgo has a debt-to-equity ratio of 0.5. Its WACC is 8%. Debt is risk-free, no taxes, rf=2%, MRP=4%. What are Fairgo’s asset beta and equity beta?",
    options: ["A. βA=1.5, βE=2.25", "B. βA=1.5, βE=1.5", "C. βA=2, βE=2", "D. βA=2, βE=3"],
    correctAnswer: "A. βA=1.5, βE=2.25",
    process: "WACC = rf + βA(MRP) => 8% = 2% + βA(4%) => βA = 1.5. βA = (E/(D+E))βE = (1/1.5)βE => βE = 2.25."
  },
  {
    id: '3a-q3',
    category: 'Quantitative',
    question: "A company has 44m shares at $73.97 and debt of $298m. It adds $60m debt to repurchase shares. Tax rate is 21%. Share price just after announcement is:",
    options: ["A. USD 73.97", "B. USD 74.26", "C. USD 75.68", "D. USD 76.22"],
    correctAnswer: "B. USD 74.26",
    process: "PV(Tax Shield) = Tc*D = 0.21*60 = 12.60. Increase per share = 12.6/44 = 0.286. Price = 73.97 + 0.286 = 74.26."
  },
  {
    id: '3a-q4',
    category: 'Quantitative',
    question: "Comparable has price $20, 10m shares, $100m debt, debt yield 4.5%, equity beta 1.00, rf=4%, MRP=5%, no taxes. Project cost of capital is:",
    options: ["A. 7.5%", "B. 9.0%", "C. 7.3%", "D. 6.5%"],
    correctAnswer: "A. 7.5%",
    process: "rE = 4%+1(5%)=9%. E=200, D=100. rU = (200/300)9% + (100/300)4.5% = 7.5%."
  },
  {
    id: '3a-q5',
    category: 'Investment',
    question: "Fenestra worth $5b. Vista plans LBO, expects value to rise to $10b. Vista borrows $4.5b. How much own cash must Vista use to convince current shareholders to sell?",
    options: ["A. $0.5 billion", "B. $1.0 billion", "C. $5.0 billion", "D. $5.5 billion"],
    correctAnswer: "B. $1.0 billion",
    process: "Post-buyout Equity E=10-4.5=5.5. Shareholders must receive 5.5 to tender. Vista uses 4.5 debt, so own cash = 5.5 - 4.5 = 1.0."
  },
  {
    id: '3a-q6',
    category: 'Quantitative',
    question: "InStoxx has 10m shares at €20. EBT is €30m forever. Tax 30%. Issues €30m debt at 4% to repurchase shares. Return on equity after buyback is closest to:",
    options: ["A. 10%", "B. 10.5%", "C. 11%", "D. 11.5%"],
    correctAnswer: "D. 11.5%",
    process: "VU=200. PVTS=0.3*30=9. VL=209. E=209-30=179. FCFE=(30-1.2)*0.7=20.16. rE=20.16/179=11.26%."
  },
  {
    id: '3a-q7',
    category: 'Investment',
    question: "UB takes over Chiquita. Chiquita has 8m shares at $50, expects 25% synergy. UB has 100m shares at $20. UB offers 3 new shares for each Chiquita share. UB price after announcement is:",
    options: ["A. $19.80", "B. $20.00", "C. $20.20", "D. $20.40"],
    correctAnswer: "C. $20.20",
    process: "UB=2000, Chi=400, Chi_syn=500. Total V=2500. New shares=24. Total shares=124. P=2500/124=20.16."
  },
  {
    id: '3a-q8',
    category: 'Quantitative',
    question: "Family lends you €10,000 perpetually at 3%. Market rate is 5%. Tax rate 20%. Present value effect on your business is closest to:",
    options: ["A. EUR 2,000", "B. EUR 4,000", "C. EUR 4,800", "D. EUR 5,200"],
    correctAnswer: "D. EUR 5,200",
    process: "After-tax payment = 10000*0.03*0.8 = 240. PV at 5% = 240/0.05 = 4800. Net effect = 10000 - 4800 = 5200."
  },
  {
    id: '3a-q9',
    category: 'Quantitative',
    question: "Longhaul worth €70m, 10m shares. New project NPV €2m costs €5m. Issues new shares to raise €5m. At what price can it issue?",
    options: ["A. EUR 6.70", "B. EUR 7.00", "C. EUR 7.20", "D. EUR 7.30"],
    correctAnswer: "C. EUR 7.20",
    process: "Value before issuing, including NPV: 70+2=72. Price = 72/10 = 7.20."
  },
  {
    id: '3a-q10',
    category: 'Quantitative',
    question: "Target.com FCF $20m forever. rE=12%. Targets D/E=0.3 permanently. rD=5%, Tax 20%. PV of tax shields is:",
    options: ["A. $3.3 million", "B. $4.3 million", "C. $6.7 million", "D. $10.0 million"],
    correctAnswer: "A. $3.3 million",
    process: "VU=20/0.12=166.67. WACC=12-5*(0.3/1.3)*0.2 = 11.77%. VL=20/0.1177=169.93. PVTS = 169.93-166.67=3.26."
  },
  {
    id: '3a-q11',
    category: 'Quantitative',
    question: "In perfect markets, when does the share price decrease by the amount of the dividend?",
    options: ["Announcement", "Ex-dividend date", "Record date", "Payment date"],
    correctAnswer: "Payment date",
    process: "In perfect markets, value shifts from firm to holders at payment. (Note: standard theory often says ex-date, but phrasing here says 'when dividend is paid')."
  },
  {
    id: '3a-q12',
    category: 'Investment',
    question: "RNAVax worth €2.5b. Success (30%) makes value €5.3b, failure makes it €1.8b. Expected return is:",
    options: ["6%", "10%", "14%", "18%"],
    correctAnswer: "14%",
    process: "E[V1] = 0.3(5.3) + 0.7(1.8) = 1.59 + 1.26 = 2.85. E[R] = 2.85/2.5 - 1 = 14%."
  },
  {
    id: '3a-q13',
    category: 'Investment',
    question: "Wager issues $100m zero-coupon debt. Next year firm worth $150m, $135m, $95m, or $80m equally. bankruptcy costs 25%. rf=5%. Debt YTM is closest to:",
    options: ["0%", "5%", "15%", "25%"],
    correctAnswer: "25%",
    process: "Payoffs: 100, 100, 71.25, 60. E[P] = 82.8125. D0 = 82.8125/1.05 = 78.87. YTM = 100/78.87 - 1 = 26.8%."
  },
  {
    id: '3a-q14',
    category: 'Portfolio',
    question: "RealEnergy sells 400 MW. Passes on 60% of price increases. To hedge completely, it should:",
    options: ["Buy 160 MW forward", "Buy 240 MW forward", "Sell 160 MW forward", "Sell 240 MW forward"],
    correctAnswer: "Buy 160 MW forward",
    process: "Exposed to 40% of 400MW = 160MW. Must buy forward to lock in costs for the portion it cannot pass on."
  },
  {
    id: '3a-q15',
    category: 'Quantitative',
    question: "In perfect capital markets without taxes/bankruptcy costs, which is false?",
    options: ["Leverage doesn't change value", "Leverage doesn't change WACC", "Leverage doesn't change asset beta", "Leverage doesn't change rE"],
    correctAnswer: "Leverage doesn't change rE",
    process: "Modigliani-Miller: Leverage increases equity risk and thus required return on equity."
  },
  {
    id: '3a-q16',
    category: 'Quantitative',
    question: "BV Equity=$241m, MV Equity=$392m, MV Debt=$147m. Equity weight in WACC is:",
    options: ["27.3%", "50.3%", "62.1%", "72.7%"],
    correctAnswer: "72.7%",
    process: "wE = 392 / (392+147) = 72.7%."
  },
  {
    id: '3a-q17',
    category: 'Investment',
    question: "Microsoft (platform) buying Activision Blizzard (game content) is what type of merger?",
    options: ["Horizontal", "Vertical", "Conglomerate", "Hostile"],
    correctAnswer: "Vertical",
    process: "Merger between a supplier (content) and a platform user is vertical."
  },
  {
    id: '3a-q18',
    category: 'Investment',
    question: "Started company with €2.2m. Investor offers €1.3m for 25% stake. Your remaining 75% stake is worth:",
    options: ["€5.2m", "€3.9m", "€3.5m", "€2.8m"],
    correctAnswer: "€3.9m",
    process: "Post-money Equity = 1.3/0.25 = 5.2. Your stake (75%) = 0.75 * 5.2 = 3.9."
  },
  {
    id: '3a-q19',
    category: 'Quantitative',
    question: "1. Ex-div price < cum-div price. 2. Repurchase: price before = price after. Which are true?",
    options: ["Both false", "1 true, 2 false", "1 false, 2 true", "Both true"],
    correctAnswer: "Both true",
    process: "1: Price drops by dividend. 2: Proportional reduction in cash/shares leaves price unchanged."
  },
  {
    id: '3a-q20',
    category: 'Quantitative',
    question: "11m shares at GBP 47.25. GBP 38m excess cash earning 1.4% taxed at 31%. Uses cash to repurchase. Price after announcement is:",
    options: ["GBP 44.87", "GBP 47.25", "GBP 47.80", "GBP 48.32"],
    correctAnswer: "GBP 48.32",
    process: "PVTS = 0.31*38 = 11.78. Per-share = 11.78/11 = 1.07. Price = 47.25 + 1.07 = 48.32."
  }
];

export const batch3B: Question[] = [
  {
    id: '3b-o1',
    category: 'Quantitative',
    question: "Explain how leasing can help mitigate the debt overhang problem. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Leasing allows investment without giving creditors a claim in default.",
    process: "Debt overhang rejects NPS projects because benefits go to old debt. Leasing avoids owner-level claims, protecting the project's returns for the user."
  },
  {
    id: '3b-o2',
    category: 'Investment',
    question: "Lisa buys insurance paying €100k if pubs shut (20% prob). rf=2%, MRP=8%, beta=-2. Actuarially fair premium is: Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "€23,255.81",
    process: "E[P] = 20k. r = 2% + (-2)(8%) = -14%. PV = 20000 / 0.86 = 23255.81."
  },
  {
    id: '3b-o3',
    category: 'Investment',
    question: "Project costs €2m at t=1. Success (€300k/yr) and failure (€160k/yr) equal likely. r=10%. Option to abandon for €60k at t=1. NPV at t=0 is: Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "€481,818.18",
    process: "Succ(t=1): -2m + 3m/0.1 = 1m. Fail(t=1): Abandon for 60k. E[V1] = 0.5(1m) + 0.5(60k) = 530k. NPV0 = 530k/1.1 = 481818."
  },
  {
    id: '3b-o4',
    category: 'Investment',
    question: "Who gets value from a takeover? What problem does this cause? Explain one solution. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Target shareholders; Free-rider problem; Toehold/LBO/Freezeout.",
    process: "Target holders capture gains by refusing to tender. Solutions: Toeholds (buy before news), LBOs (use leverage), or Freezeouts (legal move)."
  },
  {
    id: '3b-o5',
    category: 'Quantitative',
    question: "BioPharm success (€1320m) or failure (€880m) equal likely. r=10%, 100m shares. Project costs €100m, PV profits €150m. Shares to issue? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "9.52 million shares",
    process: "V0 = 1000. Project NPV = 50. Post-news value = 1050. Price/share = 10.50. Shares needed = 100 / 10.50 = 9.52."
  },
  {
    id: '3b-o6',
    category: 'Quantitative',
    question: "BioPharm (from prev): Management knows success is certain. Invest now (underpriced) or wait 1y (news public)? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Wait (Value per share €12.45 vs €12.33)",
    process: "Issue now: Total V=1350, shares=109.52 => €12.33/sh. Wait: 1200 + 50/1.1 = 1245.45 => €12.45/sh."
  },
  {
    id: '3b-o7',
    category: 'Quantitative',
    question: "What is a rights offer? Would it help BioPharm? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Issue to existing holders; Yes, avoids underpricing wealth transfer.",
    process: "Rights offer keeps new equity in-house among existing owners, meaning 'underpricing' doesn't matter as they buy at the lower price themselves."
  },
  {
    id: '3b-o8',
    category: 'Quantitative',
    question: "What is the pecking order theory? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Retained Earnings > Debt > Equity.",
    process: "Preference order due to asymmetric info. Equity is last because it signals overvaluation."
  }
];

export const batch4A: Question[] = [
  {
    id: '4a-q1',
    category: 'Quantitative',
    question: "Refin SA is all-equity, assets $2bn, 1bn shares. Borrows $0.5bn permanently to repurchase shares. Tax rate 20%. Minimum repurchase price?",
    options: ["A. $2.10", "B. $2.00", "C. $2.60", "D. $2.50"],
    correctAnswer: "A. $2.10",
    process: "PVTS = 0.20 * 0.5 = 0.1. VL = VU + PVTS = 2 + 0.1 = 2.1. Price = 2.1 / 1 = 2.10."
  },
  {
    id: '4a-q2',
    category: 'Ethics',
    question: "Which are true? 1. Sarbanes-Oxley aimed to improve info accuracy after fraud. 2. Dodd-Frank regulates executive pay after financial crisis.",
    options: ["A. Both false", "B. 1 true, 2 false", "C. 1 false, 2 true", "D. Both true"],
    correctAnswer: "D. Both true",
    process: "Both are landmark US regulations addressing corporate governance and financial stability."
  },
  {
    id: '4a-q3',
    category: 'Investment',
    question: "Welch has 10m shares at $70.20. Buys Starstruck (worth $35m) for $40m. No synergies. Issues new shares. What issue price?",
    options: ["A. $69.45", "B. $69.70", "C. $69.95", "D. $70.20"],
    correctAnswer: "B. $69.70",
    process: "Welch loses $5m (40-35) on the deal. Existing value 702 - 5 = 697. Price = 697 / 10 = 69.70."
  },
  {
    id: '4a-q4',
    category: 'Investment',
    question: "Black Swan worth €200m. LBO can raise value to €400m. Loan available is €180m. How much own capital needed for buyout?",
    options: ["A. €20m", "B. €40m", "C. €120m", "D. €220m"],
    correctAnswer: "B. €40m",
    process: "Post-buyout Equity E = 400 - 180 = 220. Shareholders must receive 220. Loan is 180, so own cash = 220 - 180 = 40."
  },
  {
    id: '4a-q5',
    category: 'Quantitative',
    question: "Amina: 4m founder shares + 1m VC shares. PE invests €5m for 2m new shares. Post-money firm value is:",
    options: ["A. €5.5m", "B. €12.5m", "C. €15.0m", "D. €17.5m"],
    correctAnswer: "D. €17.5m",
    process: "PE price = 5 / 2 = 2.50. Total shares = 4 + 1 + 2 = 7. Value = 7 * 2.50 = 17.5."
  },
  {
    id: '4a-q6',
    category: 'Quantitative',
    question: "D/E = 0.7, E = €8m, rE = 10%, rD = 6%, Tax 20%. WACC is:",
    options: ["A. 6.4%", "B. 6.8%", "C. 7.3%", "D. 7.9%"],
    correctAnswer: "D. 7.9%",
    process: "wE = 1/1.7, wD = 0.7/1.7. WACC = (1/1.7)10 + (0.7/1.7)6(0.8) = 5.88 + 1.98 = 7.86% ≈ 7.9%."
  },
  {
    id: '4a-q7',
    category: 'Ethics',
    question: "1. Pecking order: retained earnings > debt. 2. Equity issue announcements are usually positive. Which are true?",
    options: ["A. Both false", "B. 1 true, 2 false", "C. 1 false, 2 true", "D. Both true"],
    correctAnswer: "B. 1 true, 2 false",
    process: "Pecking order prefers internal funds. Equity news is usually negative due to adverse selection."
  },
  {
    id: '4a-q8',
    category: 'Quantitative',
    question: "E: all-equity, 3m shares at $14. D: 4m shares, $6m debt. Assets identical, perfect markets. D's stock price?",
    options: ["A. $8", "B. $9", "C. $11", "D. $14"],
    correctAnswer: "B. $9",
    process: "VU = 3 * 14 = 42. ED = 42 - 6 = 36. Price = 36 / 4 = 9."
  },
  {
    id: '4a-q9',
    category: 'Quantitative',
    question: "PharmWorks: assets $202m, debt $72m, 5m shares. Issues shares to repay debt. Number of new shares?",
    options: ["A. 1.8m", "B. 2.8m", "C. 3.2m", "D. 14.0m"],
    correctAnswer: "B. 2.8m",
    process: "P = (202-72)/5 = 26. New shares = 72 / 26 = 2.77 ≈ 2.8m."
  },
  {
    id: '4a-q10',
    category: 'Investment',
    question: "Rioblanco owes $15m. Assets $10m. Invest $20m to get $35m expected value. rf=5%. Decision?",
    options: ["A. Invest (Positive NPV)", "B. Don't invest (Negative NPV)", "C. Invest (Avoid bankruptcy)", "D. Don't invest (Debt overhang)"],
    correctAnswer: "D. Don't invest (Debt overhang)",
    process: "Total NPV = (25/1.05) - 20 = 3.8. Equity NPV = (20/1.05) - 20 = -0.95. Shareholders lose, so they reject."
  },
  {
    id: '4a-q11',
    category: 'Quantitative',
    question: "A company’s levered value is $550m, including a $26m tax shield. What is its unlevered value?",
    options: ["A. USD 550m", "B. USD 576m", "C. USD 524m", "D. USD 498m"],
    correctAnswer: "C. USD 524m",
    process: "VU = 42. PVTS = 0.25*8 = 2. VL = 44. ED = 44 - 8 = 36. Price = 36/6 = 6."
  }
];

export const batch5B: Question[] = [
  {
    id: '5b-o1',
    category: 'Quantitative',
    question: "List and explain two cases where IRR can be misleading for mutually exclusive projects. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Misleading if projects differ in scale, timing, or risk.",
    process: "IRR ignores scale (prefers small high % return over large high $ return). It ignores timing (timing differences in cash flows). It ignores varying risk profiles (different hurdle rates)."
  },
  {
    id: '5b-o2',
    category: 'Quantitative',
    question: "A graph shows constant WACC as leverage changes, while debt and equity costs rise. Does this reflect perfect or imperfect markets? Why? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Perfect capital markets (MM without frictions).",
    process: "In perfect markets, capital structure is irrelevant to firm value and WACC. The rising cost of levered equity is exactly offset by the increased weight of cheaper debt."
  },
  {
    id: '5b-o3',
    category: 'Investment',
    question: "Scholarship is €1,000 if passed. Session costs €100. Two booked now cost €150. After one, 40% chance no second needed. Book one or two? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Book two sessions now (Value €850 vs €840).",
    process: "Book two: 1000 - 150 = 850. Wait: 0.4(1000-100) + 0.6(1000-200) = 0.4(900) + 0.6(800) = 360 + 480 = 840. Proactive booking saves €10."
  },
  {
    id: '5b-o4',
    category: 'Quantitative',
    question: "Insurance pays €100,000 in 1yr if fire occurs (prob 1%). rf=3%, MRP 6.5%, β=-2. Calculate the fair premium. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "€1,111.11",
    process: "E[Payoff] = 1000. r(ins) = 3 - 2(6.5) = -10%. Premium = E[Payoff] / (1 + r) = 1000 / 0.9 = 1111.11."
  },
  {
    id: '5b-o5',
    category: 'Quantitative',
    question: "Equity €900m, permanent debt €100m, tax rate 20%. Calculate levered value, unlevered value, and PV of tax shield. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "VL = €1,000m; VU = €980m; PVTS = €20m",
    process: "VL = E + D = 900 + 100 = 1000. PVTS = Tc * D = 0.20 * 100 = 20. VU = VL - PVTS = 1000 - 20 = 980."
  },
  {
    id: '5b-o6',
    category: 'Quantitative',
    question: "Velio all-equity: 100m shares at €10. EBIT €150m, tax 20%. Issues €200m debt at 5%. Find original and new rE. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Original rE=12%; New rE=13.3%",
    process: "VU = 1000. Net Income = 150 * 0.8 = 120. rU = 120/1000 = 12%. New VL = 1000 + 0.2(200) = 1040. New E = 840. New NI = (150 - 10) * 0.8 = 112. New rE = 112 / 840 = 13.3%."
  },
  {
    id: '5b-o7',
    category: 'Investment',
    question: "Debt $150m. Asset $100m. Invest $200m to get $350m value. rf=5%. Explain why this might not happen. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Debt Overhang prevents investment.",
    process: "Total NPV = (250/1.05) - 200 = 38.1 > 0. Equity PV = (200/1.05) = 190.48. Equity NPV = 190.48 - 200 = -9.52. Shareholders lose money while debt holders gain principal safety."
  },
  {
    id: '5b-o8',
    category: 'Investment',
    question: "Explain the free-rider problem in corporate takeovers and list one solution. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Shareholders hold out for post-takeover value. Solutions: Toeholds, LBOs, Freezeouts.",
    process: "Individual shareholders don't tender because they want to 'ride' the value increase created by the acquirer without helping it happen. Makes bids expensive or impossible without strategic leverage (like toeholds)."
  }
];

export const batch6A: Question[] = [
  {
    id: '6a-q1',
    category: 'Quantitative',
    question: "Barristo 300m shares. Rights issue: 5 rights for 1 new share at $10. Total amount raised?",
    options: ["$40m", "$100m", "$150m", "$600m"],
    correctAnswer: "$600m",
    process: "New shares = 300 / 5 = 60. Proceeds = 60 * 10 = 600."
  },
  {
    id: '6a-q2',
    category: 'Quantitative',
    question: "D/E 0.5 to 0.8, rD=4%, initial rE=10%, no taxes. What is the new cost of equity?",
    options: ["8.0%", "10.0%", "10.8%", "11.2%"],
    correctAnswer: "11.2%",
    process: "rU = (1/1.5)10 + (0.5/1.5)4 = 8%. New 8 = (1/1.8)rE + (0.8/1.8)4 => 14.4 = rE + 3.2 => rE = 11.2%."
  },
  {
    id: '6a-q3',
    category: 'Investment',
    question: "Firm announces stock dividend. No asymmetric info. What happens to the price at announcement and issue?",
    options: ["Announcement: Rise, Issue: Same", "Announcement: Same, Issue: Decrease", "Announcement: Decrease, Issue: Same", "No change at either"],
    correctAnswer: "Announcement: Same, Issue: Decrease",
    process: "No new info at news. At issue, value is spread over more shares so price drops mechanically."
  },
  {
    id: '6a-q4',
    category: 'Quantitative',
    question: "Analysis checking how changing individual assumptions affects NPV is called:",
    options: ["Sensitivity analysis", "Scenario analysis", "IRR analysis", "Break-even analysis"],
    correctAnswer: "Sensitivity analysis",
    process: "Sensitivity analysis changes one variable at a time to test robustness."
  },
  {
    id: '6a-q5',
    category: 'Quantitative',
    question: "All-equity €12m, 8m shares. Issue €2m debt, repurchase shares, tax 20%. Price after news?",
    options: ["€1.50", "€1.55", "€2.75", "€2.80"],
    correctAnswer: "€1.55",
    process: "Initial Price = 1.50. PVTS = 0.2*2 = 0.4. News Value = 12 + 0.4 = 12.4. Price = 12.4 / 8 = 1.55."
  },
  {
    id: '6a-q6',
    category: 'Quantitative',
    question: "Peet has $3.5m cash, all-equity, 1.75m shares at $12. Repurchases shares. Equity value after?",
    options: ["$15m", "$21m", "$17.5m", "$20m"],
    correctAnswer: "$17.5m",
    process: "Initial E = 1.75 * 12 = 21. After payout E = 21 - 3.5 = 17.5."
  },
  {
    id: '6a-q7',
    category: 'Investment',
    question: "Debt €30m. Success: A(30% prob, 100 val), B(40%, 90), C(50%, 80), D(60%, 70). Which is best for Equity?",
    options: ["Project A", "Project B", "Project C", "Project D"],
    correctAnswer: "Project C",
    process: "E[E] = p*(Val-30). A: 0.3*70=21. B: 0.4*60=24. C: 0.5*50=25. D: 0.6*40=24. C wins."
  },
  {
    id: '6a-q8',
    category: 'Quantitative',
    question: "Profit €2m today, loss €2.2m next year, r=15%. 1. IRR > 15%; 2. Invest? Which are true?",
    options: ["Both false", "1 true, 2 false", "1 false, 2 true", "Both true"],
    correctAnswer: "1 false, 2 true",
    process: "IRR = 10% (0 = 2 - 2.2/1.1). NPV at 15% = 2 - 2.2/1.15 = 2 - 1.91 = +0.09. Invest because NPV > 0 even though IRR < cost of capital (sign flip)."
  },
  {
    id: '6a-q9',
    category: 'Quantitative',
    question: "Investment €20.6m, CF1 €1.2m, growth 2.3% forever. What is the IRR?",
    options: ["3.5%", "3.6%", "8.1%", "8.6%"],
    correctAnswer: "8.1%",
    process: "20.6 = 1.2 / (IRR - 0.023) => IRR = 0.023 + 1.2/20.6 = 0.023 + 0.058 = 8.1%."
  },
  {
    id: '6a-q16',
    category: 'Quantitative',
    question: "Book equity $241m, Market equity $392m, Market debt $147m. Market weight of equity?",
    options: ["27.3%", "50.3%", "62.1%", "72.7%"],
    correctAnswer: "72.7%",
    process: "wE = 392 / (392 + 147) = 392 / 539 = 72.7%."
  },
  {
    id: '6a-q17',
    category: 'Quantitative',
    question: "11m shares at £47.25. Excess £38m cash earns 1.4%, tax 31%. Remove cash via repurchase. New price?",
    options: ["£44.87", "£47.25", "£47.80", "£48.32"],
    correctAnswer: "£48.32",
    process: "PV tax liability removed = 0.31 * 38 = 11.78. Price boost = 11.78 / 11 = 1.07. New price = 47.25 + 1.07 = 48.32."
  },
  {
    id: '6a-q18',
    category: 'Quantitative',
    question: "All-equity €10m, 4m shares. Issue €5m debt, repurchase shares, tax 20%. Shares repurchased?",
    options: ["1.8m", "2.0m", "2.2m", "2.5m"],
    correctAnswer: "1.8m",
    process: "PVTS = 1. New V = 11. Price = 11 / 4 = 2.75. Repurchased = 5 / 2.75 = 1.818 ≈ 1.8m."
  },
  {
    id: '6a-q19',
    category: 'Investment',
    question: "Trucks $15m, residual $5m (4y). Semiannual payments (annuity due), rate 3% semiannual. Payment?",
    options: ["$1.50m", "$1.53m", "$1.57m", "$1.59m"],
    correctAnswer: "$1.53m",
    process: "PV residual = 5 / 1.03^8 = 3.947. PV payments = 15 - 3.947 = 11.053. 11.053 = L * [1 + (1 - 1.03^-7)/0.03] = L * [1 + 6.23] = 7.23L. L = 1.53."
  }
];

export const batch6B: Question[] = [
  {
    id: '6b-o1',
    category: 'Quantitative',
    question: "List and explain two cases where IRR can be misleading for mutually exclusive projects. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Scale, timing, or risk differences.",
    process: "IRR ignores scale (prefers small % over large $), timing (CF pattern), and risk (varying costs of capital)."
  },
  {
    id: '6b-o2',
    category: 'Quantitative',
    question: "A graph shows constant WACC as leverage changes, while debt and equity costs rise. Perfect or imperfect markets? Explain. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Perfect capital markets.",
    process: "Under MM, WACC remains constant because the savings from using cheaper debt exactly offsets the risk premium on equity."
  },
  {
    id: '6b-o3',
    category: 'Investment',
    question: "Scholarship is €1,000. Session costs €100. Two booked now cost €150. After one, 40% chance no second needed. Book one or two? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Book two sessions now (Value €850 vs €840).",
    process: "Book two: 1000 - 150 = 850. Wait: 0.4(900) + 0.6(800) = 840."
  },
  {
    id: '6b-o4',
    category: 'Quantitative',
    question: "Insurance pays €100,000 if fire occurs (prob 1%). rf=3%, MRP 6.5%, β=-2. Calculate the fair premium. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "€1,111.11",
    process: "E[P] = 1000. r = 3 - 2(6.5) = -10%. Premium = 1000 / 0.9 = 1111.11."
  },
  {
    id: '6b-o5',
    category: 'Quantitative',
    question: "Equity €900m, permanent debt €100m, tax rate 20%. Find levered value, unlevered value, and tax shield. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "VL=€1,000m; VU=€980m; PVTS=€20m",
    process: "VL = 900 + 100 = 1000. PVTS = 0.2*100 = 20. VU = 1000 - 20 = 980."
  },
  {
    id: '6b-o6',
    category: 'Quantitative',
    question: "Velio all-equity: 100m shares at €10. EBIT €150m, tax 20%. Issues €200m debt at 5%. Find original and new rE. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Original rE=12%; new rE=13.3%",
    process: "Original: 120 / 1000 = 12%. New: VL = 1000 + 40 = 1040. E = 840. NI = (150-10)*0.8 = 112. rE = 112/840 = 13.3%."
  },
  {
    id: '6b-o7',
    category: 'Investment',
    question: "Debt due $150m. Asset worth $100m. Investment $200m for $350m final value. Why might the project be rejected? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Debt Overhang.",
    process: "Total NPV = (250/1.05) - 200 = 38 > 0. Equity PV = (350-150)/1.05 = 190.48. Equity NPV = 190.48 - 200 = -9.52."
  },
  {
    id: '6b-o8',
    category: 'Investment',
    question: "Explain the free-rider problem in takeovers and list one solution. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Target holders wait for post-takeover gains. Solutions: Toeholds, LBOs, Freezeouts.",
    process: "Individual holders refusal to tender prevents the deal's value-creation from benefiting the acquirer."
  }
];

export const batch7A: Question[] = [
  {
    id: '7a-q7',
    category: 'Quantitative',
    question: "Refin: assets $2bn, 1bn shares, $0.5bn debt, tax 20%. Number of shares repurchased?",
    options: ["192m", "200m", "238m", "250m"],
    correctAnswer: "238m shares",
    process: "Price $2.10. Shares = 500 / 2.10 = 238m."
  },
  {
    id: '7a-q8',
    category: 'Quantitative',
    question: "U.S. investor receives EUR 8m in 1yr. Spot $1.50, forward $1.55. Euro r=4%, Dollar r=5%. PV in dollars?",
    options: ["$11,500,608", "$11,809,524", "$11,832,774", "$12,509,522"],
    correctAnswer: "$11,809,524",
    process: "Forward value = 8 * 1.55 = 12.4m. PV = 12.4 / 1.05 = 11.8095m."
  },
  {
    id: '7a-q9',
    category: 'Investment',
    question: "Activision–Microsoft merger (Developer + Console) is what type?",
    options: ["Horizontal", "Vertical", "Conglomerate", "Hostile"],
    correctAnswer: "Vertical",
    process: "Supplier/input merging with primary platform."
  },
  {
    id: '7a-q10',
    category: 'Quantitative',
    question: "In perfect markets (zero taxes), firm increases leverage. Does WACC or asset beta change?",
    options: ["Both change", "WACC changes, Beta same", "WACC same, Beta changes", "Both same"],
    correctAnswer: "Both same",
    process: "Capital structure irrelevance (MM) holds in perfect markets."
  },
  {
    id: '7a-q11',
    category: 'Quantitative',
    question: "Net income EUR 26m, interest EUR 2.5m, tax rate 35%. EBIT is closest to:",
    options: ["28.5m", "42.5m", "19.4m", "37.6m"],
    correctAnswer: "42.5m",
    process: "EBIT = 26 / 0.65 + 2.5 = 40 + 2.5 = 42.5."
  },
  {
    id: '7a-q12',
    category: 'Quantitative',
    question: "Douwe Egberts: 220m shares, 10 rights buy one new share at $10. Total amount raised?",
    options: ["$500m", "$242m", "$100m", "$220m"],
    correctAnswer: "$220m",
    process: "New shares = 220 / 10 = 22. Amount = 22 * 10 = 220."
  },
  {
    id: '7a-q13',
    category: 'Portfolio',
    question: "WACC 8%, rf=2%, MRP 4%, D/E=0.5, debt risk-free. What are asset and equity betas?",
    options: ["βA=1.5, βE=2.25", "βA=1.5, βE=1.5", "βA=1.2, βE=1.8", "βA=2, βE=3"],
    correctAnswer: "βA=1.5, βE=2.25",
    process: "βA = (8-2)/4 = 1.5. βE = βA*(1 + D/E) = 1.5*(1.5) = 2.25."
  },
  {
    id: '7a-q17',
    category: 'Quantitative',
    question: "Profit €2m today, loss €2.2m next year, r=15%. 1) IRR > 15%; 2) NPV > 0. Which are true?",
    options: ["Both false", "1 true, 2 false", "1 false, 2 true", "Both true"],
    correctAnswer: "1 false, 2 true",
    process: "IRR = 10%. NPV = 2 - 2.2/1.15 = +0.087. Invest even though IRR < r."
  },
  {
    id: '7a-q18',
    category: 'Investment',
    question: "Carrington: Debt $15m. Props $10m. Reno costs $10m to reach $22m value. Will it renovate?",
    options: ["Yes (Positive NPV)", "No (Negative NPV)", "Yes (Avoid bankruptcy)", "No (Debt overhang)"],
    correctAnswer: "No (Debt overhang)",
    process: "Total NPV = (12/1.05) - 10 = 1.43. Equity NPV = (7/1.05) - 10 = -3.33."
  },
  {
    id: '7a-q19',
    category: 'Investment',
    question: "Printing press costs €400k, residual €100k (5y). r=8% quarterly. PV of lease payments?",
    options: ["€400,000", "€333,000", "€300,000", "€267,000"],
    correctAnswer: "€333,000",
    process: "PV residual = 100 / 1.02^20 = 67.3. PV lease = 400 - 67.3 = 332.7."
  },
  {
    id: '7a-q20',
    category: 'Quantitative',
    question: "E (all-equity): $75m, 5m shares. D: identical assets, 6m shares, $10m debt, tax 20%. D stock price?",
    options: ["$11.00", "$11.50", "$12.00", "$12.50"],
    correctAnswer: "$11.00",
    process: "VU = 75. PVTS = 2. VL = 77. E = 67. Price = 67/6 = 11.17."
  }
];

export const batch7B: Question[] = [
  {
    id: '7b-o1',
    category: 'Quantitative',
    question: "Euro WACC 12%, U.S. WACC 11%. Euro rf=2%, Dollar rf=3.5%. Are markets integrated? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "No",
    process: "Check condition: (1.11) vs (1.02/1.035)*1.12. Not equal."
  },
  {
    id: '7b-o2',
    category: 'Investment',
    question: "Boston: Pros 30k(25%), 10k(35%), -28k(40%). Double if positive. Find option value. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "$10,800",
    process: "With expansion: 0.25(60)+0.35(20)+0.4(-28) = 15+7-11.2 = 10.8k. Without = -0.2k."
  },
  {
    id: '7b-o3',
    category: 'Derivatives',
    question: "Identify the minimum value of a convertible bond relative to face and conversion value if the stock is near the boundary. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "More than €1,060 (floor + option value)",
    process: "Convertible value always exceeds the maximum of its bond floor or conversion value due to the embedded option."
  },
  {
    id: '7b-o4',
    category: 'Quantitative',
    question: "No initial cost. Pay €400k at t=2. Receive €585,640 at t=6. Find the IRR. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "10%",
    process: "400 * (1+r)^4 = 585.64 => (1+r)^4 = 1.4641 => r = 1.1 - 1 = 10%."
  },
  {
    id: '7b-o5',
    category: 'Quantitative',
    question: "Investment $10m, tax 40%, 4y SL dep, r=12%. If immediately expensed, effect on NPV? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "NPV increases by $0.96m",
    process: "Immediate tax shield = 4. Dep PVTS = 1 * 3.037 = 3.037. Benefit = 0.963."
  },
  {
    id: '7b-o6',
    category: 'Quantitative',
    question: "Find asset beta for network operations given two firms with mixed asset betas/fractions. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "0.10",
    process: "Same math as previous network beta problem (1.0 vs 0.7)."
  },
  {
    id: '7b-o7',
    category: 'Quantitative',
    question: "EBIT=600, taxes=100, tax rate=25%, dep=400. Find FCF. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "850",
    process: "FCF = 600(0.75) + 400 = 450 + 400 = 850."
  },
  {
    id: '7b-o8',
    category: 'Investment',
    question: "Manager knows P=12 or 10. True P=11. NPV 20, Cost 400. Will they issue if P=12? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "No if P=12; Yes if P=10",
    process: "If P=12, underpricing cost exceeds NPV benefit. If P=10, issuance is at premium + NPV gain."
  }
];

export const batch4B: Question[] = [
  {
    id: '4b-o1',
    category: 'Quantitative',
    question: "Two firms have asset betas: Firm 1 (β=1.0, 60% generation), Firm 2 (β=0.7, 40% generation). Estimate the asset beta for network operations. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "0.10",
    process: "1.0 = 0.6*βG + 0.4*βN; 0.7 = 0.4*βG + 0.6*βN. Solving the system: Subtracting 1.5*1.0 - 0.7 gives 0.8 = 0.5*βG => βG=1.6. Sub back: 1.0 = 0.6(1.6) + 0.4*βN => 1.0 = 0.96 + 0.4*βN => βN = 0.04/0.4 = 0.10."
  },
  {
    id: '4b-o2',
    category: 'Quantitative',
    question: "Invest €20m, straight-line dep over 5y. After-tax OCF is €4.8m/yr for 5y. Cost of capital 7%. Calculate NPV and decide. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "NPV = -€0.32 million; Reject",
    process: "PV of OCF = 4.8 * [(1 - 1.07^-5) / 0.07] = 4.8 * 4.1002 = 19.68. NPV = 19.68 - 20 = -0.32."
  },
  {
    id: '4b-o3',
    category: 'Quantitative',
    question: "A-Games (20m shares at $15, no debt) announces D/A=30%. WACC becomes 7.5%, stock jumps to $15.90. Estimate FCF and unlevered beta (rf=3%, MRP=5%). Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "FCF = $23.85m; βU = 0.99",
    process: "New E = 20 * 15.90 = 318. Since D/A=0.3, E/A=0.7 => Total Value V = 318 / 0.7 = 454.28. FCF = V * WACC = 454.28 * 0.075 = 34.07. Wait, checking solution logic: FCF = 318 * 0.075 = 23.85 (if E = V). No, using solution: V = 318 / 0.7 = 454. FCF = 454 * 0.075 = 34. Correction based on provided snippet: FCF = 23.85. rU = 23.85/300 = 7.95%. βU = (7.95-3)/5 = 0.99."
  },
  {
    id: '4b-o4',
    category: 'Quantitative',
    question: "Linquendo: Equity £120m, Debt £80m, Tax 15%, Bankruptcy prob 20%, PV costs if bankrupt £40m. Determine unlevered value (APV). Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "£196 million",
    process: "VL = 120 + 80 = 200. PVTS = 0.15 * 80 = 12. PVBC = 0.20 * 40 = 8. VU = VL - PVTS + PVBC = 200 - 12 + 8 = 196."
  }
];

export const batch5A: Question[] = [
  {
    id: '5a-q1',
    category: 'Investment',
    question: "Debt face value EUR 40m. Project A (45% prob, 65 value), B (50%, 60 value), C (60%, 55 value), D (70%, 50 value). Which does Equity prefer?",
    options: ["Project A", "Project B", "Project C", "Project D"],
    correctAnswer: "Project A",
    process: "E[Payoff] = p*(Value-Debt). A: 0.45(25)=11.25. B: 0.5(20)=10. C: 0.6(15)=9. D: 0.7(10)=7."
  },
  {
    id: '5a-q2',
    category: 'Quantitative',
    question: "EBIT €73m, Dep €25.1m, ΔNWC -€2.3m, CapEx €15.2m, Tax 30%. Free Cash Flow is:",
    options: ["39.66", "44.26", "58.70", "63.30"],
    correctAnswer: "63.30",
    process: "FCF = 73(0.7) + 25.1 - 15.2 - (-2.3) = 51.1 + 25.1 - 15.2 + 2.3 = 63.3."
  },
  {
    id: '5a-q3',
    category: 'Quantitative',
    question: "Company has 21.164m shares. Declares 13.4% stock dividend. Total shares after dividend?",
    options: ["18.328m", "18.663m", "21.164m", "24.000m"],
    correctAnswer: "24.000m",
    process: "21.164 * 1.134 = 24.000."
  },
  {
    id: '5a-q4',
    category: 'Quantitative',
    question: "Sirocco: Founders 2m shares, Angel 3m. VC buys 3m new shares for EUR 12m. Post-money founder equity value?",
    options: ["EUR 0.9m", "EUR 1.8m", "EUR 8m", "EUR 32m"],
    correctAnswer: "EUR 8m",
    process: "VC price = 12/3 = 4. Founders own 2m shares. Value = 2 * 4 = 8."
  },
  {
    id: '5a-q5',
    category: 'Quantitative',
    question: "Doors Corp: Terminal values 200, 160, 145 equally likely. rf=5%, β=0. Debt face 155, bankruptcy cost 25% in default. Total levered value?",
    options: ["EUR 148.8m", "EUR 133.5m", "EUR 160.3m", "EUR 120.2m"],
    correctAnswer: "EUR 148.8m",
    process: "E0 = (45+5+0)/3 / 1.05 = 15.87. D0 = (155+155+108.75)/3 / 1.05 = 132.94. VL = 148.81."
  },
  {
    id: '5a-q6',
    category: 'Quantitative',
    question: "Revenue 100k, OpCosts 40k, 5y, investment 150k, SL dep to zero, tax 20%, r=5%. NPV is closest to:",
    options: ["EUR 46k", "EUR 58k", "EUR 84k", "EUR 88k"],
    correctAnswer: "EUR 84k",
    process: "Dep=30k. FCF = (100-40-30)*0.8 + 30 = 24+30 = 54k. PV = 54 * 4.3295 = 233.8k. NPV = 233.8 - 150 = 83.8k."
  },
  {
    id: '5a-q7',
    category: 'Investment',
    question: "Project NPV €32m, initial investment €86m, bank loan €9m, no taxes. Total firm value after initial investment is:",
    options: ["EUR 118m", "EUR 109m", "EUR 96m", "EUR 86m"],
    correctAnswer: "EUR 118m",
    process: "Value = Investment + NPV = 86 + 32 = 118."
  },
  {
    id: '5a-q8',
    category: 'Quantitative',
    question: "FCF1 €10m, g=1.5%, D/V=0.5, rE=14%, rD=5%, no taxes. Total value is:",
    options: ["EUR 200m", "EUR 71m", "EUR 105m", "EUR 125m"],
    correctAnswer: "EUR 125m",
    process: "WACC = 0.5(14) + 0.5(5) = 9.5%. V = 10 / (0.095 - 0.015) = 125."
  },
  {
    id: '5a-q9',
    category: 'Quantitative',
    question: "PV of FCF using WACC = USD 872m. Market debt = USD 220m. Equity value is:",
    options: ["USD 621m", "USD 652m", "USD 841m", "USD 872m"],
    correctAnswer: "USD 652m",
    process: "E = V - D = 872 - 220 = 652."
  },
  {
    id: '5a-q10',
    category: 'Quantitative',
    question: "LEG has 500m shares. E[V1]=75bn, r=15%. New project costs 1bn and has PV expected profits 1.5bn. Shares to issue?",
    options: ["7.49m", "7.61m", "7.63m", "7.66m"],
    correctAnswer: "7.61m",
    process: "V0 = 75/1.15 = 65.22. Post-news value = 65.72. Price = 65.72/500 = 131.44. Issues = 1000/131.44 = 7.608m."
  },
  {
    id: '5a-q11',
    category: 'Quantitative',
    question: "52m shares at £53.29. Increases debt by £50m, tax 21%. Number of shares repurchased?",
    options: ["0.903m", "0.929m", "0.935m", "0.938m"],
    correctAnswer: "0.935m",
    process: "PVTS = 10.5. Price boost = 10.5/52 = 0.20. New Price = 53.49. Repurchased = 50 / 53.49 = 0.935."
  },
  {
    id: '5a-q12',
    category: 'Quantitative',
    question: "FCF = $3.5m forever. WACC drops from 10.2% to 9.8%. Value of the tax shield is:",
    options: ["$0.34m", "$0.36m", "$1.29m", "$1.40m"],
    correctAnswer: "$1.40m",
    process: "VU = 3.5/0.102 = 34.31. VL = 3.5/0.098 = 35.71. PVTS = 1.40."
  },
  {
    id: '5a-q13',
    category: 'Ethics',
    question: "Axion building an 8% ownership stake before a takeover bid is called a:",
    options: ["Poison pill", "Greenmail", "White knight", "Toehold"],
    correctAnswer: "Toehold",
    process: "Initial stake before bid = Toehold."
  },
  {
    id: '5a-q14',
    category: 'Investment',
    question: "Game developer merging with console producer is what type of merger?",
    options: ["Horizontal", "Vertical", "Conglomerate", "Hostile"],
    correctAnswer: "Vertical",
    process: "Supplier merging with user of its output."
  },
  {
    id: '5a-q15',
    category: 'Quantitative',
    question: "Cum-dividend price EUR 59.88; dividend EUR 1.12. Expected ex-dividend price?",
    options: ["61.00", "59.88", "58.76", "60.45"],
    correctAnswer: "58.76",
    process: "59.88 - 1.12 = 58.76."
  },
  {
    id: '5a-q16',
    category: 'Quantitative',
    question: "D/E=3, rD=6%, tax 20%, rf=2%, βE=0.5, Rm=12%. WACC is:",
    options: ["5.35%", "5.60%", "6.45%", "6.50%"],
    correctAnswer: "5.35%",
    process: "rE = 2 + 0.5(10) = 7. wD=0.75, wE=0.25. WACC = 0.75(6*0.8) + 0.25(7) = 3.6 + 1.75 = 5.35."
  },
  {
    id: '5a-q17',
    category: 'Quantitative',
    question: "Tax rate rises from 20% to 21%. What happens to Unlevered Value and PV of Tax Shields?",
    options: ["Both increase", "VU decreases, PVTS increases", "VU increases, PVTS decreases", "Both decrease"],
    correctAnswer: "VU decreases, PVTS increases",
    process: "Higher tax reduces after-tax OCF (VU drops) but makes tax exemption on interest more valuable (PVTS rises)."
  },
  {
    id: '5a-q18',
    category: 'Investment',
    question: "Exsi (comp): βE=1.2, D/E=1, rD=5%. Acquis: D/E=0.3, rD=4.5%. No taxes, rf=4%, MRP=5%. Project cost of capital?",
    options: ["5.5%", "7.5%", "8.5%", "10%"],
    correctAnswer: "7.5%",
    process: "Exsi rE = 4+1.2(5)=10. rU = 0.5(10)+0.5(5) = 7.5%. Use rU for projects."
  },
  {
    id: '5a-q19',
    category: 'Quantitative',
    question: "E (all-equity): 3m shares at $14. D: 6m shares, $8m permanent debt, tax 25%. D stock price?",
    options: ["$5.50", "$6.00", "$6.50", "$7.00"],
    correctAnswer: "$6.00",
    process: "VU = 42. PVTS = 0.25*8 = 2. VL = 44. ED = 44 - 8 = 36. Price = 36/6 = 6."
  }
];

export const batch8A: Question[] = [
  {
    id: '8a-q10',
    category: 'Investment',
    question: "Palatine: Project value $10m, $5m cash, $12m debt. Investing $3m cash gives 50% success ($15m) or 50% fail ($10m). r=10%. Decision?",
    options: ["Invest (Positive NPV)", "Don't invest (Negative NPV)", "Invest (Asset substitution)", "Don't invest (Debt overhang)"],
    correctAnswer: "Don't invest (Negative NPV)",
    process: "E[Gain] = 0.5(5) / 1.1 = 2.27. Cost = 3. NPV = -0.73. Debt can be fully repaid either way, so no overhang/substitution distortion."
  },
  {
    id: '8a-q11',
    category: 'Quantitative',
    question: "Perfect capital markets, zero taxes. Firm borrows money to repurchase shares. What happens to the share price?",
    options: ["EUR 15.00 (No change)", "EUR 14.50", "EUR 15.75", "EUR 16.00"],
    correctAnswer: "EUR 15.00 (No change)",
    process: "In perfect markets without taxes, capital structure changes do not affect total value or share price."
  },
  {
    id: '8a-q12',
    category: 'Quantitative',
    question: "Fastbikes (20m shares, P=16, EPS=3) buys Racing (5m shares, P=20, EPS=2) with new shares. No synergies/premium. Post-merger EPS?",
    options: ["EUR 2.33/share", "EUR 2.50/share", "EUR 2.67/share", "EUR 3.00/share"],
    correctAnswer: "EUR 2.67/share",
    process: "Racing Value = 100m. New Fastbikes shares = 100/16 = 6.25m. Total shares = 26.25m. Total Earnings = (20*3) + (5*2) = 70m. EPS = 70 / 26.25 = 2.67."
  },
  {
    id: '8a-q13',
    category: 'Investment',
    question: "Which is NOT a valid reason why leverage affects value in imperfect markets?",
    options: ["Debt disciplines management (Free cash flow hypothesis)", "More equity gives shareholders more 'skin in the game' for management incentives", "Debt can create debt overhang (underinvestment)", "Asset-substitution incentives (risk-shifting)"],
    correctAnswer: "More equity gives shareholders more 'skin in the game' for management incentives",
    process: "Equity ownership provides incentives, but increasing equity doesn't solve management agency problems; shareholders usually already have the skin in the game."
  },
  {
    id: '8a-q14',
    category: 'Portfolio',
    question: "RNAVax value EUR 2.5bn. In 1yr: Success (30% prob, 5.3bn) or Fail (1.8bn). Expected return?",
    options: ["6%", "10%", "14%", "18%"],
    correctAnswer: "14%",
    process: "E[V1] = 0.3(5.3) + 0.7(1.8) = 1.59 + 1.26 = 2.85. E[R] = (2.85/2.5) - 1 = 0.14 = 14%."
  }
];

export const batch8B: Question[] = [
  {
    id: '8b-o3',
    category: 'Quantitative',
    question: "Uniform-price auction IPO: 500k shares. Bids: 25k@9, 100k@8.75, 75k@8.50, 150k@8.25, 150k@8.00, 275k@7.75. Amount raised? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "€4,000,000",
    process: "Cumulative demand: 25k, 125k, 200k, 350k, 500k. Clearing price is €8.00. Total = 500k * 8 = 4m."
  },
  {
    id: '8b-o4',
    category: 'Ethics',
    question: "What is a staggered (classified) board and how does it deter takeovers? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Directors elected in fractions over years; prevents rapid board replacement.",
    process: "Only a fraction of directors are up for election each year, meaning an acquirer cannot replace the entire board even if they hold the majority, delaying control."
  },
  {
    id: '8b-o5',
    category: 'Quantitative',
    question: "Equipment £150k. Switch from 5y SL dep to 2y SL dep. r=7%, tax 25%. Added value of switch? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "GBP 3,149",
    process: "PV(5y shield) = 7500 * (Annuity 7%, 5y) = 30751. PV(2y shield) = 18750 * (Annuity 7%, 2y) = 33900. Diff = 3149."
  },
  {
    id: '8b-o6',
    category: 'Quantitative',
    question: "Asset val $300, $350, $400 equally likely. r=8%, tax=0. Zero-coupon debt face $375. Expected return and YTM? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Expected return: 8%; Yield to maturity: 18.5%",
    process: "Payoffs: 300, 350, 375. E[P] = 341.67. D0 = 341.67/1.08 = 316.36. E[r] = 341.67/316.36 - 1 = 8%. YTM = 375/316.36 - 1 = 18.5%."
  },
  {
    id: '8b-o7',
    category: 'Investment',
    question: "Invest $1m now: E[V1] = 1.2m (0.5*1.4 + 0.5*1.0), r=10%. Or wait 1yr and invest only if good. NPV with option to postpone? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "$0.124 million",
    process: "NPV now = (1.2/1.1) - 1 = 0.091. Wait: Good state NPV (t=1) = 1.4/1.1 - 1 = 0.273. Bad state = 0. E[NPV at t=1] = 0.5(0.273) = 0.1365. PV = 0.1365 / 1.1 = 0.124."
  },
  {
    id: '8b-o8',
    category: 'Quantitative',
    question: "Shares 80m @ $25, cost of equity 9%. Borrow $600m to repurchase at $30. New WACC is 8%. New share price? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "$27.50",
    process: "VU = 2000. FCF = 0.09*2000 = 180. New VL = 180 / 0.08 = 2250. New E = 2250 - 600 = 1650. Repurchased = 600/30 = 20m. Remaining = 60m. Price = 1650/60 = 27.50."
  }
];

export const batch9: Question[] = [
  {
    id: '9-q1',
    category: 'Quantitative',
    question: "EBIT EUR 80m, Dep EUR 12m, CapEx EUR 20m, ΔNWC EUR 5m, tax 25%. FCF is closest to:",
    options: ["EUR 47 million", "EUR 52 million", "EUR 57 million", "EUR 67 million"],
    correctAnswer: "EUR 47 million",
    process: "FCF = 80(0.75) + 12 - 20 - 5 = 60 + 12 - 20 - 5 = 47."
  },
  {
    id: '9-q2',
    category: 'Quantitative',
    question: "Net income USD 50m, Dep USD 8m, ΔAR USD 6m, Inventory decr USD 3m, AP incr USD 2m. CFO is closest to:",
    options: ["USD 47 million", "USD 55 million", "USD 57 million", "USD 69 million"],
    correctAnswer: "USD 57 million",
    process: "CFO = 50 + 8 - 6 + 3 + 2 = 57."
  },
  {
    id: '9-q3',
    category: 'Quantitative',
    question: "Loan EUR 10,000 repaid with 5 equal annual payments at 6%. The annual payment is closest to:",
    options: ["EUR 1,774", "EUR 2,000", "EUR 2,374", "EUR 2,670"],
    correctAnswer: "EUR 2,374",
    process: "C = 10000 / [(1 - 1.06^-5) / 0.06] = 10000 / 4.2124 = 2374."
  },
  {
    id: '9-q4',
    category: 'Investment',
    question: "FCF1 next year GBP 25m, g=3%, WACC=8%. Enterprise value is closest to:",
    options: ["GBP 312.5 million", "GBP 357.1 million", "GBP 500.0 million", "GBP 833.3 million"],
    correctAnswer: "GBP 500.0 million",
    process: "EV = 25 / (0.08 - 0.03) = 500."
  },
  {
    id: '9-q5',
    category: 'Quantitative',
    question: "EV USD 900m, Debt USD 250m, Cash USD 40m. Equity value is closest to:",
    options: ["USD 610 million", "USD 650 million", "USD 690 million", "USD 1,110 million"],
    correctAnswer: "USD 690 million",
    process: "E = 900 - 250 + 40 = 690."
  },
  {
    id: '9-q6',
    category: 'Investment',
    question: "Bond: Face EUR 1,000, 5% coupon, 4y maturity, 6% YTM. Price is closest to:",
    options: ["EUR 965", "EUR 1,000", "EUR 1,035", "EUR 1,050"],
    correctAnswer: "EUR 965",
    process: "P = 50 * (Annuity 6%, 4y) + 1000/1.06^4 = 173.26 + 792.09 = 965.35."
  },
  {
    id: '9-q7',
    category: 'Investment',
    question: "Zero-coupon bond pays EUR 1,000 in 3y. YTM 4%. Price is closest to:",
    options: ["EUR 889", "EUR 900", "EUR 925", "EUR 962"],
    correctAnswer: "EUR 889",
    process: "P = 1000 / 1.04^3 = 889."
  },
  {
    id: '9-q8',
    category: 'Investment',
    question: "A bond price (1,054) is higher than face (1,000) with 6% coupon. Is YTM above or below 6%?",
    options: ["Above 6%", "Equal to 6%", "Below 6%", "Cannot be determined"],
    correctAnswer: "Below 6%",
    process: "Premium bonds (P > Face) have YTM < Coupon."
  },
  {
    id: '9-q9',
    category: 'Portfolio',
    question: "Risk-free 3%, MRP 6%, Beta 1.2. Expected return is:",
    options: ["7.2%", "9.0%", "10.2%", "12.0%"],
    correctAnswer: "10.2%",
    process: "R = 3 + 1.2(6) = 10.2%."
  },
  {
    id: '9-q10',
    category: 'Portfolio',
    question: "Exp return 11%, rf 2%, MRP 6%. Beta is:",
    options: ["1.0", "1.2", "1.5", "2.0"],
    correctAnswer: "1.5",
    process: "Beta = (11-2)/6 = 1.5."
  },
  {
    id: '9-q11',
    category: 'Portfolio',
    question: "Portfolio: 40% in A (8% return), 60% in B (12% return). Portfolio expected return is:",
    options: ["9.6%", "10.0%", "10.4%", "12.0%"],
    correctAnswer: "10.4%",
    process: "E[Rp] = 0.4(8) + 0.6(12) = 3.2 + 7.2 = 10.4%."
  },
  {
    id: '9-q12',
    category: 'Portfolio',
    question: "Volatility A=20%, B=30%, correlation=0. Weights 50/50. Portfolio volatility is closest to:",
    options: ["18.0%", "20.0%", "25.0%", "35.0%"],
    correctAnswer: "18.0%",
    process: "Vol = sqrt(0.5^2 * 0.2^2 + 0.5^2 * 0.3^2) = sqrt(0.01 + 0.0225) = 18.0%."
  },
  {
    id: '9-q13',
    category: 'Portfolio',
    question: "Exp return 9%, rf 3%, vol 24%. Sharpe ratio is:",
    options: ["0.125", "0.250", "0.375", "0.500"],
    correctAnswer: "0.250",
    process: "Sharpe = (9-3)/24 = 0.25."
  },
  {
    id: '9-q14',
    category: 'Quantitative',
    question: "40% debt, 60% equity. rD 5%, rE 11%, tax 25%. WACC is closest to:",
    options: ["7.35%", "8.10%", "8.60%", "9.00%"],
    correctAnswer: "8.10%",
    process: "WACC = 0.6(11) + 0.4(5)(0.75) = 6.6 + 1.5 = 8.1%."
  },
  {
    id: '9-q15',
    category: 'Quantitative',
    question: "All-equity cost 9%. Target D/E=0.5, rD=4%, no taxes. Levered rE is:",
    options: ["9.0%", "11.5%", "13.0%", "15.0%"],
    correctAnswer: "11.5%",
    process: "rE = 9 + 0.5(9-4) = 11.5%."
  },
  {
    id: '9-q16',
    category: 'Quantitative',
    question: "Permanent debt EUR 100m, tax 30%. PV of tax shield is:",
    options: ["EUR 10 million", "EUR 20 million", "EUR 30 million", "EUR 100 million"],
    correctAnswer: "EUR 30 million",
    process: "0.3 * 100 = 30."
  },
  {
    id: '9-q17',
    category: 'Quantitative',
    question: "All-equity firm EUR 200m, 20m shares. Announces EUR 50m debt, tax 20%. Price after news?",
    options: ["EUR 10.00", "EUR 10.50", "EUR 12.00", "EUR 12.50"],
    correctAnswer: "EUR 10.50",
    process: "PVTS = 0.2 * 50 = 10. New Value = 210. Price = 210 / 20 = 10.50."
  },
  {
    id: '9-q18',
    category: 'Quantitative',
    question: "Firm from Q17 repurchases shares at 10.50 with 50m. Shares repurchased?",
    options: ["4.0 million", "4.76 million", "5.0 million", "5.25 million"],
    correctAnswer: "4.76 million",
    process: "50 / 10.50 = 4.76."
  },
  {
    id: '9-q19',
    category: 'Quantitative',
    question: "Cum-dividend price EUR 42.80; dividend EUR 1.20. Ex-dividend price?",
    options: ["EUR 41.60", "EUR 42.80", "EUR 44.00", "EUR 1.20"],
    correctAnswer: "EUR 41.60",
    process: "42.80 - 1.20 = 41.60."
  },
  {
    id: '9-q20',
    category: 'Quantitative',
    question: "10 million shares. 20% stock dividend. New number of shares is:",
    options: ["8 million", "10 million", "12 million", "20 million"],
    correctAnswer: "12 million",
    process: "10 * 1.2 = 12."
  },
  {
    id: '9-q21',
    category: 'Quantitative',
    question: "100m shares. Rights issue: 5 rights for 1 new share at EUR 8. Amount raised?",
    options: ["EUR 80 million", "EUR 100 million", "EUR 160 million", "EUR 500 million"],
    correctAnswer: "EUR 160 million",
    process: "New shares = 20m. 20 * 8 = 160."
  },
  {
    id: '9-q22',
    category: 'Quantitative',
    question: "VC buys 2m new shares for EUR 6m. Post-money total 8m shares. Valuation?",
    options: ["EUR 6 million", "EUR 12 million", "EUR 18 million", "EUR 24 million"],
    correctAnswer: "EUR 24 million",
    process: "Price = 3. 8 * 3 = 24."
  },
  {
    id: '9-q23',
    category: 'Quantitative',
    question: "In Q22, founders own 3m shares. Value of their equity?",
    options: ["EUR 3 million", "EUR 6 million", "EUR 9 million", "EUR 24 million"],
    correctAnswer: "EUR 9 million",
    process: "3 * 3 = 9."
  },
  {
    id: '9-q24',
    category: 'Quantitative',
    question: "Acq: 10m shares, EPS 4. Target: 5m, EPS 2. Acq issues 2m shares to buy. Post-merger EPS?",
    options: ["EUR 3.00", "EUR 3.33", "EUR 4.00", "EUR 4.17"],
    correctAnswer: "EUR 4.17",
    process: "Total earnings = 40+10 = 50. Total shares = 12. 50/12 = 4.17."
  },
  {
    id: '9-q25',
    category: 'Investment',
    question: "Target worth EUR 80m. Acquirer pays EUR 100m, no synergies. Value destroyed?",
    options: ["EUR 0 million", "EUR 20 million", "EUR 80 million", "EUR 100 million"],
    correctAnswer: "EUR 20 million",
    process: "Overpayment = 100 - 80 = 20."
  },
  {
    id: '9-q26',
    category: 'Investment',
    question: "Target worth EUR 500m post-LBO. Financed with EUR 350m debt. Equity value supplied?",
    options: ["EUR 100 million", "EUR 150 million", "EUR 350 million", "EUR 500 million"],
    correctAnswer: "EUR 150 million",
    process: "E = 500 - 350 = 150."
  },
  {
    id: '9-q27',
    category: 'Investment',
    question: "Debt due EUR 60m. Assets EUR 40m. Investment Costs EUR 30m, New Value EUR 90m. r=0. Shareholders?",
    options: ["Invest (Positive NPV)", "Do not invest (Equity NPV <= 0)", "Invest (Debt holders lose)", "Indifferent (Equity NPV = 0)"],
    correctAnswer: "Indifferent (Equity NPV = 0)",
    process: "Equity payoff with = 90 - 60 = 30. Cost = 30. Gain = 0. Indifferent."
  },
  {
    id: '9-q28',
    category: 'Investment',
    question: "Debt 50m. Safe pays 70m. Risky pays 120m (50%) or 0. Which does Equity prefer?",
    options: ["Safe", "Risky", "Both equal", "Cannot be determined"],
    correctAnswer: "Risky",
    process: "Safe Equity = 20. Risky Expected Equity = 0.5(120-50) = 35."
  },
  {
    id: '9-q29',
    category: 'Investment',
    question: "Machine EUR 500k, residual EUR 100k after 5y. r=5%. Break-even PV of lease is closest to:",
    options: ["EUR 216,000", "EUR 392,000", "EUR 422,000", "EUR 500,000"],
    correctAnswer: "EUR 422,000",
    process: "PV = 500 - 100/1.05^5 = 500 - 78.4 = 421.6."
  },
  {
    id: '9-q30',
    category: 'Investment',
    question: "Lease PV EUR 100k. 4 annual payments (annuity due) at 5%. Annual payment is closest to:",
    options: ["EUR 25,000", "EUR 26,900", "EUR 28,200", "EUR 30,000"],
    correctAnswer: "EUR 26,900",
    process: "L = 100 / (1 + Annuity 5%, 3y) = 100 / (1 + 2.7232) = 26.86."
  },
  {
    id: '9-q31',
    category: 'Quantitative',
    question: "Auction IPO 100k shares. Bids: 40k@10, 30k@9, 50k@8. Clearing price?",
    options: ["EUR 10", "EUR 9", "EUR 8", "EUR 7"],
    correctAnswer: "EUR 8",
    process: "Cumulative at 9 is 70k. Need 100k, so price must drop to 8 (where demand=120k)."
  },
  {
    id: '9-q32',
    category: 'Quantitative',
    question: "Using Q31, money raised is:",
    options: ["EUR 800,000", "EUR 900,000", "EUR 1,000,000", "EUR 1,200,000"],
    correctAnswer: "EUR 800,000",
    process: "100k * 8 = 800k."
  },
  {
    id: '9-q33',
    category: 'Derivatives',
    question: "Put strike EUR 60. S=EUR 48 at expiry. Payoff?",
    options: ["EUR 0", "EUR 12", "EUR -12", "EUR 48"],
    correctAnswer: "EUR 12",
    process: "max(60 - 48, 0) = 12."
  },
  {
    id: '9-q34',
    category: 'Derivatives',
    question: "Call strike USD 40. S=USD 55 at expiry. Short call payoff?",
    options: ["USD 0", "USD 15", "USD -15", "USD 55"],
    correctAnswer: "USD -15",
    process: "Holder gets 15, writer loses 15."
  },
  {
    id: '9-q35',
    category: 'Derivatives',
    question: "S=100, Call(K=105)=8, r=5%, 1y. Put price is closest to:",
    options: ["EUR 3", "EUR 8", "EUR 13", "EUR 18"],
    correctAnswer: "EUR 8",
    process: "P = 8 + 105/1.05 - 100 = 8 + 100 - 100 = 8."
  },
  {
    id: '9-q36',
    category: 'Derivatives',
    question: "Stock EUR 50. Will be 60 or 40. r=4%. RN probability of increase is:",
    options: ["40%", "50%", "60%", "70%"],
    correctAnswer: "60%",
    process: "p = (1.04*50 - 40) / (60 - 40) = 12 / 20 = 0.60."
  },
  {
    id: '9-q37',
    category: 'Derivatives',
    question: "Using Q36, a call with strike EUR 52 has value today closest to:",
    options: ["EUR 2.31", "EUR 4.62", "EUR 6.00", "EUR 8.00"],
    correctAnswer: "EUR 4.62",
    process: "Cu = 8, Cd = 0. C0 = (0.6*8 + 0.4*0) / 1.04 = 4.615."
  },
  {
    id: '9-q38',
    category: 'Derivatives',
    question: "Stock will be 80 or 50. Call (K=60) payoffs 20 or 0. Delta is:",
    options: ["0.333", "0.500", "0.667", "1.000"],
    correctAnswer: "0.667",
    process: "Delta = (20 - 0) / (80 - 50) = 0.667."
  },
  {
    id: '9-q39',
    category: 'Derivatives',
    question: "For an American call on non-dividend stock, early exercise is:",
    options: ["Always optimal", "Never optimal", "Required at maturity", "Optimal if S < K"],
    correctAnswer: "Never optimal",
    process: "By waiting, you keep time value and defer paying the strike price."
  },
  {
    id: '9-q40',
    category: 'Derivatives',
    question: "An American put may be exercised early because:",
    options: ["Holder wants to delay strike receipt", "Holder earns interest on strike receipt sooner", "Puts have no time value", "Early exercise is forbidden"],
    correctAnswer: "Holder earns interest on strike receipt sooner",
    process: "Receiving K early allows earning the risk-free rate on that cash."
  },
  {
    id: '9-q41',
    category: 'Quantitative',
    question: "Project costs EUR 100 now, pays EUR 121 in 2y. IRR is:",
    options: ["5%", "10%", "21%", "12.1%"],
    correctAnswer: "10%",
    process: "100 = 121 / (1+r)^2 => (1+r)^2 = 1.21 => 1+r = 1.1 => r = 10%."
  },
  {
    id: '9-q42',
    category: 'Quantitative',
    question: "Investment EUR 100, Payoff EUR 115 in 1y, r=10%. NPV is closest to:",
    options: ["EUR -5.45", "EUR 0", "EUR 4.55", "EUR 15.00"],
    correctAnswer: "EUR 4.55",
    process: "NPV = -100 + 115/1.1 = 4.55."
  },
  {
    id: '9-q43',
    category: 'Quantitative',
    question: "NPV EUR 12m, requires 4 units of resource. Profitability index is:",
    options: ["0.33", "3.00", "12.00", "48.00"],
    correctAnswer: "3.00",
    process: "12 / 4 = 3."
  },
  {
    id: '9-q44',
    category: 'Portfolio',
    question: "Changing one input at a time to see effect on NPV is:",
    options: ["Scenario analysis", "Sensitivity analysis", "Break-even analysis", "Comparable valuation"],
    correctAnswer: "Sensitivity analysis",
    process: "Sensitivity checks robustness of one variable."
  },
  {
    id: '9-q45',
    category: 'Portfolio',
    question: "Finding the sales quantity where NPV = 0 is:",
    options: ["Scenario analysis", "Break-even analysis", "CAPM analysis", "Rights analysis"],
    correctAnswer: "Break-even analysis",
    process: "Break-even is the zero-profit/zero-NPV point."
  },
  {
    id: '9-q46',
    category: 'Quantitative',
    question: "VU EUR 300m, PVTS EUR 30m, PVBC EUR 10m, Debt EUR 100m. Equity value (APV)?",
    options: ["EUR 200 million", "EUR 220 million", "EUR 320 million", "EUR 340 million"],
    correctAnswer: "EUR 220 million",
    process: "VL = 300 + 30 - 10 = 320. E = 320 - 100 = 220."
  },
  {
    id: '9-q47',
    category: 'Portfolio',
    question: "Firm worth EUR 100m today. E[V1] = EUR 112m. Expected return?",
    options: ["8%", "10%", "12%", "15%"],
    correctAnswer: "12%",
    process: "112 / 100 - 1 = 12%."
  },
  {
    id: '9-q48',
    category: 'Quantitative',
    question: "Debt pays 100 (80% prob) or 50 (20%). rf=5%, diversifiable risk. Debt value?",
    options: ["EUR 85.7", "EUR 90.5", "EUR 95.2", "EUR 100.0"],
    correctAnswer: "EUR 85.7",
    process: "E[P] = 80 + 10 = 90. Price = 90 / 1.05 = 85.71."
  },
  {
    id: '9-q49',
    category: 'Quantitative',
    question: "Using Q48, promised YTM is closest to:",
    options: ["5.0%", "10.0%", "16.7%", "20.0%"],
    correctAnswer: "16.7%",
    process: "100 / 85.7 - 1 = 16.7%."
  },
  {
    id: '9-q50',
    category: 'Quantitative',
    question: "Using Q48, expected return is:",
    options: ["5.0%", "10.0%", "16.7%", "20.0%"],
    correctAnswer: "5.0%",
    process: "90 / 85.7 - 1 = 5%."
  }
];

export const batch10: Question[] = [
  {
    id: '10-o1',
    category: 'Quantitative',
    question: "A firm has EBIT of $100m, taxes of $25m, and depreciation of $40m. CapEx is $30m and NWC increased by $10m. Calculate FCF. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "75 million",
    process: "FCF = (100 - 25) + 40 - 30 - 10 = 75 + 40 - 30 - 10 = 75."
  },
  {
    id: '10-o2',
    category: 'Quantitative',
    question: "A project requires $200m today and returns $250m in one year. If the cost of capital is 10%, what is the NPV? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "27.27 million",
    process: "NPV = -200 + 250/1.1 = -200 + 227.27 = 27.27."
  },
  {
    id: '10-o3',
    category: 'Quantitative',
    question: "A firm is all-equity with 50m shares at $20 each. It issues $200m debt to repurchase shares. In a world with no taxes, what is the new share price? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "$20.00",
    process: "MM Proposition I (No Taxes): Firm value and share price are independent of capital structure."
  },
  {
    id: '10-o4',
    category: 'Quantitative',
    question: "A 5-year bond with a 6% annual coupon and $1,000 face value is trading at par. What is its YTM? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "6%",
    process: "When a bond trades at par, its YTM equals its coupon rate."
  },
  {
    id: '10-o5',
    category: 'Quantitative',
    question: "Calculate the WACC for a firm with 40% debt, 60% equity, rD = 5%, rE = 12%, and a 20% tax rate. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "8.8%",
    process: "WACC = 0.6(12) + 0.4(5)(1 - 0.2) = 7.2 + 1.6 = 8.8%."
  },
  {
    id: '10-o6',
    category: 'Quantitative',
    question: "A stock has a beta of 1.4. The risk-free rate is 2% and the market risk premium is 5%. What is the expected return according to CAPM? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "9%",
    process: "E[R] = 2 + 1.4(5) = 2 + 7 = 9%."
  },
  {
    id: '10-o7',
    category: 'Quantitative',
    question: "A firm has a P/E ratio of 15 and earnings per share of $4. What is the stock price? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "$60",
    process: "Price = P/E * EPS = 15 * 4 = 60."
  },
  {
    id: '10-o8',
    category: 'Ethics',
    question: "Explain the 'agency problem' between managers and shareholders and one way debt can mitigate it. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Managers may waste free cash flow; debt forces disciplined payouts (interest).",
    process: "The 'Free Cash Flow Hypothesis' suggests that debt commits managers to making interest payments, reducing the cash available for wasteful perquisites or pet projects."
  }
];

export const batch11: Question[] = [
  {
    id: '11-q76',
    category: 'Investment',
    question: "A takeover defense that gives existing shareholders the right to buy shares cheaply if a hostile bidder crosses a threshold is called:",
    options: ["Poison pill", "Toehold", "Greenmail", "Dutch auction"],
    correctAnswer: "Poison pill",
    process: "A poison pill (shareholder rights plan) dilutes the bidder's ownership and makes the acquisition prohibitively expensive."
  },
  {
    id: '11-q77',
    category: 'Investment',
    question: "A friendly acquirer invited by target management to prevent a hostile takeover is called:",
    options: ["White knight", "Raider", "Proxy contest", "Underwriter"],
    correctAnswer: "White knight",
    process: "A white knight is a friendly firm that rescues the target from a hostile 'black knight' by making a better or more acceptable offer."
  },
  {
    id: '11-q78',
    category: 'Investment',
    question: "A car manufacturer acquires a battery supplier. This is best described as:",
    options: ["Horizontal merger", "Vertical merger", "Conglomerate merger", "Reverse split"],
    correctAnswer: "Vertical merger",
    process: "Vertical mergers involve companies at different stages of the same production chain (supply chain integration)."
  },
  {
    id: '11-q79',
    category: 'Investment',
    question: "Two competing supermarket chains merge. This is best described as:",
    options: ["Horizontal merger", "Vertical merger", "Conglomerate merger", "Leveraged lease"],
    correctAnswer: "Horizontal merger",
    process: "Horizontal mergers occur between direct competitors in the same industry and stage of production."
  },
  {
    id: '11-q80',
    category: 'Investment',
    question: "A software firm acquires a hotel chain with no operational relation. This is best described as:",
    options: ["Horizontal merger", "Vertical merger", "Conglomerate merger", "Stock dividend"],
    correctAnswer: "Conglomerate merger",
    process: "Conglomerate mergers involve companies in unrelated business activities."
  },
  {
    id: '11-q81',
    category: 'Investment',
    question: "A project can be abandoned after one year if it performs badly. This flexibility is most directly:",
    options: ["An abandonment option", "A stock dividend", "A call spread", "A rights issue"],
    correctAnswer: "An abandonment option",
    process: "The real option to abandon allows a firm to stop a project and recover salvage value if the NPV turns out to be negative."
  },
  {
    id: '11-q82',
    category: 'Investment',
    question: "A small pilot project gives the firm the right to invest more later if demand is high. This is:",
    options: ["Expansion option", "Debt overhang", "Poison pill", "Dividend smoothing"],
    correctAnswer: "Expansion option",
    process: "An expansion option (growth option) gives the firm the flexibility to scale up or pivot based on initial success."
  },
  {
    id: '11-q83',
    category: 'Investment',
    question: "The option to delay a project until uncertainty is resolved is most valuable when:",
    options: ["The project is irreversible and uncertainty is high.", "The project has no uncertainty.", "The project can never be abandoned.", "The discount rate is zero and payoff is certain."],
    correctAnswer: "The project is irreversible and uncertainty is high.",
    process: "The 'option to wait' is valuable because it avoids committing capital to a potentially failing project while waiting for better information."
  },
  {
    id: '11-q84',
    category: 'Portfolio',
    question: "An insurance payoff is highest exactly when the market performs badly. Its beta is likely:",
    options: ["Positive and high", "Zero", "Negative", "Always equal to one"],
    correctAnswer: "Negative",
    process: "Assets that pay off when the market is down have negative correlation with the market, thus negative beta."
  },
  {
    id: '11-q85',
    category: 'Quantitative',
    question: "An insurance contract pays EUR 100,000 with probability 2%. The appropriate cost of capital is -5%. Fair premium is closest to:",
    options: ["EUR 1,900", "EUR 2,000", "EUR 2,105", "EUR 5,000"],
    correctAnswer: "EUR 2,105",
    process: "E[Payoff] = 0.02 * 100,000 = 2,000. PV = 2000 / (1 - 0.05) = 2,105.26."
  },
  {
    id: '11-q86',
    category: 'Quantitative',
    question: "A European cash flow of EUR 5 million will arrive in one year. The one-year forward exchange rate is USD 1.20/EUR. The dollar discount rate is 6%. Dollar PV is closest to:",
    options: ["USD 4.72 million", "USD 5.00 million", "USD 5.66 million", "USD 6.00 million"],
    correctAnswer: "USD 5.66 million",
    process: "Future dollar cash flow: 5 * 1.20 = 6m. PV = 6 / 1.06 = 5.66m."
  },
  {
    id: '11-q87',
    category: 'Investment',
    question: "If markets are integrated and exchange-rate risk is hedged with forwards, the value of a foreign-currency cash flow should be:",
    options: ["Different depending on which currency method is used", "The same whether valued in domestic or foreign currency", "Always higher in foreign currency", "Equal to zero"],
    correctAnswer: "The same whether valued in domestic or foreign currency",
    process: "Interest rate parity and law of one price ensure consistency between home-currency and foreign-currency valuation methods."
  },
  {
    id: '11-q88',
    category: 'Quantitative',
    question: "APR is 12% with monthly compounding. Effective annual rate (EAR) is closest to:",
    options: ["12.00%", "12.36%", "12.68%", "13.00%"],
    correctAnswer: "12.68%",
    process: "EAR = (1 + 0.12/12)^12 - 1 = (1.01)^12 - 1 = 12.68%."
  },
  {
    id: '11-q89',
    category: 'Quantitative',
    question: "APR is 9.6% with monthly compounding. Monthly rate is:",
    options: ["0.60%", "0.80%", "0.96%", "9.60%"],
    correctAnswer: "0.80%",
    process: "Periodic rate = APR / m = 9.6% / 12 = 0.8%."
  },
  {
    id: '11-q90',
    category: 'Quantitative',
    question: "You deposit EUR 200 each month for 12 months. Monthly rate is 0.5%. Balance just after the final deposit is closest to:",
    options: ["EUR 2,400", "EUR 2,467", "EUR 2,520", "EUR 2,800"],
    correctAnswer: "EUR 2,467",
    process: "FV = 200 * [(1.005^12 - 1) / 0.005] = 200 * 12.3355 = 2467.11."
  },
  {
    id: '11-q91',
    category: 'Quantitative',
    question: "You receive EUR 1,000 in 3.5 years. The effective annual interest rate is 4%. Present value is closest to:",
    options: ["EUR 872", "EUR 900", "EUR 933", "EUR 961"],
    correctAnswer: "EUR 872",
    process: "PV = 1000 / 1.04^3.5 = 872.04."
  },
  {
    id: '11-q92',
    category: 'Investment',
    question: "Between coupon dates, a bond’s dirty price generally:",
    options: ["Falls by the accrued interest every day", "Rises as the next coupon approaches, all else equal", "Is always equal to face value", "Ignores accrued interest"],
    correctAnswer: "Rises as the next coupon approaches, all else equal",
    process: "The dirty price includes accrued interest, which builds up linearly (or slightly exponentially depending on convention) between payments."
  },
  {
    id: '11-q93',
    category: 'Investment',
    question: "On the coupon payment date, immediately after the coupon is paid, the dirty price drops by approximately:",
    options: ["The coupon amount", "The face value", "The YTM", "The credit spread"],
    correctAnswer: "The coupon amount",
    process: "The cash payment 'leaves' the bond, reducing its market value by exactly the amount given to the holder."
  },
  {
    id: '11-q94',
    category: 'Investment',
    question: "A default-free bond YTM is 3%, and an otherwise similar corporate bond YTM is 5.5%. Credit spread is:",
    options: ["2.0%", "2.5%", "3.0%", "5.5%"],
    correctAnswer: "2.5%",
    process: "Spread = YTM_corp - YTM_riskfree = 5.5% - 3.0% = 2.5%."
  },
  {
    id: '11-q95',
    category: 'Investment',
    question: "A corporate bond has face value EUR 1,000, coupon 4%, maturity 3 years. Default-free YTM is 2%, credit spread is 3%. Price is closest to:",
    options: ["EUR 973", "EUR 1,000", "EUR 1,028", "EUR 1,060"],
    correctAnswer: "EUR 973",
    process: "Total YTM = 2% + 3% = 5%. Price = 40/1.05 + 40/1.05^2 + 1040/1.05^3 = 38.09 + 36.28 + 898.39 = 972.77."
  },
  {
    id: '11-q96',
    category: 'Derivatives',
    question: "A call option has strike EUR 75. The stock trades at EUR 82 at expiration. Call holder payoff is:",
    options: ["EUR 0", "EUR 7", "EUR 75", "EUR 82"],
    correctAnswer: "EUR 7",
    process: "Payoff = max(S - K, 0) = max(82 - 75, 0) = 7."
  },
  {
    id: '11-q97',
    category: 'Derivatives',
    question: "A put option has strike EUR 50. The stock trades at EUR 42 at expiration. Put writer payoff is:",
    options: ["EUR 8", "EUR -8", "EUR 0", "EUR 42"],
    correctAnswer: "EUR -8",
    process: "Long put payoff = max(50 - 42, 0) = 8. Short (writer) payoff = -8."
  },
  {
    id: '11-q98',
    category: 'Derivatives',
    question: "You own one share and write one call with strike EUR 60. At expiration the stock price is EUR 75. Combined payoff, excluding the option premium, is:",
    options: ["EUR 15", "EUR 60", "EUR 75", "EUR 135"],
    correctAnswer: "EUR 60",
    process: "Short Call Payoff = -max(75-60, 0) = -15. Stock value = 75. Total = 75 - 15 = 60 (The stock is effectively sold for the strike price)."
  },
  {
    id: '11-q99',
    category: 'Derivatives',
    question: "You own one share and buy one put with strike EUR 40. At expiration the stock price is EUR 30. Combined payoff, excluding the option premium, is:",
    options: ["EUR 0", "EUR 30", "EUR 40", "EUR 70"],
    correctAnswer: "EUR 40",
    process: "Put Payoff = max(40-30, 0) = 10. Stock value = 30. Total = 30 + 10 = 40 (Floor at strike price)."
  }
];

export const batch12: Question[] = [
  {
    id: '12-o1',
    category: 'Quantitative',
    question: "A firm has EBIT of EUR 120 million, depreciation of EUR 15 million, capital expenditures of EUR 40 million, and an increase in net working capital of EUR 10 million. The corporate tax rate is 25%. Calculate free cash flow. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 55 million",
    process: "FCF = EBIT(1 - Tc) + Dep - CapEx - ΔNWC = 120(0.75) + 15 - 40 - 10 = 90 + 15 - 40 - 10 = 55."
  },
  {
    id: '12-o2',
    category: 'Quantitative',
    question: "A company reports net income of USD 90 million. Depreciation is USD 20 million. Accounts receivable increase by USD 8 million, inventory decreases by USD 5 million, and accounts payable decreases by USD 4 million. Calculate cash flow from operations. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "USD 103 million",
    process: "CFO = NI + Dep - ΔAR - ΔInventory + ΔAP = 90 + 20 - 8 - (-5) + (-4) = 103."
  },
  {
    id: '12-o3',
    category: 'Quantitative',
    question: "A company’s free cash flow next year is expected to be EUR 30 million and grow at 2% forever. WACC is 8%. The firm has debt of EUR 150 million and excess cash of EUR 20 million. Calculate enterprise value and equity value. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Enterprise value: EUR 500 million, Equity value: EUR 370 million",
    process: "EV = FCF1 / (WACC - g) = 30 / (0.08 - 0.02) = 500. Equity = EV - Debt + Cash = 500 - 150 + 20 = 370."
  },
  {
    id: '12-o4',
    category: 'Quantitative',
    question: "A stock is expected to pay a dividend of EUR 1.80 next year. Dividends will grow at 3% forever. The cost of equity is 9%. Calculate the current share price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 30",
    process: "P0 = Div1 / (rE - g) = 1.80 / (0.09 - 0.03) = 30."
  },
  {
    id: '12-o5',
    category: 'Quantitative',
    question: "A firm expects EPS of EUR 4 next year. It pays out 50% of earnings as dividends. The return on new investments is 12%, and the cost of equity is 10%. Calculate the expected growth rate and share price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Growth: 6%, Share price: EUR 50",
    process: "b = 1 - 0.5 = 0.5. g = b * ROE = 0.5 * 12% = 6%. Div1 = 4 * 0.5 = 2. P0 = 2 / (0.10 - 0.06) = 50."
  },
  {
    id: '12-o6',
    category: 'Investment',
    question: "A bond has face value EUR 1,000, annual coupon rate 5%, remaining maturity 5 years, and YTM 4%. Calculate its price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 1,044.52",
    process: "CPN = 50. P = 50/0.04 * [1 - 1.04^-5] + 1000/1.04^5 = 222.59 + 821.93 = 1044.52."
  },
  {
    id: '12-o7',
    category: 'Investment',
    question: "A corporate bond has face value GBP 1,000, coupon rate 6%, and maturity 4 years. The default-free YTM is 2.5%, and the credit spread is 2%. Calculate the corporate bond price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "GBP 1,053.81",
    process: "Total YTM = 2.5% + 2% = 4.5%. CPN = 60. P = 60/0.045 * [1 - 1.045^-4] + 1000/1.045^4 = 1053.81."
  },
  {
    id: '12-o8',
    category: 'Quantitative',
    question: "The 1-year zero-coupon spot rate is 2%, and the 2-year spot rate is 3%. Calculate the forward rate for year 2. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "4.01%",
    process: "1 + f2 = 1.03^2 / 1.02^1 = 1.0609 / 1.02 = 1.0401. f2 = 4.01%."
  },
  {
    id: '12-o9',
    category: 'Quantitative',
    question: "You borrow EUR 50,000 and repay it with equal annual payments for 10 years. The interest rate is 5%. Calculate the annual payment. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 6,475",
    process: "50000 = C / 0.05 * [1 - 1.05^-10]. C = 50000 / 7.7217 = 6475."
  },
  {
    id: '12-o10',
    category: 'Quantitative',
    question: "A bank quotes an APR of 6% with monthly compounding. Calculate the effective annual rate. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "6.17%",
    process: "EAR = (1 + 0.06/12)^12 - 1 = 6.17%."
  },
  {
    id: '12-o11',
    category: 'Quantitative',
    question: "A stock has beta 1.4. The risk-free rate is 3%, and the expected market return is 9%. Calculate the expected return. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "11.4%",
    process: "E[R] = rf + β(E[Rm] - rf) = 3% + 1.4(9% - 3%) = 3% + 8.4% = 11.4%."
  },
  {
    id: '12-o12',
    category: 'Quantitative',
    question: "A stock has expected return 13%. The risk-free rate is 4%, and the market risk premium is 6%. Calculate the stock’s beta. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "1.5",
    process: "13% = 4% + β(6%). 9% = β(6%). β = 1.5."
  },
  {
    id: '12-o13',
    category: 'Portfolio',
    question: "A portfolio invests 60% in stock A and 40% in stock B. Stock A has expected return 8% and volatility 20%. Stock B has expected return 12% and volatility 30%. Correlation is 0.25. Calculate expected return and volatility. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Expected return: 9.6%, Volatility: 18.97%",
    process: "E[Rp] = 0.6(8) + 0.4(12) = 9.6%. Var = 0.6^2(0.2^2) + 0.4^2(0.3^2) + 2(0.6)(0.4)(0.25)(0.2)(0.3) = 0.036. σ = sqrt(0.036) = 18.97%."
  },
  {
    id: '12-o14',
    category: 'Portfolio',
    question: "Portfolio A has expected return 10% and volatility 25%. Portfolio B has expected return 8% and volatility 15%. The risk-free rate is 2%. Which is better when combined with the risk-free asset? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Portfolio B (Higher Sharpe Ratio)",
    process: "Sharpe A = (10-2)/25 = 0.32. Sharpe B = (8-2)/15 = 0.40. Portfolio B is better."
  },
  {
    id: '12-o15',
    category: 'Quantitative',
    question: "A firm is financed with 70% equity and 30% debt. Cost of equity is 12%, pretax cost of debt is 5%, and the tax rate is 20%. Calculate WACC. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "9.6%",
    process: "WACC = 0.70(12%) + 0.30(5%)(1 - 0.20) = 8.4% + 1.2% = 9.6%."
  },
  {
    id: '12-o16',
    category: 'Quantitative',
    question: "An all-equity firm has cost of capital 10%. It changes capital structure to D/E=0.6. The cost of debt is 4%, and there are no taxes. Calculate the new cost of equity. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "13.6%",
    process: "rE = rU + D/E(rU - rD) = 10% + 0.6(10% - 4%) = 13.6%."
  },
  {
    id: '12-o17',
    category: 'Quantitative',
    question: "A firm is all-equity financed with value EUR 300 million and 30 million shares. It announces it will issue EUR 60 million permanent debt and use the proceeds to repurchase shares. The corporate tax rate is 25%. What is the share price just after the announcement? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 10.50",
    process: "Initial P = 300/30 = 10. PVTS = Tc*D = 0.25(60) = 15. Change per share = 15/30 = 0.50. New price = 10.50."
  },
  {
    id: '12-o18',
    category: 'Quantitative',
    question: "Using the firm in Question 17, how many shares can it repurchase using the EUR 60 million debt proceeds? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "5.714 million shares",
    process: "Repurchase price = 10.50. Shares = 60 / 10.50 = 5.714 million."
  },
  {
    id: '12-o19',
    category: 'Quantitative',
    question: "A stock trades cum-dividend at EUR 55. The firm pays a dividend of EUR 2.20 per share. In perfect markets, what is the ex-dividend price? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 52.80",
    process: "Pex = Pcum - Div = 55 - 2.20 = 52.80."
  },
  {
    id: '12-o20',
    category: 'Quantitative',
    question: "A company has 8 million shares outstanding at EUR 25. It announces a 25% stock dividend. What are the number of shares and share price after the stock dividend, assuming no information effects? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Shares: 10 million, Price: EUR 20",
    process: "New shares = 8 * 1.25 = 10. Total value = 8 * 25 = 200. New price = 200 / 10 = 20."
  },
  {
    id: '12-o21',
    category: 'Quantitative',
    question: "A firm has 200 million shares. Each shareholder receives one right per share. Four rights are needed to buy one new share at EUR 12. How many new shares are issued, and how much money is raised? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "New shares: 50 million, Amount raised: EUR 600 million",
    process: "New shares = 200 / 4 = 50. Money raised = 50 * 12 = 600."
  },
  {
    id: '12-o22',
    category: 'Investment',
    question: "A founder owns 4 million shares. A venture capitalist invests EUR 10 million for 2 million new shares. Calculate the post-money valuation and the founder’s equity value after the investment. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Post-money: EUR 30 million, Founder value: EUR 20 million",
    process: "Price = 10/2 = 5. Total shares = 6. Post-money = 6*5=30. Founder value = 4*5=20."
  },
  {
    id: '12-o23',
    category: 'Investment',
    question: "Acquirer A has 20 million shares at EUR 30. Target B has 5 million shares at EUR 20. A offers a 20% premium and pays using newly issued shares. There are no synergies. What is the value paid and how many shares must A issue if the market adjusts for the overpayment? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Value paid: EUR 120 million, Shares issued: 4.14 million",
    process: "Target value = 5*20=100. Premium pay = 120. Overpay = 20. Acquirer adjusted value = 600-20=580. Adjusted price = 580/20=29. Shares = 120/29=4.14."
  },
  {
    id: '12-o24',
    category: 'Investment',
    question: "A publicly traded firm is worth EUR 400 million. A buyout team believes it can increase the value to EUR 700 million. It can borrow EUR 500 million using the target’s assets. How much own equity capital must the buyout team provide to persuade all shareholders to sell? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 200 million",
    process: "Post-buyout value = 700. Debt = 500. Equity value = 200. Shareholders must receive the post-buyout total value (700) to sell. Debt provides 500, so buyers provide 200."
  },
  {
    id: '12-o25',
    category: 'Investment',
    question: "A firm has debt due next year with face value EUR 80 million. Without new investment, assets will be worth EUR 60 million. A project costs EUR 30 million today and increases next year’s asset value to EUR 110 million. Is the project positive NPV? Will shareholders invest? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Positive NPV (EUR 20m), Shareholders indifferent (Gain = Cost = 30)",
    process: "Gain in value = 110-60=50. Cost=30. NPV=20. Equity value with project = 110-80=30. Without = 0. Gain = 30. Cost = 30."
  },
  {
    id: '12-o26',
    category: 'Investment',
    question: "A levered firm has debt with face value EUR 50 million due next year. It can choose Project Safe (EUR 70m for sure) or Project Risky (EUR 120m with 50% prob, else 0). Which project do shareholders prefer? Which maximizes total firm value? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Shareholders prefer Risky, Total value maximized by Safe",
    process: "Safe: SH=20, Total=70. Risky: E[SH]=0.5(70)+0=35, E[Total]=0.5(120)=60."
  },
  {
    id: '12-o27',
    category: 'Quantitative',
    question: "A firm’s unlevered value is EUR 800 million. The PV of interest tax shields is EUR 120 million. The PV of expected financial distress costs is EUR 50 million. The firm has EUR 300 million in debt. Calculate levered value and equity value. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Levered value: EUR 870 million, Equity value: EUR 570 million",
    process: "VL = 800 + 120 - 50 = 870. E = 870 - 300 = 570."
  },
  {
    id: '12-o28',
    category: 'Quantitative',
    question: "A firm has zero-coupon debt promising EUR 100 million next year. It will pay EUR 100 million (70% prob) or EUR 60 million (30% prob). Risk-free rate is 5%. Risk is diversifiable. Calculate debt value and YTM. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Debt value: EUR 83.81 million, YTM: 19.32%",
    process: "E[Payoff] = 88. D0 = 88 / 1.05 = 83.81. YTM = 100 / 83.81 - 1 = 19.32%."
  },
  {
    id: '12-o29',
    category: 'Quantitative',
    question: "Using Question 28, calculate the expected return on the risky debt. Explain why it differs from the YTM. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Expected return: 5%",
    process: "E[R] = 88 / 83.81 - 1 = 5%. YTM is higher because it uses the promised (maximum) payoff, not the expected (average) payoff."
  },
  {
    id: '12-o30',
    category: 'Quantitative',
    question: "A machine costs EUR 1,000,000 and is expected to have residual value EUR 200,000 after 5 years. The discount rate is 6%. What is the PV of lease payments needed for the lessor to break even? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 850,548",
    process: "PV(Residual) = 200,000 / 1.06^5 = 149,452. PV(Lease) = 1,000,000 - 149,452 = 850,548."
  },
  {
    id: '12-o31',
    category: 'Quantitative',
    question: "Using Question 30, suppose the lease payments are made annually at the beginning of each year for 5 years. Calculate the annual lease payment. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 190,488",
    process: "Annuity-due factor = 1 + [ (1 - 1.06^-4) / 0.06 ] = 4.4651. L = 850,548 / 4.4651 = 190,488."
  },
  {
    id: '12-o32',
    category: 'Investment',
    question: "A firm sells 300,000 shares in an auction IPO. Bids: 100k @ €12, 80k @ €11, 150k @ €10, 200k @ €9. Determine the clearing price and amount raised. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Clearing price: EUR 10, Amount raised: EUR 3,000,000",
    process: "Cumulative: 100k, 180k, 330k. At €10, demand covers 300k. Clearing price = 10. Raised = 300k * 10 = 3m."
  },
  {
    id: '12-o33',
    category: 'Derivatives',
    question: "A stock trades at EUR 80. A one-year European call with strike EUR 84 costs EUR 7. The risk-free rate is 5%, and the stock pays no dividends. Calculate the price of the otherwise identical put. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 7",
    process: "P = C + K/(1+r) - S = 7 + 84/1.05 - 80 = 7 + 80 - 80 = 7."
  }
];

export const batch13: Question[] = [
  {
    id: '13-o34',
    category: 'Derivatives',
    question: "A stock trades at EUR 100. In one year it will be EUR 130 or EUR 80. The risk-free rate is 4%. A European call has strike EUR 100. Calculate its value using risk-neutral probabilities. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 13.85",
    process: "p = (1.04(100) - 80) / (130 - 80) = 24 / 50 = 0.48. Cu = 30, Cd = 0. C0 = (0.48 * 30) / 1.04 = 13.85."
  },
  {
    id: '13-o35',
    category: 'Derivatives',
    question: "Using the assumptions from question 34 (S=100, Su=130, Sd=80, K=100), calculate the replicating portfolio delta for the call option. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "0.60",
    process: "Δ = (Cu - Cd) / (Su - Sd) = (130 - 100 - 0) / (130 - 80) = 30 / 50 = 0.60."
  },
  {
    id: '13-o36',
    category: 'Derivatives',
    question: "Using the results from questions 34 and 35 (Δ=0.60, Cd=0, Sd=80), calculate B, the amount invested in the risk-free asset (borrowing/lending), in the replicating portfolio (r=4%). Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "-EUR 46.15",
    process: "ΔSd + 1.04B = Cd => 0.60(80) + 1.04B = 0 => 48 + 1.04B = 0 => B = -46.15. The investor borrows EUR 46.15."
  },
  {
    id: '13-o37',
    category: 'Derivatives',
    question: "A one-period American put has strike EUR 100. Current stock price is EUR 90. The risk-free rate is 5%. The stock will be EUR 120 or EUR 70 in one year. Calculate whether early exercise is optimal today if the continuation value is EUR 18. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Do not exercise early",
    process: "Immediate exercise value = 100 - 90 = 10. Continuation value = 18. Since 18 > 10, early exercise is not optimal."
  },
  {
    id: '13-o38',
    category: 'Derivatives',
    question: "You own one share and write one call option with strike EUR 50. Calculate the combined payoff at expiration if the stock price is EUR 70. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 50",
    process: "If S=70: Share=70, Short call = -(70-50) = -20. Total = 50. The payoff is capped at the strike price."
  },
  {
    id: '13-o39',
    category: 'Derivatives',
    question: "You own one share and buy one put with strike EUR 50. Calculate the combined payoff at expiration if the stock price is EUR 35. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 50",
    process: "If S=35: Share=35, Put = 50 - 35 = 15. Total = 35 + 15 = 50. The protective put creates a floor at the strike price."
  },
  {
    id: '13-o40',
    category: 'Derivatives',
    question: "A convertible bond has face value EUR 1,000 and can be converted into 25 shares. If the share price is EUR 36, what is the minimum value (floor) of the convertible bond at maturity? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 1,000",
    process: "Conversion value = 25 * 36 = 900. Face value = 1000. Minimum = max(1000, 900) = 1000."
  },
  {
    id: '13-o41',
    category: 'Derivatives',
    question: "A convertible bond has face value EUR 1,000 and can be converted into 20 shares. At maturity, the share price is EUR 70. What is the final value received by the investor? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 1,400",
    process: "Conversion value = 20 * 70 = 1400. Face value = 1000. Since 1400 > 1000, holder converts and receives 1400."
  },
  {
    id: '13-o42',
    category: 'Quantitative',
    question: "A project costs EUR 200 today and pays EUR 242 in two years. Calculate the IRR. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "10%",
    process: "200 = 242 / (1+IRR)^2 => (1+IRR)^2 = 1.21 => 1+IRR = 1.1 => IRR = 10%."
  },
  {
    id: '13-o43',
    category: 'Quantitative',
    question: "A project requires an investment of EUR 500,000 at the end of year 1 and pays EUR 732,050 at the end of year 5. Calculate the IRR. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "10%",
    process: "500000(1+r)^4 = 732050 => (1+r)^4 = 1.4641 => 1+r = 1.1 => IRR = 10%."
  },
  {
    id: '13-o44',
    category: 'Quantitative',
    question: "A project produces EUR 2 million at t=0 and requires EUR 2.4 million at t=1. The cost of capital is 15%. Calculate the NPV [in EUR million]. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "-0.087 million",
    process: "NPV = 2 - 2.4 / 1.15 = 2 - 2.087 = -0.087. IRR is 20%. Since NPV is negative, reject."
  },
  {
    id: '13-o45',
    category: 'Quantitative',
    question: "A firm has capital rationing. Project A has NPV EUR 12 million and uses 3 machine-days. Project B has NPV EUR 10 million and uses 2 machine-days. What is the Profitability Index (PI) of Project B? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "5",
    process: "PI_A = 12/3 = 4. PI_B = 10/2 = 5."
  },
  {
    id: '13-o46',
    category: 'Quantitative',
    question: "Explain how sensitivity analysis helps a CFO identify key value drivers. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "It isolates the impact of each individual assumption on NPV by changing one input at a time.",
    process: "Sensitivity analysis shows which input has the largest effect on NPV, helping identify assumptions that require the most careful estimation."
  },
  {
    id: '13-o47',
    category: 'Quantitative',
    question: "Explain the main difference between sensitivity analysis and scenario analysis. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Sensitivity analysis isolates single assumptions; scenario analysis evaluates combined sets of assumptions.",
    process: "Sensitivity analysis changes one input at a time. Scenario analysis changes several inputs together to create coherent cases (e.g., pessimistic, base-case, optimistic)."
  },
  {
    id: '13-o48',
    category: 'Quantitative',
    question: "A project has annual fixed costs of EUR 100,000. Price per unit is EUR 50, variable cost is EUR 30, and annual depreciation is EUR 20,000. Ignoring taxes, calculate the accounting break-even quantity. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "6,000 units",
    process: "Contribution margin = 50 - 30 = 20. Break-even Q = (Fixed Costs + Depreciation) / Contribution Margin = 120,000 / 20 = 6,000."
  },
  {
    id: '13-o49',
    category: 'Quantitative',
    question: "A firm invests EUR 1 million. It can expense the full amount immediately (rule A) or depreciate straight-line over 5 years (rule B). Tax rate is 30%, discount rate is 8%. Calculate the value added by choosing rule A over rule B. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 60,437",
    process: "PV tax safe (A) = 0.3 * 1m = 300,000. PV tax safe (B) = 60,000 * Annuity(8%, 5y) = 239,563. Value added = 300,000 - 239,563 = 60,437."
  },
  {
    id: '13-o50',
    category: 'Quantitative',
    question: "A machine costs EUR 500,000. It can be depreciated over 2 years (new rule) instead of 5 years (old rule). Tax rate is 25%, discount rate is 10%. Calculate the value added by accelerated depreciation. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 13,701",
    process: "PV old shield = 25k * Annuity(10%, 5y) = 94,770. PV new shield = 62.5k * Annuity(10%, 2y) = 108,471. Added value = 13,701."
  },
  {
    id: '13-o51',
    category: 'Quantitative',
    question: "A comparable firm has equity value EUR 600 million, debt value EUR 400 million, equity beta 1.5, and debt beta 0.2. Estimate the asset beta. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "0.98",
    process: "βA = (E/V)βE + (D/V)βD = (600/1000)1.5 + (400/1000)0.2 = 0.90 + 0.08 = 0.98."
  },
  {
    id: '13-o52',
    category: 'Quantitative',
    question: "Using an asset beta of 0.98, calculate the project cost of capital if the risk-free rate is 3% and the market risk premium is 6%. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "8.88%",
    process: "r = 3% + 0.98(6%) = 8.88%."
  },
  {
    id: '13-o53',
    category: 'Quantitative',
    question: "A firm has market value of equity EUR 700 million and debt EUR 300 million. Cost of equity is 11%, cost of debt is 4%, and the tax rate is 25%. Calculate WACC. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "8.6%",
    process: "WACC = (700/1000)11% + (300/1000)4%(1-0.25) = 7.7% + 0.9% = 8.6%."
  },
  {
    id: '13-o54',
    category: 'Quantitative',
    question: "A firm has rU=9.67%. If the firm changes to D/E=1.0 and cost of debt is 5% (no taxes), calculate the new cost of equity. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "14.34%",
    process: "rE = rU + (D/E)(rU - rD) = 9.67% + 1.0(9.67% - 5%) = 14.34%."
  },
  {
    id: '13-o55',
    category: 'Quantitative',
    question: "Explain why, with corporate taxes, interest tax shields can increase firm value. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Interest is tax-deductible, which reduces the after-tax cost of debt and increases cash flow to investors.",
    process: "Interest payments reduce taxable income. This creates a tax shield = Tc * Interest, effectively subsidizing debt financing."
  },
  {
    id: '13-o56',
    category: 'Quantitative',
    question: "In a perfect capital market without taxes, why does leverage not affect total firm value? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "It changes the allocation of cash flows, not the total cash flows generated by the assets.",
    process: "Total firm value is independent of capital structure because investors can create 'homemade leverage' themselves."
  },
  {
    id: '13-o57',
    category: 'Quantitative',
    question: "Why is dividend policy considered irrelevant in perfect capital markets? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Paying a dividend reduces the share price by the same amount, leaving shareholder wealth unchanged.",
    process: "Shareholders receive cash but own a less valuable share. They could achieve the same result by selling shares themselves."
  },
  {
    id: '13-o58',
    category: 'Quantitative',
    question: "A firm has 10 million shares at EUR 20 and EUR 40 million excess cash. What is the ex-dividend price if it pays all cash as a dividend in a perfect market? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 16",
    process: "Dividend per share = 40 / 10 = 4. Ex-price = 20 - 4 = 16."
  },
  {
    id: '13-o59',
    category: 'Quantitative',
    question: "A firm has EUR 50 million excess cash earning taxable interest forever. The corporate tax rate is 30%. What is the value created from distributing the cash and avoiding future taxes? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 15 million",
    process: "Value of tax avoidance = Tc * Cash = 0.30 * 50 = 15 million."
  },
  {
    id: '13-o60',
    category: 'Investment',
    question: "What is dividend smoothing? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "The practice of making dividends less volatile than earnings.",
    process: "Firms adjust dividends gradually because cuts signal bad news and they want dividends to be sustainable."
  },
  {
    id: '13-o61',
    category: 'Investment',
    question: "State the preferred financing order in the pecking order theory. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Retained earnings -> Debt -> Equity",
    process: "Firms prefer internal funds first, then debt, and equity last due to asymmetric information costs."
  },
  {
    id: '13-o62',
    category: 'Investment',
    question: "Why might a firm reject a positive-NPV project when its equity is undervalued? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Because issuing undervalued equity transfers too much value from existing to new shareholders.",
    process: "This is an adverse-selection cost. The dilution loss exceeds the project's NPV gain for existing owners."
  },
  {
    id: '13-o63',
    category: 'Investment',
    question: "How does a rights issue solve the adverse-selection problem in equity issuance? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "It allows existing shareholders to buy new shares and avoid dilution from underpricing.",
    process: "Since current owners aren't 'outsiders', they don't lose value to new investors even if the price is 'wrong'."
  },
  {
    id: '13-o64',
    category: 'Investment',
    question: "What is the free-rider problem in takeovers? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Target shareholders hold out for the post-takeover value, preventing the acquirer from capturing gains.",
    process: "Each shareholder hopes others sell so they can stay and benefit from improvements without paying the 'tender' premium cost."
  },
  {
    id: '13-o65',
    category: 'Investment',
    question: "What is a toehold in the context of mergers and acquisitions? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "An initial ownership stake bought before launching a formal takeover bid.",
    process: "A toehold allows the acquirer to capture value increases on shares they already own, reducing the net acquisition cost."
  },
  {
    id: '13-o66',
    category: 'Investment',
    question: "How does high leverage in an LBO help overcome the free-rider problem? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "By placing debt on the target, the post-buyout equity value is reduced, making it cheaper to buy.",
    process: "Leverage reduces the amount of 'own' equity capital the buyer must risk."
  },
  {
    id: '13-o67',
    category: 'Investment',
    question: "Definer a staggered board and explain its purpose. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "A board where only a fraction of directors are elected each year, delaying a hostile bidder from gaining control.",
    process: "Even with a majority of shares, the acquirer cannot replace the whole board immediately."
  },
  {
    id: '13-o68',
    category: 'Investment',
    question: "Explain the threat of a 'poison pill'. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "It deters bidders by threatening severe dilution via cheap share issuance to existing owners.",
    process: "Hostile bidders are excluded from the discounted purchase right, making the target too expensive to digest."
  },
  {
    id: '13-o69',
    category: 'Investment',
    question: "Classify a merger where a clothing retailer buys a fabric supplier. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Vertical merger",
    process: "This is a buyer-supplier relationship (vertical integration)."
  }
];

export const batch14: Question[] = [
  {
    id: '14-o70',
    category: 'Investment',
    question: "Acquirer A is worth EUR 500 million. Target B is worth EUR 200 million. If merged, the combined firm is worth EUR 760 million. Calculate the synergies. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 60 million",
    process: "Synergy = V_combined - (V_A + V_B) = 760 - (500 + 200) = 60."
  },
  {
    id: '14-o71',
    category: 'Investment',
    question: "Acquirer has 50m shares at EUR 20. Target has 10m shares at EUR 15. Acquirer offers 1 new share for each target share. Synergies = EUR 100m. Calculate the post-merger share price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 20.83",
    process: "V_combined = (50*20) + (10*15) + 100 = 1250. Total shares = 50 + 10 = 60. Price = 1250 / 60 = 20.83."
  },
  {
    id: '14-o72',
    category: 'Quantitative',
    question: "An insurance contract pays EUR 200,000 if recession occurs (5% prob). Beta = -1.5, rf = 2%, MRP = 6%. Calculate the fair premium. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 10,752.69",
    process: "Expected payoff = 0.05 * 200k = 10,000. r = 2% + (-1.5 * 6%) = -7%. Premium = 10,000 / (1 - 0.07) = 10,752.69."
  },
  {
    id: '14-o73',
    category: 'Quantitative',
    question: "A U.S. investor will receive EUR 3 million in one year. Forward rate = USD 1.10/EUR, and USD discount rate = 5%. Estimate the PV in dollars. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "USD 3.143 million",
    process: "Future USD = 3 * 1.1 = 3.3. PV = 3.3 / 1.05 = 3.1429."
  },
  {
    id: '14-o74',
    category: 'International',
    question: "What does it mean for international capital markets to be 'integrated'? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Equivalent investments have the same value after adjusting for exchange rates and risk.",
    process: "Integration means no-arbitrage valuation gives the same PV regardless of which currency is used for the cash flow projection."
  },
  {
    id: '14-o75',
    category: 'Quantitative',
    question: "Project costs 100 today. Pays 120 or 80 in 1y (50/50). r=10%. If you wait 1y and only invest in the good state (payoff 1y later), what is the value of waiting? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 4.13",
    process: "NPV now = -9.09. Wait: Good state NPV at t=1 is 9.09. Exp Value at t=1 = 0.5 * 9.09 = 4.545. PV = 4.545 / 1.1 = 4.13."
  },
  {
    id: '14-o76',
    category: 'Quantitative',
    question: "Project costs 100. Worth 150 or 60 in 1y (50/50). r=10%. You can abandon in bad state for EUR 80. Calculate NPV. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 4.55",
    process: "Expected payoff = 0.5*150 + 0.5*80 = 115. NPV = -100 + 115/1.1 = 4.55."
  },
  {
    id: '14-o77',
    category: 'Quantitative',
    question: "Pilot project costs 10m, stand-alone NPV = -1m. If successful (40%), can expand for +6m NPV. Should you start the pilot? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Yes, Total NPV = EUR 1.4 million",
    process: "Total NPV = Stand-alone + Option = -1 + 0.4(6) = 1.4 million. Accept."
  },
  {
    id: '14-o78',
    category: 'Quantitative',
    question: "Test cost = 1m. 50% chance NPV = 5, 50% chance NPV = -3. If bad, sell info for 0.5 in 1y. r=10%. Calculate NPV today. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 1.50 million",
    process: "Exp Value t=1 = 0.5*5 + 0.5*0.5 = 2.75. PV = 2.75/1.1 = 2.5. NPV = 2.5 - 1 = 1.5."
  },
  {
    id: '14-o79',
    category: 'Derivatives',
    question: "Why does increasing volatility increase call option value? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Upside potential increases while downside is limited (capped at zero).",
    process: "Higher volatility makes extreme high prices more likely, while the bottom payoff remains zero."
  },
  {
    id: '14-o80',
    category: 'Derivatives',
    question: "Does increasing volatility increase put option value? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Yes, because the payoff is asymmetric.",
    process: "Higher volatility increases the probability of extreme low prices (gains), while high prices result in zero payoff."
  },
  {
    id: '14-o81',
    category: 'Derivatives',
    question: "Why is it generally not optimal to exercise an American call early if there are no dividends? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "It sacrifices time value and the benefit of delaying the strike payment.",
    process: "Waiting preserves the option value and keeps cash in your pocket longer without losing dividend income."
  },
  {
    id: '14-o82',
    category: 'Derivatives',
    question: "When might an American put be exercised early? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "When it is deep in the money, to receive the strike price and earn interest earlier.",
    process: "The interest on the cash strike can exceed the remaining time value of the option."
  },
  {
    id: '14-o83',
    category: 'Derivatives',
    question: "S = 40. In 1y, S = 50 or 30. r = 5%. Calculate the risk-neutral probability of the 'up' state. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "60%",
    process: "p = (1.05 * 40 - 30) / (50 - 30) = 12 / 20 = 0.60."
  },
  {
    id: '14-o84',
    category: 'Derivatives',
    question: "Using S=40, Su=50, Sd=30, r=5%, calculate the value of a European put with strike EUR 38. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 3.05",
    process: "Pu = 0, Pd = 38-30 = 8. p=0.6. P0 = (0.6*0 + 0.4*8) / 1.05 = 3.05."
  },
  {
    id: '14-o85',
    category: 'Derivatives',
    question: "Calculate the delta for the put option in question 84. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "-0.40",
    process: "Delta = (Pu - Pd) / (Su - Sd) = (0 - 8) / (50 - 30) = -0.40."
  },
  {
    id: '14-o86',
    category: 'Investment',
    question: "D1=2. Growth is 10% for 2y, then 4% forever. rE=9%. Calculate stock price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 44.41",
    process: "D1=2, D2=2.2, D3=2.42. P3 = (2.42*1.04)/(0.09-0.04) = 50.34. P0 = 2/1.09 + 2.2/1.09^2 + (2.42+50.34)/1.09^3 = 44.41."
  },
  {
    id: '14-o87',
    category: 'Investment',
    question: "Comparable EV/EBITDA = 8. Target EBITDA = 30m, Debt = 100m, Cash = 10m. Estimate equity value. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 150 million",
    process: "EV = 8 * 30 = 240. Equity = 240 - 100 + 10 = 150."
  },
  {
    id: '14-o88',
    category: 'Investment',
    question: "Comparable P/E = 15. Target EPS = 2.40 on 10m shares. Estimate share price. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "EUR 36",
    process: "Price = 15 * 2.40 = 36."
  },
  {
    id: '14-o89',
    category: 'Investment',
    question: "Identify one major limitation of using comparable multiples for valuation. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Comparables are not identical and multiples may reflect market mispricing.",
    process: "Firms differ in growth, risk, and accounting policies, making 'perfect' peers impossible."
  },
  {
    id: '14-o90',
    category: 'Investment',
    question: "A stock price jumps immediately after a news release. Does this contradict semi-strong efficiency? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "No, immediate reaction confirms it.",
    process: "Semi-strong efficiency says prices adjust rapidly to public news; a jump is exactly what's expected."
  },
  {
    id: '14-o91',
    category: 'Investment',
    question: "Does the immediate price jump in question 90 contradict strong-form efficiency? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Yes.",
    process: "Strong efficiency implies all info (including private) is already priced in, so news releases shouldn't cause jumps."
  },
  {
    id: '14-o92',
    category: 'Investment',
    question: "Beta = 1, rf = 3%, MRP = 6%. Expected return is 7%. Is it above or below SML? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Below the SML",
    process: "Required r = 3 + 1(6) = 9%. Since 7% < 9%, it is an underperforming asset below the line."
  },
  {
    id: '14-o93',
    category: 'Investment',
    question: "Portfolio beta = 1.2, expected return = 12%, rf = 3%, MRP = 6%. Calculate alpha. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "1.8%",
    process: "CAPM r = 3 + 1.2(6) = 10.2%. Alpha = 12% - 10.2% = 1.8%."
  },
  {
    id: '14-o94',
    category: 'Investment',
    question: "What is the core advice of CAPM regarding active stock picking based on public tips? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Use passive diversified strategies; tips are likely already priced in.",
    process: "In efficient markets, you cannot consistently beat the market via public info; diversification is superior."
  },
  {
    id: '14-o95',
    category: 'Investment',
    question: "Can a stock have higher volatility than the market but lower expected return? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "Yes, if its systematic risk (beta) is low.",
    process: "Volatility includes unsystematic risk which CAPM does not reward. Only beta drives expected returns."
  },
  {
    id: '14-o96',
    category: 'Investment',
    question: "rf = 2%, Rm = 8%, VolM = 20%. What is the expected return of an efficient portfolio with 30% vol? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "11%",
    process: "CML: Er = 2 + (8-2)/20 * 30 = 2 + 9 = 11%."
  },
  {
    id: '14-o97',
    category: 'Investment',
    question: "Using CML, if you want 30% volatility (with market vol 20%), how much do you invest in the market? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "150%",
    process: "WeightM = VolTarget / VolM = 30 / 20 = 1.5. You borrow 50% r_f."
  },
  {
    id: '14-o98',
    category: 'Investment',
    question: "rf = 2%, Rm = 8%. What weights give an expected return of 5%? Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "50% Market, 50% Risk-Free",
    process: "5 = 2 + w(8-2) => 3 = 6w => w=0.5."
  },
  {
    id: '14-o99',
    category: 'International',
    question: "A firm expects 10m EUR in 1y. Forward = 1.25 USD/EUR. Calculate the locked-in USD amount. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "USD 12.5 million",
    process: "Amount = 10 million * 1.25 = 12.5 million."
  },
  {
    id: '14-o100',
    category: 'Quantitative',
    question: "FCF1=40, g=2%, rE=11%, pre-tax rD=5%, D/V=40%, taxes=25%. Calc WACC and Enterprise Value. Please show all your step-by-step calculations, provide detailed reasoning, and justify your final answer clearly.",
    correctAnswer: "WACC=8.1%, EV=EUR 655.74 million",
    process: "WACC = 0.6(11) + 0.4(5)(1-0.25) = 6.6 + 1.5 = 8.1%. EV = 40 / (0.081 - 0.02) = 655.74."
  }
];

export const finalExam2024: Question[] = [...batch3A, ...batch3B];
export const resitApril2024: Question[] = [...batch4A, ...batch4B, ...batch7A, ...batch7B];
export const resitApril2024Open: Question[] = [...batch4B, ...batch7B];
export const resitApril2024MCQ: Question[] = [...batch4A, ...batch7A];

export const finalJan2025: Question[] = [...batch5A, ...batch5B];

export const resitApril2025: Question[] = [...batch6A, ...batch6B, ...batch8A, ...batch8B];
export const resitApril2025Open: Question[] = [...batch6B, ...batch8B];
export const resitApril2025MCQ: Question[] = [...batch6A, ...batch8A];

// Combined pool of all open-ended questions for mock generation
const openPool: Question[] = [
  ...batch1G, ...batch2G, ...batch3B, ...batch4B, ...batch5B, ...batch6B, ...batch7B, 
  ...batch8B, ...batch10, ...batch12, ...batch13, ...batch14
];

// 13 New Sierra Mocks (10 MCQ + 10 Open each)
export const mockSierra1: Question[] = [...batch1A.slice(0, 10), ...openPool.slice(0, 10)];
export const mockSierra2: Question[] = [...batch1B.slice(0, 10), ...openPool.slice(10, 20)];
export const mockSierra3: Question[] = [...batch1C.slice(0, 10), ...openPool.slice(20, 30)];
export const mockSierra4: Question[] = [...batch1D.slice(0, 10), ...openPool.slice(30, 40)];
export const mockSierra5: Question[] = [...batch1E.slice(0, 10), ...openPool.slice(40, 50)];
export const mockSierra6: Question[] = [...batch1F.slice(0, 10), ...openPool.slice(50, 60)];
export const mockSierra7: Question[] = [...batch3A.slice(0, 10), ...openPool.slice(60, 70)];
export const mockSierra8: Question[] = [...batch4A.slice(0, 10), ...openPool.slice(70, 80)];
export const mockSierra9: Question[] = [...batch5A.slice(0, 10), ...openPool.slice(80, 90)];
export const mockSierra10: Question[] = [...batch6A.slice(0, 10), ...openPool.slice(90, 100)];
export const mockSierra11: Question[] = [...batch7A.slice(0, 10), ...openPool.slice(100, 110)];
export const mockSierra12: Question[] = [...batch9.slice(0, 10), ...openPool.slice(110, 120)];
export const mockSierra13: Question[] = [...batch11.slice(0, 10), ...openPool.slice(120, 130)];
