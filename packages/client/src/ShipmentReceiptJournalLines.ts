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
import type { ShipmentReceiptJournalLinesApi } from './ShipmentReceiptJournalLinesApi';
import {
  ShipmentReceiptTransactionDimensions,
  ShipmentReceiptTransactionDimensionsType
} from './ShipmentReceiptTransactionDimensions';
import {
  ShipmentReceiptJournalHeaders,
  ShipmentReceiptJournalHeadersType
} from './ShipmentReceiptJournalHeaders';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ShipmentReceiptJournalLines" of service "d365_metadata".
 */
export class ShipmentReceiptJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipmentReceiptJournalLinesType<T>
{
  /**
   * Technical entity name for ShipmentReceiptJournalLines.
   */
  static override _entityName = 'ShipmentReceiptJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipmentReceiptJournalLines entity.
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
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Line Number.
   */
  declare consignerLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consigner Order Number.
   * @nullable
   */
  declare consignerOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Handling Quantity.
   */
  declare receivedHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordered Unit Symbol.
   * @nullable
   */
  declare orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Item Number.
   * @nullable
   */
  declare consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Remaining Handling Quantity.
   */
  declare remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Quantity.
   */
  declare remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Line Number.
   */
  declare consigneeLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Consignee Order Number.
   * @nullable
   */
  declare consigneeOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Order Type.
   * @nullable
   */
  declare sourceSystemOrderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Weight.
   */
  declare receivedWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ordered Quantity.
   */
  declare orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Handling Unit Symbol.
   * @nullable
   */
  declare handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Quantity.
   */
  declare receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptTransactionDimensions} entity.
   */
  declare details: ShipmentReceiptTransactionDimensions<T>[];
  /**
   * One-to-one navigation property to the {@link ShipmentReceiptJournalHeaders} entity.
   */
  declare shipmentReceiptJournal?: ShipmentReceiptJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare product?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: ShipmentReceiptJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ShipmentReceiptJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  consignerLineNumber: DeserializedType<T, 'Edm.Int64'>;
  consignerOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivedHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consigneeLineNumber: DeserializedType<T, 'Edm.Int32'>;
  consigneeOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemOrderType?: DeserializedType<T, 'Edm.String'> | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  receivedWeight: DeserializedType<T, 'Edm.Decimal'>;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  details: ShipmentReceiptTransactionDimensionsType<T>[];
  shipmentReceiptJournal?: ShipmentReceiptJournalHeadersType<T> | null;
  product?: ReleasedProductsV2Type<T> | null;
}
