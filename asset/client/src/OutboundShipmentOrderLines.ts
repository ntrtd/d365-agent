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
import type { OutboundShipmentOrderLinesApi } from './OutboundShipmentOrderLinesApi';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';

/**
 * This class represents the entity "OutboundShipmentOrderLines" of service "d365_metadata".
 */
export class OutboundShipmentOrderLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderLinesType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderLines.
   */
  static override _entityName = 'OutboundShipmentOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderLines entity.
   */
  static _keys = ['dataAreaId', 'InventoryLotId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Order Line Number.
   */
  declare sourceSystemOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overdelivery Percentage.
   */
  declare overdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sellable Days.
   */
  declare sellableDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source System Inventory Owner Id.
   * @nullable
   */
  declare sourceSystemInventoryOwnerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consignee Item Description.
   * @nullable
   */
  declare consigneeItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Unit Symbol.
   * @nullable
   */
  declare orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Released Quantity.
   */
  declare releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Consignee Line Number.
   */
  declare consigneeLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Outbound Shipment Order Number.
   * @nullable
   */
  declare outboundShipmentOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consignee Reference.
   * @nullable
   */
  declare consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Item Number.
   * @nullable
   */
  declare consigneeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Ordered Quantity.
   */
  declare remainingOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * @nullable
   */
  declare shippedWeight?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Underdelivery Percentage.
   */
  declare underdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Inventory Status.
   * @nullable
   */
  declare orderedInventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare product?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outboundShipmentOrderHeader?: OutboundShipmentOrderHeaders<T> | null;

  constructor(_entityApi: OutboundShipmentOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  shippedHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  overdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sellableDays: DeserializedType<T, 'Edm.Int32'>;
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLineNumber: DeserializedType<T, 'Edm.Int32'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  remainingOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  shippedWeight?: DeserializedType<T, 'Edm.String'> | null;
  underdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
  product?: ReleasedProductsV2Type<T> | null;
  outboundShipmentOrderHeader?: OutboundShipmentOrderHeadersType<T> | null;
}
