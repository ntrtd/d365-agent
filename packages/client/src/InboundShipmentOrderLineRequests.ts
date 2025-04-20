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
import type { InboundShipmentOrderLineRequestsApi } from './InboundShipmentOrderLineRequestsApi';
import {
  InboundShipmentOrderRequests,
  InboundShipmentOrderRequestsType
} from './InboundShipmentOrderRequests';

/**
 * This class represents the entity "InboundShipmentOrderLineRequests" of service "d365_metadata".
 */
export class InboundShipmentOrderLineRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderLineRequestsType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderLineRequests.
   */
  static override _entityName = 'InboundShipmentOrderLineRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderLineRequests entity.
   */
  static _keys = [
    'dataAreaId',
    'InboundShipmentOrderRequestId',
    'OrderLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Order Request Id.
   */
  declare inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
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
   * Expected Inventory Status.
   * @nullable
   */
  declare expectedInventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Line Number.
   */
  declare consignerLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Consigner Item Number.
   * @nullable
   */
  declare consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Under Delivery Percentage.
   */
  declare underDeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Over Delivery Percentage.
   */
  declare overDeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
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
   * License Plate Number.
   * @nullable
   */
  declare licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentOrderRequests} entity.
   */
  declare inboundShipmentOrderRequest?: InboundShipmentOrderRequests<T> | null;

  constructor(_entityApi: InboundShipmentOrderLineRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderLineRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  orderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  expectedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  expectedInventoryStatus?: DeserializedType<T, 'Edm.String'> | null;
  consignerLineNumber: DeserializedType<T, 'Edm.Int32'>;
  consignerItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  underDeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  overDeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  expectedUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderRequest?: InboundShipmentOrderRequestsType<T> | null;
}
