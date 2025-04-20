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
import type { PurchaseOrderApprovalLinesApi } from './PurchaseOrderApprovalLinesApi';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';

/**
 * This class represents the entity "PurchaseOrderApprovalLines" of service "d365_metadata".
 */
export class PurchaseOrderApprovalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderApprovalLinesType<T>
{
  /**
   * Technical entity name for PurchaseOrderApprovalLines.
   */
  static override _entityName = 'PurchaseOrderApprovalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderApprovalLines entity.
   */
  static _keys = [
    'PurchaseOrderNumber',
    'LineNumber',
    'LegalEntity',
    'WorkItemRecId'
  ];
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Delivery Date.
   */
  declare requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Purchase Quantity.
   */
  declare orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Work Item Type.
   * @nullable
   */
  declare workItemType?: WorkflowWorkItemType | null;
  /**
   * Workflow Element Id.
   */
  declare workflowElementId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PurchaseOrderApprovalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderApprovalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  requestedDeliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  orderedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  workItemType?: WorkflowWorkItemType | null;
  workflowElementId: DeserializedType<T, 'Edm.Guid'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
}
