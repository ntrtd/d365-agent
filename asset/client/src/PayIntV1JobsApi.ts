/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1Jobs } from './PayIntV1Jobs';
import { PayIntV1JobsRequestBuilder } from './PayIntV1JobsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1JobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1Jobs<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1JobsApi<DeSerializersT> {
    return new PayIntV1JobsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1Jobs;

  requestBuilder(): PayIntV1JobsRequestBuilder<DeSerializersT> {
    return new PayIntV1JobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1Jobs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayIntV1Jobs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayIntV1Jobs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayIntV1Jobs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PayIntV1Jobs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARKET_PRICE_SOURCE: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_NUMBER_OF_POSITIONS: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_HOURLY: EnumField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPENSATION_REFERENCE_JOB: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTION_ID: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_FAMILY_ID: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_UNLIMITED_POSITIONS: EnumField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TYPE: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPENSATION_SURVEY_COMPANY: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPENSATION_LEVEL: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARKET_PRICE_CONTROL_POINT: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_FAMILY: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARKET_PRICE_LOW_THRESHOLD: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUNCTION: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPENSATION_SURVEY_COMPANY_ID: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_PRICE_HIGH_THRESHOLD: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_DESCRIPTION: OrderableEdmTypeField<
      PayIntV1Jobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1Jobs<DeSerializers>>;
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
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.Int64', false),
        /**
         * Static representation of the {@link marketPriceSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_SOURCE: fieldBuilder.buildEdmTypeField(
          'MarketPriceSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link maximumNumberOfPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_NUMBER_OF_POSITIONS: fieldBuilder.buildEdmTypeField(
          'MaximumNumberOfPositions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link paidHourly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_HOURLY: fieldBuilder.buildEnumField('PaidHourly', NoYes, true),
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
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link compensationReferenceJob} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REFERENCE_JOB: fieldBuilder.buildEdmTypeField(
          'CompensationReferenceJob',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullTimeEquivalent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_TIME_EQUIVALENT: fieldBuilder.buildEdmTypeField(
          'FullTimeEquivalent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobFamilyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FAMILY_ID: fieldBuilder.buildEdmTypeField(
          'JobFamilyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowUnlimitedPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_UNLIMITED_POSITIONS: fieldBuilder.buildEnumField(
          'AllowUnlimitedPositions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE: fieldBuilder.buildEdmTypeField('JobType', 'Edm.Int64', false),
        /**
         * Static representation of the {@link compensationSurveyCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SURVEY_COMPANY: fieldBuilder.buildEdmTypeField(
          'CompensationSurveyCompany',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link compensationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LEVEL: fieldBuilder.buildEdmTypeField(
          'CompensationLevel',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link marketPriceControlPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_CONTROL_POINT: fieldBuilder.buildEdmTypeField(
          'MarketPriceControlPoint',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobFamily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FAMILY: fieldBuilder.buildEdmTypeField(
          'JobFamily',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link marketPriceLowThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_LOW_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'MarketPriceLowThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link function} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION: fieldBuilder.buildEdmTypeField(
          'Function',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link compensationSurveyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SURVEY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompensationSurveyCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compensationLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'CompensationLevelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marketPriceHighThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_HIGH_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'MarketPriceHighThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JobDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1Jobs)
      };
    }

    return this._schema;
  }
}
