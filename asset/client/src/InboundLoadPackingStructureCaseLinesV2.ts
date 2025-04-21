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
import type { InboundLoadPackingStructureCaseLinesV2Api } from './InboundLoadPackingStructureCaseLinesV2Api';
import {
  InboundLoadPackingStructureCases,
  InboundLoadPackingStructureCasesType
} from './InboundLoadPackingStructureCases';

/**
 * This class represents the entity "InboundLoadPackingStructureCaseLinesV2" of service "d365_metadata".
 */
export class InboundLoadPackingStructureCaseLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundLoadPackingStructureCaseLinesV2Type<T>
{
  /**
   * Technical entity name for InboundLoadPackingStructureCaseLinesV2.
   */
  static override _entityName = 'InboundLoadPackingStructureCaseLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundLoadPackingStructureCaseLinesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'InboundShipmentId',
    'PackingStructureLicensePlateNumber',
    'ItemNumber',
    'ProductColorId',
    'ProductSizeId',
    'ProductConfigurationId',
    'ProductStyleId',
    'ItemBatchNumber',
    'ItemSerialNumber',
    'PurchaseOrderNumber',
    'PurchaseOrderLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Id.
   */
  declare inboundShipmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Packing Structure License Plate Number.
   */
  declare packingStructureLicensePlateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Number.
   */
  declare itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Serial Number.
   */
  declare itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Line Number.
   */
  declare purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Expiration Date.
   */
  declare itemBatchExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Captured Weight.
   */
  declare capturedWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link InboundLoadPackingStructureCases} entity.
   */
  declare loadPackingStructureCase?: InboundLoadPackingStructureCases<T> | null;

  constructor(_entityApi: InboundLoadPackingStructureCaseLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface InboundLoadPackingStructureCaseLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentId: DeserializedType<T, 'Edm.String'>;
  packingStructureLicensePlateNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  itemSerialNumber: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  capturedWeight: DeserializedType<T, 'Edm.Decimal'>;
  loadPackingStructureCase?: InboundLoadPackingStructureCasesType<T> | null;
}
