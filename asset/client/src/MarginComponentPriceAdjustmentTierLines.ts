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
import type { MarginComponentPriceAdjustmentTierLinesApi } from './MarginComponentPriceAdjustmentTierLinesApi';

/**
 * This class represents the entity "MarginComponentPriceAdjustmentTierLines" of service "d365_metadata".
 */
export class MarginComponentPriceAdjustmentTierLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MarginComponentPriceAdjustmentTierLinesType<T>
{
  /**
   * Technical entity name for MarginComponentPriceAdjustmentTierLines.
   */
  static override _entityName = 'MarginComponentPriceAdjustmentTierLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MarginComponentPriceAdjustmentTierLines entity.
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

  constructor(_entityApi: MarginComponentPriceAdjustmentTierLinesApi<T>) {
    super(_entityApi);
  }
}

export interface MarginComponentPriceAdjustmentTierLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  qtyLowest: DeserializedType<T, 'Edm.Decimal'>;
  priceDiscPct: DeserializedType<T, 'Edm.Decimal'>;
}
