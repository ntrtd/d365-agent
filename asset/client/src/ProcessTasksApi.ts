/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessTasks } from './ProcessTasks';
import { ProcessTasksRequestBuilder } from './ProcessTasksRequestBuilder';
import { ProcessGroupAssignmentsApi } from './ProcessGroupAssignmentsApi';
import { ProcessHeadersApi } from './ProcessHeadersApi';
import { OnboardProcessTasksDualWriteApi } from './OnboardProcessTasksDualWriteApi';
import { HcmProcessTaskAssignmentsApi } from './HcmProcessTaskAssignmentsApi';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';
import { NoYes } from './NoYes';
import { MenuItemType } from './MenuItemType';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProcessTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessTasks<DeSerializersT>, DeSerializersT>
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
  ): ProcessTasksApi<DeSerializersT> {
    return new ProcessTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assignedGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_GROUP: OneToOneLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link process} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESS: OneToOneLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      ProcessHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onboardTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARD_TASKS: OneToManyLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      OnboardProcessTasksDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNMENTS: OneToManyLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      HcmProcessTaskAssignmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProcessGroupAssignmentsApi<DeSerializersT>,
      ProcessHeadersApi<DeSerializersT>,
      OnboardProcessTasksDualWriteApi<DeSerializersT>,
      HcmProcessTaskAssignmentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSIGNED_GROUP: new OneToOneLink('Assigned_Group', this, linkedApis[0]),
      PROCESS: new OneToOneLink('Process', this, linkedApis[1]),
      ONBOARD_TASKS: new OneToManyLink('OnboardTasks', this, linkedApis[2]),
      ASSIGNMENTS: new OneToManyLink('Assignments', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ProcessTasks;

  requestBuilder(): ProcessTasksRequestBuilder<DeSerializersT> {
    return new ProcessTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProcessTasks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProcessTasks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProcessTasks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProcessTasks, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TASK_ID: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ASSIGNED_GROUP_NAME: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessAssignmentType,
      true,
      true
    >;
    ASSIGNED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessTaskStatus,
      true,
      true
    >;
    PROCESS_NAME: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OPTIONAL: EnumField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOLVED_BY_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENU_ITEM: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_TASK_ID: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETION_DATE_TIME: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSIGNED_POSITION_POSITION_ID: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_ID: OrderableEdmTypeField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    MENU_ITEM_TYPE: EnumField<
      ProcessTasks<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assignedGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_GROUP: OneToOneLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link process} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESS: OneToOneLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      ProcessHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onboardTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARD_TASKS: OneToManyLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      OnboardProcessTasksDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNMENTS: OneToManyLink<
      ProcessTasks<DeSerializersT>,
      DeSerializersT,
      HcmProcessTaskAssignmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcessTasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link taskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ID: fieldBuilder.buildEdmTypeField('TaskId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link assignedGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'AssignedGroup_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link assignmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNMENT_TYPE: fieldBuilder.buildEnumField(
          'AssignmentType',
          BusinessProcessAssignmentType,
          true
        ),
        /**
         * Static representation of the {@link assignedWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssignedWorker_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BusinessProcessTaskStatus,
          true
        ),
        /**
         * Static representation of the {@link processName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_NAME: fieldBuilder.buildEdmTypeField(
          'ProcessName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOptional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPTIONAL: fieldBuilder.buildEnumField('IsOptional', NoYes, true),
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
         * Static representation of the {@link instructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'Instructions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resolvedByPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLVED_BY_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResolvedBy_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link menuItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ITEM: fieldBuilder.buildEdmTypeField(
          'MenuItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link templateTaskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_TASK_ID: fieldBuilder.buildEdmTypeField(
          'TemplateTaskId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link contactPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPerson_PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link completionDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CompletionDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assignedPositionPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_POSITION_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'AssignedPosition_PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link menuItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ITEM_TYPE: fieldBuilder.buildEnumField(
          'MenuItemType',
          MenuItemType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessTasks)
      };
    }

    return this._schema;
  }
}
