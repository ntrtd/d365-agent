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
import type { PurchaseOrderLinesForAiApi } from './PurchaseOrderLinesForAiApi';
import { PurchStatus } from './PurchStatus';
import { NoYes } from './NoYes';
import { PurchaseType } from './PurchaseType';
import {
  ReleasedProductsForAi,
  ReleasedProductsForAiType
} from './ReleasedProductsForAi';
import { VendorsForAi, VendorsForAiType } from './VendorsForAi';

/**
 * This class represents the entity "PurchaseOrderLinesForAI" of service "d365_metadata".
 */
export class PurchaseOrderLinesForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderLinesForAiType<T>
{
  /**
   * Technical entity name for PurchaseOrderLinesForAi.
   */
  static override _entityName = 'PurchaseOrderLinesForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderLinesForAi entity.
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
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Line Status.
   * @nullable
   */
  declare purchaseOrderLineStatus?: PurchStatus | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: NoYes | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmed Delivery Date.
   */
  declare confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ordered Purchase Quantity.
   */
  declare orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Type.
   * @nullable
   */
  declare purchaseType?: PurchaseType | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsForAi} entity.
   */
  declare item?: ReleasedProductsForAi<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsForAi} entity.
   */
  declare vendor?: VendorsForAi<T> | null;

  constructor(_entityApi: PurchaseOrderLinesForAiApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderLinesForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderLineStatus?: PurchStatus | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDeleted?: NoYes | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  purchaseType?: PurchaseType | null;
  item?: ReleasedProductsForAiType<T> | null;
  vendor?: VendorsForAiType<T> | null;
}
