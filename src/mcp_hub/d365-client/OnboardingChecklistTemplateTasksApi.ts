/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingChecklistTemplateTasks } from './OnboardingChecklistTemplateTasks';
import { OnboardingChecklistTemplateTasksRequestBuilder } from './OnboardingChecklistTemplateTasksRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { PositionsV2Api } from './PositionsV2Api';
import { WorkersApi } from './WorkersApi';
import { OnboardingChecklistTemplateHeadersApi } from './OnboardingChecklistTemplateHeadersApi';
import { OnboardingLibraryTasksApi } from './OnboardingLibraryTasksApi';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { MenuItemType } from './MenuItemType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OnboardingChecklistTemplateTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OnboardingChecklistTemplateTasks<DeSerializersT>, DeSerializersT>
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
  ): OnboardingChecklistTemplateTasksApi<DeSerializersT> {
    return new OnboardingChecklistTemplateTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link templateChecklist} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEMPLATE_CHECKLIST: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link libraryTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASKS: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeopleApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      OnboardingChecklistTemplateHeadersApi<DeSerializersT>,
      OnboardingLibraryTasksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0]),
      POSITION: new OneToOneLink('Position', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2]),
      TEMPLATE_CHECKLIST: new OneToOneLink(
        'TemplateChecklist',
        this,
        linkedApis[3]
      ),
      LIBRARY_TASKS: new OneToOneLink('LibraryTasks', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = OnboardingChecklistTemplateTasks;

  requestBuilder(): OnboardingChecklistTemplateTasksRequestBuilder<DeSerializersT> {
    return new OnboardingChecklistTemplateTasksRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OnboardingChecklistTemplateTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardingChecklistTemplateTasks<DeSerializersT>,
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
    typeof OnboardingChecklistTemplateTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardingChecklistTemplateTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TASK_ID: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIBRARY_TASK: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_POSITION_ID: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessAssignmentType,
      true,
      true
    >;
    ASSIGNED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_LINK_TYPE: EnumField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    CHECKLIST_TEMPLATE_HEADER_NAME: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OPTIONAL: EnumField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_URL_FOR_TASK_LINK: EnumField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUE_DATE_OFFSET_DAYS: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TASK_LINK: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK: OrderableEdmTypeField<
      OnboardingChecklistTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link templateChecklist} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEMPLATE_CHECKLIST: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link libraryTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASKS: OneToOneLink<
      OnboardingChecklistTemplateTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardingChecklistTemplateTasks<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
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
         * Static representation of the {@link instructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'Instructions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link libraryTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIBRARY_TASK: fieldBuilder.buildEdmTypeField(
          'LibraryTask',
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
          'AssignedWorkerPersonnelNumber',
          'Edm.String',
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
         * Static representation of the {@link checklistTemplateHeaderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_TEMPLATE_HEADER_NAME: fieldBuilder.buildEdmTypeField(
          'ChecklistTemplateHeaderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOptional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPTIONAL: fieldBuilder.buildEnumField('IsOptional', NoYes, true),
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
         * Static representation of the {@link dueDateOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE_OFFSET_DAYS: fieldBuilder.buildEdmTypeField(
          'DueDateOffsetDays',
          'Edm.Int32',
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
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnboardingChecklistTemplateTasks)
      };
    }

    return this._schema;
  }
}
