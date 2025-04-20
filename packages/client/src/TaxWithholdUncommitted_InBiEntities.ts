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
import type { TaxWithholdUncommitted_InBiEntitiesApi } from './TaxWithholdUncommitted_InBiEntitiesApi';
import { NoYes } from './NoYes';
import { TaxWithholdTransactionstatusIn } from './TaxWithholdTransactionstatusIn';
import { TaxWithholdTaxApplicabilityIn } from './TaxWithholdTaxApplicabilityIn';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
import { TaxModuleType } from './TaxModuleType';

/**
 * This class represents the entity "TaxWithholdUncommitted_INBiEntities" of service "d365_metadata".
 */
export class TaxWithholdUncommitted_InBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxWithholdUncommitted_InBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxWithholdUncommitted_InBiEntities.
   */
  static override _entityName = 'TaxWithholdUncommitted_INBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxWithholdUncommitted_InBiEntities entity.
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
   * Exempt Tax.
   * @nullable
   */
  declare exemptTax?: NoYes | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concession Certificate Number.
   * @nullable
   */
  declare concessionCertificateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Overlook Threshold.
   * @nullable
   */
  declare overlookThreshold?: NoYes | null;
  /**
   * Tax Withhold Code.
   * @nullable
   */
  declare taxWithholdCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax Interim.
   * @nullable
   */
  declare isTaxInterim?: NoYes | null;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Calc As Non Tax Trans In Voucher.
   * @nullable
   */
  declare taxCalcAsNonTaxTransInVoucher?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Base Amount Cur.
   */
  declare taxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Currency C Ode.
   * @nullable
   */
  declare sourceCurrencyCOde?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Group.
   * @nullable
   */
  declare taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number.
   * @nullable
   */
  declare accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Tax Amount Cur.
   */
  declare sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount Cur.
   */
  declare taxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Base Amount.
   */
  declare taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Tax Amount Cur Real.
   */
  declare sourceTaxAmountCurReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: TaxWithholdTransactionstatusIn | null;
  /**
   * Threshold Valid From.
   */
  declare thresholdValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Base Amount Cur.
   */
  declare sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Heading Table Id.
   */
  declare headingTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cp Orig Invoice Ref Rec Id.
   */
  declare cpOrigInvoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Threshold Valid To.
   */
  declare thresholdValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Country Region To Remittance.
   */
  declare countryRegionToRemittance: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Trans Date.
   */
  declare sourceTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Trans Table Id.
   */
  declare sourceTransTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calc Uncalc Posted Trans.
   * @nullable
   */
  declare calcUncalcPostedTrans?: NoYes | null;
  /**
   * Ledger Dimension Default Account Values Json.
   * @nullable
   */
  declare ledgerDimensionDefaultAccountValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Turnover Threshold.
   */
  declare turnoverThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Nature Of Remittance.
   */
  declare natureOfRemittance: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rate Of Deduction.
   */
  declare rateOfDeduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Advance Payment.
   * @nullable
   */
  declare advancePayment?: NoYes | null;
  /**
   * Tax Currency Code.
   * @nullable
   */
  declare taxCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Applicability.
   * @nullable
   */
  declare taxApplicability?: TaxWithholdTaxApplicabilityIn | null;
  /**
   * Tax Withhold Value.
   */
  declare taxWithholdValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculation Date.
   */
  declare calculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold Type.
   * @nullable
   */
  declare taxWithholdType?: TaxWithholdCodeTypeIn | null;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Trans Voucher.
   * @nullable
   */
  declare sourceTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Base Amount Cur Regulated.
   */
  declare sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Base Amount Cur Raw.
   */
  declare sourceBaseAmountCurRaw: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Trans Rec Id.
   */
  declare sourceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Regulate Amount Cur.
   */
  declare sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Tax Calculated.
   * @nullable
   */
  declare isTaxCalculated?: NoYes | null;
  /**
   * Source Base Amount Cur Calculated.
   */
  declare sourceBaseAmountCurCalculated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Origin Mst.
   */
  declare amountOriginMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Part Of Turn Over.
   * @nullable
   */
  declare isPartOfTurnOver?: NoYes | null;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason.
   * @nullable
   */
  declare reason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source.
   * @nullable
   */
  declare source?: TaxModuleType | null;
  /**
   * Heading Rec Id.
   */
  declare headingRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Base Amount Raw.
   */
  declare taxBaseAmountRaw: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Acknowledgerment Number.
   * @nullable
   */
  declare acknowledgermentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Base Qty.
   */
  declare taxBaseQty: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TaxWithholdUncommitted_InBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxWithholdUncommitted_InBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  exemptTax?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  concessionCertificateNumber?: DeserializedType<T, 'Edm.String'> | null;
  overlookThreshold?: NoYes | null;
  taxWithholdCode?: DeserializedType<T, 'Edm.String'> | null;
  isTaxInterim?: NoYes | null;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxCalcAsNonTaxTransInVoucher?: DeserializedType<T, 'Edm.String'> | null;
  taxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  sourceCurrencyCOde?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  taxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceTaxAmountCurReal: DeserializedType<T, 'Edm.Decimal'>;
  transactionStatus?: TaxWithholdTransactionstatusIn | null;
  thresholdValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  headingTableId: DeserializedType<T, 'Edm.Int32'>;
  cpOrigInvoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  thresholdValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  countryRegionToRemittance: DeserializedType<T, 'Edm.Int64'>;
  sourceTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceTransTableId: DeserializedType<T, 'Edm.Int32'>;
  calcUncalcPostedTrans?: NoYes | null;
  ledgerDimensionDefaultAccountValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  turnoverThreshold: DeserializedType<T, 'Edm.Decimal'>;
  natureOfRemittance: DeserializedType<T, 'Edm.Int64'>;
  rateOfDeduction: DeserializedType<T, 'Edm.Decimal'>;
  advancePayment?: NoYes | null;
  taxCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  taxApplicability?: TaxWithholdTaxApplicabilityIn | null;
  taxWithholdValue: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  calculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdType?: TaxWithholdCodeTypeIn | null;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  sourceTransVoucher?: DeserializedType<T, 'Edm.String'> | null;
  sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceBaseAmountCurRaw: DeserializedType<T, 'Edm.Decimal'>;
  sourceTransRecId: DeserializedType<T, 'Edm.Int64'>;
  sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  isTaxCalculated?: NoYes | null;
  sourceBaseAmountCurCalculated: DeserializedType<T, 'Edm.Decimal'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  amountOriginMst: DeserializedType<T, 'Edm.Decimal'>;
  isPartOfTurnOver?: NoYes | null;
  taxAutogenerated?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  source?: TaxModuleType | null;
  headingRecId: DeserializedType<T, 'Edm.Int64'>;
  taxBaseAmountRaw: DeserializedType<T, 'Edm.Decimal'>;
  acknowledgermentNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxBaseQty: DeserializedType<T, 'Edm.Decimal'>;
}
