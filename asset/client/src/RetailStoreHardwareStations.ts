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
import type { RetailStoreHardwareStationsApi } from './RetailStoreHardwareStationsApi';
import { RetailHardwareStationEnumType } from './RetailHardwareStationEnumType';
import { RetailStores, RetailStoresType } from './RetailStores';
import {
  RetailHardwareStations,
  RetailHardwareStationsType
} from './RetailHardwareStations';

/**
 * This class represents the entity "RetailStoreHardwareStations" of service "d365_metadata".
 */
export class RetailStoreHardwareStations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreHardwareStationsType<T>
{
  /**
   * Technical entity name for RetailStoreHardwareStations.
   */
  static override _entityName = 'RetailStoreHardwareStations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreHardwareStations entity.
   */
  static _keys = [
    'StoreNumber',
    'EftTerminalId',
    'HostName',
    'HardwareProfileId'
  ];
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Eft Terminal Id.
   */
  declare eftTerminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Host Name.
   */
  declare hostName: DeserializedType<T, 'Edm.String'>;
  /**
   * Hardware Profile Id.
   */
  declare hardwareProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merged Self Service Package Reference.
   */
  declare mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Self Service Package.
   */
  declare selfServicePackage: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Port.
   */
  declare port: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hardware Station Type.
   * @nullable
   */
  declare hardwareStationType?: RetailHardwareStationEnumType | null;
  /**
   * Certificate Thumbprint.
   * @nullable
   */
  declare certificateThumbprint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hardware Station Id.
   * @nullable
   */
  declare hardwareStationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailStores} entity.
   */
  declare retailStore?: RetailStores<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailHardwareStations} entity.
   */
  declare retailHardwareStation?: RetailHardwareStations<T> | null;

  constructor(_entityApi: RetailStoreHardwareStationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreHardwareStationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  storeNumber: DeserializedType<T, 'Edm.String'>;
  eftTerminalId: DeserializedType<T, 'Edm.String'>;
  hostName: DeserializedType<T, 'Edm.String'>;
  hardwareProfileId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  selfServicePackage: DeserializedType<T, 'Edm.Int64'>;
  port: DeserializedType<T, 'Edm.Int32'>;
  hardwareStationType?: RetailHardwareStationEnumType | null;
  certificateThumbprint?: DeserializedType<T, 'Edm.String'> | null;
  hardwareStationId?: DeserializedType<T, 'Edm.String'> | null;
  retailStore?: RetailStoresType<T> | null;
  retailHardwareStation?: RetailHardwareStationsType<T> | null;
}
