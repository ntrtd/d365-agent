/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ForecastPositionCostElements } from './ForecastPositionCostElements';
import { ForecastPositionCostElementsRequestBuilder } from './ForecastPositionCostElementsRequestBuilder';
import { HcmBudgetCostElementType } from './HcmBudgetCostElementType';
import { HcmBudgetPositionOverride } from './HcmBudgetPositionOverride';
import { HcmBudgetPurposeAllocationOption } from './HcmBudgetPurposeAllocationOption';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ForecastPositionCostElementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ForecastPositionCostElements<DeSerializersT>, DeSerializersT>
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
  ): ForecastPositionCostElementsApi<DeSerializersT> {
    return new ForecastPositionCostElementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ForecastPositionCostElements;

  requestBuilder(): ForecastPositionCostElementsRequestBuilder<DeSerializersT> {
    return new ForecastPositionCostElementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ForecastPositionCostElements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ForecastPositionCostElements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ForecastPositionCostElements<DeSerializersT>,
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
    typeof ForecastPositionCostElements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ForecastPositionCostElements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COST_ELEMENT_NAME: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ELEMENT_DATA_AREA_ID: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ANNUAL_LIMIT: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_COST_TYPE: EnumField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      HcmBudgetCostElementType,
      true,
      true
    >;
    FORECAST_POSITION_OVERRIDE: EnumField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      HcmBudgetPositionOverride,
      true,
      true
    >;
    ALLOCATION_METHOD: EnumField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      HcmBudgetPurposeAllocationOption,
      true,
      true
    >;
    COST_ELEMENT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ForecastPositionCostElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ForecastPositionCostElements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link annualLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_LIMIT: fieldBuilder.buildEdmTypeField(
          'AnnualLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link budgetCostType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_COST_TYPE: fieldBuilder.buildEnumField(
          'BudgetCostType',
          HcmBudgetCostElementType,
          true
        ),
        /**
         * Static representation of the {@link forecastPositionOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_POSITION_OVERRIDE: fieldBuilder.buildEnumField(
          'ForecastPositionOverride',
          HcmBudgetPositionOverride,
          true
        ),
        /**
         * Static representation of the {@link allocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'AllocationMethod',
          HcmBudgetPurposeAllocationOption,
          true
        ),
        /**
         * Static representation of the {@link costElementLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CostElementLedgerDimensionDisplayValue',
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
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ForecastPositionCostElements)
      };
    }

    return this._schema;
  }
}
