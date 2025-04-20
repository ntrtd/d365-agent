/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsEligibilityRules } from './BenefitsEligibilityRules';
import { BenefitsEligibilityRulesRequestBuilder } from './BenefitsEligibilityRulesRequestBuilder';
import { BenefitsPlanEligibilityRulesApi } from './BenefitsPlanEligibilityRulesApi';
import { BenefitsProgramEligibilityRulesApi } from './BenefitsProgramEligibilityRulesApi';
import { NoYes } from './NoYes';
import { BenefitCurrentEmploymentStatus } from './BenefitCurrentEmploymentStatus';
import { BenefitEmploymentStatus } from './BenefitEmploymentStatus';
import { HcmEmploymentType } from './HcmEmploymentType';
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
export class BenefitsEligibilityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsEligibilityRules<DeSerializersT>, DeSerializersT>
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
  ): BenefitsEligibilityRulesApi<DeSerializersT> {
    return new BenefitsEligibilityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlanEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsProgramEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramEligibilityRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPlanEligibilityRulesApi<DeSerializersT>,
      BenefitsProgramEligibilityRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PLAN_ELIGIBILITY_RULE: new OneToManyLink(
        'BenefitsPlanEligibilityRule',
        this,
        linkedApis[0]
      ),
      BENEFITS_PROGRAM_ELIGIBILITY_RULE: new OneToManyLink(
        'BenefitsProgramEligibilityRule',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsEligibilityRules;

  requestBuilder(): BenefitsEligibilityRulesRequestBuilder<DeSerializersT> {
    return new BenefitsEligibilityRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsEligibilityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsEligibilityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsEligibilityRules<DeSerializersT>,
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
    typeof BenefitsEligibilityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsEligibilityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ELIGIBILITY_RULE_ID: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_FORMER_EMPLOYMENT_STATUS: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_STATUS: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      BenefitCurrentEmploymentStatus,
      true,
      true
    >;
    NEW_HIRE_ENROLLMENT_PERIOD: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USE_EMPLOYEE_STATUS: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYMENT_CATEGORY: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMER_EMPLOYMENT_STATUS_FROM_DAYS: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORMER_EMPLOYMENT_STATUS: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      BenefitEmploymentStatus,
      true,
      true
    >;
    USE_EMPLOYEE_TYPE: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_EMPLOYEE_CATEGORY: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USE_NEW_HIRE_RULE: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMER_EMPLOYMENT_STATUS_TO_DAYS: OrderableEdmTypeField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORKER_TYPE: EnumField<
      BenefitsEligibilityRules<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlanEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsPlanEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsProgramEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramEligibilityRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsEligibilityRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link eligibilityRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY_RULE_ID: fieldBuilder.buildEdmTypeField(
          'EligibilityRuleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link useFormerEmploymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FORMER_EMPLOYMENT_STATUS: fieldBuilder.buildEnumField(
          'UseFormerEmploymentStatus',
          NoYes,
          true
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
         * Static representation of the {@link employeeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_STATUS: fieldBuilder.buildEnumField(
          'EmployeeStatus',
          BenefitCurrentEmploymentStatus,
          true
        ),
        /**
         * Static representation of the {@link newHireEnrollmentPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_HIRE_ENROLLMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'NewHireEnrollmentPeriod',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link useEmployeeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_EMPLOYEE_STATUS: fieldBuilder.buildEnumField(
          'UseEmployeeStatus',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employmentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'EmploymentCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formerEmploymentStatusFromDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMER_EMPLOYMENT_STATUS_FROM_DAYS: fieldBuilder.buildEdmTypeField(
          'FormerEmploymentStatusFromDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link formerEmploymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMER_EMPLOYMENT_STATUS: fieldBuilder.buildEnumField(
          'FormerEmploymentStatus',
          BenefitEmploymentStatus,
          true
        ),
        /**
         * Static representation of the {@link useEmployeeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_EMPLOYEE_TYPE: fieldBuilder.buildEnumField(
          'UseEmployeeType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useEmployeeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_EMPLOYEE_CATEGORY: fieldBuilder.buildEnumField(
          'UseEmployeeCategory',
          NoYes,
          true
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
         * Static representation of the {@link useNewHireRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_NEW_HIRE_RULE: fieldBuilder.buildEnumField(
          'UseNewHireRule',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link formerEmploymentStatusToDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMER_EMPLOYMENT_STATUS_TO_DAYS: fieldBuilder.buildEdmTypeField(
          'FormerEmploymentStatusToDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_TYPE: fieldBuilder.buildEnumField(
          'WorkerType',
          HcmEmploymentType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsEligibilityRules)
      };
    }

    return this._schema;
  }
}
