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
import type { PublishedRequestForQuotationLinesApi } from './PublishedRequestForQuotationLinesApi';

/**
 * This class represents the entity "PublishedRequestForQuotationLines" of service "d365_metadata".
 */
export class PublishedRequestForQuotationLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PublishedRequestForQuotationLinesType<T>
{
  /**
   * Technical entity name for PublishedRequestForQuotationLines.
   */
  static override _entityName = 'PublishedRequestForQuotationLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PublishedRequestForQuotationLines entity.
   */
  static _keys = ['dataAreaId', 'PublishedRFQCaseNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Published Rfq Case Number.
   */
  declare publishedRfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Quantity.
   */
  declare purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Delivery Date.
   */
  declare rfqDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Category Name.
   * @nullable
   */
  declare procurementCategoryName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PublishedRequestForQuotationLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PublishedRequestForQuotationLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  publishedRfqCaseNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  rfqDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  procurementCategoryName?: DeserializedType<T, 'Edm.String'> | null;
}
