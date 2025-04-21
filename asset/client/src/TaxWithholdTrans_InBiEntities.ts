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
import type { TaxWithholdTrans_InBiEntitiesApi } from './TaxWithholdTrans_InBiEntitiesApi';
import { TaxWithholdTaxApplicabilityIn } from './TaxWithholdTaxApplicabilityIn';
import { NoYes } from './NoYes';
import { TaxWithholdTransactionstatusIn } from './TaxWithholdTransactionstatusIn';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
import { TaxWithholdMinorHeadCodeIn } from './TaxWithholdMinorHeadCodeIn';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
import { TaxWithholdComponentStatusIn } from './TaxWithholdComponentStatusIn';
import { PanStatusIn } from './PanStatusIn';
import { TaxModuleType } from './TaxModuleType';

/**
 * This class represents the entity "TaxWithholdTrans_INBiEntities" of service "d365_metadata".
 */
export class TaxWithholdTrans_InBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxWithholdTrans_InBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxWithholdTrans_InBiEntities.
   */
  static override _entityName = 'TaxWithholdTrans_INBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxWithholdTrans_InBiEntities entity.
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
   * Paym Account.
   * @nullable
   */
  declare paymAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Challan Date.
   */
  declare challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pan.
   * @nullable
   */
  declare pan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Nature Of Remittance.
   */
  declare natureOfRemittance: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Acknowledgerment Number.
   * @nullable
   */
  declare acknowledgermentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Vend Trans Invoice Id.
   */
  declare custVendTransInvoiceId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Certificate Received Date.
   */
  declare certificateReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pan Reference Number.
   * @nullable
   */
  declare panReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Applicability.
   * @nullable
   */
  declare taxApplicability?: TaxWithholdTaxApplicabilityIn | null;
  /**
   * Is Tax Interim.
   * @nullable
   */
  declare isTaxInterim?: NoYes | null;
  /**
   * Tax Withhold Base Amount Cur.
   */
  declare taxWithholdBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exempt.
   * @nullable
   */
  declare exempt?: NoYes | null;
  /**
   * Trans Paym Id.
   */
  declare transPaymId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settled Voucher.
   * @nullable
   */
  declare settledVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Voucher.
   * @nullable
   */
  declare settlementVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Component.
   */
  declare taxWithholdComponent: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Paym Company.
   * @nullable
   */
  declare paymCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Line Num.
   */
  declare returnLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Person Designation.
   * @nullable
   */
  declare personDesignation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Part Of Turn Over.
   * @nullable
   */
  declare isPartOfTurnOver?: NoYes | null;
  /**
   * Account Id.
   * @nullable
   */
  declare accountId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Invoice Trans.
   */
  declare custInvoiceTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recoverable Certificate Num.
   * @nullable
   */
  declare recoverableCertificateNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Person Fathers Name.
   * @nullable
   */
  declare personFathersName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Ref Id.
   * @nullable
   */
  declare inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Amount Origin.
   */
  declare taxWithholdAmountOrigin: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Voucher.
   * @nullable
   */
  declare invoiceVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Turnover Threshold.
   */
  declare turnoverThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Provisional Receipt Number.
   * @nullable
   */
  declare provisionalReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bsr Code.
   * @nullable
   */
  declare bsrCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Of Deduction.
   */
  declare rateOfDeduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Rep Counter.
   */
  declare taxRepCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cp Orig Invoice Ref Rec Id.
   */
  declare cpOrigInvoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Currency.
   * @nullable
   */
  declare taxWithholdCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Receivable Account Values Json.
   * @nullable
   */
  declare ledgerDimensionReceivableAccountValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Trans Voucher.
   * @nullable
   */
  declare sourceTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certificate Issue Date.
   */
  declare certificateIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Heading Rec Id.
   */
  declare headingRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cheque Num.
   * @nullable
   */
  declare chequeNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concession Certificate Number.
   * @nullable
   */
  declare concessionCertificateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Amount Cur.
   */
  declare taxWithholdAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: TaxWithholdTransactionstatusIn | null;
  /**
   * Tax Withhold Amount.
   */
  declare taxWithholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Heading Table Id.
   */
  declare headingTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reason.
   * @nullable
   */
  declare reason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Trans Rec Id.
   */
  declare sourceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Code.
   * @nullable
   */
  declare taxWithholdCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recoverable Account.
   * @nullable
   */
  declare recoverableAccount?: NoYes | null;
  /**
   * Certificate Number.
   * @nullable
   */
  declare certificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Valid From.
   */
  declare thresholdValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Challan Number.
   * @nullable
   */
  declare challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Tax Withhold Amount.
   */
  declare taxTaxWithholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Country Region To Remittance.
   */
  declare countryRegionToRemittance: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Nature Of Assessee.
   * @nullable
   */
  declare natureOfAssessee?: NatureOfAssesseeIn | null;
  /**
   * Settled.
   * @nullable
   */
  declare settled?: NoYes | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjusted Base Amount.
   */
  declare adjustedBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Withhold Component Group.
   */
  declare taxWithholdComponentGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Threshold Valid To.
   */
  declare thresholdValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Calc Amount Cur.
   */
  declare taxWithholdCalcAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minor Head Code.
   * @nullable
   */
  declare minorHeadCode?: TaxWithholdMinorHeadCodeIn | null;
  /**
   * Withhold Base Amount.
   */
  declare withholdBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdCodeTypeIn | null;
  /**
   * Tax Withhold Value.
   */
  declare taxWithholdValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Auto Generated.
   * @nullable
   */
  declare taxAutoGenerated?: NoYes | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calc Uncalc Posted Trans.
   * @nullable
   */
  declare calcUncalcPostedTrans?: NoYes | null;
  /**
   * Component Status.
   * @nullable
   */
  declare componentStatus?: TaxWithholdComponentStatusIn | null;
  /**
   * Adjusted Tax Withhold Amount.
   */
  declare adjustedTaxWithholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Trans Table Id.
   */
  declare sourceTransTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Advance Payment.
   * @nullable
   */
  declare advancePayment?: NoYes | null;
  /**
   * Person Name.
   * @nullable
   */
  declare personName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Voucher.
   * @nullable
   */
  declare ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overlook Threshold.
   * @nullable
   */
  declare overlookThreshold?: NoYes | null;
  /**
   * Source Trans Date.
   */
  declare sourceTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Nameofdeductee.
   * @nullable
   */
  declare nameofdeductee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Ledger Voucher.
   * @nullable
   */
  declare costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Invoice Internal Default Group.
   * @nullable
   */
  declare vendInvoiceInternalDefaultGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Section Code.
   * @nullable
   */
  declare sectionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pan Status.
   * @nullable
   */
  declare panStatus?: PanStatusIn | null;
  /**
   * Source.
   * @nullable
   */
  declare source?: TaxModuleType | null;
  /**
   * Bank Name.
   * @nullable
   */
  declare bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authority.
   * @nullable
   */
  declare authority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Calculated.
   * @nullable
   */
  declare taxWithholdCalculated?: NoYes | null;
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Return Voucher.
   * @nullable
   */
  declare returnVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Settlement Period.
   */
  declare taxWithholdSettlementPeriod: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Reversal.
   * @nullable
   */
  declare transactionReversal?: NoYes | null;
  /**
   * Tax Withhold Reg Number.
   */
  declare taxWithholdRegNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Book Entry.
   * @nullable
   */
  declare bookEntry?: NoYes | null;
  /**
   * Amount Origin Mst.
   */
  declare amountOriginMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxWithholdTrans_InBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxWithholdTrans_InBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  paymAccount?: DeserializedType<T, 'Edm.String'> | null;
  challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pan?: DeserializedType<T, 'Edm.String'> | null;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  natureOfRemittance: DeserializedType<T, 'Edm.Int64'>;
  lineStatus?: DeserializedType<T, 'Edm.String'> | null;
  acknowledgermentNumber?: DeserializedType<T, 'Edm.String'> | null;
  custVendTransInvoiceId: DeserializedType<T, 'Edm.Int64'>;
  certificateReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  panReferenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxApplicability?: TaxWithholdTaxApplicabilityIn | null;
  isTaxInterim?: NoYes | null;
  taxWithholdBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  exempt?: NoYes | null;
  transPaymId: DeserializedType<T, 'Edm.Int64'>;
  settledVoucher?: DeserializedType<T, 'Edm.String'> | null;
  settlementVoucher?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdComponent: DeserializedType<T, 'Edm.Int64'>;
  paymCompany?: DeserializedType<T, 'Edm.String'> | null;
  returnLineNum: DeserializedType<T, 'Edm.Decimal'>;
  personDesignation?: DeserializedType<T, 'Edm.String'> | null;
  isPartOfTurnOver?: NoYes | null;
  accountId?: DeserializedType<T, 'Edm.String'> | null;
  custInvoiceTrans: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  recoverableCertificateNum?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  personFathersName?: DeserializedType<T, 'Edm.String'> | null;
  inventRefId?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdAmountOrigin: DeserializedType<T, 'Edm.Decimal'>;
  invoiceVoucher?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  turnoverThreshold: DeserializedType<T, 'Edm.Decimal'>;
  provisionalReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  bsrCode?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  rateOfDeduction: DeserializedType<T, 'Edm.Decimal'>;
  taxRepCounter: DeserializedType<T, 'Edm.Int32'>;
  cpOrigInvoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdCurrency?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionReceivableAccountValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  sourceTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  certificateIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  headingRecId: DeserializedType<T, 'Edm.Int64'>;
  chequeNum?: DeserializedType<T, 'Edm.String'> | null;
  concessionCertificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: TaxWithholdTransactionstatusIn | null;
  taxWithholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  headingTableId: DeserializedType<T, 'Edm.Int32'>;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  sourceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdCode?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  recoverableAccount?: NoYes | null;
  certificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  thresholdValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  taxTaxWithholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  countryRegionToRemittance: DeserializedType<T, 'Edm.Int64'>;
  natureOfAssessee?: NatureOfAssesseeIn | null;
  settled?: NoYes | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  adjustedBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxWithholdComponentGroup: DeserializedType<T, 'Edm.Int64'>;
  thresholdValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdCalcAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  minorHeadCode?: TaxWithholdMinorHeadCodeIn | null;
  withholdBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxType?: TaxWithholdCodeTypeIn | null;
  taxWithholdValue: DeserializedType<T, 'Edm.Decimal'>;
  taxAutoGenerated?: NoYes | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  calcUncalcPostedTrans?: NoYes | null;
  componentStatus?: TaxWithholdComponentStatusIn | null;
  adjustedTaxWithholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceTransTableId: DeserializedType<T, 'Edm.Int32'>;
  advancePayment?: NoYes | null;
  personName?: DeserializedType<T, 'Edm.String'> | null;
  ledgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  overlookThreshold?: NoYes | null;
  sourceTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nameofdeductee?: DeserializedType<T, 'Edm.String'> | null;
  costLedgerVoucher?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendInvoiceInternalDefaultGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  sectionCode?: DeserializedType<T, 'Edm.String'> | null;
  panStatus?: PanStatusIn | null;
  source?: TaxModuleType | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  authority?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdCalculated?: NoYes | null;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  returnVoucher?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdSettlementPeriod: DeserializedType<T, 'Edm.Int64'>;
  transactionReversal?: NoYes | null;
  taxWithholdRegNumber: DeserializedType<T, 'Edm.Int64'>;
  bookEntry?: NoYes | null;
  amountOriginMst: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
}
