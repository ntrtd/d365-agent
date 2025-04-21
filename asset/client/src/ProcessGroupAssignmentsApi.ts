/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessGroupAssignments } from './ProcessGroupAssignments';
import { ProcessGroupAssignmentsRequestBuilder } from './ProcessGroupAssignmentsRequestBuilder';
import { ProcessTemplateTasksApi } from './ProcessTemplateTasksApi';
import { ProcessTasksApi } from './ProcessTasksApi';
import { ProcessGroupAssignmentMembersApi } from './ProcessGroupAssignmentMembersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProcessGroupAssignmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessGroupAssignments<DeSerializersT>, DeSerializersT>
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
  ): ProcessGroupAssignmentsApi<DeSerializersT> {
    return new ProcessGroupAssignmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assignedTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_TEMPLATE_TASKS: OneToManyLink<
      ProcessGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assignedTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_TASKS: OneToManyLink<
      ProcessGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link members} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEMBERS: OneToManyLink<
      ProcessGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentMembersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProcessTemplateTasksApi<DeSerializersT>,
      ProcessTasksApi<DeSerializersT>,
      ProcessGroupAssignmentMembersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSIGNED_TEMPLATE_TASKS: new OneToManyLink(
        'AssignedTemplateTasks',
        this,
        linkedApis[0]
      ),
      ASSIGNED_TASKS: new OneToManyLink('AssignedTasks', this, linkedApis[1]),
      MEMBERS: new OneToManyLink('Members', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ProcessGroupAssignments;

  requestBuilder(): ProcessGroupAssignmentsRequestBuilder<DeSerializersT> {
    return new ProcessGroupAssignmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessGroupAssignments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessGroupAssignments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessGroupAssignments<DeSerializersT>,
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
    typeof ProcessGroupAssignments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessGroupAssignments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      ProcessGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: EnumField<
      ProcessGroupAssignments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProcessGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assignedTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_TEMPLATE_TASKS: OneToManyLink<
      ProcessGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assignedTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_TASKS: OneToManyLink<
      ProcessGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link members} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEMBERS: OneToManyLink<
      ProcessGroupAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentMembersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcessGroupAssignments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessGroupAssignments)
      };
    }

    return this._schema;
  }
}
