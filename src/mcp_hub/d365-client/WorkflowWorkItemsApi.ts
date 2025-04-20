/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowWorkItems } from './WorkflowWorkItems';
import { WorkflowWorkItemsRequestBuilder } from './WorkflowWorkItemsRequestBuilder';
import { WorkflowWorkItemStatus } from './WorkflowWorkItemStatus';
import { WorkflowWorkItemType } from './WorkflowWorkItemType';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class WorkflowWorkItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkflowWorkItems<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): WorkflowWorkItemsApi<DeSerializersT> {
    return new WorkflowWorkItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WorkflowWorkItems;

  requestBuilder(): WorkflowWorkItemsRequestBuilder<DeSerializersT> {
    return new WorkflowWorkItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkflowWorkItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkflowWorkItems<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkflowWorkItems<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof WorkflowWorkItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkflowWorkItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DATA_SOURCE_NAME: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      WorkflowWorkItemStatus,
      true,
      true
    >;
    CONFIGURATION_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    MENU_ITEM_NAME: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESCALATION_LEVEL: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_WORK_ITEM_WORKITEM_TYPE: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONTEXT: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      WorkflowWorkItemType,
      true,
      true
    >;
    ORIGINAL_CORRELATION_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    IS_READ: EnumField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STEP_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    IS_CLAIMED: EnumField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_WORKFLOW_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_CORRELATION_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ACTIVITY_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    WORKFLOW_WORK_ITEM_NAME: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELEMENT_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ROOT_CORRELATION_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DOCUMENT_CLASS_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NOTIFICATION_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CORRELATION_ID: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DUE_DATE_TIME: OrderableEdmTypeField<
      WorkflowWorkItems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<WorkflowWorkItems<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link dataSourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'DataSourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          WorkflowWorkItemStatus,
          true
        ),
        /**
         * Static representation of the {@link configurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ConfigurationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link menuItemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'MenuItemName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link escalationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESCALATION_LEVEL: fieldBuilder.buildEdmTypeField(
          'EscalationLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link subject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT: fieldBuilder.buildEdmTypeField('Subject', 'Edm.String', true),
        /**
         * Static representation of the {@link commentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT_ID: fieldBuilder.buildEdmTypeField(
          'CommentId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflowWorkItemWorkitemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_WORK_ITEM_WORKITEM_TYPE: fieldBuilder.buildEdmTypeField(
          'WorkflowWorkItem_WorkitemType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link context} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTEXT: fieldBuilder.buildEdmTypeField('Context', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', WorkflowWorkItemType, true),
        /**
         * Static representation of the {@link originalCorrelationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_CORRELATION_ID: fieldBuilder.buildEdmTypeField(
          'OriginalCorrelationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link isRead} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_READ: fieldBuilder.buildEnumField('IsRead', NoYes, true),
        /**
         * Static representation of the {@link stepId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEP_ID: fieldBuilder.buildEdmTypeField('StepId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link isClaimed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CLAIMED: fieldBuilder.buildEnumField('IsClaimed', NoYes, true),
        /**
         * Static representation of the {@link subWorkflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_WORKFLOW_ID: fieldBuilder.buildEdmTypeField(
          'SubWorkflowId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link parentCorrelationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CORRELATION_ID: fieldBuilder.buildEdmTypeField(
          'ParentCorrelationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link activityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'ActivityId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link workflowWorkItemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_WORK_ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'WorkflowWorkItem_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link elementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ElementId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link rootCorrelationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_CORRELATION_ID: fieldBuilder.buildEdmTypeField(
          'RootCorrelationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link documentClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link notificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'NotificationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link correlationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRELATION_ID: fieldBuilder.buildEdmTypeField(
          'CorrelationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link dueDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DueDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkflowWorkItems)
      };
    }

    return this._schema;
  }
}
