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
import type { RetailTillLayoutZonesApi } from './RetailTillLayoutZonesApi';
import { RetailZoneType } from './RetailZoneType';
import { RetailLayoutType } from './RetailLayoutType';
import { DeviceTypes, DeviceTypesType } from './DeviceTypes';
import {
  RetailTillLayoutButtonGridZones,
  RetailTillLayoutButtonGridZonesType
} from './RetailTillLayoutButtonGridZones';
import {
  RetailTillLayoutImageZones,
  RetailTillLayoutImageZonesType
} from './RetailTillLayoutImageZones';
import {
  RetailTillLayoutReportZones,
  RetailTillLayoutReportZonesType
} from './RetailTillLayoutReportZones';

/**
 * This class represents the entity "RetailTillLayoutZones" of service "d365_metadata".
 */
export class RetailTillLayoutZones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTillLayoutZonesType<T>
{
  /**
   * Technical entity name for RetailTillLayoutZones.
   */
  static override _entityName = 'RetailTillLayoutZones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTillLayoutZones entity.
   */
  static _keys = ['DeviceType', 'ZoneType', 'ZoneId'];
  /**
   * Device Type.
   */
  declare deviceType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Zone Type.
   * @nullable
   */
  declare zoneType?: RetailZoneType | null;
  /**
   * Zone Id.
   */
  declare zoneId: DeserializedType<T, 'Edm.String'>;
  /**
   * Zone Name.
   * @nullable
   */
  declare zoneName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Layout Type.
   * @nullable
   */
  declare layoutType?: RetailLayoutType | null;
  /**
   * One-to-one navigation property to the {@link DeviceTypes} entity.
   */
  declare deviceTypes?: DeviceTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutButtonGridZones} entity.
   */
  declare retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZones<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutImageZones} entity.
   */
  declare retailTillLayoutImageZone: RetailTillLayoutImageZones<T>[];
  /**
   * One-to-many navigation property to the {@link RetailTillLayoutReportZones} entity.
   */
  declare retailTillLayoutReportZone: RetailTillLayoutReportZones<T>[];

  constructor(_entityApi: RetailTillLayoutZonesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTillLayoutZonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deviceType: DeserializedType<T, 'Edm.Int32'>;
  zoneType?: RetailZoneType | null;
  zoneId: DeserializedType<T, 'Edm.String'>;
  zoneName?: DeserializedType<T, 'Edm.String'> | null;
  layoutType?: RetailLayoutType | null;
  deviceTypes?: DeviceTypesType<T> | null;
  retailTillLayoutButtonGridZone: RetailTillLayoutButtonGridZonesType<T>[];
  retailTillLayoutImageZone: RetailTillLayoutImageZonesType<T>[];
  retailTillLayoutReportZone: RetailTillLayoutReportZonesType<T>[];
}
