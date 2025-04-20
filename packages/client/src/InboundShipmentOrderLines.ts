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
import type { InboundShipmentOrderLinesApi } from './InboundShipmentOrderLinesApi';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import {
  InboundShipmentOrderHeaders,
  InboundShipmentOrderHeadersType
} from './InboundShipmentOrderHeaders';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "InboundShipmentOrderLines" of service "d365_metadata".
 */
export class InboundShipmentOrderLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderLinesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderLines.
   */
  static override _entityName = 'InboundShipmentOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderLines entity.
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
   * Expected Quantity.
   */
  declare expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overdelivery Percentage.
   */
  declare overdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Consigner Line Number.
   */
  declare consignerLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Received Handling Quantity.
   */
  declare receivedHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Item Number.
   * @nullable
   */
  declare consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Released Quantity.
   */
  declare releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inbound Shipment Order Number.
   * @nullable
   */
  declare inboundShipmentOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Underdelivery Perecentage.
   */
  declare underdeliveryPerecentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Unit Symbol.
   * @nullable
   */
  declare expectedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Ordered Quantity.
   */
  declare remainingOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Received Weight.
   * @nullable
   */
  declare receivedWeight?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Unit Symbol.
   * @nullable
   */
  declare handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Cross Dock Source Id.
   * @nullable
   */
  declare crossDockSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentOrderHeaders} entity.
   */
  declare inboundShipmentOrderHeader?: InboundShipmentOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare product?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: InboundShipmentOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  overdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  consignerLineNumber: DeserializedType<T, 'Edm.Int32'>;
  receivedHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  releasedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inboundShipmentOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  underdeliveryPerecentage: DeserializedType<T, 'Edm.Decimal'>;
  weightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  remainingHandlingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  expectedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  remainingOrderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivedWeight?: DeserializedType<T, 'Edm.String'> | null;
  handlingUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  crossDockSourceId?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
  inboundShipmentOrderHeader?: InboundShipmentOrderHeadersType<T> | null;
  product?: ReleasedProductsV2Type<T> | null;
}
