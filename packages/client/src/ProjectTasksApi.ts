/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectTasks } from './ProjectTasks';
import { ProjectTasksRequestBuilder } from './ProjectTasksRequestBuilder';
import { SmmShowTimeAs } from './SmmShowTimeAs';
import { SmmActivityTaskTimeType } from './SmmActivityTaskTimeType';
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
export class ProjectTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectTasks<DeSerializersT>, DeSerializersT>
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
  ): ProjectTasksApi<DeSerializersT> {
    return new ProjectTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectTasks;

  requestBuilder(): ProjectTasksRequestBuilder<DeSerializersT> {
    return new ProjectTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectTasks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjectTasks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjectTasks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProjectTasks, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_ID: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_ELEMENT_ID: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_OUTLINE_LEVEL: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PARENT_TASK_ELEMENT_ID: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_STATUS: EnumField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      SmmShowTimeAs,
      true,
      true
    >;
    TASK_TIME_TYPE: EnumField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      SmmActivityTaskTimeType,
      true,
      true
    >;
    TASK_DISPLAY_SEQUENCE: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TASK_NAME: OrderableEdmTypeField<
      ProjectTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectTasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ID: fieldBuilder.buildEdmTypeField('TaskId', 'Edm.String', false),
        /**
         * Static representation of the {@link taskElementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ELEMENT_ID: fieldBuilder.buildEdmTypeField(
          'TaskElementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskOutlineLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_OUTLINE_LEVEL: fieldBuilder.buildEdmTypeField(
          'TaskOutlineLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link parentTaskElementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_TASK_ELEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ParentTaskElementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_STATUS: fieldBuilder.buildEnumField(
          'TaskStatus',
          SmmShowTimeAs,
          true
        ),
        /**
         * Static representation of the {@link taskTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_TIME_TYPE: fieldBuilder.buildEnumField(
          'TaskTimeType',
          SmmActivityTaskTimeType,
          true
        ),
        /**
         * Static representation of the {@link taskDisplaySequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_DISPLAY_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'TaskDisplaySequence',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taskName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_NAME: fieldBuilder.buildEdmTypeField(
          'TaskName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectTasks)
      };
    }

    return this._schema;
  }
}
