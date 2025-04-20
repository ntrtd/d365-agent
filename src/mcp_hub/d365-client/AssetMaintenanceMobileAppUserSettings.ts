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
import type { AssetMaintenanceMobileAppUserSettingsApi } from './AssetMaintenanceMobileAppUserSettingsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceMobileAppUserSettings" of service "d365_metadata".
 */
export class AssetMaintenanceMobileAppUserSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceMobileAppUserSettingsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceMobileAppUserSettings.
   */
  static override _entityName = 'AssetMaintenanceMobileAppUserSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceMobileAppUserSettings entity.
   */
  static _keys = ['WorkerUserId'];
  /**
   * Worker User Id.
   */
  declare workerUserId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker User Object Id.
   */
  declare workerUserObjectId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Has Maintenance Worker Role.
   * @nullable
   */
  declare hasMaintenanceWorkerRole?: NoYes | null;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Maintenance Requester Role.
   * @nullable
   */
  declare hasMaintenanceRequesterRole?: NoYes | null;

  constructor(_entityApi: AssetMaintenanceMobileAppUserSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceMobileAppUserSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerUserId: DeserializedType<T, 'Edm.String'>;
  workerUserObjectId: DeserializedType<T, 'Edm.Guid'>;
  hasMaintenanceWorkerRole?: NoYes | null;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  hasMaintenanceRequesterRole?: NoYes | null;
}
