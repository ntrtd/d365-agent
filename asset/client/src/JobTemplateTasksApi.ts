/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateTasks } from './JobTemplateTasks';
import { JobTemplateTasksRequestBuilder } from './JobTemplateTasksRequestBuilder';
import { JobTemplatesApi } from './JobTemplatesApi';
import { JobTasksApi } from './JobTasksApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class JobTemplateTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobTemplateTasks<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateTasksApi<DeSerializersT> {
    return new JobTemplateTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateTasks<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TASK: OneToOneLink<
      JobTemplateTasks<DeSerializersT>,
      DeSerializersT,
      JobTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobTemplatesApi<DeSerializersT>, JobTasksApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[0]),
      JOB_TASK: new OneToOneLink('JobTask', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobTemplateTasks;

  requestBuilder(): JobTemplateTasksRequestBuilder<DeSerializersT> {
    return new JobTemplateTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobTemplateTasks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobTemplateTasks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JobTemplateTasks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TASK_ID: OrderableEdmTypeField<
      JobTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      JobTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateTasks<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TASK: OneToOneLink<
      JobTemplateTasks<DeSerializersT>,
      DeSerializersT,
      JobTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateTasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'JobTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobTaskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TASK_ID: fieldBuilder.buildEdmTypeField(
          'JobTaskId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplateTasks)
      };
    }

    return this._schema;
  }
}
