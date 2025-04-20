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
import type { ShipmentPackingSlipTransactionDimensionsApi } from './ShipmentPackingSlipTransactionDimensionsApi';
import {
  ShipmentPackingSlipJournalLines,
  ShipmentPackingSlipJournalLinesType
} from './ShipmentPackingSlipJournalLines';

/**
 * This class represents the entity "ShipmentPackingSlipTransactionDimensions" of service "d365_metadata".
 */
export class ShipmentPackingSlipTransactionDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipmentPackingSlipTransactionDimensionsType<T>
{
  /**
   * Technical entity name for ShipmentPackingSlipTransactionDimensions.
   */
  static override _entityName = 'ShipmentPackingSlipTransactionDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipmentPackingSlipTransactionDimensions entity.
   */
  static _keys = [
    'dataAreaId',
    'InventoryLotId',
    'ShipmentPackingSlipVersionNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Packing Slip Version Number.
   */
  declare shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
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
   * Source System Inventory Owner Id.
   * @nullable
   */
  declare sourceSystemInventoryOwnerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Packing Slip Journal.
   */
  declare shipmentPackingSlipJournal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source System Item Master Number.
   * @nullable
   */
  declare sourceSystemItemMasterNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Weight Unit Symbol.
   * @nullable
   */
  declare weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Packing Slip Trans.
   */
  declare shipmentPackingSlipTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Quantity.
   */
  declare handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Warehouse Location Id.
   * @nullable
   */
  declare shippingWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Unit Symbol.
   * @nullable
   */
  declare handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ShipmentPackingSlipJournalLines} entity.
   */
  declare shipmentPackingSlipJournalLine?: ShipmentPackingSlipJournalLines<T> | null;

  constructor(_entityApi: ShipmentPackingSlipTransactionDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface ShipmentPackingSlipTransactionDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentPackingSlipJournal: DeserializedType<T, 'Edm.Int64'>;
  sourceSystemItemMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  shipmentPackingSlipTrans: DeserializedType<T, 'Edm.Int64'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  shippingWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentPackingSlipJournalLine?: ShipmentPackingSlipJournalLinesType<T> | null;
}
