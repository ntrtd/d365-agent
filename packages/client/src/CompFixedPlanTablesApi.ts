/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompFixedPlanTables } from './CompFixedPlanTables';
import { CompFixedPlanTablesRequestBuilder } from './CompFixedPlanTablesRequestBuilder';
import { CompensationEligibilityRulesApi } from './CompensationEligibilityRulesApi';
import { CompFixedEmplsApi } from './CompFixedEmplsApi';
import { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { IntV1PayrollFixedCompensationPlansApi } from './IntV1PayrollFixedCompensationPlansApi';
import { CurrenciesApi } from './CurrenciesApi';
import { CompensationGridsApi } from './CompensationGridsApi';
import { PayRateConversionsApi } from './PayRateConversionsApi';
import { VariableCompensationAwardsApi } from './VariableCompensationAwardsApi';
import { NoYes } from './NoYes';
import { HrmCompHireRule } from './HrmCompHireRule';
import { HcmCompensationType } from './HcmCompensationType';
import { HrmCompTolerance } from './HrmCompTolerance';
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
export class CompFixedPlanTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompFixedPlanTables<DeSerializersT>, DeSerializersT>
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
  ): CompFixedPlanTablesApi<DeSerializersT> {
    return new CompFixedPlanTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULE: OneToManyLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeeFixedCompensation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_FIXED_COMPENSATION: OneToManyLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompFixedEmplsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_CURRENCY: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payRateConversion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_RATE_CONVERSION: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      PayRateConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link variableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_AWARD: OneToManyLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      VariableCompensationAwardsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationEligibilityRulesApi<DeSerializersT>,
      CompFixedEmplsApi<DeSerializersT>,
      PayrollFixedCompensationPlansApi<DeSerializersT>,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      CompensationGridsApi<DeSerializersT>,
      PayRateConversionsApi<DeSerializersT>,
      VariableCompensationAwardsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_ELIGIBILITY_RULE: new OneToManyLink(
        'CompensationEligibilityRule',
        this,
        linkedApis[0]
      ),
      EMPLOYEE_FIXED_COMPENSATION: new OneToManyLink(
        'EmployeeFixedCompensation',
        this,
        linkedApis[1]
      ),
      PAYROLL_FIXED_COMPENSATION_PLAN: new OneToOneLink(
        'PayrollFixedCompensationPlan',
        this,
        linkedApis[2]
      ),
      INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: new OneToOneLink(
        'IntV1PayrollFixedCompensationPlan',
        this,
        linkedApis[3]
      ),
      COMPENSATION_CURRENCY: new OneToOneLink(
        'CompensationCurrency',
        this,
        linkedApis[4]
      ),
      COMPENSATION_GRID: new OneToOneLink(
        'CompensationGrid',
        this,
        linkedApis[5]
      ),
      PAY_RATE_CONVERSION: new OneToOneLink(
        'PayRateConversion',
        this,
        linkedApis[6]
      ),
      VARIABLE_COMPENSATION_AWARD: new OneToManyLink(
        'VariableCompensationAward',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = CompFixedPlanTables;

  requestBuilder(): CompFixedPlanTablesRequestBuilder<DeSerializersT> {
    return new CompFixedPlanTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompFixedPlanTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompFixedPlanTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompFixedPlanTables<DeSerializersT>,
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
    typeof CompFixedPlanTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompFixedPlanTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_FREQUENCY: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_POINT: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_STRUCTURE: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKET_PRICE_INDICATOR: EnumField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REF_POINT_SETUP_ID: OrderableEdmTypeField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIRE_RULE: EnumField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompHireRule,
      true,
      true
    >;
    TYPE: EnumField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      HcmCompensationType,
      true,
      true
    >;
    OUT_OF_RANGE_TOLERANCE: EnumField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompTolerance,
      true,
      true
    >;
    RECOMMENDATION_ALLOWED: EnumField<
      CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_ELIGIBILITY_RULE: OneToManyLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompensationEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeeFixedCompensation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_FIXED_COMPENSATION: OneToManyLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompFixedEmplsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_CURRENCY: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payRateConversion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_RATE_CONVERSION: OneToOneLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      PayRateConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link variableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_AWARD: OneToManyLink<
      CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      VariableCompensationAwardsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompFixedPlanTables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN: fieldBuilder.buildEdmTypeField('Plan', 'Edm.String', false),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link payFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY: fieldBuilder.buildEdmTypeField(
          'PayFrequency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_POINT: fieldBuilder.buildEdmTypeField(
          'ControlPoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compensationStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CompensationStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link marketPriceIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_INDICATOR: fieldBuilder.buildEnumField(
          'MarketPriceIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link refPointSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_POINT_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'RefPointSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hireRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRE_RULE: fieldBuilder.buildEnumField(
          'HireRule',
          HrmCompHireRule,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HcmCompensationType, true),
        /**
         * Static representation of the {@link outOfRangeTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUT_OF_RANGE_TOLERANCE: fieldBuilder.buildEnumField(
          'OutOfRangeTolerance',
          HrmCompTolerance,
          true
        ),
        /**
         * Static representation of the {@link recommendationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOMMENDATION_ALLOWED: fieldBuilder.buildEnumField(
          'RecommendationAllowed',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompFixedPlanTables)
      };
    }

    return this._schema;
  }
}
