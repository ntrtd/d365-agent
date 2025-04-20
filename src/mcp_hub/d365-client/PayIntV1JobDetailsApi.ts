/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1JobDetails } from './PayIntV1JobDetails';
import { PayIntV1JobDetailsRequestBuilder } from './PayIntV1JobDetailsRequestBuilder';
import { JobFamiliesApi } from './JobFamiliesApi';
import { JobsApi } from './JobsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1JobDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1JobDetails<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1JobDetailsApi<DeSerializersT> {
    return new PayIntV1JobDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobFamily} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FAMILY: OneToOneLink<
      PayIntV1JobDetails<DeSerializersT>,
      DeSerializersT,
      JobFamiliesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      PayIntV1JobDetails<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobFamiliesApi<DeSerializersT>, JobsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB_FAMILY: new OneToOneLink('JobFamily', this, linkedApis[0]),
      JOB: new OneToOneLink('Job', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PayIntV1JobDetails;

  requestBuilder(): PayIntV1JobDetailsRequestBuilder<DeSerializersT> {
    return new PayIntV1JobDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1JobDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayIntV1JobDetails<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1JobDetails<DeSerializersT>,
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
    typeof PayIntV1JobDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1JobDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKET_PRICE_SOURCE: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_HOURLY: EnumField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_REFERENCE_JOB: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTION_ID: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_TIME_EQUIVALENT: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_FAMILY_ID: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_PRICE_CONTROL_POINT: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKET_PRICE_LOW_THRESHOLD: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPENSATION_SURVEY_COMPANY_ID: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKET_PRICE_HIGH_THRESHOLD: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_DESCRIPTION: OrderableEdmTypeField<
      PayIntV1JobDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFamily} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FAMILY: OneToOneLink<
      PayIntV1JobDetails<DeSerializersT>,
      DeSerializersT,
      JobFamiliesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      PayIntV1JobDetails<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayIntV1JobDetails<DeSerializers>>;
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          true
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
         * Static representation of the {@link marketPriceLowThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_LOW_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'MarketPriceLowThreshold',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', PayIntV1JobDetails)
      };
    }

    return this._schema;
  }
}
