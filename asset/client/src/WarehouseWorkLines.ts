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
import type { WarehouseWorkLinesApi } from './WarehouseWorkLinesApi';
import { NoYes } from './NoYes';
import { WhsWorkStatus } from './WhsWorkStatus';
import { WhsWorkType } from './WhsWorkType';
import {
  WarehouseWorkHeaders,
  WarehouseWorkHeadersType
} from './WarehouseWorkHeaders';

/**
 * This class represents the entity "WarehouseWorkLines" of service "d365_metadata".
 */
export class WarehouseWorkLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehouseWorkLinesType<T>
{
  /**
   * Technical entity name for WarehouseWorkLines.
   */
  static override _entityName = 'WarehouseWorkLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseWorkLines entity.
   */
  static _keys = ['dataAreaId', 'WarehouseWorkId', 'WorkLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Work Id.
   */
  declare warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Line Number.
   */
  declare workLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Work Line Mandatory.
   * @nullable
   */
  declare isWorkLineMandatory?: NoYes | null;
  /**
   * Sort Order Code.
   */
  declare sortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Order Number.
   * @nullable
   */
  declare sourceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Work Closed Date Time.
   */
  declare warehouseWorkClosedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Warehouse Mobile Device User Id.
   * @nullable
   */
  declare processingWarehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Work Quantity.
   */
  declare remainingWorkQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Zone Id.
   * @nullable
   */
  declare warehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Processing Time Seconds.
   */
  declare actualProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Handling Quantity.
   */
  declare handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Packing Tote License Plate Number.
   * @nullable
   */
  declare originalPackingToteLicensePlateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Estimated Processing Time Seconds.
   */
  declare estimatedProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Work Execution Stopped.
   * @nullable
   */
  declare isWorkExecutionStopped?: NoYes | null;
  /**
   * Warehouse Work Status.
   * @nullable
   */
  declare warehouseWorkStatus?: WhsWorkStatus | null;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Quantity.
   */
  declare workQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Work Quantity Unit Symbol.
   * @nullable
   */
  declare workQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Work Processing Start Date Time.
   */
  declare warehouseWorkProcessingStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Warehouse Work Type.
   * @nullable
   */
  declare warehouseWorkType?: WhsWorkType | null;
  /**
   * Fefo Item Batch Number.
   * @nullable
   */
  declare fefoItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Handling Quantity.
   */
  declare remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Extra Handling Quantity.
   */
  declare extraHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Container Id.
   * @nullable
   */
  declare containerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Replenishment Needed.
   * @nullable
   */
  declare isReplenishmentNeeded?: NoYes | null;
  /**
   * Captured Weight.
   */
  declare capturedWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Line Pair Id.
   * @nullable
   */
  declare workLinePairId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseWorkHeaders} entity.
   */
  declare warehouseWorkHeader?: WarehouseWorkHeaders<T> | null;

  constructor(_entityApi: WarehouseWorkLinesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseWorkLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  workLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  isWorkLineMandatory?: NoYes | null;
  sortOrderCode: DeserializedType<T, 'Edm.Int32'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  sourceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkClosedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  processingWarehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  remainingWorkQuantity: DeserializedType<T, 'Edm.Decimal'>;
  warehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  actualProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  originalPackingToteLicensePlateNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  estimatedProcessingTimeSeconds: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  isWorkExecutionStopped?: NoYes | null;
  warehouseWorkStatus?: WhsWorkStatus | null;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  workQuantity: DeserializedType<T, 'Edm.Decimal'>;
  workQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkProcessingStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  warehouseWorkType?: WhsWorkType | null;
  fefoItemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  extraHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  containerId?: DeserializedType<T, 'Edm.String'> | null;
  isReplenishmentNeeded?: NoYes | null;
  capturedWeight: DeserializedType<T, 'Edm.Decimal'>;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  workLinePairId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkHeader?: WarehouseWorkHeadersType<T> | null;
}
