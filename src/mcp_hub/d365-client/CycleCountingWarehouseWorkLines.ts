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
import type { CycleCountingWarehouseWorkLinesApi } from './CycleCountingWarehouseWorkLinesApi';
import { NoYes } from './NoYes';
import { WhsWorkStatus } from './WhsWorkStatus';
import { WhsAcceptReject } from './WhsAcceptReject';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { LicensePlates, LicensePlatesType } from './LicensePlates';

/**
 * This class represents the entity "CycleCountingWarehouseWorkLines" of service "d365_metadata".
 */
export class CycleCountingWarehouseWorkLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CycleCountingWarehouseWorkLinesType<T>
{
  /**
   * Technical entity name for CycleCountingWarehouseWorkLines.
   */
  static override _entityName = 'CycleCountingWarehouseWorkLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CycleCountingWarehouseWorkLines entity.
   */
  static _keys = [
    'dataAreaId',
    'InventoryOwnerId',
    'InventoryStatusId',
    'ItemBatchNumber',
    'ItemNumber',
    'ItemSerialNumber',
    'LicensePlateNumber',
    'LineNumber',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'WarehouseLocationId',
    'WarehouseWorkId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Owner Id.
   */
  declare inventoryOwnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Status Id.
   */
  declare inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Number.
   */
  declare itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Serial Number.
   */
  declare itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * License Plate Number.
   */
  declare licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Id.
   */
  declare warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Work Id.
   */
  declare warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  /**
   * Adjustment Warehouse Work Id.
   * @nullable
   */
  declare adjustmentWarehouseWorkId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Quantity.
   */
  declare expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Counted Quantity.
   */
  declare countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Discrepancy Registered.
   * @nullable
   */
  declare isDiscrepancyRegistered?: NoYes | null;
  /**
   * Work Created Date Time.
   */
  declare workCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Registered.
   * @nullable
   */
  declare isRegistered?: NoYes | null;
  /**
   * Work Status.
   * @nullable
   */
  declare workStatus?: WhsWorkStatus | null;
  /**
   * Warehouse Mobile Device User Id.
   * @nullable
   */
  declare warehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Review Result.
   * @nullable
   */
  declare reviewResult?: WhsAcceptReject | null;
  /**
   * Work Closed Date Time.
   */
  declare workClosedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  declare warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link LicensePlates} entity.
   */
  declare licensePlate?: LicensePlates<T> | null;

  constructor(_entityApi: CycleCountingWarehouseWorkLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CycleCountingWarehouseWorkLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryOwnerId: DeserializedType<T, 'Edm.String'>;
  inventoryStatusId: DeserializedType<T, 'Edm.String'>;
  itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  adjustmentWarehouseWorkId?: DeserializedType<T, 'Edm.String'> | null;
  expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  isDiscrepancyRegistered?: NoYes | null;
  workCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isRegistered?: NoYes | null;
  workStatus?: WhsWorkStatus | null;
  warehouseMobileDeviceUserId?: DeserializedType<T, 'Edm.String'> | null;
  reviewResult?: WhsAcceptReject | null;
  workClosedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productStyle?: ProductStylesType<T> | null;
  licensePlate?: LicensePlatesType<T> | null;
}
