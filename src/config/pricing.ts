// Pricing and payment configuration
export const paymentConfig = {
  // Report pricing
  amount: 150, // Amount in KES
  amount: 250, // Amount in KES

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
      title: 'CRB Analysis',
      description: 'Detailed credit analysis'
    },
    {
      title: 'Full CRB Report',
      description: 'Complete credit report'
    }
  ],

  // Benefits of credit report
  benefits: [
    'Quick loan approvals',
    'Know your credit standing',
    'Track credit improvements',
    'Credit Score Simulator',
    'Monthly CRB Score Updates',
    'Better financial decisions'
  ]
};
