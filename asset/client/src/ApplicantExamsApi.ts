/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicantExams } from './ApplicantExams';
import { ApplicantExamsRequestBuilder } from './ApplicantExamsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ApplicantExamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApplicantExams<DeSerializersT>, DeSerializersT>
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
  ): ApplicantExamsApi<DeSerializersT> {
    return new ApplicantExamsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicantExams;

  requestBuilder(): ApplicantExamsRequestBuilder<DeSerializersT> {
    return new ApplicantExamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicantExams<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApplicantExams<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApplicantExams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApplicantExams, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ApplicantExams, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    APPLICANT_ID: OrderableEdmTypeField<
      ApplicantExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEST_ID: OrderableEdmTypeField<
      ApplicantExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRED_BY: OrderableEdmTypeField<
      ApplicantExams<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCORE: OrderableEdmTypeField<
      ApplicantExams<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPLETED_ON: OrderableEdmTypeField<
      ApplicantExams<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      ApplicantExams<DeSerializers>,
      DeSerializersT,
      HcmCompletionStatus,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      ApplicantExams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicantExams<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link applicantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT_ID: fieldBuilder.buildEdmTypeField(
          'ApplicantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link testId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_ID: fieldBuilder.buildEdmTypeField('TestId', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', ApplicantExams)
      };
    }

    return this._schema;
  }
}
