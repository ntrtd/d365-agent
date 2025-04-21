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
import type { AssetMaintenanceFunctionalLocationWorkersApi } from './AssetMaintenanceFunctionalLocationWorkersApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceWorkers,
  AssetMaintenanceWorkersType
} from './AssetMaintenanceWorkers';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationWorkers" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationWorkers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationWorkersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationWorkers.
   */
  static override _entityName = 'AssetMaintenanceFunctionalLocationWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationWorkers entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationId',
    'WorkerPersonnelNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Id.
   */
  declare functionalLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Functional Location.
   * @nullable
   */
  declare primaryFunctionalLocation?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare assetMaintenanceWorker?: AssetMaintenanceWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;

  constructor(_entityApi: AssetMaintenanceFunctionalLocationWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationId: DeserializedType<T, 'Edm.String'>;
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  primaryFunctionalLocation?: NoYes | null;
  assetMaintenanceWorker?: AssetMaintenanceWorkersType<T> | null;
  assetMaintenanceFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
}
