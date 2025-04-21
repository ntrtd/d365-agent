/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingWorkerChecklistTasks } from './OnboardingWorkerChecklistTasks';
import { OnboardingWorkerChecklistTasksRequestBuilder } from './OnboardingWorkerChecklistTasksRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { PositionsV2Api } from './PositionsV2Api';
import { WorkersApi } from './WorkersApi';
import { OnboardingWorkerChecklistHeadersApi } from './OnboardingWorkerChecklistHeadersApi';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { NoYes } from './NoYes';
import { MenuItemType } from './MenuItemType';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OnboardingWorkerChecklistTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OnboardingWorkerChecklistTasks<DeSerializersT>, DeSerializersT>
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
  ): OnboardingWorkerChecklistTasksApi<DeSerializersT> {
    return new OnboardingWorkerChecklistTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resolvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOLVING_WORKER: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link checklist} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeopleApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      OnboardingWorkerChecklistHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0]),
      POSITION: new OneToOneLink('Position', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2]),
      RESOLVING_WORKER: new OneToOneLink(
        'ResolvingWorker',
        this,
        linkedApis[3]
      ),
      CHECKLIST: new OneToOneLink('Checklist', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = OnboardingWorkerChecklistTasks;

  requestBuilder(): OnboardingWorkerChecklistTasksRequestBuilder<DeSerializersT> {
    return new OnboardingWorkerChecklistTasksRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OnboardingWorkerChecklistTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardingWorkerChecklistTasks<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof OnboardingWorkerChecklistTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardingWorkerChecklistTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHECKLIST_HEADER_ID: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    TASK_ID: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessAssignmentType,
      true,
      true
    >;
    TASK: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OPTIONAL: EnumField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_GROUP_ID: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_POSITION_ID: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_URL_FOR_TASK_LINK: EnumField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TASK_LINK_TYPE: EnumField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    CHECKLIST_NAME: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_RESOLVED_BY: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TASK_COMPLETION_DATE: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TASK_LINK: OrderableEdmTypeField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_STATUS: EnumField<
      OnboardingWorkerChecklistTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessTaskStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resolvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOLVING_WORKER: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link checklist} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST: OneToOneLink<
      OnboardingWorkerChecklistTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardingWorkerChecklistTasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link checklistHeaderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_HEADER_ID: fieldBuilder.buildEdmTypeField(
          'ChecklistHeaderId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link taskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ID: fieldBuilder.buildEdmTypeField('TaskId', 'Edm.Guid', false),
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
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
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
         * Static representation of the {@link assignedGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'AssignedGroupId',
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
         * Static representation of the {@link assignedWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssignedWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assignedPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'AssignedPositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useUrlForTaskLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_URL_FOR_TASK_LINK: fieldBuilder.buildEnumField(
          'UseUrlForTaskLink',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taskLinkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LINK_TYPE: fieldBuilder.buildEnumField(
          'TaskLinkType',
          MenuItemType,
          true
        ),
        /**
         * Static representation of the {@link checklistName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_NAME: fieldBuilder.buildEdmTypeField(
          'ChecklistName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskResolvedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_RESOLVED_BY: fieldBuilder.buildEdmTypeField(
          'TaskResolvedBy',
          'Edm.String',
          true
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
         * Static representation of the {@link taskCompletionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_COMPLETION_DATE: fieldBuilder.buildEdmTypeField(
          'TaskCompletionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taskLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LINK: fieldBuilder.buildEdmTypeField(
          'TaskLink',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_STATUS: fieldBuilder.buildEnumField(
          'TaskStatus',
          BusinessProcessTaskStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnboardingWorkerChecklistTasks)
      };
    }

    return this._schema;
  }
}
