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
import type { PurchaseRequisitionApprovalLinesApi } from './PurchaseRequisitionApprovalLinesApi';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';

/**
 * This class represents the entity "PurchaseRequisitionApprovalLines" of service "d365_metadata".
 */
export class PurchaseRequisitionApprovalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseRequisitionApprovalLinesType<T>
{
  /**
   * Technical entity name for PurchaseRequisitionApprovalLines.
   */
  static override _entityName = 'PurchaseRequisitionApprovalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseRequisitionApprovalLines entity.
   */
  static _keys = [
    'RequisitionNumber',
    'RequisitionLineNumber',
    'WorkItemRecId'
  ];
  /**
   * Requisition Number.
   */
  declare requisitionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Requisition Line Number.
   */
  declare requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Work Item Type.
   * @nullable
   */
  declare workItemType?: WorkflowWorkItemType | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * Requested Date.
   */
  declare requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requisition Table Rec Id.
   */
  declare requisitionTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Purchase Price Quantity.
   */
  declare purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requisition Name.
   * @nullable
   */
  declare requisitionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Requested Purchase Quantity.
   */
  declare requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Price.
   */
  declare purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Workflow Element Id.
   */
  declare workflowElementId: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: PurchaseRequisitionApprovalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseRequisitionApprovalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionNumber: DeserializedType<T, 'Edm.String'>;
  requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  workItemType?: WorkflowWorkItemType | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  requestedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  requisitionTableRecId: DeserializedType<T, 'Edm.Int64'>;
  purchasePriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  requisitionName?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  requestedPurchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchasePrice: DeserializedType<T, 'Edm.Decimal'>;
  workflowElementId: DeserializedType<T, 'Edm.Guid'>;
}
