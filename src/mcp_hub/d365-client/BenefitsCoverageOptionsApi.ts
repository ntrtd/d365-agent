/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsCoverageOptions } from './BenefitsCoverageOptions';
import { BenefitsCoverageOptionsRequestBuilder } from './BenefitsCoverageOptionsRequestBuilder';
import { BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi } from './BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi';
import { PayrollWorkerBenefitPlansApi } from './PayrollWorkerBenefitPlansApi';
import { BenefitsPlanTypeCoverageOptionsApi } from './BenefitsPlanTypeCoverageOptionsApi';
import { NoYes } from './NoYes';
import { BenefitCoverageCode } from './BenefitCoverageCode';
import { BenefitStatus } from './BenefitStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsCoverageOptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsCoverageOptions<DeSerializersT>, DeSerializersT>
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
  ): BenefitsCoverageOptionsApi<DeSerializersT> {
    return new BenefitsCoverageOptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitsCoverageOptionPersonalContactsEligibilityOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION_PERSONAL_CONTACTS_ELIGIBILITY_OPTION: OneToManyLink<
      BenefitsCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsCoverageOptions<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlanTypeCoverageOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN_TYPE_COVERAGE_OPTIONS: OneToManyLink<
      BenefitsCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypeCoverageOptionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<DeSerializersT>,
      PayrollWorkerBenefitPlansApi<DeSerializersT>,
      BenefitsPlanTypeCoverageOptionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_COVERAGE_OPTION_PERSONAL_CONTACTS_ELIGIBILITY_OPTION:
        new OneToManyLink(
          'BenefitsCoverageOptionPersonalContactsEligibilityOption',
          this,
          linkedApis[0]
        ),
      PAYROLL_WORKER_BENEFIT_PLAN: new OneToOneLink(
        'PayrollWorkerBenefitPlan',
        this,
        linkedApis[1]
      ),
      BENEFIT_PLAN_TYPE_COVERAGE_OPTIONS: new OneToManyLink(
        'BenefitPlanTypeCoverageOptions',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BenefitsCoverageOptions;

  requestBuilder(): BenefitsCoverageOptionsRequestBuilder<DeSerializersT> {
    return new BenefitsCoverageOptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsCoverageOptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsCoverageOptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsCoverageOptions<DeSerializersT>,
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
    typeof BenefitsCoverageOptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsCoverageOptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_COVERAGE_AMOUNT_FOR_ESS: EnumField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_EMPLOYEE_CONTRIBUTION_AMOUNT_FOR_ESS: EnumField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIVISOR: OrderableEdmTypeField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT_MAXIMUM: OrderableEdmTypeField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COVERAGE_CODE: EnumField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      BenefitCoverageCode,
      true,
      true
    >;
    PERCENT_MINIMUM: OrderableEdmTypeField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAX_NUMBER_OF_DEPENDENTS_OR_BENEFICIARIES: OrderableEdmTypeField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS: EnumField<
      BenefitsCoverageOptions<DeSerializers>,
      DeSerializersT,
      BenefitStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsCoverageOptionPersonalContactsEligibilityOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION_PERSONAL_CONTACTS_ELIGIBILITY_OPTION: OneToManyLink<
      BenefitsCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollWorkerBenefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_BENEFIT_PLAN: OneToOneLink<
      BenefitsCoverageOptions<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerBenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPlanTypeCoverageOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN_TYPE_COVERAGE_OPTIONS: OneToManyLink<
      BenefitsCoverageOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanTypeCoverageOptionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsCoverageOptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link coverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageOptionId',
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
         * Static representation of the {@link allowCoverageAmountForEss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_COVERAGE_AMOUNT_FOR_ESS: fieldBuilder.buildEnumField(
          'AllowCoverageAmountForEss',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowEmployeeContributionAmountForEss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EMPLOYEE_CONTRIBUTION_AMOUNT_FOR_ESS: fieldBuilder.buildEnumField(
          'AllowEmployeeContributionAmountForEss',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link divisor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISOR: fieldBuilder.buildEdmTypeField(
          'Divisor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentMaximum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_MAXIMUM: fieldBuilder.buildEdmTypeField(
          'PercentMaximum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link coverageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_CODE: fieldBuilder.buildEnumField(
          'CoverageCode',
          BenefitCoverageCode,
          true
        ),
        /**
         * Static representation of the {@link percentMinimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_MINIMUM: fieldBuilder.buildEdmTypeField(
          'PercentMinimum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maxNumberOfDependentsOrBeneficiaries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_NUMBER_OF_DEPENDENTS_OR_BENEFICIARIES:
          fieldBuilder.buildEdmTypeField(
            'MaxNumberOfDependentsOrBeneficiaries',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', BenefitStatus, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsCoverageOptions)
      };
    }

    return this._schema;
  }
}
