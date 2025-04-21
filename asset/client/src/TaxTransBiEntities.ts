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
import type { TaxTransBiEntitiesApi } from './TaxTransBiEntitiesApi';
import { NoYes } from './NoYes';
import { TaxAccountingPostingAccountType } from './TaxAccountingPostingAccountType';
import { TaxPrintDetail } from './TaxPrintDetail';
import { TaxObligationCompany } from './TaxObligationCompany';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { TaxTypeMx } from './TaxTypeMx';
import { TaxOrigin } from './TaxOrigin';
import { TaxModuleType } from './TaxModuleType';
import { TaxDirection } from './TaxDirection';

/**
 * This class represents the entity "TaxTransBiEntities" of service "d365_metadata".
 */
export class TaxTransBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxTransBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransBiEntities.
   */
  static override _entityName = 'TaxTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransBiEntities entity.
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
   * Exempt Tax.
   * @nullable
   */
  declare exemptTax?: NoYes | null;
  /**
   * Unrealized Tax Ext.
   * @nullable
   */
  declare unrealizedTaxExt?: NoYes | null;
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
   * Is Over Under Payment.
   * @nullable
   */
  declare isOverUnderPayment?: NoYes | null;
  /**
   * Tax Book.
   */
  declare taxBook: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Base Amount Cur.
   */
  declare taxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Party Tax Id.
   */
  declare partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Tax Amount Cur.
   */
  declare sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Account Type.
   * @nullable
   */
  declare taxAccountType?: TaxAccountingPostingAccountType | null;
  /**
   * Tax In Cost Price Cur.
   */
  declare taxInCostPriceCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Realized Date.
   */
  declare realizedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Amount Cur.
   */
  declare taxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Origin Tax Trans Rec Id.
   */
  declare originTaxTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Euro Triangulation.
   * @nullable
   */
  declare euroTriangulation?: NoYes | null;
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
   * Print Code.
   * @nullable
   */
  declare printCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Book Section.
   */
  declare taxBookSection: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax In Cost Price Mst.
   */
  declare taxInCostPriceMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reverse Charge Applies Uk.
   * @nullable
   */
  declare reverseChargeAppliesUk?: NoYes | null;
  /**
   * Source Base Amount Cur.
   */
  declare sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Exempt Pct.
   */
  declare vatExemptPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Heading Table Id.
   */
  declare headingTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Rep.
   */
  declare taxAmountRep: DeserializedType<T, 'Edm.Decimal'>;
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
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postpone Vat.
   * @nullable
   */
  declare postponeVat?: NoYes | null;
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
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Trans Ref Rec Id.
   */
  declare taxTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Print Detail.
   * @nullable
   */
  declare taxPrintDetail?: TaxPrintDetail | null;
  /**
   * Tax Rep Counter.
   */
  declare taxRepCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax In Cost Price Rep.
   */
  declare taxInCostPriceRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intracom Vat.
   * @nullable
   */
  declare intracomVat?: NoYes | null;
  /**
   * Tax Obligation Company.
   * @nullable
   */
  declare taxObligationCompany?: TaxObligationCompany | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Period.
   * @nullable
   */
  declare taxPeriod?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Base Amount Rep.
   */
  declare taxBaseAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gsthst Tax Type Ca.
   * @nullable
   */
  declare gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  /**
   * Tax Jurisdiction Code.
   * @nullable
   */
  declare taxJurisdictionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Code.
   * @nullable
   */
  declare exemptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Base Amount Cur Regulated.
   */
  declare sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
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
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Regulate Amount Cur.
   */
  declare sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Autogenerated.
   * @nullable
   */
  declare taxAutogenerated?: NoYes | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate Diff Orig Rec Id.
   */
  declare exchRateDiffOrigRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source.
   * @nullable
   */
  declare source?: TaxModuleType | null;
  /**
   * Tax Direction.
   * @nullable
   */
  declare taxDirection?: TaxDirection | null;
  /**
   * Tax Base Qty.
   */
  declare taxBaseQty: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TaxTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  emptyTaxBaseForOutgoingTaxW?: NoYes | null;
  exemptTax?: NoYes | null;
  unrealizedTaxExt?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isvFeatureSetupName?: DeserializedType<T, 'Edm.String'> | null;
  isOverUnderPayment?: NoYes | null;
  taxBook: DeserializedType<T, 'Edm.Int64'>;
  taxBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  partyTaxId: DeserializedType<T, 'Edm.Int64'>;
  sourceTaxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  taxAccountType?: TaxAccountingPostingAccountType | null;
  taxInCostPriceCur: DeserializedType<T, 'Edm.Decimal'>;
  realizedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  originTaxTransRecId: DeserializedType<T, 'Edm.Int64'>;
  euroTriangulation?: NoYes | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isvFeatureSetupGuid: DeserializedType<T, 'Edm.Guid'>;
  taxBaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  printCode?: DeserializedType<T, 'Edm.String'> | null;
  taxBookSection: DeserializedType<T, 'Edm.Int64'>;
  taxInCostPriceMst: DeserializedType<T, 'Edm.Decimal'>;
  reverseChargeAppliesUk?: NoYes | null;
  sourceBaseAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  vatExemptPct: DeserializedType<T, 'Edm.Decimal'>;
  headingTableId: DeserializedType<T, 'Edm.Int32'>;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  taxId: DeserializedType<T, 'Edm.Int64'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  reverseChargeW?: NoYes | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  postponeVat?: NoYes | null;
  taxInCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  taxInCostPriceRegulated: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  taxTransRefRecId: DeserializedType<T, 'Edm.Int64'>;
  taxPrintDetail?: TaxPrintDetail | null;
  taxRepCounter: DeserializedType<T, 'Edm.Int32'>;
  taxInCostPriceRep: DeserializedType<T, 'Edm.Decimal'>;
  intracomVat?: NoYes | null;
  taxObligationCompany?: TaxObligationCompany | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  taxPeriod?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  sourceCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxBaseAmountRep: DeserializedType<T, 'Edm.Decimal'>;
  gsthstTaxTypeCa?: GsthstTaxTypeCa | null;
  taxJurisdictionCode?: DeserializedType<T, 'Edm.String'> | null;
  exemptCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceBaseAmountCurRegulated: DeserializedType<T, 'Edm.Decimal'>;
  unrealizedTax?: NoYes | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxTypeMx?: TaxTypeMx | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceRegulateAmountCur: DeserializedType<T, 'Edm.Decimal'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  taxAutogenerated?: NoYes | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  exchRateDiffOrigRecId: DeserializedType<T, 'Edm.Int64'>;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  reason?: DeserializedType<T, 'Edm.String'> | null;
  taxOrigin?: TaxOrigin | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  taxValue: DeserializedType<T, 'Edm.Decimal'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  source?: TaxModuleType | null;
  taxDirection?: TaxDirection | null;
  taxBaseQty: DeserializedType<T, 'Edm.Decimal'>;
}
