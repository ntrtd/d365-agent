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
import type { PurchaseOrderApprovalHeadersApi } from './PurchaseOrderApprovalHeadersApi';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';

/**
 * This class represents the entity "PurchaseOrderApprovalHeaders" of service "d365_metadata".
 */
export class PurchaseOrderApprovalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderApprovalHeadersType<T>
{
  /**
   * Technical entity name for PurchaseOrderApprovalHeaders.
   */
  static override _entityName = 'PurchaseOrderApprovalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderApprovalHeaders entity.
   */
  static _keys = ['PurchaseOrderNumber', 'LegalEntity', 'WorkItemRecId'];
  /**
   * Purchase Order Number.
   */
  declare purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
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
   * Purchase Order Name.
   * @nullable
   */
  declare purchaseOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Vendor Account Number.
   * @nullable
   */
  declare orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval User.
   * @nullable
   */
  declare approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Item Type.
   * @nullable
   */
  declare workItemType?: WorkflowWorkItemType | null;
  /**
   * Workflow Element Id.
   */
  declare workflowElementId: DeserializedType<T, 'Edm.Guid'>;

  constructor(_entityApi: PurchaseOrderApprovalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderApprovalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrderNumber: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  orderVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  workItemType?: WorkflowWorkItemType | null;
  workflowElementId: DeserializedType<T, 'Edm.Guid'>;
}
