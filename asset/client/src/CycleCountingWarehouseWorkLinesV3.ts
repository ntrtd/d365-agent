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
import type { CycleCountingWarehouseWorkLinesV3Api } from './CycleCountingWarehouseWorkLinesV3Api';
import { WhsAcceptReject } from './WhsAcceptReject';
import { NoYes } from './NoYes';
import { WhsWorkStatus } from './WhsWorkStatus';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { LicensePlates, LicensePlatesType } from './LicensePlates';

/**
 * This class represents the entity "CycleCountingWarehouseWorkLinesV3" of service "d365_metadata".
 */
export class CycleCountingWarehouseWorkLinesV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CycleCountingWarehouseWorkLinesV3Type<T>
{
  /**
   * Technical entity name for CycleCountingWarehouseWorkLinesV3.
   */
  static override _entityName = 'CycleCountingWarehouseWorkLinesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CycleCountingWarehouseWorkLinesV3 entity.
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
    'ProductVersionId',
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
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Id.
   */
  declare warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Work Id.
   */
  declare warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Closed Date Time.
   */
  declare workClosedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Review Result.
   * @nullable
   */
  declare reviewResult?: WhsAcceptReject | null;
  /**
   * Is Registered.
   * @nullable
   */
  declare isRegistered?: NoYes | null;
  /**
   * Work Created Date Time.
   */
  declare workCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Discrepancy Registered.
   * @nullable
   */
  declare isDiscrepancyRegistered?: NoYes | null;
  /**
   * Warehouse Mobile Device User Id.
   * @nullable
   */
  declare warehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counted Quantity.
   */
  declare countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Work Status.
   * @nullable
   */
  declare workStatus?: WhsWorkStatus | null;
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
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
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

  constructor(_entityApi: CycleCountingWarehouseWorkLinesV3Api<T>) {
    super(_entityApi);
  }
}

export interface CycleCountingWarehouseWorkLinesV3Type<
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
  productVersionId: DeserializedType<T, 'Edm.String'>;
  warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  workClosedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  adjustmentWarehouseWorkId?: DeserializedType<T, 'Edm.String'> | null;
  expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reviewResult?: WhsAcceptReject | null;
  isRegistered?: NoYes | null;
  workCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDiscrepancyRegistered?: NoYes | null;
  warehouseMobileDeviceUserId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  countedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  workStatus?: WhsWorkStatus | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productStyle?: ProductStylesType<T> | null;
  licensePlate?: LicensePlatesType<T> | null;
}
