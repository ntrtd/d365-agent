/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerExams } from './WorkerExams';
import { WorkerExamsRequestBuilder } from './WorkerExamsRequestBuilder';
import { TestTypesApi } from './TestTypesApi';
import { WorkersApi } from './WorkersApi';
import { HcmCompletionStatus } from './HcmCompletionStatus';
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
export class WorkerExamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerExams<DeSerializersT>, DeSerializersT>
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
  ): WorkerExamsApi<DeSerializersT> {
    return new WorkerExamsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      WorkerExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerExams<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TestTypesApi<DeSerializersT>, WorkersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TEST_TYPE: new OneToOneLink('TestType', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WorkerExams;

  requestBuilder(): WorkerExamsRequestBuilder<DeSerializersT> {
    return new WorkerExamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerExams<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerExams<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkerExams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkerExams, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WorkerExams, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUIRED_BY: OrderableEdmTypeField<
      WorkerExams<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEST_ID: OrderableEdmTypeField<
      WorkerExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCORE: OrderableEdmTypeField<
      WorkerExams<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPLETED_ON: OrderableEdmTypeField<
      WorkerExams<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      WorkerExams<DeSerializers>,
      DeSerializersT,
      HcmCompletionStatus,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      WorkerExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link testType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEST_TYPE: OneToOneLink<
      WorkerExams<DeSerializersT>,
      DeSerializersT,
      TestTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerExams<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerExams<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link requiredBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_BY: fieldBuilder.buildEdmTypeField(
          'RequiredBy',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link testId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_ID: fieldBuilder.buildEdmTypeField('TestId', 'Edm.String', false),
        /**
         * Static representation of the {@link score} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCORE: fieldBuilder.buildEdmTypeField('Score', 'Edm.Int32', false),
        /**
         * Static representation of the {@link completedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETED_ON: fieldBuilder.buildEdmTypeField(
          'CompletedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HcmCompletionStatus,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerExams)
      };
    }

    return this._schema;
  }
}
