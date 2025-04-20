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
import type { RetailMultibuyDiscountLinesApi } from './RetailMultibuyDiscountLinesApi';

/**
 * This class represents the entity "RetailMultibuyDiscountLines" of service "d365_metadata".
 */
export class RetailMultibuyDiscountLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailMultibuyDiscountLinesType<T>
{
  /**
   * Technical entity name for RetailMultibuyDiscountLines.
   */
  static override _entityName = 'RetailMultibuyDiscountLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailMultibuyDiscountLines entity.
   */
  static _keys = ['dataAreaId', 'MultibuyId', 'QtyLowest'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Multibuy Id.
   */
  declare multibuyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qty Lowest.
   */
  declare qtyLowest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Disc Pct.
   */
  declare priceDiscPct: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailMultibuyDiscountLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailMultibuyDiscountLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  multibuyId: DeserializedType<T, 'Edm.String'>;
  qtyLowest: DeserializedType<T, 'Edm.Decimal'>;
  priceDiscPct: DeserializedType<T, 'Edm.Decimal'>;
}
