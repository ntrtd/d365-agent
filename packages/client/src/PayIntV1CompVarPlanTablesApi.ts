/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1CompVarPlanTables } from './PayIntV1CompVarPlanTables';
import { PayIntV1CompVarPlanTablesRequestBuilder } from './PayIntV1CompVarPlanTablesRequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1CompVarPlanTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1CompVarPlanTables<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1CompVarPlanTablesApi<DeSerializersT> {
    return new PayIntV1CompVarPlanTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PayIntV1CompVarPlanTables<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CurrenciesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PayIntV1CompVarPlanTables;

  requestBuilder(): PayIntV1CompVarPlanTablesRequestBuilder<DeSerializersT> {
    return new PayIntV1CompVarPlanTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1CompVarPlanTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1CompVarPlanTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1CompVarPlanTables<DeSerializersT>,
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
    typeof PayIntV1CompVarPlanTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1CompVarPlanTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_RELATIONSHIP: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEVERAGE_TOLERANCE_MIN: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompTolerance,
      true,
      true
    >;
    PERCENT_OF_BASIS: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_COMPENSATION_TYPE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AWARD_BASIS_CALCULATION: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompVarPlanAwardBasis,
      true,
      true
    >;
    ENABLE_LEVELS: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VESTING_RULE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEVERAGE_100_PERCENT: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENABLE_RECOMMENDATION: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_ENROLLMENT: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVERAGE_UNDER_OBJECTIVE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_CURRENCY_CODE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALCULATION_TYPE: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompVarPlanCalcType,
      true,
      true
    >;
    HIRE_RULE: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompHireRule,
      true,
      true
    >;
    LEVERAGE_OVER_OBJECTIVE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_UNITS_REAL: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEVERAGE_MAXIMUM: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEVERAGE_MINIMUM: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_AWARD_BASIS: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompVarAwardBasis,
      true,
      true
    >;
    UNIT_VALUE: OrderableEdmTypeField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEVERAGE_TOLERANCE_MAX: EnumField<
      PayIntV1CompVarPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompTolerance,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PayIntV1CompVarPlanTables<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayIntV1CompVarPlanTables<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', PayIntV1CompVarPlanTables)
      };
    }

    return this._schema;
  }
}
