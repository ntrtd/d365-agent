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
import type { RetailHardwareStationsApi } from './RetailHardwareStationsApi';
import {
  RetailStoreHardwareStations,
  RetailStoreHardwareStationsType
} from './RetailStoreHardwareStations';

/**
 * This class represents the entity "RetailHardwareStations" of service "d365_metadata".
 */
export class RetailHardwareStations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailHardwareStationsType<T>
{
  /**
   * Technical entity name for RetailHardwareStations.
   */
  static override _entityName = 'RetailHardwareStations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailHardwareStations entity.
   */
  static _keys = ['HardwareStationId'];
  /**
   * Hardware Station Id.
   */
  declare hardwareStationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Merged Self Service Package Reference.
   */
  declare mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Self Service Package Name.
   * @nullable
   */
  declare selfServicePackageName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hardware Profile Id.
   * @nullable
   */
  declare hardwareProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hardware Station Port Number.
   */
  declare hardwareStationPortNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hardware Station Name.
   * @nullable
   */
  declare hardwareStationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailStoreHardwareStations} entity.
   */
  declare retailStoreHardwareStation: RetailStoreHardwareStations<T>[];

  constructor(_entityApi: RetailHardwareStationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailHardwareStationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hardwareStationId: DeserializedType<T, 'Edm.String'>;
  mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  selfServicePackageName?: DeserializedType<T, 'Edm.String'> | null;
  hardwareProfileId?: DeserializedType<T, 'Edm.String'> | null;
  hardwareStationPortNumber: DeserializedType<T, 'Edm.Int32'>;
  hardwareStationName?: DeserializedType<T, 'Edm.String'> | null;
  retailStoreHardwareStation: RetailStoreHardwareStationsType<T>[];
}
