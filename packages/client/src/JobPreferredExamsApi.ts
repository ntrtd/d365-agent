/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobPreferredExams } from './JobPreferredExams';
import { JobPreferredExamsRequestBuilder } from './JobPreferredExamsRequestBuilder';
import { JobsApi } from './JobsApi';
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
export class JobPreferredExamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobPreferredExams<DeSerializersT>, DeSerializersT>
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
  ): JobPreferredExamsApi<DeSerializersT> {
    return new JobPreferredExamsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredExams<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      JobPreferredExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobsApi<DeSerializersT>, TestTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB: new OneToOneLink('Job', this, linkedApis[0]),
      TEST_TYPE: new OneToOneLink('TestType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobPreferredExams;

  requestBuilder(): JobPreferredExamsRequestBuilder<DeSerializersT> {
    return new JobPreferredExamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobPreferredExams<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobPreferredExams<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobPreferredExams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof JobPreferredExams,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobPreferredExams,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      JobPreferredExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEST_ID: OrderableEdmTypeField<
      JobPreferredExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredExams<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      JobPreferredExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobPreferredExams<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', JobPreferredExams)
      };
    }

    return this._schema;
  }
}
