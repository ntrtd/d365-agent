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
import type { ProductReceiptLinesV2Api } from './ProductReceiptLinesV2Api';
import {
  ProductReceiptHeaders,
  ProductReceiptHeadersType
} from './ProductReceiptHeaders';

/**
 * This class represents the entity "ProductReceiptLinesV2" of service "d365_metadata".
 */
export class ProductReceiptLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductReceiptLinesV2Type<T>
{
  /**
   * Technical entity name for ProductReceiptLinesV2.
   */
  static override _entityName = 'ProductReceiptLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductReceiptLinesV2 entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Purchase Quantity.
   */
  declare remainingPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Purchase Quantity.
   */
  declare receivedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Delivery Date.
   */
  declare expectedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Inventory Quantity.
   */
  declare remainingInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Warehouse Location Id.
   * @nullable
   */
  declare receivingWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Received Inventory Quantity.
   */
  declare receivedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order Line Number.
   */
  declare purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Receipt Header Record Id.
   */
  declare productReceiptHeaderRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Purchase Quantity.
   */
  declare orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Receipt Number.
   * @nullable
   */
  declare productReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Hierarchy Name.
   * @nullable
   */
  declare procurementProductCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Inventory Status Id.
   * @nullable
   */
  declare receivedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchaser Personnel Number.
   * @nullable
   */
  declare purchaserPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Receipt Date.
   */
  declare productReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link ProductReceiptHeaders} entity.
   */
  declare productReceiptHeader?: ProductReceiptHeaders<T> | null;

  constructor(_entityApi: ProductReceiptLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductReceiptLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  remainingPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  receivedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  expectedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  remainingInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  receivedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  productReceiptHeaderRecordId: DeserializedType<T, 'Edm.Int64'>;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  purchaserPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  productReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productReceiptHeader?: ProductReceiptHeadersType<T> | null;
}
