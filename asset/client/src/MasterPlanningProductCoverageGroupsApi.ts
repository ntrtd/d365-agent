/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MasterPlanningProductCoverageGroups } from './MasterPlanningProductCoverageGroups';
import { MasterPlanningProductCoverageGroupsRequestBuilder } from './MasterPlanningProductCoverageGroupsRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { NoYes } from './NoYes';
import { ReqCovType } from './ReqCovType';
import { ActionBasicDateType } from './ActionBasicDateType';
import { ReqOnHandConsumptionStrategy } from './ReqOnHandConsumptionStrategy';
import { ReqForecastReducedBy } from './ReqForecastReducedBy';
import { ProdStatus } from './ProdStatus';
import { ReqDecouplingPointPeriodLength } from './ReqDecouplingPointPeriodLength';
import { ReqAverageDailyUsageBasedOn } from './ReqAverageDailyUsageBasedOn';
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
export class MasterPlanningProductCoverageGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MasterPlanningProductCoverageGroups<DeSerializersT>,
      DeSerializersT
    >
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
  ): MasterPlanningProductCoverageGroupsApi<DeSerializersT> {
    return new MasterPlanningProductCoverageGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      MasterPlanningProductCoverageGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = MasterPlanningProductCoverageGroups;

  requestBuilder(): MasterPlanningProductCoverageGroupsRequestBuilder<DeSerializersT> {
    return new MasterPlanningProductCoverageGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MasterPlanningProductCoverageGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MasterPlanningProductCoverageGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MasterPlanningProductCoverageGroups<DeSerializersT>,
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
    typeof MasterPlanningProductCoverageGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MasterPlanningProductCoverageGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WILL_DEMAND_FORECAST_INCLUDE_INTERCOMPANY_ORDERS: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEGATIVE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COVERAGE_METHOD: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      ReqCovType,
      true,
      true
    >;
    COVERAGE_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_CALENDAR_ID: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTION_MESSAGE_ENABLED: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_ADVANCE_MARGIN_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTION_BASIS_DATE_TYPE: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      ActionBasicDateType,
      true,
      true
    >;
    ON_HAND_INVENTORY_CONSUMPTION_STRATEGY: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      ReqOnHandConsumptionStrategy,
      true,
      true
    >;
    MUST_USE_LATEST_POSSIBLE_SUPPLY_FIRST: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_SPECIFIED_BOM_OR_FORMULA_VERSION: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DELAY_CALCULATION_ENABLED: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVED_REQUISITION_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_POSTPONE_MARGIN_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_ACTION_DECREASE_ENABLED: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORECAST_DEMAND_PLAN_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_ADVANCE_ACTION_ENABLED: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTION_INCREASE_ENABLED: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORECAST_REDUCTION_METHOD: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      ReqForecastReducedBy,
      true,
      true
    >;
    COVERAGE_PERIOD_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POSITIVE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPT_SAFETY_MARGIN_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_SPECIFIED_ROUTE_VERSION: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPACITY_SCHEDULING_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTION_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORECAST_REDUCTION_KEY_ID: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_PRODUCTION_STATUS: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      ProdStatus,
      true,
      true
    >;
    AUTOMATIC_FIRMING_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_POSTPONE_ACTION_ENABLED: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATE_DELAY_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BOM_OR_FORMULA_EXPLOSION_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ARE_DERIVED_ACTIONS_ENABLED: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REORDER_SAFETY_MARGIN_DAY: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FREEZE_TIME_FENCE_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD_TEMPLATE_ID: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_SAFETY_MARGIN_DAYS: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WILL_DEMAND_FORECAST_INCLUDE_CUSTOMER_FORECAST: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AVERAGE_DAILY_USAGE_FORECAST_MODEL_ID: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVERAGE_DAILY_USAGE_PAST_PERIOD: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RELATIVE_WEIGHT_OF_FORWARD_PERIOD_FOR_BLENDED_ADU: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEAD_TIME_FACTOR: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABILITY_FACTOR: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELATIVE_WEIGHT_OF_PAST_PERIOD_FOR_BLENDED_ADU: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DECOUPLING_POINT_PERIOD_LENGTH: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      ReqDecouplingPointPeriodLength,
      true,
      true
    >;
    AVERAGE_DAILY_USAGE_BASED_ON: EnumField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      ReqAverageDailyUsageBasedOn,
      true,
      true
    >;
    AVERAGE_DAILY_USAGE_FORWARD_PERIOD: OrderableEdmTypeField<
      MasterPlanningProductCoverageGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      MasterPlanningProductCoverageGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MasterPlanningProductCoverageGroups<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link willDemandForecastIncludeIntercompanyOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_DEMAND_FORECAST_INCLUDE_INTERCOMPANY_ORDERS:
          fieldBuilder.buildEnumField(
            'WillDemandForecastIncludeIntercompanyOrders',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link negativeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_DAYS: fieldBuilder.buildEdmTypeField(
          'NegativeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link coverageMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_METHOD: fieldBuilder.buildEnumField(
          'CoverageMethod',
          ReqCovType,
          true
        ),
        /**
         * Static representation of the {@link coverageTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'CoverageTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'WorkCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActionMessageEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTION_MESSAGE_ENABLED: fieldBuilder.buildEnumField(
          'IsActionMessageEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumAdvanceMarginDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_ADVANCE_MARGIN_DAYS: fieldBuilder.buildEdmTypeField(
          'MaximumAdvanceMarginDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link actionBasisDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_BASIS_DATE_TYPE: fieldBuilder.buildEnumField(
          'ActionBasisDateType',
          ActionBasicDateType,
          true
        ),
        /**
         * Static representation of the {@link onHandInventoryConsumptionStrategy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HAND_INVENTORY_CONSUMPTION_STRATEGY: fieldBuilder.buildEnumField(
          'OnHandInventoryConsumptionStrategy',
          ReqOnHandConsumptionStrategy,
          true
        ),
        /**
         * Static representation of the {@link mustUseLatestPossibleSupplyFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_USE_LATEST_POSSIBLE_SUPPLY_FIRST: fieldBuilder.buildEnumField(
          'MustUseLatestPossibleSupplyFirst',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useSpecifiedBomOrFormulaVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SPECIFIED_BOM_OR_FORMULA_VERSION: fieldBuilder.buildEnumField(
          'UseSpecifiedBOMOrFormulaVersion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDelayCalculationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELAY_CALCULATION_ENABLED: fieldBuilder.buildEnumField(
          'IsDelayCalculationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link approvedRequisitionTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_REQUISITION_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ApprovedRequisitionTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maximumPostponeMarginDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_POSTPONE_MARGIN_DAYS: fieldBuilder.buildEdmTypeField(
          'MaximumPostponeMarginDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isActionDecreaseEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTION_DECREASE_ENABLED: fieldBuilder.buildEnumField(
          'IsActionDecreaseEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forecastDemandPlanTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_DEMAND_PLAN_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ForecastDemandPlanTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isAdvanceActionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADVANCE_ACTION_ENABLED: fieldBuilder.buildEnumField(
          'IsAdvanceActionEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isActionIncreaseEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTION_INCREASE_ENABLED: fieldBuilder.buildEnumField(
          'IsActionIncreaseEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forecastReductionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_REDUCTION_METHOD: fieldBuilder.buildEnumField(
          'ForecastReductionMethod',
          ReqForecastReducedBy,
          true
        ),
        /**
         * Static representation of the {@link coveragePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'CoveragePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link positiveDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITIVE_DAYS: fieldBuilder.buildEdmTypeField(
          'PositiveDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receiptSafetyMarginDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_SAFETY_MARGIN_DAYS: fieldBuilder.buildEdmTypeField(
          'ReceiptSafetyMarginDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link useSpecifiedRouteVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SPECIFIED_ROUTE_VERSION: fieldBuilder.buildEnumField(
          'UseSpecifiedRouteVersion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link capacitySchedulingTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_SCHEDULING_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'CapacitySchedulingTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link actionTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ActionTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link forecastReductionKeyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_REDUCTION_KEY_ID: fieldBuilder.buildEdmTypeField(
          'ForecastReductionKeyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedProductionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_PRODUCTION_STATUS: fieldBuilder.buildEnumField(
          'RequestedProductionStatus',
          ProdStatus,
          true
        ),
        /**
         * Static representation of the {@link automaticFirmingTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_FIRMING_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'AutomaticFirmingTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isPostponeActionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTPONE_ACTION_ENABLED: fieldBuilder.buildEnumField(
          'IsPostponeActionEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculateDelayTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_DELAY_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'CalculateDelayTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bomOrFormulaExplosionTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_OR_FORMULA_EXPLOSION_TIME_FENCE_DAYS:
          fieldBuilder.buildEdmTypeField(
            'BOMOrFormulaExplosionTimeFenceDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link areDerivedActionsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_DERIVED_ACTIONS_ENABLED: fieldBuilder.buildEnumField(
          'AreDerivedActionsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reorderSafetyMarginDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REORDER_SAFETY_MARGIN_DAY: fieldBuilder.buildEdmTypeField(
          'ReorderSafetyMarginDay',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link freezeTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREEZE_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'FreezeTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link periodTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'PeriodTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueSafetyMarginDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_SAFETY_MARGIN_DAYS: fieldBuilder.buildEdmTypeField(
          'IssueSafetyMarginDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link willDemandForecastIncludeCustomerForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_DEMAND_FORECAST_INCLUDE_CUSTOMER_FORECAST:
          fieldBuilder.buildEnumField(
            'WillDemandForecastIncludeCustomerForecast',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link averageDailyUsageForecastModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_DAILY_USAGE_FORECAST_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'AverageDailyUsageForecastModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link averageDailyUsagePastPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_DAILY_USAGE_PAST_PERIOD: fieldBuilder.buildEdmTypeField(
          'AverageDailyUsagePastPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link relativeWeightOfForwardPeriodForBlendedAdu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIVE_WEIGHT_OF_FORWARD_PERIOD_FOR_BLENDED_ADU:
          fieldBuilder.buildEdmTypeField(
            'RelativeWeightOfForwardPeriodForBlendedADU',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link leadTimeFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME_FACTOR: fieldBuilder.buildEdmTypeField(
          'LeadTimeFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link variabilityFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABILITY_FACTOR: fieldBuilder.buildEdmTypeField(
          'VariabilityFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link relativeWeightOfPastPeriodForBlendedAdu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIVE_WEIGHT_OF_PAST_PERIOD_FOR_BLENDED_ADU:
          fieldBuilder.buildEdmTypeField(
            'RelativeWeightOfPastPeriodForBlendedADU',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link decouplingPointPeriodLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECOUPLING_POINT_PERIOD_LENGTH: fieldBuilder.buildEnumField(
          'DecouplingPointPeriodLength',
          ReqDecouplingPointPeriodLength,
          true
        ),
        /**
         * Static representation of the {@link averageDailyUsageBasedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_DAILY_USAGE_BASED_ON: fieldBuilder.buildEnumField(
          'AverageDailyUsageBasedOn',
          ReqAverageDailyUsageBasedOn,
          true
        ),
        /**
         * Static representation of the {@link averageDailyUsageForwardPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_DAILY_USAGE_FORWARD_PERIOD: fieldBuilder.buildEdmTypeField(
          'AverageDailyUsageForwardPeriod',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MasterPlanningProductCoverageGroups)
      };
    }

    return this._schema;
  }
}
