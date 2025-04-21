/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionForecastsV2 } from './PositionForecastsV2';
import { PositionForecastsV2RequestBuilder } from './PositionForecastsV2RequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { HcmPositionForecastBudgetAcctLineSource } from './HcmPositionForecastBudgetAcctLineSource';
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
export class PositionForecastsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PositionForecastsV2<DeSerializersT>, DeSerializersT>
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
  ): PositionForecastsV2Api<DeSerializersT> {
    return new PositionForecastsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PositionForecastsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PositionForecastsV2;

  requestBuilder(): PositionForecastsV2RequestBuilder<DeSerializersT> {
    return new PositionForecastsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionForecastsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PositionForecastsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PositionForecastsV2<DeSerializersT>,
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
    typeof PositionForecastsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionForecastsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORECAST_POSITION_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_PLANNING_PROCESS_NAME: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_PLAN_SCENARIO_NAME: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ELEMENT_NAME: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ELEMENT_DATA_AREA_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ELEMENT_EFFECTIVE_DATE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_ELEMENT_EXPIRATION_DATE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_ELEMENT_LINE_START_DATE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_ELEMENT_LINE_END_DATE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ANNIVERSARY_DATE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_ELEMENT_SOURCE: EnumField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      HcmPositionForecastBudgetAcctLineSource,
      true,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_WORKER: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ELEMENT_LINE_MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_POSITION_ACTIVATION_DATE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FORECAST_POSITION_REF_POINT_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_ELEMENT_LINE_REFERENCE_POINT_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_POSITION_FULL_TIME_EQUIVALENCY: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORECAST_POSITION_RETIREMENT_DATE: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPENSATION_REGION_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PERCENTAGE_BASED: EnumField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ANNUAL_AMOUNT: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_POSITION_COMPENSATION_GROUP_DATA_AREA_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_POSITION_REF_POINT_SETUP_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ELEMENT_LINE_REFERENCE_SETUP_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_POSITION_COMPENSATION_GROUP_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_AMOUNT: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_TYPE_ID: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_POSITION_LEGAL_ENITYT_NAME: OrderableEdmTypeField<
      PositionForecastsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PositionForecastsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionForecastsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link forecastPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'ForecastPositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetPlanningProcessName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLANNING_PROCESS_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetPlanningProcessName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetPlanScenarioName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PLAN_SCENARIO_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetPlanScenarioName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costElementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'CostElementName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costElementDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'CostElementDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costElementEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'CostElementEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costElementExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'CostElementExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costElementLineStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_LINE_START_DATE: fieldBuilder.buildEdmTypeField(
          'CostElementLineStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costElementLineEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_LINE_END_DATE: fieldBuilder.buildEdmTypeField(
          'CostElementLineEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link anniversaryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNIVERSARY_DATE: fieldBuilder.buildEdmTypeField(
          'AnniversaryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costElementSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_SOURCE: fieldBuilder.buildEnumField(
          'CostElementSource',
          HcmPositionForecastBudgetAcctLineSource,
          true
        ),
        /**
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assignedWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_WORKER: fieldBuilder.buildEdmTypeField(
          'AssignedWorker',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link costElementLineMainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_LINE_MAIN_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CostElementLineMainAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link forecastPositionActivationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_ACTIVATION_DATE: fieldBuilder.buildEdmTypeField(
          'ForecastPositionActivationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link forecastPositionRefPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_REF_POINT_ID: fieldBuilder.buildEdmTypeField(
          'ForecastPositionRefPointId',
          'Edm.String',
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
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costElementLineReferencePointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_LINE_REFERENCE_POINT_ID: fieldBuilder.buildEdmTypeField(
          'CostElementLineReferencePointId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastPositionFullTimeEquivalency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_FULL_TIME_EQUIVALENCY: fieldBuilder.buildEdmTypeField(
          'ForecastPositionFullTimeEquivalency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link forecastPositionRetirementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_RETIREMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ForecastPositionRetirementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link compensationRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CompensationRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPercentageBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PERCENTAGE_BASED: fieldBuilder.buildEnumField(
          'isPercentageBased',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link annualAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AnnualAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link forecastPositionCompensationGroupDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_COMPENSATION_GROUP_DATA_AREA_ID:
          fieldBuilder.buildEdmTypeField(
            'ForecastPositionCompensationGroupDataAreaId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link forecastPositionRefPointSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_REF_POINT_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'ForecastPositionRefPointSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costElementLineReferenceSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_LINE_REFERENCE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'CostElementLineReferenceSetupId',
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
         * Static representation of the {@link forecastPositionCompensationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_COMPENSATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ForecastPositionCompensationGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BudgetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link positionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PositionTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastPositionLegalEnitytName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_LEGAL_ENITYT_NAME: fieldBuilder.buildEdmTypeField(
          'ForecastPositionLegalEnitytName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionForecastsV2)
      };
    }

    return this._schema;
  }
}
