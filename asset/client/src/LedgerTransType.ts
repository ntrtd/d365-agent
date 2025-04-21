/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * This enum represents the enum type "{@link LedgerTransType}".
 * The members represent values of EDM type Edm.Int32.
 */
export enum LedgerTransType {
  /**
   * Original value: 0
   */
  None = 'None',
  /**
   * Original value: 1
   */
  Transfer = 'Transfer',
  /**
   * Original value: 2
   */
  Sales = 'Sales',
  /**
   * Original value: 3
   */
  Purch = 'Purch',
  /**
   * Original value: 4
   */
  Invent = 'Invent',
  /**
   * Original value: 5
   */
  Production = 'Production',
  /**
   * Original value: 6
   */
  Project = 'Project',
  /**
   * Original value: 7
   */
  Interest = 'Interest',
  /**
   * Original value: 8
   */
  Cust = 'Cust',
  /**
   * Original value: 9
   */
  ExchAdjustment = 'ExchAdjustment',
  /**
   * Original value: 10
   */
  SummedUp = 'SummedUp',
  /**
   * Original value: 11
   */
  Payroll = 'Payroll',
  /**
   * Original value: 12
   */
  FixedAssets = 'FixedAssets',
  /**
   * Original value: 13
   */
  CollectionLetter = 'CollectionLetter',
  /**
   * Original value: 14
   */
  Vend = 'Vend',
  /**
   * Original value: 15
   */
  Payment = 'Payment',
  /**
   * Original value: 16
   */
  Tax = 'Tax',
  /**
   * Original value: 17
   */
  Bank = 'Bank',
  /**
   * Original value: 18
   */
  Conversion = 'Conversion',
  /**
   * Original value: 19
   */
  BillOfExchange = 'BillOfExchange',
  /**
   * Original value: 20
   */
  PromissoryNote = 'PromissoryNote',
  /**
   * Original value: 21
   */
  Cost = 'Cost',
  /**
   * Original value: 22
   */
  Work = 'Work',
  /**
   * Original value: 23
   */
  Fee = 'Fee',
  /**
   * Original value: 24
   */
  Settlement = 'Settlement',
  /**
   * Original value: 25
   */
  Allocation = 'Allocation',
  /**
   * Original value: 26
   */
  Elimination = 'Elimination',
  /**
   * Original value: 27
   */
  CashDiscount = 'CashDiscount',
  /**
   * Original value: 28
   */
  OverUnder = 'OverUnder',
  /**
   * Original value: 29
   */
  PennyDifference = 'PennyDifference',
  /**
   * Original value: 30
   */
  CrossCompanySettlement = 'CrossCompanySettlement',
  /**
   * Original value: 31
   */
  PurchReq = 'PurchReq',
  /**
   * Original value: 32
   */
  InflationAdjustment_MX = 'InflationAdjustment_MX',
  /**
   * Original value: 33
   */
  PurchAdvanceApplication = 'PurchAdvanceApplication',
  /**
   * Original value: 34
   */
  ConversionReporting = 'ConversionReporting',
  /**
   * Original value: 79
   */
  FixedAssets_RU = 'FixedAssets_RU',
  /**
   * Original value: 80
   */
  RTax25_BadDebtDebitAmortisation = 'RTax25_BadDebtDebitAmortisation',
  /**
   * Original value: 81
   */
  RDeferrals = 'RDeferrals',
  /**
   * Original value: 82
   */
  RTax25_BadDebtCreditAmortisation = 'RTax25_BadDebtCreditAmortisation',
  /**
   * Original value: 83
   */
  AdvanceAdjustment_RU = 'AdvanceAdjustment_RU',
  /**
   * Original value: 84
   */
  VATTaxAgent_RU = 'VATTaxAgent_RU',
  /**
   * Original value: 85
   */
  GainLossCurrencyDeal_RU = 'GainLossCurrencyDeal_RU',
  /**
   * Original value: 100
   */
  PdsRebateCreditNote = 'PdsRebateCreditNote',
  /**
   * Original value: 101
   */
  PdsRebatePassToAP = 'PdsRebatePassToAP',
  /**
   * Original value: 35
   */
  WriteOff = 'WriteOff',
  /**
   * Original value: 36
   */
  GeneralJournal = 'GeneralJournal',
  /**
   * Original value: 250
   */
  MCRUnderpayWriteOff = 'MCRUnderpayWriteOff',
  /**
   * Original value: 188
   */
  CustVendNetting = 'CustVendNetting',
  /**
   * Original value: 251
   */
  SalesPrepayment = 'SalesPrepayment',
  /**
   * Original value: 37
   */
  ReportingCurrencyAdjustment = 'ReportingCurrencyAdjustment',
  /**
   * Original value: 66
   */
  LedgerSettlement = 'LedgerSettlement',
  /**
   * Original value: 67
   */
  LedgerSettlementReversal = 'LedgerSettlementReversal',
  /**
   * Original value: 39
   */
  AssetLeaseLeaseIR = 'AssetLeaseLeaseIR',
  /**
   * Original value: 40
   */
  AssetLeaseLeaseInterest = 'AssetLeaseLeaseInterest',
  /**
   * Original value: 41
   */
  AssetLeaseLeasePayment = 'AssetLeaseLeasePayment',
  /**
   * Original value: 42
   */
  AssetLeaseLeaseAdjustment = 'AssetLeaseLeaseAdjustment',
  /**
   * Original value: 43
   */
  AssetLeaseLeaseIRReversal = 'AssetLeaseLeaseIRReversal',
  /**
   * Original value: 44
   */
  AssetLeaseLeaseInterestReversal = 'AssetLeaseLeaseInterestReversal',
  /**
   * Original value: 45
   */
  AssetLeaseLeasePaymentReversal = 'AssetLeaseLeasePaymentReversal',
  /**
   * Original value: 46
   */
  AssetLeaseLeaseROUDepreciation = 'AssetLeaseLeaseROUDepreciation',
  /**
   * Original value: 47
   */
  AssetLeaseLeaseROUDepreciationReversal = 'AssetLeaseLeaseROUDepreciationReversal',
  /**
   * Original value: 48
   */
  AssetLeaseLeaseAdjustmentIncrease = 'AssetLeaseLeaseAdjustmentIncrease',
  /**
   * Original value: 49
   */
  AssetLeaseLeaseAdjustmentDecrease = 'AssetLeaseLeaseAdjustmentDecrease',
  /**
   * Original value: 50
   */
  AssetLeaseReversePriorLeaseClassification = 'AssetLeaseReversePriorLeaseClassification',
  /**
   * Original value: 51
   */
  AssetLeaseRecordNewLeaseClassification = 'AssetLeaseRecordNewLeaseClassification',
  /**
   * Original value: 52
   */
  AssetLeaseLeaseAdjustmentReversal = 'AssetLeaseLeaseAdjustmentReversal',
  /**
   * Original value: 53
   */
  AssetLeaseLeaseAdjustmentIncreaseReversal = 'AssetLeaseLeaseAdjustmentIncreaseReversal',
  /**
   * Original value: 54
   */
  AssetLeaseLeaseAdjustmentDecreaseReversal = 'AssetLeaseLeaseAdjustmentDecreaseReversal',
  /**
   * Original value: 55
   */
  AssetLeaseReversePriorLeaseClassificationReversal = 'AssetLeaseReversePriorLeaseClassificationReversal',
  /**
   * Original value: 56
   */
  AssetLeaseRecordNewLeaseClassificationReversal = 'AssetLeaseRecordNewLeaseClassificationReversal',
  /**
   * Original value: 57
   */
  AssetLeaseLeaseExpense = 'AssetLeaseLeaseExpense',
  /**
   * Original value: 58
   */
  AssetLeaseLeaseExpenseReversal = 'AssetLeaseLeaseExpenseReversal',
  /**
   * Original value: 59
   */
  AssetLeaseLeaseLiabilityShortTermReclass = 'AssetLeaseLeaseLiabilityShortTermReclass',
  /**
   * Original value: 60
   */
  AssetLeaseLeaseLiabilityShortTermReclassReversal = 'AssetLeaseLeaseLiabilityShortTermReclassReversal',
  /**
   * Original value: 61
   */
  AssetLeaseAssetImpairment = 'AssetLeaseAssetImpairment',
  /**
   * Original value: 62
   */
  AssetLeaseLeaseAssetImpairmentReversal = 'AssetLeaseLeaseAssetImpairmentReversal',
  /**
   * Original value: 63
   */
  AssetLeaseLeaseTermination = 'AssetLeaseLeaseTermination',
  /**
   * Original value: 64
   */
  AssetLeaseLeaseTerminationReversal = 'AssetLeaseLeaseTerminationReversal',
  /**
   * Original value: 65
   */
  LTMInflationAdjustment_AR = 'LTMInflationAdjustment_AR',
  /**
   * Original value: 38
   */
  RevRecSalesOrderRevenueAdjustment = 'RevRecSalesOrderRevenueAdjustment'
}
