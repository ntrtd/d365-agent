/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTypes } from './JobTypes';
import { JobTypesRequestBuilder } from './JobTypesRequestBuilder';
import { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { BenefitsRateTiersApi } from './BenefitsRateTiersApi';
import { JobsDualWriteApi } from './JobsDualWriteApi';
import { BenefitsRateDoubleTiersApi } from './BenefitsRateDoubleTiersApi';
import { RecruitingRequestsApi } from './RecruitingRequestsApi';
import { NoYes } from './NoYes';
import { HcmJobTypeExemptStatus } from './HcmJobTypeExemptStatus';
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
export class JobTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobTypes<DeSerializersT>, DeSerializersT>
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
  ): JobTypesApi<DeSerializersT> {
    return new JobTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      JobsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationEligibilityRulesApi<DeSerializersT>,
      BenefitsRateTiersApi<DeSerializersT>,
      JobsDualWriteApi<DeSerializersT>,
      BenefitsRateDoubleTiersApi<DeSerializersT>,
      RecruitingRequestsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_ELIGIBILITY_RULES: new OneToManyLink(
        'CompensationEligibilityRules',
        this,
        linkedApis[0]
      ),
      BENEFIT_RATE_TIERS: new OneToManyLink(
        'BenefitRateTiers',
        this,
        linkedApis[1]
      ),
      JOBS: new OneToManyLink('Jobs', this, linkedApis[2]),
      BENEFIT_RATE_DOUBLE_TIERS: new OneToManyLink(
        'BenefitRateDoubleTiers',
        this,
        linkedApis[3]
      ),
      RECRUITING_REQUESTS: new OneToManyLink(
        'RecruitingRequests',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = JobTypes;

  requestBuilder(): JobTypesRequestBuilder<DeSerializersT> {
    return new JobTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<JobTypes<DeSerializersT>, DeSerializersT> {
    return entityBuilder<JobTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JobTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JobTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TYPE_ID: OrderableEdmTypeField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYSTEM_MODIFIED_BY: OrderableEdmTypeField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_CREATED_BY: OrderableEdmTypeField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAID_HOURLY: EnumField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_CREATED_DATE_TIME: OrderableEdmTypeField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXEMPT_STATUS: EnumField<
      JobTypes<DeSerializers>,
      DeSerializersT,
      HcmJobTypeExemptStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULES: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      JobsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUESTS: OneToManyLink<
      JobTypes<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
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
         * Static representation of the {@link systemModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'System_ModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link systemModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'System_ModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'System_CreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paidHourly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_HOURLY: fieldBuilder.buildEnumField('PaidHourly', NoYes, true),
        /**
         * Static representation of the {@link systemCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'System_CreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exemptStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_STATUS: fieldBuilder.buildEnumField(
          'ExemptStatus',
          HcmJobTypeExemptStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTypes)
      };
    }

    return this._schema;
  }
}
