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
import type { FreeItemDiscountTiersInquiryResultsApi } from './FreeItemDiscountTiersInquiryResultsApi';

/**
 * This class represents the entity "FreeItemDiscountTiersInquiryResults" of service "d365_metadata".
 */
export class FreeItemDiscountTiersInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FreeItemDiscountTiersInquiryResultsType<T>
{
  /**
   * Technical entity name for FreeItemDiscountTiersInquiryResults.
   */
  static override _entityName = 'FreeItemDiscountTiersInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FreeItemDiscountTiersInquiryResults entity.
   */
  static _keys = ['dataAreaId', 'FreeItemId', 'QtyOrAmountThreshold'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Free Item Id.
   */
  declare freeItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qty Or Amount Threshold.
   */
  declare qtyOrAmountThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Free Item Quantity.
   */
  declare freeItemQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: FreeItemDiscountTiersInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface FreeItemDiscountTiersInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  freeItemId: DeserializedType<T, 'Edm.String'>;
  qtyOrAmountThreshold: DeserializedType<T, 'Edm.Decimal'>;
  freeItemQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
