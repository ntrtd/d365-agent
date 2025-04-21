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
import type { PurchaseRequisitionApprovalAttachedLinesApi } from './PurchaseRequisitionApprovalAttachedLinesApi';

/**
 * This class represents the entity "PurchaseRequisitionApprovalAttachedLines" of service "d365_metadata".
 */
export class PurchaseRequisitionApprovalAttachedLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseRequisitionApprovalAttachedLinesType<T>
{
  /**
   * Technical entity name for PurchaseRequisitionApprovalAttachedLines.
   */
  static override _entityName = 'PurchaseRequisitionApprovalAttachedLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseRequisitionApprovalAttachedLines entity.
   */
  static _keys = ['RequisitionTableRecId', 'RequisitionLineNumber'];
  /**
   * Requisition Table Rec Id.
   */
  declare requisitionTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Requisition Line Number.
   */
  declare requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Date.
   */
  declare requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Purchase Quantity.
   */
  declare requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PurchaseRequisitionApprovalAttachedLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseRequisitionApprovalAttachedLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionTableRecId: DeserializedType<T, 'Edm.Int64'>;
  requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
}
