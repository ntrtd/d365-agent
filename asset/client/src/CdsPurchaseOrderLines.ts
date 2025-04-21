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
import type { CdsPurchaseOrderLinesApi } from './CdsPurchaseOrderLinesApi';
import { NoYes } from './NoYes';
import { PurchStatus } from './PurchStatus';
import { TradeWorkflowState } from './TradeWorkflowState';
import {
  PurchaseOrderHeadersV2,
  PurchaseOrderHeadersV2Type
} from './PurchaseOrderHeadersV2';

/**
 * This class represents the entity "CDSPurchaseOrderLines" of service "d365_metadata".
 */
export class CdsPurchaseOrderLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsPurchaseOrderLinesType<T>
{
  /**
   * Technical entity name for CdsPurchaseOrderLines.
   */
  static override _entityName = 'CDSPurchaseOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsPurchaseOrderLines entity.
   */
  static _keys = ['dataAreaId', 'PurchaseOrderNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Partial Delivery Prevented.
   * @nullable
   */
  declare isPartialDeliveryPrevented?: NoYes | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Formatted Delvery Address.
   * @nullable
   */
  declare formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Order Line Status.
   * @nullable
   */
  declare purchaseOrderLineStatus?: PurchStatus | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Catch Weight Quantity.
   */
  declare orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Reference.
   * @nullable
   */
  declare customerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Requisition Number.
   * @nullable
   */
  declare customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow State.
   * @nullable
   */
  declare workflowState?: TradeWorkflowState | null;
  /**
   * Confirmed Delivery Date.
   */
  declare confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Hierachy Name.
   * @nullable
   */
  declare procurementProductCategoryHierachyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Personnel Number.
   * @nullable
   */
  declare requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Unit Symbol.
   * @nullable
   */
  declare catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeadersV2} entity.
   */
  declare purchaseOrderHeaderV2?: PurchaseOrderHeadersV2<T> | null;

  constructor(_entityApi: CdsPurchaseOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsPurchaseOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  isPartialDeliveryPrevented?: NoYes | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchaseOrderLineStatus?: PurchStatus | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  orderedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  customerReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  customerRequisitionNumber?: DeserializedType<T, 'Edm.String'> | null;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  workflowState?: TradeWorkflowState | null;
  confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryHierachyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseOrderHeaderV2?: PurchaseOrderHeadersV2Type<T> | null;
}
