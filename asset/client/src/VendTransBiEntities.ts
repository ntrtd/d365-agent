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
import type { VendTransBiEntitiesApi } from './VendTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { CustVendNegInstStatus } from './CustVendNegInstStatus';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "VendTransBiEntities" of service "d365_metadata".
 */
export class VendTransBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendTransBiEntitiesType<T>
{
  /**
   * Technical entity name for VendTransBiEntities.
   */
  static override _entityName = 'VendTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendTransBiEntities entity.
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
   * Release Date Comment.
   * @nullable
   */
  declare releaseDateComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Exch Adj Rate Reporting.
   */
  declare lastExchAdjRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Paym Id.
   * @nullable
   */
  declare paymId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Invoice Purch Id.
   * @nullable
   */
  declare taxInvoicePurchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Project.
   * @nullable
   */
  declare invoiceProject?: NoYes | null;
  /**
   * Posting Profile Re Open.
   * @nullable
   */
  declare postingProfileReOpen?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Num.
   * @nullable
   */
  declare tax1099Num?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Cross Rate.
   */
  declare reportingCurrencyCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Adjustment.
   */
  declare exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Settle Account Num.
   * @nullable
   */
  declare lastSettleAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 Fields.
   */
  declare tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Last Settle Date.
   */
  declare lastSettleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Summary Account Id.
   * @nullable
   */
  declare summaryAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Exch Adjustment Unrealized.
   */
  declare reportingExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Exch Adj Voucher.
   * @nullable
   */
  declare lastExchAdjVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Promissory Note Id.
   * @nullable
   */
  declare promissoryNoteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax 1099 Date.
   */
  declare tax1099Date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Payment Group.
   * @nullable
   */
  declare vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prepayment.
   * @nullable
   */
  declare prepayment?: NoYes | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile Close.
   * @nullable
   */
  declare postingProfileClose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Amount Mst.
   */
  declare settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 Rec Id.
   */
  declare tax1099RecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed.
   */
  declare closed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Tax 1099 State Amount.
   */
  declare settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Third Party Bank Account Id.
   * @nullable
   */
  declare thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancel.
   * @nullable
   */
  declare cancel?: NoYes | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Exch Adjustment Realized.
   */
  declare vendExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Lc Import Line.
   */
  declare bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Approved.
   * @nullable
   */
  declare approved?: NoYes | null;
  /**
   * Last Exch Adj.
   */
  declare lastExchAdj: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settle Amount Cur.
   */
  declare settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settlement.
   * @nullable
   */
  declare settlement?: NoYes | null;
  /**
   * Promissory Note Seq Num.
   */
  declare promissoryNoteSeqNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Remittance File Id.
   * @nullable
   */
  declare bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Vat Date.
   */
  declare vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Paym Reference.
   * @nullable
   */
  declare paymReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Exch Rate.
   * @nullable
   */
  declare fixedExchRate?: NoYes | null;
  /**
   * Reason Ref Rec Id.
   */
  declare reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Last Settle Company.
   * @nullable
   */
  declare lastSettleCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Arrival.
   * @nullable
   */
  declare arrival?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Tax 1099 Amount.
   */
  declare settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Last Settle Voucher.
   * @nullable
   */
  declare lastSettleVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Adjustment Reporting.
   */
  declare exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Central Bank Purpose Text.
   * @nullable
   */
  declare bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Central Bank Purpose Code.
   * @nullable
   */
  declare bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Address.
   */
  declare remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax 1099 State.
   * @nullable
   */
  declare tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Promissory Note Status.
   * @nullable
   */
  declare promissoryNoteStatus?: CustVendNegInstStatus | null;
  /**
   * Vend Exch Adjustment Unrealized.
   */
  declare vendExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Arrival Account Id.
   * @nullable
   */
  declare arrivalAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: LedgerTransType | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Euro Triangulation.
   * @nullable
   */
  declare euroTriangulation?: NoYes | null;
  /**
   * Correct.
   * @nullable
   */
  declare correct?: NoYes | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Exch Adjustment Realized.
   */
  declare reportingExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Release Date.
   */
  declare invoiceReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approved Date.
   */
  declare approvedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approver.
   */
  declare approver: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile Approve.
   * @nullable
   */
  declare postingProfileApprove?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Recid.
   */
  declare offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Profile Cancel.
   * @nullable
   */
  declare postingProfileCancel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Bank Account Id.
   * @nullable
   */
  declare companyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax 1099 State Amount.
   */
  declare tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remittance Location.
   */
  declare remittanceLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax 1099 Amount.
   */
  declare tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Settle Amount Reporting.
   */
  declare settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Event.
   */
  declare accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Last Exch Adj Rate.
   */
  declare lastExchAdjRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cash Disc Code.
   * @nullable
   */
  declare cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Disc Base Date.
   */
  declare cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rbo Vend Trans.
   * @nullable
   */
  declare rboVendTrans?: NoYes | null;

