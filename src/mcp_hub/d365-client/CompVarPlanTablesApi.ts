/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompVarPlanTables } from './CompVarPlanTables';
import { CompVarPlanTablesRequestBuilder } from './CompVarPlanTablesRequestBuilder';
import { VariableCompensationEnrollmentsApi } from './VariableCompensationEnrollmentsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { NoYes } from './NoYes';
import { HrmCompTolerance } from './HrmCompTolerance';
import { HrmCompVarPlanAwardBasis } from './HrmCompVarPlanAwardBasis';
import { HrmCompVarPlanCalcType } from './HrmCompVarPlanCalcType';
import { HrmCompHireRule } from './HrmCompHireRule';
import { HrmCompVarAwardBasis } from './HrmCompVarAwardBasis';
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
export class CompVarPlanTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompVarPlanTables<DeSerializersT>, DeSerializersT>
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
  ): CompVarPlanTablesApi<DeSerializersT> {
    return new CompVarPlanTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link employeeVariableCompensationEnrollment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_VARIABLE_COMPENSATION_ENROLLMENT: OneToManyLink<
      CompVarPlanTables<DeSerializersT>,
      DeSerializersT,
      VariableCompensationEnrollmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      CompVarPlanTables<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VariableCompensationEnrollmentsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYEE_VARIABLE_COMPENSATION_ENROLLMENT: new OneToManyLink(
        'EmployeeVariableCompensationEnrollment',
        this,
        linkedApis[0]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CompVarPlanTables;

  requestBuilder(): CompVarPlanTablesRequestBuilder<DeSerializersT> {
    return new CompVarPlanTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompVarPlanTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompVarPlanTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CompVarPlanTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CompVarPlanTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompVarPlanTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_RELATIONSHIP: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEVERAGE_TOLERANCE_MIN: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompTolerance,
      true,
      true
    >;
    PERCENT_OF_BASIS: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_COMPENSATION_TYPE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AWARD_BASIS_CALCULATION: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompVarPlanAwardBasis,
      true,
      true
    >;
    ENABLE_LEVELS: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VESTING_RULE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEVERAGE_100_PERCENT: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENABLE_RECOMMENDATION: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_ENROLLMENT: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVERAGE_UNDER_OBJECTIVE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_CURRENCY_CODE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALCULATION_TYPE: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompVarPlanCalcType,
      true,
      true
    >;
    HIRE_RULE: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompHireRule,
      true,
      true
    >;
    LEVERAGE_OVER_OBJECTIVE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_UNITS_REAL: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEVERAGE_MAXIMUM: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEVERAGE_MINIMUM: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_AWARD_BASIS: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompVarAwardBasis,
      true,
      true
    >;
    UNIT_VALUE: OrderableEdmTypeField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEVERAGE_TOLERANCE_MAX: EnumField<
      CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompTolerance,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeeVariableCompensationEnrollment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_VARIABLE_COMPENSATION_ENROLLMENT: OneToManyLink<
      CompVarPlanTables<DeSerializersT>,
      DeSerializersT,
      VariableCompensationEnrollmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      CompVarPlanTables<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompVarPlanTables<DeSerializers>>;
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
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link unitRelationship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_RELATIONSHIP: fieldBuilder.buildEnumField(
          'UnitRelationship',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leverageToleranceMin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVERAGE_TOLERANCE_MIN: fieldBuilder.buildEnumField(
          'LeverageToleranceMin',
          HrmCompTolerance,
          true
        ),
        /**
         * Static representation of the {@link percentOfBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_OF_BASIS: fieldBuilder.buildEdmTypeField(
          'PercentOfBasis',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link variableCompensationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_COMPENSATION_TYPE: fieldBuilder.buildEdmTypeField(
          'VariableCompensationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link awardBasisCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_BASIS_CALCULATION: fieldBuilder.buildEnumField(
          'AwardBasisCalculation',
          HrmCompVarPlanAwardBasis,
          true
        ),
        /**
         * Static representation of the {@link enableLevels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LEVELS: fieldBuilder.buildEnumField('EnableLevels', NoYes, true),
        /**
         * Static representation of the {@link vestingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VESTING_RULE: fieldBuilder.buildEdmTypeField(
          'VestingRule',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link leverage100Percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVERAGE_100_PERCENT: fieldBuilder.buildEdmTypeField(
          'Leverage100Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enableRecommendation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_RECOMMENDATION: fieldBuilder.buildEnumField(
          'EnableRecommendation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableEnrollment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ENROLLMENT: fieldBuilder.buildEnumField(
          'EnableEnrollment',
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
         * Static representation of the {@link leverageUnderObjective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVERAGE_UNDER_OBJECTIVE: fieldBuilder.buildEdmTypeField(
          'LeverageUnderObjective',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'UnitCurrencyCode',
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
         * Static representation of the {@link calculationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_TYPE: fieldBuilder.buildEnumField(
          'CalculationType',
          HrmCompVarPlanCalcType,
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
         * Static representation of the {@link leverageOverObjective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVERAGE_OVER_OBJECTIVE: fieldBuilder.buildEdmTypeField(
          'LeverageOverObjective',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfUnitsReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_UNITS_REAL: fieldBuilder.buildEdmTypeField(
          'NumberOfUnitsReal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leverageMaximum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVERAGE_MAXIMUM: fieldBuilder.buildEdmTypeField(
          'LeverageMaximum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leverageMinimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVERAGE_MINIMUM: fieldBuilder.buildEdmTypeField(
          'LeverageMinimum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link variableAwardBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_AWARD_BASIS: fieldBuilder.buildEnumField(
          'VariableAwardBasis',
          HrmCompVarAwardBasis,
          true
        ),
        /**
         * Static representation of the {@link unitValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_VALUE: fieldBuilder.buildEdmTypeField(
          'UnitValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link leverageToleranceMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVERAGE_TOLERANCE_MAX: fieldBuilder.buildEnumField(
          'LeverageToleranceMax',
          HrmCompTolerance,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompVarPlanTables)
      };
    }

    return this._schema;
  }
}
