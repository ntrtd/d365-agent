/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingLibraryTasks } from './OnboardingLibraryTasks';
import { OnboardingLibraryTasksRequestBuilder } from './OnboardingLibraryTasksRequestBuilder';
import { OnboardingChecklistTemplateTasksApi } from './OnboardingChecklistTemplateTasksApi';
import { PositionsV2Api } from './PositionsV2Api';
import { WorkersApi } from './WorkersApi';
import { OnboardingLibraryTaskGroupingsApi } from './OnboardingLibraryTaskGroupingsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OnboardingLibraryTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OnboardingLibraryTasks<DeSerializersT>, DeSerializersT>
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
  ): OnboardingLibraryTasksApi<DeSerializersT> {
    return new OnboardingLibraryTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link tasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASKS: OneToManyLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link libraryTaskGroupings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASK_GROUPINGS: OneToManyLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTaskGroupingsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnboardingChecklistTemplateTasksApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      OnboardingLibraryTaskGroupingsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TASKS: new OneToManyLink('Tasks', this, linkedApis[0]),
      POSITION: new OneToOneLink('Position', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2]),
      LIBRARY_TASK_GROUPINGS: new OneToManyLink(
        'LibraryTaskGroupings',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = OnboardingLibraryTasks;

  requestBuilder(): OnboardingLibraryTasksRequestBuilder<DeSerializersT> {
    return new OnboardingLibraryTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OnboardingLibraryTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardingLibraryTasks<DeSerializersT>,
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
    typeof OnboardingLibraryTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardingLibraryTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TASK: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_POSITION_ID: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessAssignmentType,
      true,
      true
    >;
    ASSIGNED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_LINK_TYPE: EnumField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    IS_OPTIONAL: EnumField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_URL_FOR_TASK_LINK: EnumField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUE_DATE_OFFSET_DAYS: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TASK_LINK: OrderableEdmTypeField<
      OnboardingLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASKS: OneToManyLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link libraryTaskGroupings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LIBRARY_TASK_GROUPINGS: OneToManyLink<
      OnboardingLibraryTasks<DeSerializersT>,
      DeSerializersT,
      OnboardingLibraryTaskGroupingsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardingLibraryTasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', false),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnboardingLibraryTasks)
      };
    }

    return this._schema;
  }
}
