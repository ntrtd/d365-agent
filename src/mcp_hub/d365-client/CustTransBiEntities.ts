/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { CustTransBiEntitiesApi } from './CustTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { LedgerTransType } from './LedgerTransType';
import { InvoiceTypeIt } from './InvoiceTypeIt';
import { NetCurrent } from './NetCurrent';
import { CustVendNegInstStatus } from './CustVendNegInstStatus';

/**
 * This class represents the entity "CustTransBiEntities" of service "d365_metadata".
 */
export class CustTransBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustTransBiEntitiesType<T>
{
  /**
   * Technical entity name for CustTransBiEntities.
   */
  static override _entityName = 'CustTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Exch Adjustment Unrealized.
   */
  declare custExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Settle Voucher.
   * @nullable
   */
  declare lastSettleVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Settle Date.
   */
  declare lastSettleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Last Exch Adj Rate.
   */
  declare lastExchAdjRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Automation Predunning Sent.
   * @nullable
   */
  declare custAutomationPredunningSent?: NoYes | null;
  /**
   * Cancelled Payment.
   * @nullable
   */
  declare cancelledPayment?: NoYes | null;
  /**
   * Reporting Currency Cross Rate.
   */
  declare reportingCurrencyCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cash Disc Base Date.
   */
  declare cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement.
   * @nullable
   */
  declare settlement?: NoYes | null;
  /**
   * Last Settle Company.
   * @nullable
   */
  declare lastSettleCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Settle Account Num.
   * @nullable
   */
  declare lastSettleAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Euro Triangulation.
   * @nullable
   */
  declare euroTriangulation?: NoYes | null;
  /**
   * Cust Exch Adjustment Realized.
   */
  declare custExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Central Bank Purpose Text.
   * @nullable
   */
  declare bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Event.
   */
  declare accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Terminal Id.
   * @nullable
   */
  declare retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Billing Classification.
   */
  declare custBillingClassification: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Automation Exclude.
   * @nullable
   */
  declare custAutomationExclude?: NoYes | null;
  /**
   * Settle Amount Cur.
   */
  declare settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Store Id.
   * @nullable
   */
  declare retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Remittance File Id.
   * @nullable
   */
  declare bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment.
   * @nullable
   */
  declare prepayment?: NoYes | null;
  /**
   * Settle Amount Mx.
   */
  declare settleAmountMx: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Control Num.
   * @nullable
   */
  declare controlNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile Close.
   * @nullable
   */
  declare postingProfileClose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Bank Account Id.
   * @nullable
   */
  declare thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed.
   */
  declare closed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Automation Prediction Sent.
   * @nullable
   */
  declare custAutomationPredictionSent?: NoYes | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Paym Order Id.
   * @nullable
   */
  declare mcrPaymOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Amount Reporting.
   */
  declare settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Amount Mst.
   */
  declare settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Exch Adjustment Realized.
   */
  declare reportingExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Interest.
   * @nullable
   */
  declare interest?: NoYes | null;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Adjustment.
   */
  declare exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Collection Letter Code.
   * @nullable
   */
  declare collectionLetterCode?: CustCollectionLetterCode | null;
  /**
   * Bill Of Exchange Seq Num.
   */
  declare billOfExchangeSeqNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exch Adjustment Reporting.
   */
  declare exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Exch Adj Rate Reporting.
   */
  declare lastExchAdjRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Recid.
   */
  declare offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Direct Debit Mandate.
   */
  declare directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Approver.
   */
  declare approver: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Last Exch Adj Voucher.
   * @nullable
   */
  declare lastExchAdjVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode.
   * @nullable
   */
  declare deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Transaction Id.
   * @nullable
   */
  declare retailTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Bank Account Id.
   * @nullable
   */
  declare companyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Invoice Sales Id.
   * @nullable
   */
  declare taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Sched Id.
   * @nullable
   */
  declare paymSchedId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LedgerTransType | null;
  /**
   * Invoice Type It.
   * @nullable
   */
  declare invoiceTypeIt?: InvoiceTypeIt | null;
  /**
   * Bank Lc Export Line.
   */
  declare bankLcExportLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Cust Trans.
   * @nullable
   */
  declare retailCustTrans?: NoYes | null;
  /**
   * Paym Method.
   * @nullable
   */
  declare paymMethod?: NetCurrent | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Central Bank Purpose Code.
   * @nullable
   */
  declare bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Correct.
   * @nullable
   */
  declare correct?: NoYes | null;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Exch Adjustment Unrealized.
   */
  declare reportingExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Exch Adj.
   */
  declare lastExchAdj: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bill Of Exchange Id.
   * @nullable
   */
  declare billOfExchangeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Letter.
   * @nullable
   */
  declare collectionLetter?: NoYes | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bill Of Exchange Status.
   * @nullable
   */
  declare billOfExchangeStatus?: CustVendNegInstStatus | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Fixed Exch Rate.
   * @nullable
   */
  declare fixedExchRate?: NoYes | null;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Cash Payment.
   * @nullable
   */
  declare cashPayment?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Reference.
   * @nullable
   */
  declare paymReference?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CustTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  custExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  lastSettleVoucher?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastSettleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  lastExchAdjRate: DeserializedType<T, 'Edm.Decimal'>;
  custAutomationPredunningSent?: NoYes | null;
  cancelledPayment?: NoYes | null;
  reportingCurrencyCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  settlement?: NoYes | null;
  lastSettleCompany?: DeserializedType<T, 'Edm.String'> | null;
  lastSettleAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  euroTriangulation?: NoYes | null;
  custExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  custBillingClassification: DeserializedType<T, 'Edm.Int64'>;
  custAutomationExclude?: NoYes | null;
  settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  prepayment?: NoYes | null;
  settleAmountMx: DeserializedType<T, 'Edm.Decimal'>;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  controlNum?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileClose?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  closed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  custAutomationPredictionSent?: NoYes | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  mcrPaymOrderId?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  reportingExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  interest?: NoYes | null;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  collectionLetterCode?: CustCollectionLetterCode | null;
  billOfExchangeSeqNum: DeserializedType<T, 'Edm.Int32'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  lastExchAdjRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  directDebitMandate: DeserializedType<T, 'Edm.Int64'>;
  approver: DeserializedType<T, 'Edm.Int64'>;
  lastExchAdjVoucher?: DeserializedType<T, 'Edm.String'> | null;
  deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  retailTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  companyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  paymSchedId?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  transType?: LedgerTransType | null;
  invoiceTypeIt?: InvoiceTypeIt | null;
  bankLcExportLine: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  retailCustTrans?: NoYes | null;
  paymMethod?: NetCurrent | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  correct?: NoYes | null;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  lastExchAdj: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billOfExchangeId?: DeserializedType<T, 'Edm.String'> | null;
  collectionLetter?: NoYes | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billOfExchangeStatus?: CustVendNegInstStatus | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  fixedExchRate?: NoYes | null;
  approved?: NoYes | null;
  cashPayment?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  paymReference?: DeserializedType<T, 'Edm.String'> | null;
}
