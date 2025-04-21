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
import type { PurchaseRequisitionApprovalHeadersApi } from './PurchaseRequisitionApprovalHeadersApi';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';

/**
 * This class represents the entity "PurchaseRequisitionApprovalHeaders" of service "d365_metadata".
 */
export class PurchaseRequisitionApprovalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseRequisitionApprovalHeadersType<T>
{
  /**
   * Technical entity name for PurchaseRequisitionApprovalHeaders.
   */
  static override _entityName = 'PurchaseRequisitionApprovalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseRequisitionApprovalHeaders entity.
   */
  static _keys = ['RequisitionNumber', 'WorkItemRecId'];
  /**
   * Requisition Number.
   */
  declare requisitionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Workflow Comment.
   * @nullable
   */
  declare workflowComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requisition Table Rec Id.
   */
  declare requisitionTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requisition Name.
   * @nullable
   */
  declare requisitionName?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: PurchaseRequisitionApprovalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseRequisitionApprovalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionNumber: DeserializedType<T, 'Edm.String'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  workflowComment?: DeserializedType<T, 'Edm.String'> | null;
  requisitionTableRecId: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  requisitionName?: DeserializedType<T, 'Edm.String'> | null;
  approvalUser?: DeserializedType<T, 'Edm.String'> | null;
  workItemType?: WorkflowWorkItemType | null;
  workflowElementId: DeserializedType<T, 'Edm.Guid'>;
}
