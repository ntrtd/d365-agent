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
import type { AssetMaintenanceWorkOrderPrioritiesApi } from './AssetMaintenanceWorkOrderPrioritiesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderPriorities" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderPriorities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderPrioritiesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderPriorities.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderPriorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderPriorities entity.
   */
  static _keys = ['dataAreaId', 'ServiceLevel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Expected End Day.
   */
  declare workOrderExpectedEndDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Formatted Service Level Name.
   * @nullable
   */
  declare formattedServiceLevelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Expected End Time.
   */
  declare workOrderExpectedEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Work Order Expected Set Start Time.
   * @nullable
   */
  declare workOrderExpectedSetStartTime?: NoYes | null;
  /**
   * Work Order Expected Start Day.
   */
  declare workOrderExpectedStartDay: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Work Order Expected Start Time.
   */
  declare workOrderExpectedStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Work Order Expected Set End Time.
   * @nullable
   */
  declare workOrderExpectedSetEndTime?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare maintenanceRequests: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare serviceLevelMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsServiceLevel: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceWorkOrderPrioritiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderPrioritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  workOrderExpectedEndDay: DeserializedType<T, 'Edm.Int32'>;
  formattedServiceLevelName?: DeserializedType<T, 'Edm.String'> | null;
  workOrderExpectedEndTime: DeserializedType<T, 'Edm.Int32'>;
  workOrderExpectedSetStartTime?: NoYes | null;
  workOrderExpectedStartDay: DeserializedType<T, 'Edm.Int32'>;
  workOrderExpectedStartTime: DeserializedType<T, 'Edm.Int32'>;
  workOrderExpectedSetEndTime?: NoYes | null;
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  serviceLevelMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
  maintenanceRequestsServiceLevel: AssetMaintenanceRequestsV2Type<T>[];
}
