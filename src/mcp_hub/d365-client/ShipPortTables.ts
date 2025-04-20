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
import type { ShipPortTablesApi } from './ShipPortTablesApi';

/**
 * This class represents the entity "ShipPortTables" of service "d365_metadata".
 */
export class ShipPortTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ShipPortTablesType<T>
{
  /**
   * Technical entity name for ShipPortTables.
   */
  static override _entityName = 'ShipPortTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipPortTables entity.
   */
  static _keys = ['dataAreaId', 'PortId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Port Id.
   */
  declare portId: DeserializedType<T, 'Edm.String'>;
  /**
   * Port Description.
   * @nullable
   */
  declare portDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShipPortTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShipPortTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  portId: DeserializedType<T, 'Edm.String'>;
  portDescription?: DeserializedType<T, 'Edm.String'> | null;
}
