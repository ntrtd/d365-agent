/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TestTypes } from './TestTypes';
import { TestTypesRequestBuilder } from './TestTypesRequestBuilder';
import { PersonExamsApi } from './PersonExamsApi';
import { JobPreferredExamsApi } from './JobPreferredExamsApi';
import { JobTemplateExamsApi } from './JobTemplateExamsApi';
import { WorkerExamsApi } from './WorkerExamsApi';
import { HcmFrequencyGenerateFrom } from './HcmFrequencyGenerateFrom';
import { HcmFrequencyUnit } from './HcmFrequencyUnit';
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
export class TestTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TestTypes<DeSerializersT>, DeSerializersT>
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
  ): TestTypesApi<DeSerializersT> {
    return new TestTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link personExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      PersonExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      JobPreferredExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      JobTemplateExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      WorkerExamsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PersonExamsApi<DeSerializersT>,
      JobPreferredExamsApi<DeSerializersT>,
      JobTemplateExamsApi<DeSerializersT>,
      WorkerExamsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON_EXAM: new OneToManyLink('PersonExam', this, linkedApis[0]),
      JOB_PREFERRED_EXAM: new OneToManyLink(
        'JobPreferredExam',
        this,
        linkedApis[1]
      ),
      JOB_TEMPLATE_EXAM: new OneToManyLink(
        'JobTemplateExam',
        this,
        linkedApis[2]
      ),
      WORKER_EXAM: new OneToManyLink('WorkerExam', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = TestTypes;

  requestBuilder(): TestTypesRequestBuilder<DeSerializersT> {
    return new TestTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TestTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TestTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TestTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TestTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TestTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEST_ID: OrderableEdmTypeField<
      TestTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENERATE_FROM: EnumField<
      TestTypes<DeSerializers>,
      DeSerializersT,
      HcmFrequencyGenerateFrom,
      true,
      true
    >;
    INTERVAL: OrderableEdmTypeField<
      TestTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TestTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSING_SCORE: OrderableEdmTypeField<
      TestTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FREQUENCY: EnumField<
      TestTypes<DeSerializers>,
      DeSerializersT,
      HcmFrequencyUnit,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      PersonExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      JobPreferredExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      JobTemplateExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerExam} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_EXAM: OneToManyLink<
      TestTypes<DeSerializersT>,
      DeSerializersT,
      WorkerExamsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TestTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link testId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_ID: fieldBuilder.buildEdmTypeField('TestId', 'Edm.String', false),
        /**
         * Static representation of the {@link generateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_FROM: fieldBuilder.buildEnumField(
          'GenerateFrom',
          HcmFrequencyGenerateFrom,
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEdmTypeField(
          'Interval',
          'Edm.Int32',
          false
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
         * Static representation of the {@link passingScore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSING_SCORE: fieldBuilder.buildEdmTypeField(
          'PassingScore',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEnumField(
          'Frequency',
          HcmFrequencyUnit,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TestTypes)
      };
    }

    return this._schema;
  }
}
