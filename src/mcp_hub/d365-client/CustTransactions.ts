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
import type { CustTransactionsApi } from './CustTransactionsApi';
import { NoYes } from './NoYes';
import { CustCollectionLetterCode } from './CustCollectionLetterCode';
import { NetCurrent } from './NetCurrent';
import { LedgerTransType } from './LedgerTransType';
import { CustVendNegInstStatus } from './CustVendNegInstStatus';
import { CustTransOpens, CustTransOpensType } from './CustTransOpens';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { CustDisputes, CustDisputesType } from './CustDisputes';

/**
 * This class represents the entity "CustTransactions" of service "d365_metadata".
 */
export class CustTransactions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustTransactionsType<T>
{
  /**
   * Technical entity name for CustTransactions.
   */
  static override _entityName = 'CustTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustTransactions entity.
   */
  static _keys = ['dataAreaId', 'SysRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Id.
   */
  declare sysRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Cross Rate.
   */
  declare reportingCurrencyCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Store Id.
   * @nullable
   */
  declare retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Exch Adjustment Realized.
   */
  declare reportingExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Settle Company.
   * @nullable
   */
  declare lastSettleCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Paym Order Id.
   * @nullable
   */
  declare mcrPaymOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Automation Prediction Sent.
   * @nullable
   */
  declare custAutomationPredictionSent?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Exch Adj Voucher.
   * @nullable
   */
  declare lastExchAdjVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment.
   * @nullable
   */
  declare prepayment?: NoYes | null;
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
   * Settle Amount Mst.
   */
  declare settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Automation Predunning Sent.
   * @nullable
   */
  declare custAutomationPredunningSent?: NoYes | null;
  /**
   * Collection Letter Code.
   * @nullable
   */
  declare collectionLetterCode?: CustCollectionLetterCode | null;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Reporting Exch Adjustment Unrealized.
   */
  declare reportingExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Settle Account Num.
   * @nullable
   */
  declare lastSettleAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Central Bank Purpose Text.
   * @nullable
   */
  declare bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Bank Account Id.
   * @nullable
   */
  declare thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Cust Trans.
   * @nullable
   */
  declare retailCustTrans?: NoYes | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Terminal Id.
   * @nullable
   */
  declare retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Transaction Id.
   * @nullable
   */
  declare retailTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Exchange Seq Num.
   */
  declare billOfExchangeSeqNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Exch Adj Rate Reporting.
   */
  declare lastExchAdjRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Project.
   * @nullable
   */
  declare invoiceProject?: NoYes | null;
  /**
   * Control Num.
   * @nullable
   */
  declare controlNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Letter.
   * @nullable
   */
  declare collectionLetter?: NoYes | null;
  /**
   * Bill Of Exchange Id.
   * @nullable
   */
  declare billOfExchangeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Adjustment Reporting.
   */
  declare exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Exch Adj.
   */
  declare lastExchAdj: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Mode.
   * @nullable
   */
  declare deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Exch Rate.
   * @nullable
   */
  declare fixedExchRate?: NoYes | null;
  /**
   * Closed.
   */
  declare closed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Reference.
   * @nullable
   */
  declare paymReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Method.
   * @nullable
   */
  declare paymMethod?: NetCurrent | null;
  /**
   * Tax Invoice Sales Id.
   * @nullable
   */
  declare taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Amount Mx.
   */
  declare settleAmountMx: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Central Bank Purpose Code.
   * @nullable
   */
  declare bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LedgerTransType | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cancelled Payment.
   * @nullable
   */
  declare cancelledPayment?: NoYes | null;
  /**
   * Last Settle Voucher.
   * @nullable
   */
  declare lastSettleVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correct.
   * @nullable
   */
  declare correct?: NoYes | null;
  /**
   * Exch Adjustment.
   */
  declare exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Automation Exclude.
   * @nullable
   */
  declare custAutomationExclude?: NoYes | null;
  /**
   * Last Exch Adj Rate.
   */
  declare lastExchAdjRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settlement.
   * @nullable
   */
  declare settlement?: NoYes | null;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Remittance File Id.
   * @nullable
   */
  declare bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Amount Cur.
   */
  declare settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Euro Triangulation.
   * @nullable
   */
  declare euroTriangulation?: NoYes | null;
  /**
   * Cash Disc Base Date.
   */
  declare cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Settle Amount Reporting.
   */
  declare settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bill Of Exchange Status.
   * @nullable
   */
  declare billOfExchangeStatus?: CustVendNegInstStatus | null;
  /**
   * Cust Exch Adjustment Unrealized.
   */
  declare custExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paym Sched Id.
   * @nullable
   */
  declare paymSchedId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Exch Adjustment Realized.
   */
  declare custExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Settle Date.
   */
  declare lastSettleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company Bank Account Id.
   * @nullable
   */
  declare companyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Payment.
   * @nullable
   */
  declare cashPayment?: NoYes | null;
  /**
   * Posting Profile Close.
   * @nullable
   */
  declare postingProfileClose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustTransOpens} entity.
   */
  declare custTransOpen: CustTransOpens<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link CustDisputes} entity.
   */
  declare custDispute?: CustDisputes<T> | null;

  constructor(_entityApi: CustTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface CustTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sysRecId: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  retailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  reportingExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  lastSettleCompany?: DeserializedType<T, 'Edm.String'> | null;
  mcrPaymOrderId?: DeserializedType<T, 'Edm.String'> | null;
  custAutomationPredictionSent?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  lastExchAdjVoucher?: DeserializedType<T, 'Edm.String'> | null;
  prepayment?: NoYes | null;
  interest?: NoYes | null;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  custAutomationPredunningSent?: NoYes | null;
  collectionLetterCode?: CustCollectionLetterCode | null;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  reportingExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  lastSettleAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailCustTrans?: NoYes | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  retailTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  retailTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  billOfExchangeSeqNum: DeserializedType<T, 'Edm.Int32'>;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  lastExchAdjRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  invoiceProject?: NoYes | null;
  controlNum?: DeserializedType<T, 'Edm.String'> | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  collectionLetter?: NoYes | null;
  billOfExchangeId?: DeserializedType<T, 'Edm.String'> | null;
  exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  lastExchAdj: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  fixedExchRate?: NoYes | null;
  closed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  paymReference?: DeserializedType<T, 'Edm.String'> | null;
  paymMethod?: NetCurrent | null;
  taxInvoiceSalesId?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountMx: DeserializedType<T, 'Edm.Decimal'>;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  transType?: LedgerTransType | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cancelledPayment?: NoYes | null;
  lastSettleVoucher?: DeserializedType<T, 'Edm.String'> | null;
  correct?: NoYes | null;
  exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  custAutomationExclude?: NoYes | null;
  lastExchAdjRate: DeserializedType<T, 'Edm.Decimal'>;
  settlement?: NoYes | null;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  approved?: NoYes | null;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  euroTriangulation?: NoYes | null;
  cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  billOfExchangeStatus?: CustVendNegInstStatus | null;
  custExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  paymSchedId?: DeserializedType<T, 'Edm.String'> | null;
  custExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  lastSettleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  companyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  cashPayment?: NoYes | null;
  postingProfileClose?: DeserializedType<T, 'Edm.String'> | null;
  custTransOpen: CustTransOpensType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
  custDispute?: CustDisputesType<T> | null;
}
