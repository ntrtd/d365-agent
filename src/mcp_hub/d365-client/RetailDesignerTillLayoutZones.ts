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
import type { RetailDesignerTillLayoutZonesApi } from './RetailDesignerTillLayoutZonesApi';
import { RetailZoneType } from './RetailZoneType';

/**
 * This class represents the entity "RetailDesignerTillLayoutZones" of service "d365_metadata".
 */
export class RetailDesignerTillLayoutZones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDesignerTillLayoutZonesType<T>
{
  /**
   * Technical entity name for RetailDesignerTillLayoutZones.
   */
  static override _entityName = 'RetailDesignerTillLayoutZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDesignerTillLayoutZones entity.
   */
  static _keys = ['ZoneId', 'ZoneName'];
  /**
   * Zone Id.
   */
  declare zoneId: DeserializedType<T, 'Edm.String'>;
  /**
   * Zone Name.
   */
  declare zoneName: DeserializedType<T, 'Edm.String'>;
  /**
   * Ax Rec Id.
   */
  declare axRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Zone Type.
   * @nullable
   */
  declare zoneType?: RetailZoneType | null;
  /**
   * Device Type.
   */
  declare deviceType: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailDesignerTillLayoutZonesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDesignerTillLayoutZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  zoneId: DeserializedType<T, 'Edm.String'>;
  zoneName: DeserializedType<T, 'Edm.String'>;
  axRecId: DeserializedType<T, 'Edm.Int64'>;
  zoneType?: RetailZoneType | null;
  deviceType: DeserializedType<T, 'Edm.Int32'>;
}
