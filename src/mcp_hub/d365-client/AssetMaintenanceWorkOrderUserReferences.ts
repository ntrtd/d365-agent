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
import type { AssetMaintenanceWorkOrderUserReferencesApi } from './AssetMaintenanceWorkOrderUserReferencesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceWorkOrderLifecycleStates,
  AssetMaintenanceWorkOrderLifecycleStatesType
} from './AssetMaintenanceWorkOrderLifecycleStates';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';
import {
  AssetMaintenanceFunctionalLocations,
  AssetMaintenanceFunctionalLocationsType
} from './AssetMaintenanceFunctionalLocations';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderUserReferences" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderUserReferences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderUserReferencesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderUserReferences.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderUserReferences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderUserReferences entity.
   */
  static _keys = [
    'dataAreaId',
    'JobScheduledToWorkerPersonnelNumber',
    'WorkOrderId',
    'JobLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Scheduled To Worker Personnel Number.
   */
  declare jobScheduledToWorkerPersonnelNumber: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Line Number.
   */
  declare jobLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Work Order Active.
   * @nullable
   */
  declare workOrderActive?: NoYes | null;
  /**
   * Work Order Service Level.
   */
  declare workOrderServiceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Work Order Lifecycle State Id.
   * @nullable
   */
  declare workOrderLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Scheduled End Date.
   */
  declare jobScheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Scheduled Start Date.
   */
  declare jobScheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Asset Functional Location Id.
   * @nullable
   */
  declare jobAssetFunctionalLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Job Asset Id.
   * @nullable
   */
  declare jobAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLifecycleStates} entity.
   */
  declare maintenanceWorkOrderLifecycleState?: AssetMaintenanceWorkOrderLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceWorkOrderJobAsset?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare maintenanceWorkOrderJobV2?: AssetMaintenanceWorkOrderLinesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare maintenanceWorkOrderHeader?: AssetMaintenanceWorkOrderTablesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocations} entity.
   */
  declare maintenanceWorkOrderJobAssetFunctionalLocation?: AssetMaintenanceFunctionalLocations<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderUserReferencesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderUserReferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  jobScheduledToWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  jobLineNumber: DeserializedType<T, 'Edm.Int64'>;
  workOrderActive?: NoYes | null;
  workOrderServiceLevel: DeserializedType<T, 'Edm.Int32'>;
  workOrderLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  jobScheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobScheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobAssetFunctionalLocationId?: DeserializedType<T, 'Edm.String'> | null;
  jobAssetId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceWorkOrderLifecycleState?: AssetMaintenanceWorkOrderLifecycleStatesType<T> | null;
  maintenanceWorkOrderJobAsset?: AssetMaintenanceAssetsV3Type<T> | null;
  maintenanceWorkOrderJobV2?: AssetMaintenanceWorkOrderLinesV2Type<T> | null;
  maintenanceWorkOrderHeader?: AssetMaintenanceWorkOrderTablesV2Type<T> | null;
  maintenanceWorkOrderJobAssetFunctionalLocation?: AssetMaintenanceFunctionalLocationsType<T> | null;
}
