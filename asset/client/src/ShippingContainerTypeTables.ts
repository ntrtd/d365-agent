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
import type { ShippingContainerTypeTablesApi } from './ShippingContainerTypeTablesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ShippingContainerTypeTables" of service "d365_metadata".
 */
export class ShippingContainerTypeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingContainerTypeTablesType<T>
{
  /**
   * Technical entity name for ShippingContainerTypeTables.
   */
  static override _entityName = 'ShippingContainerTypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingContainerTypeTables entity.
   */
  static _keys = ['dataAreaId', 'ShippingContainerTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Container Type Id.
   */
  declare shippingContainerTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Container Type Description.
   * @nullable
   */
  declare shippingContainerTypeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Maximum Shipping Container Volume.
   */
  declare maximumShippingContainerVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Shipping Container Weight.
   */
  declare maximumShippingContainerWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Shipping Container Returnable.
   * @nullable
   */
  declare isShippingContainerReturnable?: NoYes | null;

  constructor(_entityApi: ShippingContainerTypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingContainerTypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shippingContainerTypeId: DeserializedType<T, 'Edm.String'>;
  shippingContainerTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  maximumShippingContainerVolume: DeserializedType<T, 'Edm.Decimal'>;
  maximumShippingContainerWeight: DeserializedType<T, 'Edm.Decimal'>;
  isShippingContainerReturnable?: NoYes | null;
}
