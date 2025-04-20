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
import type { WorkflowWorkItemsApi } from './WorkflowWorkItemsApi';
import { WorkflowWorkItemStatus } from './WorkflowWorkItemStatus';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WorkflowWorkItems" of service "d365_metadata".
 */
export class WorkflowWorkItems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkflowWorkItemsType<T>
{
  /**
   * Technical entity name for WorkflowWorkItems.
   */
  static override _entityName = 'WorkflowWorkItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkflowWorkItems entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Data Source Name.
   * @nullable
   */
  declare dataSourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: WorkflowWorkItemStatus | null;
  /**
   * Configuration Id.
   */
  declare configurationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Menu Item Name.
   * @nullable
   */
  declare menuItemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Id.
   * @nullable
   */
  declare companyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Escalation Level.
   */
  declare escalationLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Subject.
   * @nullable
   */
  declare subject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment Id.
   */
  declare commentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Work Item Workitem Type.
   * @nullable
   */
  declare workflowWorkItemWorkitemType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Context.
   * @nullable
   */
  declare context?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: WorkflowWorkItemType | null;
  /**
   * Original Correlation Id.
   */
  declare originalCorrelationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Is Read.
   * @nullable
   */
  declare isRead?: NoYes | null;
  /**
   * Step Id.
   */
  declare stepId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Is Claimed.
   * @nullable
   */
  declare isClaimed?: NoYes | null;
  /**
   * Sub Workflow Id.
   */
  declare subWorkflowId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Correlation Id.
   */
  declare parentCorrelationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Activity Id.
   */
  declare activityId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Workflow Work Item Name.
   * @nullable
   */
  declare workflowWorkItemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Element Id.
   */
  declare elementId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Root Correlation Id.
   */
  declare rootCorrelationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Document Class Id.
   */
  declare documentClassId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Notification Id.
   */
  declare notificationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Correlation Id.
   */
  declare correlationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Due Date Time.
   */
  declare dueDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: WorkflowWorkItemsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkflowWorkItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  dataSourceName?: DeserializedType<T, 'Edm.String'> | null;
  status?: WorkflowWorkItemStatus | null;
  configurationId: DeserializedType<T, 'Edm.Guid'>;
  menuItemName?: DeserializedType<T, 'Edm.String'> | null;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
  escalationLevel: DeserializedType<T, 'Edm.Int32'>;
  subject?: DeserializedType<T, 'Edm.String'> | null;
  commentId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  workflowWorkItemWorkitemType?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  context?: DeserializedType<T, 'Edm.String'> | null;
  type?: WorkflowWorkItemType | null;
  originalCorrelationId: DeserializedType<T, 'Edm.Guid'>;
  isRead?: NoYes | null;
  stepId: DeserializedType<T, 'Edm.Guid'>;
  isClaimed?: NoYes | null;
  subWorkflowId: DeserializedType<T, 'Edm.Guid'>;
  parentCorrelationId: DeserializedType<T, 'Edm.Guid'>;
  activityId: DeserializedType<T, 'Edm.Guid'>;
  workflowWorkItemName?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  elementId: DeserializedType<T, 'Edm.Guid'>;
  rootCorrelationId: DeserializedType<T, 'Edm.Guid'>;
  documentClassId: DeserializedType<T, 'Edm.Int32'>;
  notificationId: DeserializedType<T, 'Edm.Int64'>;
  correlationId: DeserializedType<T, 'Edm.Guid'>;
  dueDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
