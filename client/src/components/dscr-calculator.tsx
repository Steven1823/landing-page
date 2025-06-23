import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonHover } from "@/lib/animations";

export default function DSCRCalculator() {
  const [monthlyRent, setMonthlyRent] = useState("");
  const [monthlyDebt, setMonthlyDebt] = useState("");
  const [dscrScore, setDscrScore] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateDSCR = () => {
    const rent = parseFloat(monthlyRent);
    const debt = parseFloat(monthlyDebt);
    
    if (rent > 0 && debt > 0) {
      const score = rent / debt;
      setDscrScore(score);
      setShowResult(true);
    }
  };

  const resetCalculator = () => {
    setMonthlyRent("");
    setMonthlyDebt("");
    setDscrScore(null);
    setShowResult(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getDSCRStatus = (score: number) => {
    if (score >= 1.25) {
      return {
        status: "Excellent",
        color: "text-green-600",
        bgColor: "bg-green-50",
        icon: CheckCircle,
        message: "You qualify for DSCR loans! The property income covers the debt service with a strong margin."
      };
    } else if (score >= 1.0) {
      return {
        status: "Marginal", 
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        icon: AlertCircle,
        message: "Close to qualification. Consider increasing rent or reducing loan amount."
      };
    } else {
      return {
        status: "Below Threshold",
        color: "text-red-600", 
        bgColor: "bg-red-50",
        icon: AlertCircle,
        message: "Property income doesn't cover debt service. Alternative loan products may be available."
      };
    }
  };

  return (
    <section id="calculator" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-12 w-12 text-gold mr-4" />
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">DSCR Calculator</h2>
          </div>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Calculate your Debt Service Coverage Ratio to see if you qualify for no-income verification loans
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins">Property Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="monthlyRent" className="text-base font-semibold">
                      Monthly Rental Income (NOI)
                    </Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      placeholder="Enter monthly rent"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      className="mt-2 text-lg focus:border-gold"
                    />
                    <p className="text-sm text-warm-gray mt-1">
                      Net Operating Income after expenses
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="monthlyDebt" className="text-base font-semibold">
                      Monthly Debt Service (PITIA)
                    </Label>
                    <Input
                      id="monthlyDebt"
                      type="number"
                      placeholder="Enter monthly payment"
                      value={monthlyDebt}
                      onChange={(e) => setMonthlyDebt(e.target.value)}
                      className="mt-2 text-lg focus:border-gold"
                    />
                    <p className="text-sm text-warm-gray mt-1">
                      Principal, Interest, Taxes, Insurance, Association fees
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <motion.div {...buttonHover} className="flex-1">
                      <Button
                        onClick={calculateDSCR}
                        disabled={!monthlyRent || !monthlyDebt}
                        className="w-full bg-navy text-white hover:bg-charcoal"
                        size="lg"
                      >
                        Calculate DSCR
                      </Button>
                    </motion.div>
                    <Button
                      onClick={resetCalculator}
                      variant="outline"
                      size="lg"
                      className="border-navy text-navy hover:bg-navy hover:text-white"
                    >
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {showResult && dscrScore !== null ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="text-2xl font-poppins flex items-center">
                        <TrendingUp className="h-6 w-6 mr-2 text-gold" />
                        Your DSCR Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <motion.div
                          className="text-6xl font-bold text-navy mb-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {dscrScore.toFixed(2)}
                        </motion.div>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full ${getDSCRStatus(dscrScore).bgColor}`}>
                          {(() => {
                            const IconComponent = getDSCRStatus(dscrScore).icon;
                            return <IconComponent className={`h-5 w-5 mr-2 ${getDSCRStatus(dscrScore).color}`} />;
                          })()}
                          <span className={`font-semibold ${getDSCRStatus(dscrScore).color}`}>
                            {getDSCRStatus(dscrScore).status}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-charcoal">
                          {getDSCRStatus(dscrScore).message}
                        </p>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-warm-gray">Monthly Income:</span>
                          <span className="font-semibold">${parseFloat(monthlyRent).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-warm-gray">Monthly Debt:</span>
                          <span className="font-semibold">${parseFloat(monthlyDebt).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-warm-gray">DSCR Ratio:</span>
                          <span className="font-bold text-navy">{dscrScore.toFixed(2)}</span>
                        </div>
                      </div>

                      <motion.div {...buttonHover} className="mt-6">
                        <Button
                          onClick={scrollToContact}
                          className="w-full bg-gold text-navy hover:bg-yellow-300"
                          size="lg"
                        >
                          Submit My Loan Inquiry
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <Card className="p-6 h-full flex items-center justify-center">
                  <div className="text-center text-warm-gray">
                    <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Enter your property details to calculate DSCR</p>
                    <p className="text-sm mt-2">DSCR ≥ 1.25 typically qualifies for no-income verification loans</p>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>

          {/* Educational Content */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-navy mb-2">What is DSCR?</h4>
              <p className="text-sm text-warm-gray">
                Debt Service Coverage Ratio measures a property's ability to cover its debt payments with rental income.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-navy mb-2">Minimum Requirements</h4>
              <p className="text-sm text-warm-gray">
                Most lenders require a minimum DSCR of 1.25, meaning income should be 25% higher than debt payments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-navy mb-2">No Income Docs</h4>
              <p className="text-sm text-warm-gray">
                DSCR loans focus on property performance, not personal income documentation like W-2s or tax returns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}