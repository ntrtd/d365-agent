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
import type { MultiSourceVendorOrderQtySettingsApi } from './MultiSourceVendorOrderQtySettingsApi';

/**
 * This class represents the entity "MultiSourceVendorOrderQtySettings" of service "d365_metadata".
 */
export class MultiSourceVendorOrderQtySettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MultiSourceVendorOrderQtySettingsType<T>
{
  /**
   * Technical entity name for MultiSourceVendorOrderQtySettings.
   */
  static override _entityName = 'MultiSourceVendorOrderQtySettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MultiSourceVendorOrderQtySettings entity.
   */
  static _keys = ['dataAreaId', 'VendorAccountNumber', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum Order Quantity.
   */
  declare minimumOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: MultiSourceVendorOrderQtySettingsApi<T>) {
    super(_entityApi);
  }
}

export interface MultiSourceVendorOrderQtySettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  minimumOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
}
