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
import type { OutboundShipmentOrderLineMessagesApi } from './OutboundShipmentOrderLineMessagesApi';
import {
  OutboundShipmentOrderMessages,
  OutboundShipmentOrderMessagesType
} from './OutboundShipmentOrderMessages';
import {
  OutboundShipmentOrderLineCrossDockMessages,
  OutboundShipmentOrderLineCrossDockMessagesType
} from './OutboundShipmentOrderLineCrossDockMessages';

/**
 * This class represents the entity "OutboundShipmentOrderLineMessages" of service "d365_metadata".
 */
export class OutboundShipmentOrderLineMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderLineMessagesType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderLineMessages.
   */
  static override _entityName = 'OutboundShipmentOrderLineMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderLineMessages entity.
   */
  static _keys = [
    'dataAreaId',
    'OrderNumber',
    'SourceSystemId',
    'MessageId',
    'OrderLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Number.
   */
  declare orderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Line Number.
   */
  declare orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Ordered Unit Symbol.
   * @nullable
   */
  declare orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Reference.
   * @nullable
   */
  declare consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Item Number.
   * @nullable
   */
  declare consigneeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Quantity.
   */
  declare orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Description.
   * @nullable
   */
  declare itemDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link OutboundShipmentOrderMessages} entity.
   */
  declare outboundShipmentOrderMessage?: OutboundShipmentOrderMessages<T> | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderLineCrossDockMessages} entity.
   */
  declare crossDockLines: OutboundShipmentOrderLineCrossDockMessages<T>[];

  constructor(_entityApi: OutboundShipmentOrderLineMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderLineMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderNumber: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  overdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  sellableDays: DeserializedType<T, 'Edm.Int32'>;
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  orderedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLineNumber: DeserializedType<T, 'Edm.Int32'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  consigneeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemDescription?: DeserializedType<T, 'Edm.String'> | null;
  underdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentOrderMessage?: OutboundShipmentOrderMessagesType<T> | null;
  crossDockLines: OutboundShipmentOrderLineCrossDockMessagesType<T>[];
}
