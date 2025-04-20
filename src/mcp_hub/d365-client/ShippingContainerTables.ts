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
import type { ShippingContainerTablesApi } from './ShippingContainerTablesApi';

/**
 * This class represents the entity "ShippingContainerTables" of service "d365_metadata".
 */
export class ShippingContainerTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingContainerTablesType<T>
{
  /**
   * Technical entity name for ShippingContainerTables.
   */
  static override _entityName = 'ShippingContainerTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingContainerTables entity.
   */
  static _keys = ['dataAreaId', 'ShippingContainerId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Container Id.
   */
  declare shippingContainerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Container Type Id.
   * @nullable
   */
  declare shippingContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShippingContainerTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingContainerTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shippingContainerId: DeserializedType<T, 'Edm.String'>;
  shippingContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;
}
