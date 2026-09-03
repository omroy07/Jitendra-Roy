'use client';

import React, { useState, useCallback } from 'react';

export default function InvestmentCalculator() {
  const [landPrice, setLandPrice] = useState<string>('1000000');
  const [appreciation, setAppreciation] = useState<string>('12');
  const [years, setYears] = useState<string>('5');
  const [regCost, setRegCost] = useState<string>('7');

  const calculate = useCallback(() => {
    const price = parseFloat(landPrice) || 0;
    const rate = parseFloat(appreciation) / 100;
    const yrs = parseFloat(years) || 1;
    const reg = parseFloat(regCost) / 100;

    const futureValue = price * Math.pow(1 + rate, yrs);
    const totalInvestment = price + price * reg;
    const profit = futureValue - totalInvestment;
    const roi = ((profit / totalInvestment) * 100);

    return {
      futureValue: futureValue.toFixed(0),
      profit: profit.toFixed(0),
      roi: roi.toFixed(1),
      totalInvestment: totalInvestment.toFixed(0),
    };
  }, [landPrice, appreciation, years, regCost]);

  const result = calculate();

  const formatINR = (val: string) => {
    const num = parseFloat(val);
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <section className="section-padding bg-muted" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-3">
            📊 Investment Calculator
          </span>
          <h2 className="text-section-title font-extrabold text-foreground">
            Calculate Your{' '}
            <span className="text-gradient-emerald">Land Investment Returns</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            See how much your land investment can grow in Satna & MP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Inputs */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
            <h3 className="font-bold text-foreground text-lg mb-6">Enter Investment Details</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Land Price (₹)
                </label>
                <input
                  type="number"
                  value={landPrice}
                  onChange={(e) => setLandPrice(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-xl text-foreground bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="e.g. 1000000"
                />
                <p className="text-xs text-muted-foreground mt-1">{formatINR(landPrice)}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Expected Annual Appreciation (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={appreciation}
                  onChange={(e) => setAppreciation(e.target.value)}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5%</span>
                  <span className="font-bold text-primary">{appreciation}% p.a.</span>
                  <span>30%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Investment Period (Years)
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 Year</span>
                  <span className="font-bold text-primary">{years} Years</span>
                  <span>20 Years</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Registration + Stamp Duty (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="1"
                  value={regCost}
                  onChange={(e) => setRegCost(e.target.value)}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5%</span>
                  <span className="font-bold text-primary">{regCost}%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/25">
              <p className="text-primary-foreground/70 text-sm mb-1">Estimated Future Value</p>
              <p className="text-4xl font-extrabold">{formatINR(result.futureValue)}</p>
              <p className="text-primary-foreground/60 text-xs mt-2">After {years} years at {appreciation}% growth</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center">
                <p className="text-muted-foreground text-xs mb-1">Total Investment</p>
                <p className="text-xl font-extrabold text-foreground">{formatINR(result.totalInvestment)}</p>
                <p className="text-xs text-muted-foreground mt-1">Including {regCost}% registration</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200 shadow-sm text-center">
                <p className="text-green-700 text-xs mb-1">Estimated Profit</p>
                <p className="text-xl font-extrabold text-green-700">{formatINR(result.profit)}</p>
                <p className="text-xs text-green-600 mt-1">Net gain over {years} years</p>
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/30 text-center">
              <p className="text-accent text-xs font-semibold mb-1 uppercase tracking-wide">Return on Investment</p>
              <p className="text-5xl font-extrabold text-accent">{result.roi}%</p>
              <p className="text-muted-foreground text-xs mt-2">Total ROI over {years} years</p>
            </div>

            <div className="bg-card rounded-2xl p-5 border border-border">
              <p className="text-xs text-muted-foreground text-center mb-3">
                * This is an estimate based on historical land appreciation in Satna & MP. Actual returns may vary.
              </p>
              <a
                href="https://wa.me/918462097970?text=Hello%2C%20I%20want%20investment%20advice%20for%20land%20in%20Satna."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                💬 Get Expert Investment Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
