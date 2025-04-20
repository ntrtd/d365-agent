/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ForecastModels } from './ForecastModels';
import { ForecastModelsRequestBuilder } from './ForecastModelsRequestBuilder';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { NoYes } from './NoYes';
import { ProjBudgetType } from './ProjBudgetType';
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
export class ForecastModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ForecastModels<DeSerializersT>, DeSerializersT>
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
  ): ForecastModelsApi<DeSerializersT> {
    return new ForecastModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      ForecastModels<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SupplyForecastEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ForecastModels;

  requestBuilder(): ForecastModelsRequestBuilder<DeSerializersT> {
    return new ForecastModelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ForecastModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ForecastModels<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ForecastModels<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ForecastModels, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ForecastModels, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_TIME_AND_MATERIAL_PROJECT_INCLUDED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_SUFFICIENT_PROJECT_ITEM_FUNDS_REQUIRED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FIXED_PRICE_PROJECT_WIP_INCLUDED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROJECT_HOUR_FORECAST_AUTOMATICALLY_REDUCED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MODEL_STOPPED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_PROJECT_FORECAST_GENERATION_USE_PROJECT_DATE: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROJECT_ITEM_FORECAST_AUTOMATICALLY_REDUCED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUDGET_CONTROL_TYPE: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      ProjBudgetType,
      true,
      true
    >;
    ARE_SUFFICIENT_PROJECT_HOUR_FUNDS_REQUIRED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CASH_FLOW_FORECAST_GENERATED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_SUFFICIENT_PROJECT_EXPENSE_FUNDS_REQUIRED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INVESTMENT_PROJECT_WIP_INCLUDED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROJECT_EXPENSE_FORECAST_AUTOMATICALLY_REDUCED: EnumField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODEL_NAME: OrderableEdmTypeField<
      ForecastModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      ForecastModels<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ForecastModels<DeSerializers>>;
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
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isTimeAndMaterialProjectIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TIME_AND_MATERIAL_PROJECT_INCLUDED: fieldBuilder.buildEnumField(
          'IsTimeAndMaterialProjectIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link areSufficientProjectItemFundsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SUFFICIENT_PROJECT_ITEM_FUNDS_REQUIRED: fieldBuilder.buildEnumField(
          'AreSufficientProjectItemFundsRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFixedPriceProjectWipIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_PRICE_PROJECT_WIP_INCLUDED: fieldBuilder.buildEnumField(
          'IsFixedPriceProjectWIPIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProjectHourForecastAutomaticallyReduced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROJECT_HOUR_FORECAST_AUTOMATICALLY_REDUCED:
          fieldBuilder.buildEnumField(
            'IsProjectHourForecastAutomaticallyReduced',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isModelStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MODEL_STOPPED: fieldBuilder.buildEnumField(
          'IsModelStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willProjectForecastGenerationUseProjectDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PROJECT_FORECAST_GENERATION_USE_PROJECT_DATE:
          fieldBuilder.buildEnumField(
            'WillProjectForecastGenerationUseProjectDate',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isProjectItemForecastAutomaticallyReduced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROJECT_ITEM_FORECAST_AUTOMATICALLY_REDUCED:
          fieldBuilder.buildEnumField(
            'IsProjectItemForecastAutomaticallyReduced',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link budgetControlType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CONTROL_TYPE: fieldBuilder.buildEnumField(
          'BudgetControlType',
          ProjBudgetType,
          true
        ),
        /**
         * Static representation of the {@link areSufficientProjectHourFundsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SUFFICIENT_PROJECT_HOUR_FUNDS_REQUIRED: fieldBuilder.buildEnumField(
          'AreSufficientProjectHourFundsRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCashFlowForecastGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CASH_FLOW_FORECAST_GENERATED: fieldBuilder.buildEnumField(
          'IsCashFlowForecastGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link areSufficientProjectExpenseFundsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SUFFICIENT_PROJECT_EXPENSE_FUNDS_REQUIRED:
          fieldBuilder.buildEnumField(
            'AreSufficientProjectExpenseFundsRequired',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isInvestmentProjectWipIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVESTMENT_PROJECT_WIP_INCLUDED: fieldBuilder.buildEnumField(
          'IsInvestmentProjectWIPIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProjectExpenseForecastAutomaticallyReduced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROJECT_EXPENSE_FORECAST_AUTOMATICALLY_REDUCED:
          fieldBuilder.buildEnumField(
            'IsProjectExpenseForecastAutomaticallyReduced',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link modelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_NAME: fieldBuilder.buildEdmTypeField(
          'ModelName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ForecastModels)
      };
    }

    return this._schema;
  }
}
