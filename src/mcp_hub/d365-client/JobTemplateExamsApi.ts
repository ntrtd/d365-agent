/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateExams } from './JobTemplateExams';
import { JobTemplateExamsRequestBuilder } from './JobTemplateExamsRequestBuilder';
import { JobTemplatesApi } from './JobTemplatesApi';
import { TestTypesApi } from './TestTypesApi';
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
export class JobTemplateExamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobTemplateExams<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateExamsApi<DeSerializersT> {
    return new JobTemplateExamsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateExams<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      JobTemplateExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobTemplatesApi<DeSerializersT>, TestTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[0]),
      TEST_TYPE: new OneToOneLink('TestType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobTemplateExams;

  requestBuilder(): JobTemplateExamsRequestBuilder<DeSerializersT> {
    return new JobTemplateExamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateExams<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobTemplateExams<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobTemplateExams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JobTemplateExams, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateExams,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEST_ID: OrderableEdmTypeField<
      JobTemplateExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateExams<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      JobTemplateExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateExams<DeSerializers>>;
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
         * Static representation of the {@link testId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_ID: fieldBuilder.buildEdmTypeField('TestId', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplateExams)
      };
    }

    return this._schema;
  }
}
