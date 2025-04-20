/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsRateDoubleTiers } from './BenefitsRateDoubleTiers';
import { BenefitsRateDoubleTiersRequestBuilder } from './BenefitsRateDoubleTiersRequestBuilder';
import { JobTypesApi } from './JobTypesApi';
import { BenefitsTierCodesApi } from './BenefitsTierCodesApi';
import { CompensationLevelsApi } from './CompensationLevelsApi';
import { CompensationRegionsApi } from './CompensationRegionsApi';
import { BenefitsRateTiersApi } from './BenefitsRateTiersApi';
import { BenefitCalculationDirection } from './BenefitCalculationDirection';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { BenefitRateTierType } from './BenefitRateTierType';
import { BenefitCalculationType } from './BenefitCalculationType';
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
export class BenefitsRateDoubleTiersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsRateDoubleTiers<DeSerializersT>, DeSerializersT>
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
  ): BenefitsRateDoubleTiersApi<DeSerializersT> {
    return new BenefitsRateDoubleTiersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tierCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIER_CODE: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      BenefitsTierCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_LEVEL: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_REGION: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATE_TIERS: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobTypesApi<DeSerializersT>,
      BenefitsTierCodesApi<DeSerializersT>,
      CompensationLevelsApi<DeSerializersT>,
      CompensationRegionsApi<DeSerializersT>,
      BenefitsRateTiersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_TYPE: new OneToOneLink('JobType', this, linkedApis[0]),
      TIER_CODE: new OneToOneLink('TierCode', this, linkedApis[1]),
      COMP_LEVEL: new OneToOneLink('CompLevel', this, linkedApis[2]),
      COMP_REGION: new OneToOneLink('CompRegion', this, linkedApis[3]),
      RATE_TIERS: new OneToOneLink('RateTiers', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = BenefitsRateDoubleTiers;

  requestBuilder(): BenefitsRateDoubleTiersRequestBuilder<DeSerializersT> {
    return new BenefitsRateDoubleTiersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsRateDoubleTiers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsRateDoubleTiers<DeSerializersT>,
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
    typeof BenefitsRateDoubleTiers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsRateDoubleTiers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RATE_ID: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATE_VALID_TO: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RATE_VALID_FROM: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TIER_CODE_ID_FOR_SINGLE_TIER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIER_CODE_ID_FOR_DOUBLE_TIER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPENSATION_LEVEL: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_DIRECTION: EnumField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      BenefitCalculationDirection,
      true,
      true
    >;
    GENDER: EnumField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    FLEX_CREDIT_RATE_NON_SMOKER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADMINISTRATIVE_AMOUNT: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_EXAM: EnumField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIER_TYPE: EnumField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      BenefitRateTierType,
      true,
      true
    >;
    FLEX_CREDIT_RATE_SMOKER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPENSATION_REGION: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_AMOUNT_SMOKER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMPLOYEE_AMOUNT_SMOKER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMPLOYER_AMOUNT_NON_SMOKER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEVEL: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATION_AMOUNT: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_TYPE: EnumField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      BenefitCalculationType,
      true,
      true
    >;
    EMPLOYEE_AMOUNT_NON_SMOKER: OrderableEdmTypeField<
      BenefitsRateDoubleTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tierCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIER_CODE: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      BenefitsTierCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_LEVEL: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_REGION: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATE_TIERS: OneToOneLink<
      BenefitsRateDoubleTiers<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsRateDoubleTiers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link rateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_ID: fieldBuilder.buildEdmTypeField('RateId', 'Edm.String', false),
        /**
         * Static representation of the {@link rateValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_VALID_TO: fieldBuilder.buildEdmTypeField(
          'RateValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rateValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'RateValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link tierCodeIdForSingleTier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_CODE_ID_FOR_SINGLE_TIER: fieldBuilder.buildEdmTypeField(
          'TierCodeIdForSingleTier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tierCodeIdForDoubleTier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_CODE_ID_FOR_DOUBLE_TIER: fieldBuilder.buildEdmTypeField(
          'TierCodeIdForDoubleTier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link compensationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LEVEL: fieldBuilder.buildEdmTypeField(
          'CompensationLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculationDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_DIRECTION: fieldBuilder.buildEnumField(
          'CalculationDirection',
          BenefitCalculationDirection,
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
        /**
         * Static representation of the {@link flexCreditRateNonSmoker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLEX_CREDIT_RATE_NON_SMOKER: fieldBuilder.buildEdmTypeField(
          'FlexCreditRateNonSmoker',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link administrativeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMINISTRATIVE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdministrativeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link physicalExam} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_EXAM: fieldBuilder.buildEnumField('PhysicalExam', NoYes, true),
        /**
         * Static representation of the {@link tierType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_TYPE: fieldBuilder.buildEnumField(
          'TierType',
          BenefitRateTierType,
          true
        ),
        /**
         * Static representation of the {@link flexCreditRateSmoker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLEX_CREDIT_RATE_SMOKER: fieldBuilder.buildEdmTypeField(
          'FlexCreditRateSmoker',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link compensationRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REGION: fieldBuilder.buildEdmTypeField(
          'CompensationRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employerAmountSmoker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_AMOUNT_SMOKER: fieldBuilder.buildEdmTypeField(
          'EmployerAmountSmoker',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link employeeAmountSmoker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_AMOUNT_SMOKER: fieldBuilder.buildEdmTypeField(
          'EmployeeAmountSmoker',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link employerAmountNonSmoker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_AMOUNT_NON_SMOKER: fieldBuilder.buildEdmTypeField(
          'EmployerAmountNonSmoker',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('Level', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link calculationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CalculationAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link calculationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_TYPE: fieldBuilder.buildEnumField(
          'CalculationType',
          BenefitCalculationType,
          true
        ),
        /**
         * Static representation of the {@link employeeAmountNonSmoker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_AMOUNT_NON_SMOKER: fieldBuilder.buildEdmTypeField(
          'EmployeeAmountNonSmoker',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsRateDoubleTiers)
      };
    }

    return this._schema;
  }
}
