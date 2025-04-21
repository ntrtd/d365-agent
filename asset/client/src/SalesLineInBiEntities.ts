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
import type { SalesLineInBiEntitiesApi } from './SalesLineInBiEntitiesApi';
import { NoYes } from './NoYes';
import { DirectSettlementIn } from './DirectSettlementIn';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { ExciseTypeIn } from './ExciseTypeIn';
import { ItcCategoryIn } from './ItcCategoryIn';

/**
 * This class represents the entity "SalesLineINBiEntities" of service "d365_metadata".
 */
export class SalesLineInBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesLineInBiEntitiesType<T>
{
  /**
   * Technical entity name for SalesLineInBiEntities.
   */
  static override _entityName = 'SalesLineINBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesLineInBiEntities entity.
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
   * Tax As Per Original Invoice.
   * @nullable
   */
  declare taxAsPerOriginalInvoice?: NoYes | null;
  /**
   * Tax As Per Original Invoice In.
   * @nullable
   */
  declare taxAsPerOriginalInvoiceIn?: NoYes | null;
  /**
   * Del Tax As Per Original Invoice In.
   * @nullable
   */
  declare delTaxAsPerOriginalInvoiceIn?: NoYes | null;
  /**
   * Customer Location.
   */
  declare customerLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Service Code Table In.
   */
  declare serviceCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Information.
   */
  declare taxInformation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customs Max Retail Price.
   */
  declare customsMaxRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Direct Settlement In.
   * @nullable
   */
  declare directSettlementIn?: DirectSettlementIn | null;
  /**
   * Exempt.
   * @nullable
   */
  declare exempt?: NoYes | null;
  /**
   * Maximum Retail Price.
   */
  declare maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Return Reason Code Id.
   * @nullable
   */
  declare returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Order.
   * @nullable
   */
  declare exportOrder?: NoYes | null;
  /**
   * Tax Withhold Nature Of Remittance.
   */
  declare taxWithholdNatureOfRemittance: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Line Num.
   */
  declare taxWithholdLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Retail Price In.
   */
  declare maximumRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Excise Record Type In.
   * @nullable
   */
  declare exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  /**
   * Excise Type In.
   * @nullable
   */
  declare exciseTypeIn?: ExciseTypeIn | null;
  /**
   * Customs Tariff Code Table In.
   */
  declare customsTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Line Num In.
   */
  declare taxWithholdLineNumIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Location In.
   */
  declare companyLocationIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Invent Vat Commodity Code In.
   */
  declare taxInventVatCommodityCodeIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Itc Category.
   * @nullable
   */
  declare itcCategory?: ItcCategoryIn | null;
  /**
   * Incl Tax.
   * @nullable
   */
  declare inclTax?: NoYes | null;
  /**
   * Export Order In.
   * @nullable
   */
  declare exportOrderIn?: NoYes | null;
  /**
   * Excise Tariff Codes In.
   */
  declare exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sales Tax Form Types In.
   */
  declare salesTaxFormTypesIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Voucher In.
   * @nullable
   */
  declare taxWithholdVoucherIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Action.
   * @nullable
   */
  declare returnAction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tds Group.
   * @nullable
   */
  declare tdsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tcs Group In.
   * @nullable
   */
  declare tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hsn Code Table.
   */
  declare hsnCodeTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Data Area Id Copy 1.
   * @nullable
   */
  declare dataAreaIdCopy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Scrap.
   * @nullable
   */
  declare isScrap?: NoYes | null;
  /**
   * Credit Note Date In.
   */
  declare creditNoteDateIn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Export Order Copy 1.
   * @nullable
   */
  declare exportOrderCopy1?: NoYes | null;
  /**
   * Service Accounting Code Table.
   */
  declare serviceAccountingCodeTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Withhold Country Region To Remittance.
   */
  declare taxWithholdCountryRegionToRemittance: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Customer Tax Information.
   */
  declare customerTaxInformation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Credit Note Date.
   */
  declare creditNoteDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tcs Group.
   * @nullable
   */
  declare tcsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assessable Value In.
   */
  declare assessableValueIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assessable Value Transaction Currency.
   */
  declare assessableValueTransactionCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tds Group In.
   * @nullable
   */
  declare tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customs Max Retail Price In.
   */
  declare customsMaxRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignment In.
   * @nullable
   */
  declare consignmentIn?: NoYes | null;
  /**
   * Tax Withhold Acknowledgement Number.
   * @nullable
   */
  declare taxWithholdAcknowledgementNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Withhold Voucher.
   * @nullable
   */
  declare taxWithholdVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dsa In.
   * @nullable
   */
  declare dsaIn?: NoYes | null;

  constructor(_entityApi: SalesLineInBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesLineInBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxAsPerOriginalInvoice?: NoYes | null;
  taxAsPerOriginalInvoiceIn?: NoYes | null;
  delTaxAsPerOriginalInvoiceIn?: NoYes | null;
  customerLocation: DeserializedType<T, 'Edm.Int64'>;
  serviceCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  taxInformation: DeserializedType<T, 'Edm.Int64'>;
  customsMaxRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  directSettlementIn?: DirectSettlementIn | null;
  exempt?: NoYes | null;
  maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  exportOrder?: NoYes | null;
  taxWithholdNatureOfRemittance: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdLineNum: DeserializedType<T, 'Edm.Decimal'>;
  maximumRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  exciseRecordTypeIn?: ExciseRecordTypeIn | null;
  exciseTypeIn?: ExciseTypeIn | null;
  customsTariffCodeTableIn: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdLineNumIn: DeserializedType<T, 'Edm.Decimal'>;
  companyLocationIn: DeserializedType<T, 'Edm.Int64'>;
  taxInventVatCommodityCodeIn: DeserializedType<T, 'Edm.Int64'>;
  itcCategory?: ItcCategoryIn | null;
  inclTax?: NoYes | null;
  exportOrderIn?: NoYes | null;
  exciseTariffCodesIn: DeserializedType<T, 'Edm.Int64'>;
  salesTaxFormTypesIn: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdVoucherIn?: DeserializedType<T, 'Edm.String'> | null;
  returnAction?: DeserializedType<T, 'Edm.String'> | null;
  tdsGroup?: DeserializedType<T, 'Edm.String'> | null;
  tcsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  hsnCodeTable: DeserializedType<T, 'Edm.Int64'>;
  dataAreaIdCopy1?: DeserializedType<T, 'Edm.String'> | null;
  isScrap?: NoYes | null;
  creditNoteDateIn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exportOrderCopy1?: NoYes | null;
  serviceAccountingCodeTable: DeserializedType<T, 'Edm.Int64'>;
  taxWithholdCountryRegionToRemittance: DeserializedType<T, 'Edm.Int64'>;
  customerTaxInformation: DeserializedType<T, 'Edm.Int64'>;
  creditNoteDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  tcsGroup?: DeserializedType<T, 'Edm.String'> | null;
  assessableValueIn: DeserializedType<T, 'Edm.Decimal'>;
  assessableValueTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  tdsGroupIn?: DeserializedType<T, 'Edm.String'> | null;
  customsMaxRetailPriceIn: DeserializedType<T, 'Edm.Decimal'>;
  consignmentIn?: NoYes | null;
  taxWithholdAcknowledgementNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdVoucher?: DeserializedType<T, 'Edm.String'> | null;
  dsaIn?: NoYes | null;
}
