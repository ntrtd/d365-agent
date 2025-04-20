/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
/**
 * This enum represents the enum type "{@link TransactionLogType}".
 * The members represent values of EDM type Edm.Int32.
 */
export enum TransactionLogType {
  /**
   * Original value: 0
   */
  Unspecified = 'Unspecified',
  /**
   * Original value: 1
   */
  SalesInvoice = 'SalesInvoice',
  /**
   * Original value: 2
   */
  SalesConfirm = 'SalesConfirm',
  /**
   * Original value: 3
   */
  SalesQuotation = 'SalesQuotation',
  /**
   * Original value: 4
   */
  SalesPckSlp = 'SalesPckSlp',
  /**
   * Original value: 5
   */
  LedgerJournal = 'LedgerJournal',
  /**
   * Original value: 6
   */
  LedgerExchAdj = 'LedgerExchAdj',
  /**
   * Original value: 7
   */
  LedgerOpening = 'LedgerOpening',
  /**
   * Original value: 8
   */
  LedgerClosing = 'LedgerClosing',
  /**
   * Original value: 9
   */
  PurchPackingSlip = 'PurchPackingSlip',
  /**
   * Original value: 10
   */
  PurchPurchaseOrder = 'PurchPurchaseOrder',
  /**
   * Original value: 11
   */
  PurchInvoice = 'PurchInvoice',
  /**
   * Original value: 12
   */
  TaxReport = 'TaxReport',
  /**
   * Original value: 13
   */
  CheckAndFix = 'CheckAndFix',
  /**
   * Original value: 14
   */
  ProjInvoice = 'ProjInvoice',
  /**
   * Original value: 15
   */
  SalesPickingList = 'SalesPickingList',
  /**
   * Original value: 16
   */
  PurchReceiptsList = 'PurchReceiptsList',
  /**
   * Original value: 17
   */
  CostAccounting = 'CostAccounting',
  /**
   * Original value: 18
   */
  CustExchAdj = 'CustExchAdj',
  /**
   * Original value: 19
   */
  VendExchAdj = 'VendExchAdj',
  /**
   * Original value: 20
   */
  CustPaymReconciliation = 'CustPaymReconciliation',
  /**
   * Original value: 21
   */
  VendPaymReconciliation = 'VendPaymReconciliation',
  /**
   * Original value: 22
   */
  ProjJournal = 'ProjJournal',
  /**
   * Original value: 23
   */
  InventJournal = 'InventJournal',
  /**
   * Original value: 24
   */
  PaymMan = 'PaymMan',
  /**
   * Original value: 25
   */
  PaymReversal = 'PaymReversal',
  /**
   * Original value: 26
   */
  CustInterestNote = 'CustInterestNote',
  /**
   * Original value: 27
   */
  CustCollectionLetter = 'CustCollectionLetter',
  /**
   * Original value: 28
   */
  CustTransEdit = 'CustTransEdit',
  /**
   * Original value: 29
   */
  VendTransEdit = 'VendTransEdit',
  /**
   * Original value: 30
   */
  BankReconciliation = 'BankReconciliation',
  /**
   * Original value: 31
   */
  CustReimbursement = 'CustReimbursement',
  /**
   * Original value: 32
   */
  LedgerConsolidation = 'LedgerConsolidation',
  /**
   * Original value: 33
   */
  ConvCompanyCurrency = 'ConvCompanyCurrency',
  /**
   * Original value: 34
   */
  CustFreeInvoice = 'CustFreeInvoice',
  /**
   * Original value: 35
   */
  SMASubscription = 'SMASubscription',
  /**
   * Original value: 36
   */
  ProdPicklist = 'ProdPicklist',
  /**
   * Original value: 37
   */
  ProdReportFinished = 'ProdReportFinished',
  /**
   * Original value: 38
   */
  ProdRouteCard = 'ProdRouteCard',
  /**
   * Original value: 39
   */
  ProdJobCard = 'ProdJobCard',
  /**
   * Original value: 40
   */
  ProdStartUp = 'ProdStartUp',
  /**
   * Original value: 41
   */
  ProdEnd = 'ProdEnd',
  /**
   * Original value: 42
   */
  ProdStatusDecrease = 'ProdStatusDecrease',
  /**
   * Original value: 43
   */
  System = 'System',
  /**
   * Original value: 44
   */
  TransactionReversal = 'TransactionReversal',
  /**
   * Original value: 45
   */
  AssetReclassification = 'AssetReclassification',
  /**
   * Original value: 46
   */
  ProjPackingSlip = 'ProjPackingSlip',
  /**
   * Original value: 47
   */
  ProjCost = 'ProjCost',
  /**
   * Original value: 48
   */
  ProjRevenue = 'ProjRevenue',
  /**
   * Original value: 49
   */
  ProjAdjustment = 'ProjAdjustment',
  /**
   * Original value: 50
   */
  ProjEstimate = 'ProjEstimate',
  /**
   * Original value: 51
   */
  InventCloseTrans = 'InventCloseTrans',
  /**
   * Original value: 52
   */
  InventCloseOnHand = 'InventCloseOnHand',
  /**
   * Original value: 53
   */
  InventCloseClosing = 'InventCloseClosing',
  /**
   * Original value: 54
   */
  InventCloseRecalc = 'InventCloseRecalc',
  /**
   * Original value: 55
   */
  PurchRFQ = 'PurchRFQ',
  /**
   * Original value: 56
   */
  ProdIndirectCost = 'ProdIndirectCost',
  /**
   * Original value: 57
   */
  InventStdCostChange = 'InventStdCostChange',
  /**
   * Original value: 58
   */
  PurchCustomsBillOfEntry_IN = 'PurchCustomsBillOfEntry_IN',
  /**
   * Original value: 59
   */
  SalesCustomsShippingBill_IN = 'SalesCustomsShippingBill_IN',
  /**
   * Original value: 60
   */
  PurchPurchReq = 'PurchPurchReq',
  /**
   * Original value: 61
   */
  ConvReportingCurrency = 'ConvReportingCurrency',
  /**
   * Original value: 62
   */
  InventCloseRevaluation = 'InventCloseRevaluation',
  /**
   * Original value: 100
   */
  SalesInvoice4Paym_RU = 'SalesInvoice4Paym_RU',
  /**
   * Original value: 101
   */
  PurchInvoice4Paym_RU = 'PurchInvoice4Paym_RU',
  /**
   * Original value: 102
   */
  RCashExchAdj = 'RCashExchAdj',
  /**
   * Original value: 103
   */
  PlBankExchAdj = 'PlBankExchAdj',
  /**
   * Original value: 104
   */
  GoodsInRoute_RU = 'GoodsInRoute_RU',
  /**
   * Original value: 105
   */
  ExpenseReport = 'ExpenseReport',
  /**
   * Original value: 106
   */
  Timesheet = 'Timesheet',
  /**
   * Original value: 130
   */
  PayrollPaymReconciliation = 'PayrollPaymReconciliation',
  /**
   * Original value: 131
   */
  AdvancedLedgerEntry = 'AdvancedLedgerEntry',
  /**
   * Original value: 200
   */
  RPayTaxRefundOffset = 'RPayTaxRefundOffset',
  /**
   * Original value: 65
   */
  LedgerSettlement = 'LedgerSettlement',
  /**
   * Original value: 66
   */
  LedgerSettlementReversal = 'LedgerSettlementReversal',
  /**
   * Original value: 201
   */
  ConsignmentReplenishmentOrder = 'ConsignmentReplenishmentOrder',
  /**
   * Original value: 63
   */
  BudgetReservation_PSN = 'BudgetReservation_PSN',
  /**
   * Original value: 64
   */
  BankCurrencyReval = 'BankCurrencyReval'
}
