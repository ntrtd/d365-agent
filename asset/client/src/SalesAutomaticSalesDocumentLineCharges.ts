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
import type { SalesAutomaticSalesDocumentLineChargesApi } from './SalesAutomaticSalesDocumentLineChargesApi';
import { GupGroupAll } from './GupGroupAll';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
import { GupPricingRuleExclusionType } from './GupPricingRuleExclusionType';

/**
 * This class represents the entity "SalesAutomaticSalesDocumentLineCharges" of service "d365_metadata".
 */
export class SalesAutomaticSalesDocumentLineCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAutomaticSalesDocumentLineChargesType<T>
{
  /**
   * Technical entity name for SalesAutomaticSalesDocumentLineCharges.
   */
  static override _entityName = 'SalesAutomaticSalesDocumentLineCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAutomaticSalesDocumentLineCharges entity.
   */
  static _keys = ['dataAreaId', 'Description', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Document Currency Code.
   * @nullable
   */
  declare salesDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Attribute Group Type Line.
   * @nullable
   */
  declare priceAttributeGroupTypeLine?: GupGroupAll | null;
  /**
   * Line 11.
   * @nullable
   */
  declare line11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Invoice Processing Keep Charge.
   * @nullable
   */
  declare willInvoiceProcessingKeepCharge?: NoYes | null;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Accounting Currency Code.
   * @nullable
   */
  declare chargeAccountingCurrencyCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Combination Line Structure.
   * @nullable
   */
  declare combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line 13.
   * @nullable
   */
  declare line13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 15.
   * @nullable
   */
  declare line15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Charge Code.
   * @nullable
   */
  declare salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Category.
   * @nullable
   */
  declare chargeCategory?: MarkupCategory | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line 7.
   * @nullable
   */
  declare line7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 6.
   * @nullable
   */
  declare line6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 5.
   * @nullable
   */
  declare line5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 4.
   * @nullable
   */
  declare line4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 3.
   * @nullable
   */
  declare line3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 2.
   * @nullable
   */
  declare line2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 1.
   * @nullable
   */
  declare line1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Attribute Group Name Line.
   * @nullable
   */
  declare priceAttributeGroupNameLine?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line 9.
   * @nullable
   */
  declare line9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 8.
   * @nullable
   */
  declare line8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Exclusion Type.
   * @nullable
   */
  declare lineExclusionType?: GupPricingRuleExclusionType | null;
  /**
   * Line 10.
   * @nullable
   */
  declare line10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Exclusion.
   * @nullable
   */
  declare lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 12.
   * @nullable
   */
  declare line12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line 14.
   * @nullable
   */
  declare line14?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesAutomaticSalesDocumentLineChargesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAutomaticSalesDocumentLineChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  salesDocumentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  value: DeserializedType<T, 'Edm.Decimal'>;
  priceAttributeGroupTypeLine?: GupGroupAll | null;
  line11?: DeserializedType<T, 'Edm.String'> | null;
  willInvoiceProcessingKeepCharge?: NoYes | null;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeAccountingCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  line13?: DeserializedType<T, 'Edm.String'> | null;
  line15?: DeserializedType<T, 'Edm.String'> | null;
  salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeCategory?: MarkupCategory | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupNameLine?: DeserializedType<T, 'Edm.String'> | null;
  line9?: DeserializedType<T, 'Edm.String'> | null;
  line8?: DeserializedType<T, 'Edm.String'> | null;
  lineExclusionType?: GupPricingRuleExclusionType | null;
  line10?: DeserializedType<T, 'Edm.String'> | null;
  lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  line12?: DeserializedType<T, 'Edm.String'> | null;
  line14?: DeserializedType<T, 'Edm.String'> | null;
}
