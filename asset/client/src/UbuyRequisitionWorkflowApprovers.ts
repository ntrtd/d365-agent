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
import type { UbuyRequisitionWorkflowApproversApi } from './UbuyRequisitionWorkflowApproversApi';
import { WorkflowWorkItemStatus } from './WorkflowWorkItemStatus';

/**
 * This class represents the entity "UbuyRequisitionWorkflowApprovers" of service "d365_metadata".
 */
export class UbuyRequisitionWorkflowApprovers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UbuyRequisitionWorkflowApproversType<T>
{
  /**
   * Technical entity name for UbuyRequisitionWorkflowApprovers.
   */
  static override _entityName = 'UbuyRequisitionWorkflowApprovers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UbuyRequisitionWorkflowApprovers entity.
   */
  static _keys = ['RequisitionNumber', 'UserId'];
  /**
   * Requisition Number.
   */
  declare requisitionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Name.
   * @nullable
   */
  declare personName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requisition Workflow Approver Status.
   * @nullable
   */
  declare requisitionWorkflowApproverStatus?: WorkflowWorkItemStatus | null;

  constructor(_entityApi: UbuyRequisitionWorkflowApproversApi<T>) {
    super(_entityApi);
  }
}

export interface UbuyRequisitionWorkflowApproversType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionNumber: DeserializedType<T, 'Edm.String'>;
  userId: DeserializedType<T, 'Edm.String'>;
  personName?: DeserializedType<T, 'Edm.String'> | null;
  requisitionWorkflowApproverStatus?: WorkflowWorkItemStatus | null;
}
