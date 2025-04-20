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
import type { AssetMaintenanceAssetCounterRegistrationsApi } from './AssetMaintenanceAssetCounterRegistrationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceAssetCounterRegistrations" of service "d365_metadata".
 */
export class AssetMaintenanceAssetCounterRegistrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetCounterRegistrationsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetCounterRegistrations.
   */
  static override _entityName = 'AssetMaintenanceAssetCounterRegistrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetCounterRegistrations entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceAssetId',
    'CounterDateTime',
    'CounterReplaced',
    'CounterId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Date Time.
   */
  declare counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Counter Replaced.
   * @nullable
   */
  declare counterReplaced?: NoYes | null;
  /**
   * Counter Id.
   */
  declare counterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Registration Replaced.
   * @nullable
   */
  declare parentRegistrationReplaced?: NoYes | null;
  /**
   * Parent Registration Date Time.
   */
  declare parentRegistrationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Parent Registration Maintenance Asset Id.
   * @nullable
   */
  declare parentRegistrationMaintenanceAssetId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Counter Value.
   */
  declare counterValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Parent Registration Counter Id.
   * @nullable
   */
  declare parentRegistrationCounterId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: AssetMaintenanceAssetCounterRegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetCounterRegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  counterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  counterReplaced?: NoYes | null;
  counterId: DeserializedType<T, 'Edm.String'>;
  parentRegistrationReplaced?: NoYes | null;
  parentRegistrationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  parentRegistrationMaintenanceAssetId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  counterValue: DeserializedType<T, 'Edm.Decimal'>;
  parentRegistrationCounterId?: DeserializedType<T, 'Edm.String'> | null;
}
