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
import type { ProductionProductLotAssociationsApi } from './ProductionProductLotAssociationsApi';
import { NoYes } from './NoYes';
import { PmfProductType } from './PmfProductType';

/**
 * This class represents the entity "ProductionProductLotAssociations" of service "d365_metadata".
 */
export class ProductionProductLotAssociations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductionProductLotAssociationsType<T>
{
  /**
   * Technical entity name for ProductionProductLotAssociations.
   */
  static override _entityName = 'ProductionProductLotAssociations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionProductLotAssociations entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductionOrderNumber',
    'InventoryLotId',
    'ItemNumber',
    'GroupMatchId',
    'SequenceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Order Number.
   */
  declare productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Match Id.
   */
  declare groupMatchId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Id.
   */
  declare sequenceId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Production Warehouse Location Id.
   * @nullable
   */
  declare productionWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Completed.
   * @nullable
   */
  declare isCompleted?: NoYes | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Warehouse Id.
   * @nullable
   */
  declare productionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Type.
   * @nullable
   */
  declare productType?: PmfProductType | null;
  /**
   * Good Quantity.
   */
  declare goodQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Quantity.
   */
  declare errorQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Inventory Unit Id.
   * @nullable
   */
  declare inventoryUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductionProductLotAssociationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionProductLotAssociationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  groupMatchId: DeserializedType<T, 'Edm.String'>;
  sequenceId: DeserializedType<T, 'Edm.Int32'>;
  productionWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  isCompleted?: NoYes | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  productionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productType?: PmfProductType | null;
  goodQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  errorQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  inventoryUnitId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
}
