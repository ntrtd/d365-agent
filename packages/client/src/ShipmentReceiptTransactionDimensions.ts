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
import type { ShipmentReceiptTransactionDimensionsApi } from './ShipmentReceiptTransactionDimensionsApi';
import {
  ShipmentReceiptJournalLines,
  ShipmentReceiptJournalLinesType
} from './ShipmentReceiptJournalLines';

/**
 * This class represents the entity "ShipmentReceiptTransactionDimensions" of service "d365_metadata".
 */
export class ShipmentReceiptTransactionDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipmentReceiptTransactionDimensionsType<T>
{
  /**
   * Technical entity name for ShipmentReceiptTransactionDimensions.
   */
  static override _entityName = 'ShipmentReceiptTransactionDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipmentReceiptTransactionDimensions entity.
   */
  static _keys = [
    'dataAreaId',
    'InventoryLotId',
    'ShipmentReceiptVersionNumber'
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
   * Shipment Receipt Version Number.
   */
  declare shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Inventory Owner Id.
   * @nullable
   */
  declare sourceSystemInventoryOwnerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Quantity.
   */
  declare handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight Unit Symbol.
   * @nullable
   */
  declare weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Unit Symbol.
   * @nullable
   */
  declare handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Master Number.
   * @nullable
   */
  declare sourceSystemItemMasterNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source System Disposition Code.
   * @nullable
   */
  declare sourceSystemDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Receipt Journal.
   */
  declare shipmentReceiptJournal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ShipmentReceiptJournalLines} entity.
   */
  declare shipmentReceiptJournalLine?: ShipmentReceiptJournalLines<T> | null;

  constructor(_entityApi: ShipmentReceiptTransactionDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface ShipmentReceiptTransactionDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  handlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentReceiptJournal: DeserializedType<T, 'Edm.Int64'>;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  shipmentReceiptJournalLine?: ShipmentReceiptJournalLinesType<T> | null;
}
