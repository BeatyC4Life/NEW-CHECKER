// Pricing and payment configuration
export const paymentConfig = {
  // Report pricing
  Standard Report
Basic credit information

KES 190

One-time payment

Credit Score Analysis
Payment History Overview
Credit Utilization Report
Basic Recommendations
  amount: 200, // Amount in KES

  // M-PESA payment details  
  mpesa: {
    tillNumber: '4985310',
    businessName: 'ARTMO SOLUTIONS'
  },

  // Report access features
  features: [
    {
      title: 'Credit Score',
      description: 'View your current credit score'
    },
    {
      title: 'Analysis',
      description: 'Detailed credit analysis'
    },
    {
      title: 'Full Report',
      description: 'Complete credit report'
    }
  ],

  // Benefits of credit report
  benefits: [
    'Quick loan approvals',
    'Know your credit standing',
    'Track credit improvements',
    'Better financial decisions'
  ]
};
