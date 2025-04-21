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
import type { AssetMaintenanceWorkOrderTablesApi } from './AssetMaintenanceWorkOrderTablesApi';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceWorkOrderLines,
  AssetMaintenanceWorkOrderLinesType
} from './AssetMaintenanceWorkOrderLines';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderTables" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderTablesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderTables.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderTables entity.
   */
  static _keys = ['dataAreaId', 'WorkOrderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Work Order Id.
   * @nullable
   */
  declare parentWorkOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Group Id.
   * @nullable
   */
  declare workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Type Id.
   * @nullable
   */
  declare workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Worker Personnel Number.
   * @nullable
   */
  declare responsibleWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expected End.
   */
  declare expectedEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expected Start.
   */
  declare expectedStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare maintenanceRequests: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLines} entity.
   */
  declare assetMaintenanceWorkOrderLine: AssetMaintenanceWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsMaintenanceWorkOrder: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceWorkOrderTablesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  parentWorkOrderId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  workerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  responsibleWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  expectedEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  expectedStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  assetMaintenanceWorkOrderLine: AssetMaintenanceWorkOrderLinesType<T>[];
  maintenanceRequestsMaintenanceWorkOrder: AssetMaintenanceRequestsV2Type<T>[];
}
