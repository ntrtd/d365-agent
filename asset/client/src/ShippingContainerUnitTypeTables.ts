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
import type { ShippingContainerUnitTypeTablesApi } from './ShippingContainerUnitTypeTablesApi';

/**
 * This class represents the entity "ShippingContainerUnitTypeTables" of service "d365_metadata".
 */
export class ShippingContainerUnitTypeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingContainerUnitTypeTablesType<T>
{
  /**
   * Technical entity name for ShippingContainerUnitTypeTables.
   */
  static override _entityName = 'ShippingContainerUnitTypeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingContainerUnitTypeTables entity.
   */
  static _keys = ['dataAreaId', 'UnitTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Type Id.
   */
  declare unitTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Type Description.
   * @nullable
   */
  declare unitTypeDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShippingContainerUnitTypeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingContainerUnitTypeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  unitTypeId: DeserializedType<T, 'Edm.String'>;
  unitTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
}
