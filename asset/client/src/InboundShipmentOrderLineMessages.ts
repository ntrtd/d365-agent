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
import type { InboundShipmentOrderLineMessagesApi } from './InboundShipmentOrderLineMessagesApi';
import {
  InboundShipmentOrderMessages,
  InboundShipmentOrderMessagesType
} from './InboundShipmentOrderMessages';

/**
 * This class represents the entity "InboundShipmentOrderLineMessages" of service "d365_metadata".
 */
export class InboundShipmentOrderLineMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderLineMessagesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderLineMessages.
   */
  static override _entityName = 'InboundShipmentOrderLineMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderLineMessages entity.
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
   * Source System Inventory Owner Id.
   * @nullable
   */
  declare sourceSystemInventoryOwnerId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Quantity.
   */
  declare expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cross Dock Source Id.
   * @nullable
   */
  declare crossDockSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Inventory Status.
   * @nullable
   */
  declare expectedInventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Underdelivery Percentage.
   */
  declare underdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Unit Symbol.
   * @nullable
   */
  declare expectedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Line Number.
   */
  declare consignerLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Overdelivery Percentage.
   */
  declare overdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Item Number.
   * @nullable
   */
  declare consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentOrderMessages} entity.
   */
  declare inboundShipmentOrderMessage?: InboundShipmentOrderMessages<T> | null;

  constructor(_entityApi: InboundShipmentOrderLineMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderLineMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderNumber: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  sourceSystemInventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  crossDockSourceId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  expectedInventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  underdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  expectedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  consignerLineNumber: DeserializedType<T, 'Edm.Int32'>;
  overdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderMessage?: InboundShipmentOrderMessagesType<T> | null;
}
