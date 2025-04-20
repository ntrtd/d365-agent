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
import type { WarehouseWorkHeadersApi } from './WarehouseWorkHeadersApi';
import { WhsWorkTransType } from './WhsWorkTransType';
import { WhsWorkStatus } from './WhsWorkStatus';
import { NoYes } from './NoYes';
import {
  WarehouseWorkLines,
  WarehouseWorkLinesType
} from './WarehouseWorkLines';

/**
 * This class represents the entity "WarehouseWorkHeaders" of service "d365_metadata".
 */
export class WarehouseWorkHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseWorkHeadersType<T>
{
  /**
   * Technical entity name for WarehouseWorkHeaders.
   */
  static override _entityName = 'WarehouseWorkHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseWorkHeaders entity.
   */
  static _keys = ['dataAreaId', 'WarehouseWorkId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Work Id.
   */
  declare warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Target License Plate Number.
   * @nullable
   */
  declare targetLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Work Order Type.
   * @nullable
   */
  declare warehouseWorkOrderType?: WhsWorkTransType | null;
  /**
   * Source Order Number.
   * @nullable
   */
  declare sourceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Work Status.
   * @nullable
   */
  declare warehouseWorkStatus?: WhsWorkStatus | null;
  /**
   * Actual Processing Time Seconds.
   */
  declare actualProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Processing Time Seconds.
   */
  declare estimatedProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Work Cancelled Date Time.
   */
  declare warehouseWorkCancelledDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Wave Id.
   * @nullable
   */
  declare waveId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Warehouse Work Blocked.
   * @nullable
   */
  declare isWarehouseWorkBlocked?: NoYes | null;
  /**
   * Warehouse Work Cancelling User Id.
   * @nullable
   */
  declare warehouseWorkCancellingUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Work Locking Warehouse Mobile Device User Id.
   * @nullable
   */
  declare warehouseWorkLockingWarehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Work Processing Start Date Time.
   */
  declare warehouseWorkProcessingStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Is Warehouse Worker Manually Assigned.
   * @nullable
   */
  declare isWarehouseWorkerManuallyAssigned?: NoYes | null;
  /**
   * Warehouse Work Closed Date Time.
   */
  declare warehouseWorkClosedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Warehouse Work Manually Completing User Id.
   * @nullable
   */
  declare warehouseWorkManuallyCompletingUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Work Pool Id.
   * @nullable
   */
  declare warehouseWorkPoolId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Work Priority.
   */
  declare warehouseWorkPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Container Id.
   * @nullable
   */
  declare containerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WarehouseWorkLines} entity.
   */
  declare warehouseWorkLines: WarehouseWorkLines<T>[];

  constructor(_entityApi: WarehouseWorkHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseWorkHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  targetLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkOrderType?: WhsWorkTransType | null;
  sourceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkStatus?: WhsWorkStatus | null;
  actualProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  estimatedProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  warehouseWorkCancelledDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  waveId?: DeserializedType<T, 'Edm.String'> | null;
  isWarehouseWorkBlocked?: NoYes | null;
  warehouseWorkCancellingUserId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkLockingWarehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warehouseWorkProcessingStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  isWarehouseWorkerManuallyAssigned?: NoYes | null;
  warehouseWorkClosedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  warehouseWorkManuallyCompletingUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warehouseWorkPoolId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkPriority: DeserializedType<T, 'Edm.Int32'>;
  containerId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkLines: WarehouseWorkLinesType<T>[];
}
