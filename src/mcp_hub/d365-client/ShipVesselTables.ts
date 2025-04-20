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
import type { ShipVesselTablesApi } from './ShipVesselTablesApi';

/**
 * This class represents the entity "ShipVesselTables" of service "d365_metadata".
 */
export class ShipVesselTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ShipVesselTablesType<T>
{
  /**
   * Technical entity name for ShipVesselTables.
   */
  static override _entityName = 'ShipVesselTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipVesselTables entity.
   */
  static _keys = ['dataAreaId', 'VesselId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vessel Id.
   */
  declare vesselId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vessel Description.
   * @nullable
   */
  declare vesselDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShipVesselTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShipVesselTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vesselId: DeserializedType<T, 'Edm.String'>;
  vesselDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
}
