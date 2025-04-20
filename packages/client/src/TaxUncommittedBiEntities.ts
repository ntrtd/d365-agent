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
import type { TaxUncommittedBiEntitiesApi } from './TaxUncommittedBiEntitiesApi';
import { NoYes } from './NoYes';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
import { LedgerPostingType } from './LedgerPostingType';
import { TaxWarning } from './TaxWarning';
import { TaxTypeBr } from './TaxTypeBr';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { TaxTypeMx } from './TaxTypeMx';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { TaxOrigin } from './TaxOrigin';
import { TaxModuleType } from './TaxModuleType';
import { TaxDirection } from './TaxDirection';
import { TaxSubstitutionEnumBr } from './TaxSubstitutionEnumBr';

/**
 * This class represents the entity "TaxUncommittedBiEntities" of service "d365_metadata".
 */
export class TaxUncommittedBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxUncommittedBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxUncommittedBiEntities.
   */
  static override _entityName = 'TaxUncommittedBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxUncommittedBiEntities entity.
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
   * Empty Tax Base For Outgoing Tax W.
   * @nullable
   */
  declare emptyTaxBaseForOutgoingTaxW?: NoYes | null;
  /**
   * Tax Receivable Long Term Br.
   * @nullable
   */
  declare taxReceivableLongTermBr?: NoYes | null;
  /**
   * Exchange Rate Base Amount Cur Regulated.
   */
  declare exchangeRateBaseAmountCurRegulated: DeserializedType<
    T,
    'Edm.Decimal'
  >;
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
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Isv Feature Setup Name.
   * @nullable
   */
  declare isvFeatureSetupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exchange Rate Tax Base Amount Rep.
   */
  declare exchangeRateTaxBaseAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Over Under Payment.
   * @nullable
   */
  declare isOverUnderPayment?: NoYes | null;
  /**
   * Tax Base Amount Cur.
   */
  declare taxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Exempt Base Amount Br.
   */
  declare sourceExemptBaseAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Party Tax Id.
   */
  declare partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Tax Exchange Rate.
   */
  declare salesTaxExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Tax Amount Cur.
   */
  declare sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operation Ledger Dimension Values Json.
   * @nullable
   */
  declare operationLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Value Br.
   * @nullable
   */
  declare fiscalValueBr?: TaxFiscalValueBr | null;
  /**
   * Exchange Rate Source Base Amount Regulated.
   */
  declare exchangeRateSourceBaseAmountRegulated: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tax In Cost Price Cur.
   */
  declare taxInCostPriceCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operation Posting Type.
   * @nullable
   */
  declare operationPostingType?: LedgerPostingType | null;
  /**
   * Tax Amount Cur.
   */
  declare taxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warning.
   * @nullable
   */
  declare warning?: TaxWarning | null;
  /**
   * Euro Triangulation.
   * @nullable
   */
  declare euroTriangulation?: NoYes | null;
  /**
   * Ledger Dimension Rev In Values Json.
   * @nullable
   */
  declare ledgerDimensionRevInValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Isv Feature Setup Guid.
   */
  declare isvFeatureSetupGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Tax Base Amount.
   */
  declare taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Tax Amount Cur Real.
   */
  declare sourceTaxAmountCurReal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Tax Amount.
   */
  declare exchangeRateTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Due Date W.
   */
  declare vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax In Cost Price Mst.
   */
  declare taxInCostPriceMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Other Base Amount Mst Br.
   */
  declare sourceOtherBaseAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Source Table Id.
   */
  declare parentSourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prepayment.
   * @nullable
   */
  declare prepayment?: NoYes | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Limit Reached.
   * @nullable
   */
  declare taxLimitReached?: NoYes | null;
  /**
   * Source Base Amount Cur.
   */
  declare sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Heading Table Id.
   */
  declare headingTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cust Vend Name Pl.
   * @nullable
   */
  declare custVendNamePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Ledger Dimension Ru Values Json.
   * @nullable
   */
  declare offsetLedgerDimensionRuValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Other Tax Amount Mst Br.
   */
  declare sourceOtherTaxAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Other Base Tax Amount Br.
   */
  declare sourceOtherBaseTaxAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Amount Rep.
   */
  declare taxAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Source Rec Id.
   */
  declare parentSourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Manual Inserted Tax.
   * @nullable
   */
  declare manualInsertedTax?: NoYes | null;
  /**
   * Tax Id.
   */
  declare taxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reverse Charge W.
   * @nullable
   */
  declare reverseChargeW?: NoYes | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Exchange Rate Cur.
   */
  declare salesTaxExchangeRateCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Type Br.
   * @nullable
   */
  declare taxTypeBr?: TaxTypeBr | null;
  /**
   * Invoice Rec Id.
   */
  declare invoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Without Tax Trans Ru.
   * @nullable
   */
  declare withoutTaxTransRu?: NoYes | null;
  /**
   * Taxation Code Br.
   * @nullable
   */
  declare taxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Tax Amount Rep.
   */
  declare exchangeRateTaxAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Included In Price Br.
   * @nullable
   */
  declare includedInPriceBr?: NoYes | null;
  /**
   * Is Offset.
   * @nullable
   */
  declare isOffset?: NoYes | null;
  /**
   * Postpone Vat.
   * @nullable
   */
  declare postponeVat?: NoYes | null;
  /**
   * Exchange Rate Tax Base Amount.
   */
  declare exchangeRateTaxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Num Pl.
   * @nullable
   */
  declare vatNumPl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax In Cost Price.
   */
  declare taxInCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax In Cost Price Regulated.
   */
  declare taxInCostPriceRegulated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Exchange Rate Rep.
   */
  declare salesTaxExchangeRateRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Regulate Amount Cur.
   */
  declare exchangeRateRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Taxation Code Adj Br.
   * @nullable
   */
  declare taxationCodeAdjBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Exempt Tax Amount Mst Br.
   */
  declare sourceExemptTaxAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Sales Offset Ledger Dimension Br Values Json.
   * @nullable
   */
  declare taxSalesOffsetLedgerDimensionBrValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: NoYes | null;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Source Regulate Amount.
   */
  declare exchangeRateSourceRegulateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax In Cost Price Rep.
   */
  declare taxInCostPriceRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Addressing Pl.
   * @nullable
   */
  declare addressingPl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intracom Vat.
   * @nullable
   */
  declare intracomVat?: NoYes | null;
  /**
   * Invent Profile Type Ru.
   * @nullable
   */
  declare inventProfileTypeRu?: InventProfileTypeRu | null;
  /**
   * Tax Offset Use Tax Ledger Dimension Values Json.
   * @nullable
   */
  declare taxOffsetUseTaxLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Source Currency Code.
   * @nullable
   */
  declare sourceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Operation Code Ru.
   * @nullable
   */
  declare vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Tax Agent Vend Account Ru.
   * @nullable
   */
  declare vatTaxAgentVendAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculation Date.
   */
  declare calculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Base Amount Rep.
   */
  declare taxBaseAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Profile Ru.
   * @nullable
   */
  declare postingProfileRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Exempt Base Amount Mst Br.
   */
  declare sourceExemptBaseAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Rate Second.
   */
  declare exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gsthst Tax Type Ca.
   * @nullable
   */
  declare gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  /**
   * Tax Reduction Pct Br.
   */
  declare taxReductionPctBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Tax Base Amount Cur.
   */
  declare exchangeRateTaxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Base Amount Cur Regulated.
   */
  declare sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate Tax Amount Cur.
   */
  declare exchangeRateTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unrealized Tax.
   * @nullable
   */
  declare unrealizedTax?: NoYes | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Type Mx.
   * @nullable
   */
  declare taxTypeMx?: TaxTypeMx | null;
  /**
   * Source Base Amount Cur Raw.
   */
  declare sourceBaseAmountCurRaw: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Base Amount Orig.
   */
  declare taxBaseAmountOrig: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Date Pl.
   */
  declare documentDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Other Base Amount Br.
   */
  declare sourceOtherBaseAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Regulate Amount Cur.
   */
  declare sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Base Amount Cur Calculated.
   */
  declare sourceBaseAmountCurCalculated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Reports.
   * @nullable
   */
  declare taxReports?: NoYes | null;
  /**
   * Tax Code Combination Id.
   */
  declare taxCodeCombinationId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Dimension In Values Json.
   * @nullable
   */
  declare ledgerDimensionInValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Taxation Origin Br.
   * @nullable
   */
  declare taxationOriginBr?: FiTaxationOriginBr | null;
  /**
   * Negative Tax.
   * @nullable
   */
  declare negativeTax?: NoYes | null;
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
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Tax Origin.
   * @nullable
   */
  declare taxOrigin?: TaxOrigin | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Value.
   */
  declare taxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source.
   * @nullable
   */
  declare source?: TaxModuleType | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Direction.
   * @nullable
   */
  declare taxDirection?: TaxDirection | null;
  /**
   * Tax Base Amount Raw.
   */
  declare taxBaseAmountRaw: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Heading Rec Id.
   */
  declare headingRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Base Qty.
   */
  declare taxBaseQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Substitution Br.
   * @nullable
   */
  declare taxSubstitutionBr?: TaxSubstitutionEnumBr | null;

  constructor(_entityApi: TaxUncommittedBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxUncommittedBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  emptyTaxBaseForOutgoingTaxW?: NoYes | null;
  taxReceivableLongTermBr?: NoYes | null;
  exchangeRateBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  exemptTax?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isvFeatureSetupName?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchangeRateTaxBaseAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  isOverUnderPayment?: NoYes | null;
  taxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  sourceExemptBaseAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  salesTaxExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  operationLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  fiscalValueBr?: TaxFiscalValueBr | null;
  exchangeRateSourceBaseAmountRegulated: DeserializedType<T, 'Edm.Decimal'>;
  taxInCostPriceCur: DeserializedType<T, 'Edm.Decimal'>;
  operationPostingType?: LedgerPostingType | null;
  taxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  warning?: TaxWarning | null;
  euroTriangulation?: NoYes | null;
  ledgerDimensionRevInValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isvFeatureSetupGuid: DeserializedType<T, 'Edm.Guid'>;
  taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceTaxAmountCurReal: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxInCostPriceMst: DeserializedType<T, 'Edm.Decimal'>;
  sourceOtherBaseAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  parentSourceTableId: DeserializedType<T, 'Edm.Int32'>;
  prepayment?: NoYes | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  taxLimitReached?: NoYes | null;
  sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  headingTableId: DeserializedType<T, 'Edm.Int32'>;
  custVendNamePl?: DeserializedType<T, 'Edm.String'> | null;
  offsetLedgerDimensionRuValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  sourceOtherTaxAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  sourceOtherBaseTaxAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  taxAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  parentSourceRecId: DeserializedType<T, 'Edm.Int64'>;
  manualInsertedTax?: NoYes | null;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  reverseChargeW?: NoYes | null;
  posted?: NoYes | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxExchangeRateCur: DeserializedType<T, 'Edm.Decimal'>;
  taxTypeBr?: TaxTypeBr | null;
  invoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  withoutTaxTransRu?: NoYes | null;
  taxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateTaxAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  includedInPriceBr?: NoYes | null;
  isOffset?: NoYes | null;
  postponeVat?: NoYes | null;
  exchangeRateTaxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  vatNumPl?: DeserializedType<T, 'Edm.String'> | null;
  taxInCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  taxInCostPriceRegulated: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxExchangeRateRep: DeserializedType<T, 'Edm.Decimal'>;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  taxationCodeAdjBr?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceExemptTaxAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  taxSalesOffsetLedgerDimensionBrValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isDeleted?: NoYes | null;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateSourceRegulateAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxInCostPriceRep: DeserializedType<T, 'Edm.Decimal'>;
  addressingPl?: DeserializedType<T, 'Edm.String'> | null;
  intracomVat?: NoYes | null;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  taxOffsetUseTaxLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  sourceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  vatOperationCodeRu?: DeserializedType<T, 'Edm.String'> | null;
  vatTaxAgentVendAccountRu?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  calculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxBaseAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  postingProfileRu?: DeserializedType<T, 'Edm.String'> | null;
  sourceExemptBaseAmountMstBr: DeserializedType<T, 'Edm.Decimal'>;
  exchRateSecond: DeserializedType<T, 'Edm.Decimal'>;
  gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  taxReductionPctBr: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateTaxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRateTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  unrealizedTax?: NoYes | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxTypeMx?: TaxTypeMx | null;
  sourceBaseAmountCurRaw: DeserializedType<T, 'Edm.Decimal'>;
  taxBaseAmountOrig: DeserializedType<T, 'Edm.Decimal'>;
  documentDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceOtherBaseAmountBr: DeserializedType<T, 'Edm.Decimal'>;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  sourceBaseAmountCurCalculated: DeserializedType<T, 'Edm.Decimal'>;
  taxReports?: NoYes | null;
  taxCodeCombinationId: DeserializedType<T, 'Edm.Int32'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  ledgerDimensionInValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  taxAutogenerated?: NoYes | null;
  taxationOriginBr?: FiTaxationOriginBr | null;
  negativeTax?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  taxOrigin?: TaxOrigin | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  taxValue: DeserializedType<T, 'Edm.Decimal'>;
  source?: TaxModuleType | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  taxDirection?: TaxDirection | null;
  taxBaseAmountRaw: DeserializedType<T, 'Edm.Decimal'>;
  headingRecId: DeserializedType<T, 'Edm.Int64'>;
  taxBaseQty: DeserializedType<T, 'Edm.Decimal'>;
  taxSubstitutionBr?: TaxSubstitutionEnumBr | null;
}
