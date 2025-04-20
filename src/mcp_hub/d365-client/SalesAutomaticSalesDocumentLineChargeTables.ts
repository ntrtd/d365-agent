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
import type { SalesAutomaticSalesDocumentLineChargeTablesApi } from './SalesAutomaticSalesDocumentLineChargeTablesApi';
import { GupPricingRuleExclusionType } from './GupPricingRuleExclusionType';
import { GupAutoChargeConcurrency } from './GupAutoChargeConcurrency';

/**
 * This class represents the entity "SalesAutomaticSalesDocumentLineChargeTables" of service "d365_metadata".
 */
export class SalesAutomaticSalesDocumentLineChargeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAutomaticSalesDocumentLineChargeTablesType<T>
{
  /**
   * Technical entity name for SalesAutomaticSalesDocumentLineChargeTables.
   */
  static override _entityName = 'SalesAutomaticSalesDocumentLineChargeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAutomaticSalesDocumentLineChargeTables entity.
   */
  static _keys = ['dataAreaId', 'Description'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Exclusion.
   * @nullable
   */
  declare lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Combination.
   * @nullable
   */
  declare priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combination Header Structure.
   * @nullable
   */
  declare combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
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
   * Line Exclusion Type.
   * @nullable
   */
  declare lineExclusionType?: GupPricingRuleExclusionType | null;
  /**
   * Header 1.
   * @nullable
   */
  declare header1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 3.
   * @nullable
   */
  declare header3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 2.
   * @nullable
   */
  declare header2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 5.
   * @nullable
   */
  declare header5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 4.
   * @nullable
   */
  declare header4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 7.
   * @nullable
   */
  declare header7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 6.
   * @nullable
   */
  declare header6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Charges Concurrency Mode.
   * @nullable
   */
  declare autoChargesConcurrencyMode?: GupAutoChargeConcurrency | null;
  /**
   * Price Component Combination Code Name.
   * @nullable
   */
  declare priceComponentCombinationCodeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Combination Line Structure.
   * @nullable
   */
  declare combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Exclusion.
   * @nullable
   */
  declare headerExclusion?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesAutomaticSalesDocumentLineChargeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAutomaticSalesDocumentLineChargeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  lineExclusion?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCombination?: DeserializedType<T, 'Edm.String'> | null;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
  line7?: DeserializedType<T, 'Edm.String'> | null;
  line6?: DeserializedType<T, 'Edm.String'> | null;
  line5?: DeserializedType<T, 'Edm.String'> | null;
  line4?: DeserializedType<T, 'Edm.String'> | null;
  line3?: DeserializedType<T, 'Edm.String'> | null;
  line2?: DeserializedType<T, 'Edm.String'> | null;
  line1?: DeserializedType<T, 'Edm.String'> | null;
  lineExclusionType?: GupPricingRuleExclusionType | null;
  header1?: DeserializedType<T, 'Edm.String'> | null;
  header3?: DeserializedType<T, 'Edm.String'> | null;
  header2?: DeserializedType<T, 'Edm.String'> | null;
  header5?: DeserializedType<T, 'Edm.String'> | null;
  header4?: DeserializedType<T, 'Edm.String'> | null;
  header7?: DeserializedType<T, 'Edm.String'> | null;
  header6?: DeserializedType<T, 'Edm.String'> | null;
  autoChargesConcurrencyMode?: GupAutoChargeConcurrency | null;
  priceComponentCombinationCodeName?: DeserializedType<T, 'Edm.String'> | null;
  combinationLineStructure?: DeserializedType<T, 'Edm.String'> | null;
  headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
}
