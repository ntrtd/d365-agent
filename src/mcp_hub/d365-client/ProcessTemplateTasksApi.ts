/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessTemplateTasks } from './ProcessTemplateTasks';
import { ProcessTemplateTasksRequestBuilder } from './ProcessTemplateTasksRequestBuilder';
import { ProcessGroupAssignmentsApi } from './ProcessGroupAssignmentsApi';
import { ProcessTemplateHeadersApi } from './ProcessTemplateHeadersApi';
import { MenuItemType } from './MenuItemType';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { NoYes } from './NoYes';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
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
export class ProcessTemplateTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessTemplateTasks<DeSerializersT>, DeSerializersT>
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
  ): ProcessTemplateTasksApi<DeSerializersT> {
    return new ProcessTemplateTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assignedGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_GROUP: OneToOneLink<
      ProcessTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link template} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEMPLATE: OneToOneLink<
      ProcessTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProcessGroupAssignmentsApi<DeSerializersT>,
      ProcessTemplateHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSIGNED_GROUP: new OneToOneLink('Assigned_Group', this, linkedApis[0]),
      TEMPLATE: new OneToOneLink('Template', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProcessTemplateTasks;

  requestBuilder(): ProcessTemplateTasksRequestBuilder<DeSerializersT> {
    return new ProcessTemplateTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessTemplateTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProcessTemplateTasks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessTemplateTasks<DeSerializersT>,
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
    typeof ProcessTemplateTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessTemplateTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TASK_ID: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MENU_ITEM_TYPE: EnumField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIBRARY_TASK_NAME: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_POSITION_POSITION_ID: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIBRARY_TASK_PROCESS_TYPE: EnumField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessAssignmentType,
      true,
      true
    >;
    ASSIGNED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OPTIONAL: EnumField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_HEADER_GENERIC_SUBTYPE: EnumField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    DUE_DATE_OFFSET_DAYS: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_HEADER_NAME: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_HEADER_PROCESS_TYPE: EnumField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    MENU_ITEM: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_GROUP_NAME: OrderableEdmTypeField<
      ProcessTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assignedGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_GROUP: OneToOneLink<
      ProcessTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link template} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEMPLATE: OneToOneLink<
      ProcessTemplateTasks<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcessTemplateTasks<DeSerializers>>;
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
         * Static representation of the {@link menuItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ITEM_TYPE: fieldBuilder.buildEnumField(
          'MenuItemType',
          MenuItemType,
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
         * Static representation of the {@link libraryTaskName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIBRARY_TASK_NAME: fieldBuilder.buildEdmTypeField(
          'LibraryTask_Name',
          'Edm.String',
          true
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
         * Static representation of the {@link libraryTaskProcessType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIBRARY_TASK_PROCESS_TYPE: fieldBuilder.buildEnumField(
          'LibraryTask_ProcessType',
          BusinessProcessType,
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
          'AssignedWorker_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOptional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPTIONAL: fieldBuilder.buildEnumField('IsOptional', NoYes, true),
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
         * Static representation of the {@link templateHeaderGenericSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_HEADER_GENERIC_SUBTYPE: fieldBuilder.buildEnumField(
          'TemplateHeader_GenericSubtype',
          BusinessProcessGenericSubtype,
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link templateHeaderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_HEADER_NAME: fieldBuilder.buildEdmTypeField(
          'TemplateHeader_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPerson_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link templateHeaderProcessType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_HEADER_PROCESS_TYPE: fieldBuilder.buildEnumField(
          'TemplateHeader_ProcessType',
          BusinessProcessType,
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
         * Static representation of the {@link assignedGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'AssignedGroup_Name',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessTemplateTasks)
      };
    }

    return this._schema;
  }
}
