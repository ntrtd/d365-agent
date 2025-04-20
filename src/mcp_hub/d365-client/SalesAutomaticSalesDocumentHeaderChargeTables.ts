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
import type { SalesAutomaticSalesDocumentHeaderChargeTablesApi } from './SalesAutomaticSalesDocumentHeaderChargeTablesApi';
import { NoYes } from './NoYes';
import { GupGroupAll } from './GupGroupAll';

/**
 * This class represents the entity "SalesAutomaticSalesDocumentHeaderChargeTables" of service "d365_metadata".
 */
export class SalesAutomaticSalesDocumentHeaderChargeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAutomaticSalesDocumentHeaderChargeTablesType<T>
{
  /**
   * Technical entity name for SalesAutomaticSalesDocumentHeaderChargeTables.
   */
  static override _entityName = 'SalesAutomaticSalesDocumentHeaderChargeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAutomaticSalesDocumentHeaderChargeTables entity.
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
   * Header 14.
   * @nullable
   */
  declare header14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component Code Name.
   * @nullable
   */
  declare priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 10.
   * @nullable
   */
  declare header10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Exclusion.
   * @nullable
   */
  declare headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Attribute Group Name Header.
   * @nullable
   */
  declare priceAttributeGroupNameHeader?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Header 9.
   * @nullable
   */
  declare header9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Advanced Charges Delivery Prorate.
   * @nullable
   */
  declare retailAdvancedChargesDeliveryProrate?: NoYes | null;
  /**
   * Header 8.
   * @nullable
   */
  declare header8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Attribute Group Type Header.
   * @nullable
   */
  declare priceAttributeGroupTypeHeader?: GupGroupAll | null;
  /**
   * Header 13.
   * @nullable
   */
  declare header13?: DeserializedType<T, 'Edm.String'> | null;
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
   * Header 12.
   * @nullable
   */
  declare header12?: DeserializedType<T, 'Edm.String'> | null;
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
   * Header 15.
   * @nullable
   */
  declare header15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header 11.
   * @nullable
   */
  declare header11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combination Header Structure.
   * @nullable
   */
  declare combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesAutomaticSalesDocumentHeaderChargeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAutomaticSalesDocumentHeaderChargeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  header14?: DeserializedType<T, 'Edm.String'> | null;
  priceComponentCodeName?: DeserializedType<T, 'Edm.String'> | null;
  header10?: DeserializedType<T, 'Edm.String'> | null;
  headerExclusion?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupNameHeader?: DeserializedType<T, 'Edm.String'> | null;
  header9?: DeserializedType<T, 'Edm.String'> | null;
  retailAdvancedChargesDeliveryProrate?: NoYes | null;
  header8?: DeserializedType<T, 'Edm.String'> | null;
  priceAttributeGroupTypeHeader?: GupGroupAll | null;
  header13?: DeserializedType<T, 'Edm.String'> | null;
  header1?: DeserializedType<T, 'Edm.String'> | null;
  header3?: DeserializedType<T, 'Edm.String'> | null;
  header2?: DeserializedType<T, 'Edm.String'> | null;
  header5?: DeserializedType<T, 'Edm.String'> | null;
  header12?: DeserializedType<T, 'Edm.String'> | null;
  header4?: DeserializedType<T, 'Edm.String'> | null;
  header7?: DeserializedType<T, 'Edm.String'> | null;
  header6?: DeserializedType<T, 'Edm.String'> | null;
  header15?: DeserializedType<T, 'Edm.String'> | null;
  header11?: DeserializedType<T, 'Edm.String'> | null;
  combinationHeaderStructure?: DeserializedType<T, 'Edm.String'> | null;
}
