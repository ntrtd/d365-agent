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
import type { ShipmentPackingSlipJournalLinesApi } from './ShipmentPackingSlipJournalLinesApi';
import {
  ShipmentPackingSlipTransactionDimensions,
  ShipmentPackingSlipTransactionDimensionsType
} from './ShipmentPackingSlipTransactionDimensions';
import {
  ShipmentPackingSlipJournalHeaders,
  ShipmentPackingSlipJournalHeadersType
} from './ShipmentPackingSlipJournalHeaders';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ShipmentPackingSlipJournalLines" of service "d365_metadata".
 */
export class ShipmentPackingSlipJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipmentPackingSlipJournalLinesType<T>
{
  /**
   * Technical entity name for ShipmentPackingSlipJournalLines.
   */
  static override _entityName = 'ShipmentPackingSlipJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipmentPackingSlipJournalLines entity.
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
   * Consignee Purchase Order Number.
   * @nullable
   */
  declare consigneePurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipped Handling Quantity.
   */
  declare shippedHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Ordered Unit Symbol.
   * @nullable
   */
  declare orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipped Quantity.
   */
  declare shippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source System Item Master Number.
   * @nullable
   */
  declare sourceSystemItemMasterNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remaining Handling Quantity.
   */
  declare remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Weight Unit Symbol.
   * @nullable
   */
  declare weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Quantity.
   */
  declare remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Line Number.
   */
  declare consigneeLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Reference.
   * @nullable
   */
  declare consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
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
   * Shipped Weight.
   */
  declare shippedWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link ShipmentPackingSlipTransactionDimensions} entity.
   */
  declare details: ShipmentPackingSlipTransactionDimensions<T>[];
  /**
   * One-to-one navigation property to the {@link ShipmentPackingSlipJournalHeaders} entity.
   */
  declare shipmentPackingSlipJournal?: ShipmentPackingSlipJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare product?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: ShipmentPackingSlipJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ShipmentPackingSlipJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>;
  consigneePurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippedHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  consignerLineNumber: DeserializedType<T, 'Edm.Int64'>;
  consignerOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  shippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourceSystemItemMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  remainingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consigneeLineNumber: DeserializedType<T, 'Edm.Int32'>;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  shippedWeight: DeserializedType<T, 'Edm.Decimal'>;
  details: ShipmentPackingSlipTransactionDimensionsType<T>[];
  shipmentPackingSlipJournal?: ShipmentPackingSlipJournalHeadersType<T> | null;
  product?: ReleasedProductsV2Type<T> | null;
}
