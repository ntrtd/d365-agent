/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * This enum represents the enum type "{@link LedgerPostingType}".
 * The members represent values of EDM type Edm.Int32.
 */
export enum LedgerPostingType {
  /**
   * Original value: 0
   */
  None = 'None',
  /**
   * Original value: 1
   */
  ExchRateGain = 'ExchRateGain',
  /**
   * Original value: 2
   */
  ExchRateLoss = 'ExchRateLoss',
  /**
   * Original value: 3
   */
  InterCompany = 'InterCompany',
  /**
   * Original value: 4
   */
  Tax = 'Tax',
  /**
   * Original value: 5
   */
  VATRoundOff = 'VATRoundOff',
  /**
   * Original value: 6
   */
  Allocation = 'Allocation',
  /**
   * Original value: 7
   */
  InvestmentDuty = 'InvestmentDuty',
  /**
   * Original value: 8
   */
  Liquidity = 'Liquidity',
  /**
   * Original value: 9
   */
  MSTDiffSecond = 'MSTDiffSecond',
  /**
   * Original value: 10
   */
  ErrorAccount = 'ErrorAccount',
  /**
   * Original value: 11
   */
  MSTDiff = 'MSTDiff',
  /**
   * Original value: 12
   */
  YearResult = 'YearResult',
  /**
   * Original value: 13
   */
  Closing = 'Closing',
  /**
   * Original value: 14
   */
  LedgerJournal = 'LedgerJournal',
  /**
   * Original value: 15
   */
  CashDiscount = 'CashDiscount',
  /**
   * Original value: 16
   */
  ConsolidateDiffBalance = 'ConsolidateDiffBalance',
  /**
   * Original value: 17
   */
  PaymentFee = 'PaymentFee',
  /**
   * Original value: 18
   */
  TaxReport = 'TaxReport',
  /**
   * Original value: 19
   */
  TransferOpeningClosing = 'TransferOpeningClosing',
  /**
   * Original value: 20
   */
  Bank = 'Bank',
  /**
   * Original value: 21
   */
  ConversionProfit = 'ConversionProfit',
  /**
   * Original value: 22
   */
  ConversionLoss = 'ConversionLoss',
  /**
   * Original value: 23
   */
  TaxWithhold = 'TaxWithhold',
  /**
   * Original value: 24
   */
  ConsolidateDiffProfitLoss = 'ConsolidateDiffProfitLoss',
  /**
   * Original value: 25
   */
  IndirectEstimatedAbsorptionOffset = 'IndirectEstimatedAbsorptionOffset',
  /**
   * Original value: 26
   */
  IndirectAbsorption = 'IndirectAbsorption',
  /**
   * Original value: 27
   */
  IndirectAbsorptionOffset = 'IndirectAbsorptionOffset',
  /**
   * Original value: 28
   */
  FreeTextInvoice = 'FreeTextInvoice',
  /**
   * Original value: 29
   */
  ConversionReportingLoss = 'ConversionReportingLoss',
  /**
   * Original value: 30
   */
  ConversionReportingProfit = 'ConversionReportingProfit',
  /**
   * Original value: 31
   */
  CustBalance = 'CustBalance',
  /**
   * Original value: 32
   */
  CustRevenue = 'CustRevenue',
  /**
   * Original value: 33
   */
  CustInterest = 'CustInterest',
  /**
   * Original value: 34
   */
  CustCashDisc = 'CustCashDisc',
  /**
   * Original value: 35
   */
  CustCollectionLetterFee = 'CustCollectionLetterFee',
  /**
   * Original value: 36
   */
  CustInterestFee = 'CustInterestFee',
  /**
   * Original value: 37
   */
  CustInvoiceDisc = 'CustInvoiceDisc',
  /**
   * Original value: 38
   */
  CustPayment = 'CustPayment',
  /**
   * Original value: 39
   */
  CustReimbursement = 'CustReimbursement',
  /**
   * Original value: 40
   */
  CustSettlement = 'CustSettlement',
  /**
   * Original value: 41
   */
  VendBalance = 'VendBalance',
  /**
   * Original value: 42
   */
  VendPurchLedger = 'VendPurchLedger',
  /**
   * Original value: 43
   */
  VendOffsetAccount = 'VendOffsetAccount',
  /**
   * Original value: 44
   */
  VendInterest = 'VendInterest',
  /**
   * Original value: 45
   */
  VendCashDisc = 'VendCashDisc',
  /**
   * Original value: 46
   */
  VendPayment = 'VendPayment',
  /**
   * Original value: 47
   */
  VendInvoiceDisc = 'VendInvoiceDisc',
  /**
   * Original value: 48
   */
  VendSettlement = 'VendSettlement',
  /**
   * Original value: 49
   */
  CrossCompanySettlement = 'CrossCompanySettlement',
  /**
   * Original value: 50
   */
  InventIssueFixedAsset = 'InventIssueFixedAsset',
  /**
   * Original value: 51
   */
  SalesRevenue = 'SalesRevenue',
  /**
   * Original value: 52
   */
  SalesConsump = 'SalesConsump',
  /**
   * Original value: 53
   */
  SalesDisc = 'SalesDisc',
  /**
   * Original value: 54
   */
  SalesCash = 'SalesCash',
  /**
   * Original value: 55
   */
  SalesFreight = 'SalesFreight',
  /**
   * Original value: 56
   */
  SalesFee = 'SalesFee',
  /**
   * Original value: 57
   */
  SalesPostage = 'SalesPostage',
  /**
   * Original value: 58
   */
  SalesRoundOff = 'SalesRoundOff',
  /**
   * Original value: 59
   */
  SalesPackingSlip = 'SalesPackingSlip',
  /**
   * Original value: 60
   */
  SalesOffsetAccountPackingSlip = 'SalesOffsetAccountPackingSlip',
  /**
   * Original value: 61
   */
  SalesIssue = 'SalesIssue',
  /**
   * Original value: 62
   */
  SalesCommission = 'SalesCommission',
  /**
   * Original value: 63
   */
  SalesOffsetAccountCommission = 'SalesOffsetAccountCommission',
  /**
   * Original value: 64
   */
  SalesPckSlipRevenue = 'SalesPckSlipRevenue',
  /**
   * Original value: 65
   */
  SalesPckSlipRevenueOffsetAccount = 'SalesPckSlipRevenueOffsetAccount',
  /**
   * Original value: 66
   */
  Rebate = 'Rebate',
  /**
   * Original value: 67
   */
  PdsCWLoss = 'PdsCWLoss',
  /**
   * Original value: 68
   */
  PdsCWProfit = 'PdsCWProfit',
  /**
   * Original value: 71
   */
  PurchConsump = 'PurchConsump',
  /**
   * Original value: 72
   */
  PurchDisc = 'PurchDisc',
  /**
   * Original value: 73
   */
  PurchCash = 'PurchCash',
  /**
   * Original value: 74
   */
  PurchFreight = 'PurchFreight',
  /**
   * Original value: 75
   */
  PurchFee = 'PurchFee',
  /**
   * Original value: 76
   */
  PurchPostage = 'PurchPostage',
  /**
   * Original value: 77
   */
  PurchOffsetAccount = 'PurchOffsetAccount',
  /**
   * Original value: 78
   */
  PurchaseInvoiceRoundOff = 'PurchaseInvoiceRoundOff',
  /**
   * Original value: 79
   */
  PurchMarkupFreight = 'PurchMarkupFreight',
  /**
   * Original value: 80
   */
  PurchMarkupCustoms = 'PurchMarkupCustoms',
  /**
   * Original value: 81
   */
  PurchMarkupInsurance = 'PurchMarkupInsurance',
  /**
   * Original value: 82
   */
  PurchPckSlp = 'PurchPckSlp',
  /**
   * Original value: 83
   */
  PurchOffsetAccountPckSlp = 'PurchOffsetAccountPckSlp',
  /**
   * Original value: 84
   */
  PurchReceipt = 'PurchReceipt',
  /**
   * Original value: 85
   */
  PurchStdProfit = 'PurchStdProfit',
  /**
   * Original value: 86
   */
  PurchStdLoss = 'PurchStdLoss',
  /**
   * Original value: 87
   */
  PurchStdOffsetAccount = 'PurchStdOffsetAccount',
  /**
   * Original value: 91
   */
  InventReceipt = 'InventReceipt',
  /**
   * Original value: 92
   */
  InventIssue = 'InventIssue',
  /**
   * Original value: 93
   */
  InventProfit = 'InventProfit',
  /**
   * Original value: 94
   */
  InventLoss = 'InventLoss',
  /**
   * Original value: 95
   */
  InventStdProfit = 'InventStdProfit',
  /**
   * Original value: 96
   */
  InventStdLoss = 'InventStdLoss',
  /**
   * Original value: 97
   */
  Opening_ES = 'Opening_ES',
  /**
   * Original value: 98
   */
  PurchReq = 'PurchReq',
  /**
   * Original value: 99
   */
  PurchOrder = 'PurchOrder',
  /**
   * Original value: 100
   */
  APInvoice = 'APInvoice',
  /**
   * Original value: 101
   */
  Budget = 'Budget',
  /**
   * Original value: 102
   */
  PurchOrderYearEnd = 'PurchOrderYearEnd',
  /**
   * Original value: 103
   */
  InflationAdjustment_MX = 'InflationAdjustment_MX',
  /**
   * Original value: 105
   */
  ProdReportFinished = 'ProdReportFinished',
  /**
   * Original value: 106
   */
  ProdReportFinishedOffsetAccount = 'ProdReportFinishedOffsetAccount',
  /**
   * Original value: 107
   */
  ProdIssue = 'ProdIssue',
  /**
   * Original value: 108
   */
  ProdIssueOffsetAccount = 'ProdIssueOffsetAccount',
  /**
   * Original value: 109
   */
  ProdReceipt = 'ProdReceipt',
  /**
   * Original value: 110
   */
  ProdReceiptOffsetAccount = 'ProdReceiptOffsetAccount',
  /**
   * Original value: 111
   */
  ProdPicklistOffsetAccount = 'ProdPicklistOffsetAccount',
  /**
   * Original value: 112
   */
  ProdPicklist = 'ProdPicklist',
  /**
   * Original value: 113
   */
  ProdWIPValuation = 'ProdWIPValuation',
  /**
   * Original value: 114
   */
  ProdWIPIssue = 'ProdWIPIssue',
  /**
   * Original value: 115
   */
  ProdWrkCtrIssue = 'ProdWrkCtrIssue',
  /**
   * Original value: 116
   */
  ProdScrap = 'ProdScrap',
  /**
   * Original value: 117
   */
  ProdWrkCtrIssueOffsetAccount = 'ProdWrkCtrIssueOffsetAccount',
  /**
   * Original value: 118
   */
  ProdScrapOffsetAccount = 'ProdScrapOffsetAccount',
  /**
   * Original value: 119
   */
  ProdLeanWIPServiceReceipt = 'ProdLeanWIPServiceReceipt',
  /**
   * Original value: 120
   */
  ProdLeanWIPServiceClearing = 'ProdLeanWIPServiceClearing',
  /**
   * Original value: 121
   */
  ProjCost = 'ProjCost',
  /**
   * Original value: 122
   */
  ProjPayrollAllocation = 'ProjPayrollAllocation',
  /**
   * Original value: 123
   */
  ProjWIPCostvalue = 'ProjWIPCostvalue',
  /**
   * Original value: 124
   */
  ProjOffsetAccountItem = 'ProjOffsetAccountItem',
  /**
   * Original value: 125
   */
  ProjStatusAccountItem = 'ProjStatusAccountItem',
  /**
   * Original value: 126
   */
  ProjTurnover = 'ProjTurnover',
  /**
   * Original value: 127
   */
  ProjOnAccount = 'ProjOnAccount',
  /**
   * Original value: 128
   */
  ProjSalesvalue = 'ProjSalesvalue',
  /**
   * Original value: 129
   */
  ProjSalesvalueOffset = 'ProjSalesvalueOffset',
  /**
   * Original value: 130
   */
  ProjAccruedTurnoverProd = 'ProjAccruedTurnoverProd',
  /**
   * Original value: 131
   */
  ProjWIPProduction = 'ProjWIPProduction',
  /**
   * Original value: 132
   */
  ProJAccruedTurnoverProfit = 'ProJAccruedTurnoverProfit',
  /**
   * Original value: 133
   */
  ProjWIPProfit = 'ProjWIPProfit',
  /**
   * Original value: 134
   */
  ProjNeverLedger = 'ProjNeverLedger',
  /**
   * Original value: 135
   */
  ProjAccruedCost = 'ProjAccruedCost',
  /**
   * Original value: 136
   */
  ProjWIPCost = 'ProjWIPCost',
  /**
   * Original value: 137
   */
  ProjAccruedRevenueOnAccount = 'ProjAccruedRevenueOnAccount',
  /**
   * Original value: 138
   */
  ProjWIPInvoicedOnAccount = 'ProjWIPInvoicedOnAccount',
  /**
   * Original value: 139
   */
  ProjNoLedger = 'ProjNoLedger',
  /**
   * Original value: 141
   */
  PayrollDebitAccount = 'PayrollDebitAccount',
  /**
   * Original value: 142
   */
  PayrollCreditAccount = 'PayrollCreditAccount',
  /**
   * Original value: 146
   */
  EmplPayment_RU = 'EmplPayment_RU',
  /**
   * Original value: 147
   */
  RTSLTranslationDifference = 'RTSLTranslationDifference',
  /**
   * Original value: 148
   */
  RCash = 'RCash',
  /**
   * Original value: 149
   */
  InventRoundingLoss_RU = 'InventRoundingLoss_RU',
  /**
   * Original value: 150
   */
  InventRoundingProfit_RU = 'InventRoundingProfit_RU',
  /**
   * Original value: 151
   */
  AdvanceAdjustmentGain_RU = 'AdvanceAdjustmentGain_RU',
  /**
   * Original value: 152
   */
  AdvanceAdjustmentLoss_RU = 'AdvanceAdjustmentLoss_RU',
  /**
   * Original value: 161
   */
  FixedAssetsDebit = 'FixedAssetsDebit',
  /**
   * Original value: 162
   */
  FixedAssetsCredit = 'FixedAssetsCredit',
  /**
   * Original value: 163
   */
  CACLedgerJournalNoOff = 'CACLedgerJournalNoOff',
  /**
   * Original value: 165
   */
  AmountDiffGain_RU = 'AmountDiffGain_RU',
  /**
   * Original value: 166
   */
  AmountDiffLoss_RU = 'AmountDiffLoss_RU',
  /**
   * Original value: 175
   */
  Misc_IN = 'Misc_IN',
  /**
   * Original value: 176
   */
  TransferGoodsTransit_IN = 'TransferGoodsTransit_IN',
  /**
   * Original value: 177
   */
  TransferScrap_IN = 'TransferScrap_IN',
  /**
   * Original value: 201
   */
  PurchCharge = 'PurchCharge',
  /**
   * Original value: 202
   */
  PurchStockVariation = 'PurchStockVariation',
  /**
   * Original value: 203
   */
  PurchPckSlpPurchaseOffsetAccount = 'PurchPckSlpPurchaseOffsetAccount',
  /**
   * Original value: 204
   */
  PurchPckSlpTax = 'PurchPckSlpTax',
  /**
   * Original value: 205
   */
  PurchPckSlpPurchase = 'PurchPckSlpPurchase',
  /**
   * Original value: 206
   */
  SalesPackingslipTax = 'SalesPackingslipTax',
  /**
   * Original value: 207
   */
  ProjAccruedRevenueSubscription = 'ProjAccruedRevenueSubscription',
  /**
   * Original value: 208
   */
  ProjWIPSubscription = 'ProjWIPSubscription',
  /**
   * Original value: 209
   */
  TaxOffsetWithhold_TH = 'TaxOffsetWithhold_TH',
  /**
   * Original value: 210
   */
  InventStdCostChangeVariance = 'InventStdCostChangeVariance',
  /**
   * Original value: 211
   */
  InventSystemRounding = 'InventSystemRounding',
  /**
   * Original value: 212
   */
  PurchAdvance = 'PurchAdvance',
  /**
   * Original value: 213
   */
  PurchStdCostPurchasePriceVariance = 'PurchStdCostPurchasePriceVariance',
  /**
   * Original value: 214
   */
  PurchAdvanceApplication = 'PurchAdvanceApplication',
  /**
   * Original value: 216
   */
  ProdStdCostProductionVariance = 'ProdStdCostProductionVariance',
  /**
   * Original value: 217
   */
  SalesGoodsInRoute_RU = 'SalesGoodsInRoute_RU',
  /**
   * Original value: 218
   */
  SalesGoodsInRouteOffset_RU = 'SalesGoodsInRouteOffset_RU',
  /**
   * Original value: 219
   */
  InventInterUnitPayable = 'InventInterUnitPayable',
  /**
   * Original value: 220
   */
  InventInterUnitReceivable = 'InventInterUnitReceivable',
  /**
   * Original value: 221
   */
  IndirectEstimatedAbsorption = 'IndirectEstimatedAbsorption',
  /**
   * Original value: 222
   */
  ProdStdCostLotSizeVariance = 'ProdStdCostLotSizeVariance',
  /**
   * Original value: 223
   */
  ProdStdCostQuantityVariance = 'ProdStdCostQuantityVariance',
  /**
   * Original value: 224
   */
  ProdStdCostSubstitutionVariance = 'ProdStdCostSubstitutionVariance',
  /**
   * Original value: 225
   */
  InventStdCostRoundingVariance = 'InventStdCostRoundingVariance',
  /**
   * Original value: 226
   */
  PurchReceiptFixedAsset = 'PurchReceiptFixedAsset',
  /**
   * Original value: 228
   */
  PSATransportation = 'PSATransportation',
  /**
   * Original value: 229
   */
  PSACompanyCCClearing = 'PSACompanyCCClearing',
  /**
   * Original value: 230
   */
  PSAEmployeeClearing = 'PSAEmployeeClearing',
  /**
   * Original value: 231
   */
  PSAEmployeeAdvance = 'PSAEmployeeAdvance',
  /**
   * Original value: 232
   */
  PSAWriteOffCap = 'PSAWriteOffCap',
  /**
   * Original value: 233
   */
  PSAProjRetain = 'PSAProjRetain',
  /**
   * Original value: 234
   */
  PSAProjPurchRetain = 'PSAProjPurchRetain',
  /**
   * Original value: 235
   */
  InventStdCostRevaluation = 'InventStdCostRevaluation',
  /**
   * Original value: 236
   */
  PurchExpense = 'PurchExpense',
  /**
   * Original value: 180
   */
  VAT_IN = 'VAT_IN',
  /**
   * Original value: 237
   */
  InventMovingAveragePriceDifference = 'InventMovingAveragePriceDifference',
  /**
   * Original value: 181
   */
  SalesTax_IN = 'SalesTax_IN',
  /**
   * Original value: 238
   */
  InventMovingAverageCostRevaluation = 'InventMovingAverageCostRevaluation',
  /**
   * Original value: 182
   */
  Excise_IN = 'Excise_IN',
  /**
   * Original value: 239
   */
  IntercompanyCost = 'IntercompanyCost',
  /**
   * Original value: 183
   */
  ServiceTax_IN = 'ServiceTax_IN',
  /**
   * Original value: 240
   */
  IntercompanyRevenue = 'IntercompanyRevenue',
  /**
   * Original value: 184
   */
  Customs_IN = 'Customs_IN',
  /**
   * Original value: 185
   */
  TDS_IN = 'TDS_IN',
  /**
   * Original value: 186
   */
  TCS_IN = 'TCS_IN',
  /**
   * Original value: 244
   */
  TransferIssue_IN = 'TransferIssue_IN',
  /**
   * Original value: 245
   */
  TransferReceipt_IN = 'TransferReceipt_IN',
  /**
   * Original value: 246
   */
  TransferProfit_IN = 'TransferProfit_IN',
  /**
   * Original value: 247
   */
  TransferLoss_IN = 'TransferLoss_IN',
  /**
   * Original value: 250
   */
  TaxAdjustmentSettlement_IN = 'TaxAdjustmentSettlement_IN',
  /**
   * Original value: 199
   */
  TaxExpense_BR = 'TaxExpense_BR',
  /**
   * Original value: 249
   */
  BankStatement = 'BankStatement',
  /**
   * Original value: 227
   */
  EmplBalance_RU = 'EmplBalance_RU',
  /**
   * Original value: 69
   */
  DebitNote_BR = 'DebitNote_BR',
  /**
   * Original value: 248
   */
  CustFine_BR = 'CustFine_BR',
  /**
   * Original value: 70
   */
  VendFine_BR = 'VendFine_BR',
  /**
   * Original value: 195
   */
  Payroll = 'Payroll',
  /**
   * Original value: 88
   */
  InterunitDebit = 'InterunitDebit',
  /**
   * Original value: 89
   */
  InterunitCredit = 'InterunitCredit',
  /**
   * Original value: 241
   */
  FixedAssetsDebit_RU = 'FixedAssetsDebit_RU',
  /**
   * Original value: 242
   */
  FixedAssetsCredit_RU = 'FixedAssetsCredit_RU',
  /**
   * Original value: 90
   */
  TransferInterim_IN = 'TransferInterim_IN',
  /**
   * Original value: 243
   */
  DeferralsDebit_RU = 'DeferralsDebit_RU',
  /**
   * Original value: 215
   */
  DeferralsCredit_RU = 'DeferralsCredit_RU',
  /**
   * Original value: 159
   */
  MCRReturns = 'MCRReturns',
  /**
   * Original value: 160
   */
  MCRReturnsConsump = 'MCRReturnsConsump',
  /**
   * Original value: 164
   */
  MCRUnderpayWriteOff = 'MCRUnderpayWriteOff',
  /**
   * Original value: 190
   */
  MCRBrokerFee = 'MCRBrokerFee',
  /**
   * Original value: 200
   */
  RPayTaxRefundOffset = 'RPayTaxRefundOffset',
  /**
   * Original value: 104
   */
  BudgetReservation_PSN = 'BudgetReservation_PSN',
  /**
   * Original value: 140
   */
  BudgetReservationYearEnd_PSN = 'BudgetReservationYearEnd_PSN',
  /**
   * Original value: 251
   */
  SalesAdvance = 'SalesAdvance',
  /**
   * Original value: 143
   */
  GST_IN = 'GST_IN',
  /**
   * Original value: 144
   */
  ReportingCurrencyAdjustment = 'ReportingCurrencyAdjustment',
  /**
   * Original value: 145
   */
  SalesCreditNote_IT = 'SalesCreditNote_IT',
  /**
   * Original value: 153
   */
  SalesForFree_IT = 'SalesForFree_IT',
  /**
   * Original value: 167
   */
  ProjProcurementIntegration = 'ProjProcurementIntegration',
  /**
   * Original value: 154
   */
  ITMGIT = 'ITMGIT',
  /**
   * Original value: 155
   */
  ITMCostAccrual = 'ITMCostAccrual',
  /**
   * Original value: 156
   */
  ITMCostClearing = 'ITMCostClearing',
  /**
   * Original value: 157
   */
  ITMCostChargeAccrual = 'ITMCostChargeAccrual',
  /**
   * Original value: 158
   */
  ITMCostCharge = 'ITMCostCharge',
  /**
   * Original value: 179
   */
  ITMCostVariance = 'ITMCostVariance',
  /**
   * Original value: 168
   */
  SalesRevenueOffset = 'SalesRevenueOffset',
  /**
   * Original value: 169
   */
  SalesDiscOffset = 'SalesDiscOffset',
  /**
   * Original value: 187
   */
  UnbilledDiscOffset = 'UnbilledDiscOffset',
  /**
   * Original value: 188
   */
  DeferredCost = 'DeferredCost',
  /**
   * Original value: 189
   */
  DeferredRevenue = 'DeferredRevenue',
  /**
   * Original value: 172
   */
  RevRecDeferredRevenue = 'RevRecDeferredRevenue',
  /**
   * Original value: 173
   */
  RevRecDeferredCostOfGoodsSold = 'RevRecDeferredCostOfGoodsSold',
  /**
   * Original value: 174
   */
  RevRecPartialRevenue = 'RevRecPartialRevenue',
  /**
   * Original value: 178
   */
  RevRecDeferredCost = 'RevRecDeferredCost'
}
