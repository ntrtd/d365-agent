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
import type { RetailDiscountThresholdTiersInquiryResultsApi } from './RetailDiscountThresholdTiersInquiryResultsApi';
import { RetailThresholdDiscountMethod } from './RetailThresholdDiscountMethod';

/**
 * This class represents the entity "RetailDiscountThresholdTiersInquiryResults" of service "d365_metadata".
 */
export class RetailDiscountThresholdTiersInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDiscountThresholdTiersInquiryResultsType<T>
{
  /**
   * Technical entity name for RetailDiscountThresholdTiersInquiryResults.
   */
  static override _entityName = 'RetailDiscountThresholdTiersInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDiscountThresholdTiersInquiryResults entity.
   */
  static _keys = ['dataAreaId', 'OfferId', 'AmountThreshold'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount Threshold.
   */
  declare amountThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Value.
   */
  declare discountValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Discount Method.
   * @nullable
   */
  declare discountMethod?: RetailThresholdDiscountMethod | null;

  constructor(_entityApi: RetailDiscountThresholdTiersInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDiscountThresholdTiersInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  amountThreshold: DeserializedType<T, 'Edm.Decimal'>;
  discountValue: DeserializedType<T, 'Edm.Decimal'>;
  discountMethod?: RetailThresholdDiscountMethod | null;
}
