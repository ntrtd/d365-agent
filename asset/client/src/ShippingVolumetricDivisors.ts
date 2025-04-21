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
import type { ShippingVolumetricDivisorsApi } from './ShippingVolumetricDivisorsApi';

/**
 * This class represents the entity "ShippingVolumetricDivisors" of service "d365_metadata".
 */
export class ShippingVolumetricDivisors<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingVolumetricDivisorsType<T>
{
  /**
   * Technical entity name for ShippingVolumetricDivisors.
   */
  static override _entityName = 'ShippingVolumetricDivisors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingVolumetricDivisors entity.
   */
  static _keys = [
    'dataAreaId',
    'ShippingVendorAccountNumber',
    'LandedCostTypeCode',
    'FromShippingPortCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Vendor Account Number.
   */
  declare shippingVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Landed Cost Type Code.
   */
  declare landedCostTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * From Shipping Port Code.
   */
  declare fromShippingPortCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Volumetric Divisor.
   */
  declare volumetricDivisor: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ShippingVolumetricDivisorsApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingVolumetricDivisorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shippingVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  landedCostTypeCode: DeserializedType<T, 'Edm.String'>;
  fromShippingPortCode: DeserializedType<T, 'Edm.String'>;
  volumetricDivisor: DeserializedType<T, 'Edm.Decimal'>;
}
