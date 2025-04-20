/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * This enum represents the enum type "{@link LedgerTransTxt}".
 * The members represent values of EDM type Edm.Int32.
 */
export enum LedgerTransTxt {
  /**
   * Original value: 0
   */
  None = 'None',
  /**
   * Original value: 1
   */
  LedgerExchAdj = 'LedgerExchAdj',
  /**
   * Original value: 2
   */
  LedgerConsolidate = 'LedgerConsolidate',
  /**
   * Original value: 3
   */
  LedgerMSTDiff = 'LedgerMSTDiff',
  /**
   * Original value: 4
   */
  LedgerOpening = 'LedgerOpening',
  /**
   * Original value: 5
   */
  LedgerMSTDIFFSecond = 'LedgerMSTDIFFSecond',
  /**
   * Original value: 6
   */
  LedgerClosing = 'LedgerClosing',
  /**
   * Original value: 7
   */
  ConversionProfit = 'ConversionProfit',
  /**
   * Original value: 8
   */
  ConversionLoss = 'ConversionLoss',
  /**
   * Original value: 9
   */
  TransactionReversal = 'TransactionReversal',
  /**
   * Original value: 10
   */
  Settlement = 'Settlement',
  /**
   * Original value: 11
   */
  ReversedSettlement = 'ReversedSettlement',
  /**
   * Original value: 12
   */
  LedgerAllocation = 'LedgerAllocation',
  /**
   * Original value: 13
   */
  LedgerElimination = 'LedgerElimination',
  /**
   * Original value: 14
   */
  LedgerReversingEntry = 'LedgerReversingEntry',
  /**
   * Original value: 15
   */
  ConversionReportingProfit = 'ConversionReportingProfit',
  /**
   * Original value: 16
   */
  ConversionReportingLoss = 'ConversionReportingLoss',
  /**
   * Original value: 17
   */
  CustBillOfExchangeLedger = 'CustBillOfExchangeLedger',
  /**
   * Original value: 18
   */
  CustBillOfExchangeCust = 'CustBillOfExchangeCust',
  /**
   * Original value: 21
   */
  CustInvoiceLedger = 'CustInvoiceLedger',
  /**
   * Original value: 22
   */
  CustInvoiceCust = 'CustInvoiceCust',
  /**
   * Original value: 23
   */
  CustCreditNoteLedger = 'CustCreditNoteLedger',
  /**
   * Original value: 24
   */
  CustCreditNoteCust = 'CustCreditNoteCust',
  /**
   * Original value: 25
   */
  CustExchAdjLedger = 'CustExchAdjLedger',
  /**
   * Original value: 26
   */
  CustExchAdjCust = 'CustExchAdjCust',
  /**
   * Original value: 27
   */
  CustCashDiscLedger = 'CustCashDiscLedger',
  /**
   * Original value: 28
   */
  CustCashDiscCust = 'CustCashDiscCust',
  /**
   * Original value: 29
   */
  CustInterestLedger = 'CustInterestLedger',
  /**
   * Original value: 30
   */
  CustInterestCust = 'CustInterestCust',
  /**
   * Original value: 31
   */
  CustCollectionLetterLedger = 'CustCollectionLetterLedger',
  /**
   * Original value: 32
   */
  CustCollectionLetterCust = 'CustCollectionLetterCust',
  /**
   * Original value: 33
   */
  CustMSTDiffLedger = 'CustMSTDiffLedger',
  /**
   * Original value: 34
   */
  CustMSTDiffCust = 'CustMSTDiffCust',
  /**
   * Original value: 35
   */
  CustInterestFeeLedger = 'CustInterestFeeLedger',
  /**
   * Original value: 36
   */
  CustInterestFeeCust = 'CustInterestFeeCust',
  /**
   * Original value: 37
   */
  CustRoundOff = 'CustRoundOff',
  /**
   * Original value: 38
   */
  CustCashPayment = 'CustCashPayment',
  /**
   * Original value: 39
   */
  CustPaymentCust = 'CustPaymentCust',
  /**
   * Original value: 40
   */
  CustCrossCompanySettlement = 'CustCrossCompanySettlement',
  /**
   * Original value: 41
   */
  VendExchAdjLedger = 'VendExchAdjLedger',
  /**
   * Original value: 42
   */
  VendExchAdjVend = 'VendExchAdjVend',
  /**
   * Original value: 43
   */
  VendCashDiscLedger = 'VendCashDiscLedger',
  /**
   * Original value: 44
   */
  VendCashDiscVend = 'VendCashDiscVend',
  /**
   * Original value: 45
   */
  VendMSTDiffLedger = 'VendMSTDiffLedger',
  /**
   * Original value: 46
   */
  VendMSTDiffVend = 'VendMSTDiffVend',
  /**
   * Original value: 47
   */
  VendPaymentLedger = 'VendPaymentLedger',
  /**
   * Original value: 48
   */
  VendPaymentVend = 'VendPaymentVend',
  /**
   * Original value: 49
   */
  VendRoundOff = 'VendRoundOff',
  /**
   * Original value: 50
   */
  VendCashPayment = 'VendCashPayment',
  /**
   * Original value: 51
   */
  VendPromissoryNoteLedger = 'VendPromissoryNoteLedger',
  /**
   * Original value: 52
   */
  VendPromissoryNoteVend = 'VendPromissoryNoteVend',
  /**
   * Original value: 53
   */
  VendCrossCompanySettlement = 'VendCrossCompanySettlement',
  /**
   * Original value: 61
   */
  SalesInvoiceLedger = 'SalesInvoiceLedger',
  /**
   * Original value: 62
   */
  SalesInvoiceCust = 'SalesInvoiceCust',
  /**
   * Original value: 63
   */
  SalesCreditNoteLedger = 'SalesCreditNoteLedger',
  /**
   * Original value: 64
   */
  SalesCreditNoteCust = 'SalesCreditNoteCust',
  /**
   * Original value: 65
   */
  SalesPackingSlipLedger = 'SalesPackingSlipLedger',
  /**
   * Original value: 66
   */
  SalesCommission = 'SalesCommission',
  /**
   * Original value: 67
   */
  SalesEndDisc = 'SalesEndDisc',
  /**
   * Original value: 81
   */
  PurchInvoiceLedger = 'PurchInvoiceLedger',
  /**
   * Original value: 82
   */
  PurchInvoiceVend = 'PurchInvoiceVend',
  /**
   * Original value: 83
   */
  PurchCreditNoteLedger = 'PurchCreditNoteLedger',
  /**
   * Original value: 84
   */
  PurchCreditNoteVend = 'PurchCreditNoteVend',
  /**
   * Original value: 85
   */
  PurchPckSlpLedger = 'PurchPckSlpLedger',
  /**
   * Original value: 86
   */
  PurchPurchOrder = 'PurchPurchOrder',
  /**
   * Original value: 87
   */
  PurchEndDisc = 'PurchEndDisc',
  /**
   * Original value: 88
   */
  PurchPurchOrderLedger = 'PurchPurchOrderLedger',
  /**
   * Original value: 102
   */
  InventClosingAdjustment = 'InventClosingAdjustment',
  /**
   * Original value: 104
   */
  InventClosing = 'InventClosing',
  /**
   * Original value: 105
   */
  InventJournalTransaction = 'InventJournalTransaction',
  /**
   * Original value: 106
   */
  InventJournalLossProfit = 'InventJournalLossProfit',
  /**
   * Original value: 107
   */
  InventJournalTransfer = 'InventJournalTransfer',
  /**
   * Original value: 108
   */
  InventJournalCount = 'InventJournalCount',
  /**
   * Original value: 109
   */
  InventJournalBOM = 'InventJournalBOM',
  /**
   * Original value: 110
   */
  InventQuarantineOrder = 'InventQuarantineOrder',
  /**
   * Original value: 111
   */
  InventTransferOrder = 'InventTransferOrder',
  /**
   * Original value: 112
   */
  InventStdCostRevaluation = 'InventStdCostRevaluation',
  /**
   * Original value: 119
   */
  InventPhysical = 'InventPhysical',
  /**
   * Original value: 121
   */
  ProdHistoricalCost = 'ProdHistoricalCost',
  /**
   * Original value: 122
   */
  ProdPicklist = 'ProdPicklist',
  /**
   * Original value: 123
   */
  ProdReportFinished = 'ProdReportFinished',
  /**
   * Original value: 124
   */
  ProdRouteCard = 'ProdRouteCard',
  /**
   * Original value: 125
   */
  ProdJobCard = 'ProdJobCard',
  /**
   * Original value: 126
   */
  ProdHistoricalCostAdjustment = 'ProdHistoricalCostAdjustment',
  /**
   * Original value: 127
   */
  ProdIndirectCost = 'ProdIndirectCost',
  /**
   * Original value: 131
   */
  Kanban = 'Kanban',
  /**
   * Original value: 132
   */
  KanbanCosting = 'KanbanCosting',
  /**
   * Original value: 141
   */
  ProjectInvoiceLedger = 'ProjectInvoiceLedger',
  /**
   * Original value: 142
   */
  ProjectInvoiceCust = 'ProjectInvoiceCust',
  /**
   * Original value: 143
   */
  ProjectCreditNoteLedger = 'ProjectCreditNoteLedger',
  /**
   * Original value: 144
   */
  ProjectCreditNoteCust = 'ProjectCreditNoteCust',
  /**
   * Original value: 145
   */
  ProjectPostingLedger = 'ProjectPostingLedger',
  /**
   * Original value: 146
   */
  ProjectBudgetingLedger = 'ProjectBudgetingLedger',
  /**
   * Original value: 161
   */
  PayrollUpdateLedger = 'PayrollUpdateLedger',
  /**
   * Original value: 162
   */
  PayrollReversalLedger = 'PayrollReversalLedger',
  /**
   * Original value: 181
   */
  FixedAssetsPostingLedger = 'FixedAssetsPostingLedger',
  /**
   * Original value: 182
   */
  FixedAssetsReverseReserve = 'FixedAssetsReverseReserve',
  /**
   * Original value: 191
   */
  KMKnowledgeAutomaticTrans = 'KMKnowledgeAutomaticTrans',
  /**
   * Original value: 201
   */
  TaxReporting = 'TaxReporting',
  /**
   * Original value: 202
   */
  TaxPurchaseTax = 'TaxPurchaseTax',
  /**
   * Original value: 203
   */
  SMASubscription = 'SMASubscription',
  /**
   * Original value: 204
   */
  Expense = 'Expense',
  /**
   * Original value: 205
   */
  VendInterest = 'VendInterest',
  /**
   * Original value: 207
   */
  VendWithholdingTax = 'VendWithholdingTax',
  /**
   * Original value: 206
   */
  VendFine = 'VendFine',
  /**
   * Original value: 208
   */
  CustInterest = 'CustInterest',
  /**
   * Original value: 209
   */
  CustFine = 'CustFine',
  /**
   * Original value: 210
   */
  CustWithholdingTax = 'CustWithholdingTax',
  /**
   * Original value: 211
   */
  InfAdj_MX = 'InfAdj_MX',
  /**
   * Original value: 212
   */
  ReverseInfAdj_MX = 'ReverseInfAdj_MX',
  /**
   * Original value: 213
   */
  PurchaseRequisition = 'PurchaseRequisition',
  /**
   * Original value: 214
   */
  PurchPurchOrderFinalizeLedger = 'PurchPurchOrderFinalizeLedger',
  /**
   * Original value: 215
   */
  PurchPackingSlipFinalizeLedger = 'PurchPackingSlipFinalizeLedger',
  /**
   * Original value: 216
   */
  PurchPurchOrderYearEndClose = 'PurchPurchOrderYearEndClose',
  /**
   * Original value: 217
   */
  PurchPurchOrderYearEndOpen = 'PurchPurchOrderYearEndOpen',
  /**
   * Original value: 218
   */
  DepreciationAdjustment = 'DepreciationAdjustment',
  /**
   * Original value: 219
   */
  RCashExchAdj = 'RCashExchAdj',
  /**
   * Original value: 223
   */
  InventClosingSecCur_RU = 'InventClosingSecCur_RU',
  /**
   * Original value: 224
   */
  InventClosingAdjustmentSecCur_RU = 'InventClosingAdjustmentSecCur_RU',
  /**
   * Original value: 225
   */
  DEL_PmfCoByProduct = 'DEL_PmfCoByProduct',
  /**
   * Original value: 226
   */
  RebateInvoiceJournal = 'RebateInvoiceJournal',
  /**
   * Original value: 231
   */
  CustAmountDiffLedger_RU = 'CustAmountDiffLedger_RU',
  /**
   * Original value: 227
   */
  RebateCustomerDeductionJournal = 'RebateCustomerDeductionJournal',
  /**
   * Original value: 228
   */
  RebateTradeSpendAccrualJournal = 'RebateTradeSpendAccrualJournal',
  /**
   * Original value: 229
   */
  VendAmountDiffLedger_RU = 'VendAmountDiffLedger_RU',
  /**
   * Original value: 230
   */
  VendAmountDiffVend_RU = 'VendAmountDiffVend_RU',
  /**
   * Original value: 54
   */
  FixedAssetsPostingLedger_RU = 'FixedAssetsPostingLedger_RU',
  /**
   * Original value: 233
   */
  RDeferrals = 'RDeferrals',
  /**
   * Original value: 235
   */
  EmplAdvanceLedger_RU = 'EmplAdvanceLedger_RU',
  /**
   * Original value: 236
   */
  BankExchAdj_RU = 'BankExchAdj_RU',
  /**
   * Original value: 249
   */
  TaxWithholdReport = 'TaxWithholdReport',
  /**
   * Original value: 250
   */
  TaxInvoiceLedger = 'TaxInvoiceLedger',
  /**
   * Original value: 220
   */
  MCRSalesOrderCouponInvoice = 'MCRSalesOrderCouponInvoice',
  /**
   * Original value: 221
   */
  MCRCustWriteOff = 'MCRCustWriteOff',
  /**
   * Original value: 19
   */
  PayProfitDepositClose_RU = 'PayProfitDepositClose_RU',
  /**
   * Original value: 20
   */
  PayDepositTrans_RU = 'PayDepositTrans_RU',
  /**
   * Original value: 101
   */
  RPayTaxRefundOffset = 'RPayTaxRefundOffset',
  /**
   * Original value: 90
   */
  CustVendNetCustomer = 'CustVendNetCustomer',
  /**
   * Original value: 91
   */
  CustVendNetVendor = 'CustVendNetVendor',
  /**
   * Original value: 92
   */
  CustVendNetLedger = 'CustVendNetLedger',
  /**
   * Original value: 55
   */
  BankCurrencyRevalBank = 'BankCurrencyRevalBank',
  /**
   * Original value: 56
   */
  BankCurrencyRevalLedger = 'BankCurrencyRevalLedger',
  /**
   * Original value: 147
   */
  ProjectSalesTax = 'ProjectSalesTax',
  /**
   * Original value: 58
   */
  TaxFiscalDocument = 'TaxFiscalDocument',
  /**
   * Original value: 251
   */
  CustVendNettingCust = 'CustVendNettingCust',
  /**
   * Original value: 252
   */
  CustVendNettingVend = 'CustVendNettingVend',
  /**
   * Original value: 57
   */
  CustClaim = 'CustClaim',
  /**
   * Original value: 170
   */
  ITMGITOrder = 'ITMGITOrder',
  /**
   * Original value: 171
   */
  ITMCostAccrual = 'ITMCostAccrual',
  /**
   * Original value: 59
   */
  LTMInfAdj_AR = 'LTMInfAdj_AR',
  /**
   * Original value: 60
   */
  LTMRevInfAdj_AR = 'LTMRevInfAdj_AR'
}