  constructor(_entityApi: VendTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  releaseDateComment?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  lastExchAdjRateReporting: DeserializedType<T, 'Edm.Decimal'>;
  paymId?: DeserializedType<T, 'Edm.String'> | null;
  taxInvoicePurchId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceProject?: NoYes | null;
  postingProfileReOpen?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Num?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyCrossRate: DeserializedType<T, 'Edm.Decimal'>;
  exchAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  lastSettleAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  lastSettleDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  summaryAccountId?: DeserializedType<T, 'Edm.String'> | null;
  reportingExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  lastExchAdjVoucher?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  promissoryNoteId?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tax1099Date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendPaymentGroup?: DeserializedType<T, 'Edm.String'> | null;
  prepayment?: NoYes | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileClose?: DeserializedType<T, 'Edm.String'> | null;
  settleAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  tax1099RecId: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  closed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  settleTax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  thirdPartyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  cancel?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  vendExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  bankLcImportLine: DeserializedType<T, 'Edm.Int64'>;
  approved?: NoYes | null;
  lastExchAdj: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  settleAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  settlement?: NoYes | null;
  promissoryNoteSeqNum: DeserializedType<T, 'Edm.Int32'>;
  bankRemittanceFileId?: DeserializedType<T, 'Edm.String'> | null;
  vendorVatDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymReference?: DeserializedType<T, 'Edm.String'> | null;
  fixedExchRate?: NoYes | null;
  reasonRefRecId: DeserializedType<T, 'Edm.Int64'>;
  lastSettleCompany?: DeserializedType<T, 'Edm.String'> | null;
  arrival?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  settleTax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  lastSettleVoucher?: DeserializedType<T, 'Edm.String'> | null;
  exchAdjustmentReporting: DeserializedType<T, 'Edm.Decimal'>;
  bankCentralBankPurposeText?: DeserializedType<T, 'Edm.String'> | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  bankCentralBankPurposeCode?: DeserializedType<T, 'Edm.String'> | null;
  remittanceAddress: DeserializedType<T, 'Edm.Int64'>;
  tax1099State?: DeserializedType<T, 'Edm.String'> | null;
  promissoryNoteStatus?: CustVendNegInstStatus | null;
  vendExchAdjustmentUnrealized: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  arrivalAccountId?: DeserializedType<T, 'Edm.String'> | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  transType?: LedgerTransType | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  euroTriangulation?: NoYes | null;
  correct?: NoYes | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  reportingExchAdjustmentRealized: DeserializedType<T, 'Edm.Decimal'>;
  invoiceReleaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approver: DeserializedType<T, 'Edm.Int64'>;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  postingProfileApprove?: DeserializedType<T, 'Edm.String'> | null;
  offsetRecid: DeserializedType<T, 'Edm.Int64'>;
  postingProfileCancel?: DeserializedType<T, 'Edm.String'> | null;
  companyBankAccountId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tax1099StateAmount: DeserializedType<T, 'Edm.Decimal'>;
  remittanceLocation: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  tax1099Amount: DeserializedType<T, 'Edm.Decimal'>;
  settleAmountReporting: DeserializedType<T, 'Edm.Decimal'>;
  accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  lastExchAdjRate: DeserializedType<T, 'Edm.Decimal'>;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  cashDiscCode?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscBaseDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rboVendTrans?: NoYes | null;
}
