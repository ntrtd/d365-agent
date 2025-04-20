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
import type { ShippingContainerRefrigerationTypeTablesApi } from './ShippingContainerRefrigerationTypeTablesApi';

/**
 * This class represents the entity "ShippingContainerRefrigerationTypeTables" of service "d365_metadata".
 */
export class ShippingContainerRefrigerationTypeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingContainerRefrigerationTypeTablesType<T>
{
  /**
   * Technical entity name for ShippingContainerRefrigerationTypeTables.
   */
  static override _entityName = 'ShippingContainerRefrigerationTypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingContainerRefrigerationTypeTables entity.
   */
  static _keys = ['dataAreaId', 'RefrigerationTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Refrigeration Type Id.
   */
  declare refrigerationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Refrigeration Type Description.
   * @nullable
   */
  declare refrigerationTypeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ShippingContainerRefrigerationTypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingContainerRefrigerationTypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  refrigerationTypeId: DeserializedType<T, 'Edm.String'>;
  refrigerationTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
}
