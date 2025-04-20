/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessLibraryTasks } from './ProcessLibraryTasks';
import { ProcessLibraryTasksRequestBuilder } from './ProcessLibraryTasksRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { BusinessProcessType } from './BusinessProcessType';
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
export class ProcessLibraryTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessLibraryTasks<DeSerializersT>, DeSerializersT>
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
  ): ProcessLibraryTasksApi<DeSerializersT> {
    return new ProcessLibraryTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      ProcessLibraryTasks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [PeopleApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      CONTACT_PERSON: new OneToOneLink('Contact_Person', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ProcessLibraryTasks;

  requestBuilder(): ProcessLibraryTasksRequestBuilder<DeSerializersT> {
    return new ProcessLibraryTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessLibraryTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProcessLibraryTasks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessLibraryTasks<DeSerializersT>,
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
    typeof ProcessLibraryTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessLibraryTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TASK: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_POSITION_ID: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessAssignmentType,
      true,
      true
    >;
    ASSIGNED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_LINK_TYPE: EnumField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    IS_OPTIONAL: EnumField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_URL_FOR_TASK_LINK: EnumField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUE_DATE_OFFSET_DAYS: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TASK_LINK: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_GROUP: OrderableEdmTypeField<
      ProcessLibraryTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACT_PERSON: OneToOneLink<
      ProcessLibraryTasks<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcessLibraryTasks<DeSerializers>>;
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
         * Static representation of the {@link processType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TYPE: fieldBuilder.buildEnumField(
          'ProcessType',
          BusinessProcessType,
          true
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
        /**
         * Static representation of the {@link assignedGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_GROUP: fieldBuilder.buildEdmTypeField(
          'AssignedGroup',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessLibraryTasks)
      };
    }

    return this._schema;
  }
}
