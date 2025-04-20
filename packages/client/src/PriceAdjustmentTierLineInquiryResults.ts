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
import type { PriceAdjustmentTierLineInquiryResultsApi } from './PriceAdjustmentTierLineInquiryResultsApi';

/**
 * This class represents the entity "PriceAdjustmentTierLineInquiryResults" of service "d365_metadata".
 */
export class PriceAdjustmentTierLineInquiryResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceAdjustmentTierLineInquiryResultsType<T>
{
  /**
   * Technical entity name for PriceAdjustmentTierLineInquiryResults.
   */
  static override _entityName = 'PriceAdjustmentTierLineInquiryResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PriceAdjustmentTierLineInquiryResults entity.
   */
  static _keys = ['dataAreaId', 'OfferId', 'QtyLowest'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qty Lowest.
   */
  declare qtyLowest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Disc Pct.
   */
  declare priceDiscPct: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PriceAdjustmentTierLineInquiryResultsApi<T>) {
    super(_entityApi);
  }
}

export interface PriceAdjustmentTierLineInquiryResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  qtyLowest: DeserializedType<T, 'Edm.Decimal'>;
  priceDiscPct: DeserializedType<T, 'Edm.Decimal'>;
}
