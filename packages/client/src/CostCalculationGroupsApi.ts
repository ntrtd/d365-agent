/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostCalculationGroups } from './CostCalculationGroups';
import { CostCalculationGroupsRequestBuilder } from './CostCalculationGroupsRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { NoYes } from './NoYes';
import { BomCalcCostPrice } from './BomCalcCostPrice';
import { BomCalcSalesPrice } from './BomCalcSalesPrice';
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
export class CostCalculationGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CostCalculationGroups<DeSerializersT>, DeSerializersT>
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
  ): CostCalculationGroupsApi<DeSerializersT> {
    return new CostCalculationGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      CostCalculationGroups<DeSerializersT>,
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

  entityConstructor = CostCalculationGroups;

  requestBuilder(): CostCalculationGroupsRequestBuilder<DeSerializersT> {
    return new CostCalculationGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostCalculationGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CostCalculationGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostCalculationGroups<DeSerializersT>,
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
    typeof CostCalculationGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostCalculationGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHOW_WARNING_IF_CONTRIBUTION_MARGIN_PERCENTAGE_LOWER_THAN: OrderableEdmTypeField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_COST_CALCULATION_ISSUE_ZERO_CONSUMPTION_WARNING: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_COST_CALCULATION_ISSUE_NO_ACTIVE_ASSIGNED_ROUTE_WARNING: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST_CALCULATION_METHOD: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      BomCalcCostPrice,
      true,
      true
    >;
    SALES_PRICE_CALCULATION_METHOD: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      BomCalcSalesPrice,
      true,
      true
    >;
    WILL_COST_CALCULATION_ISSUE_NO_ACTIVE_ASSIGNED_BOM_WARNING: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_COST_CALULATION_ISSUE_OPERATIONS_RESOURCE_REQUIREMENT_NOT_MET_WARNING: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_COST_CALULATION_ISSUE_ZERO_COST_PRICE_WARNING: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_WARNING_IF_COST_PRICE_CALCULATION_OLDER_THAN_DAYS: OrderableEdmTypeField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STOP_EXPLOSION_AT_ITEM: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALTERNATIVE_UNIT_COST_CALCULATION_METHOD: EnumField<
      CostCalculationGroups<DeSerializers>,
      DeSerializersT,
      BomCalcCostPrice,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      CostCalculationGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CostCalculationGroups<DeSerializers>>;
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
         * Static representation of the {@link showWarningIfContributionMarginPercentageLowerThan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_WARNING_IF_CONTRIBUTION_MARGIN_PERCENTAGE_LOWER_THAN:
          fieldBuilder.buildEdmTypeField(
            'ShowWarningIfContributionMarginPercentageLowerThan',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link willCostCalculationIssueZeroConsumptionWarning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALCULATION_ISSUE_ZERO_CONSUMPTION_WARNING:
          fieldBuilder.buildEnumField(
            'WillCostCalculationIssueZeroConsumptionWarning',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willCostCalculationIssueNoActiveAssignedRouteWarning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALCULATION_ISSUE_NO_ACTIVE_ASSIGNED_ROUTE_WARNING:
          fieldBuilder.buildEnumField(
            'WillCostCalculationIssueNoActiveAssignedRouteWarning',
            NoYes,
            true
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
         * Static representation of the {@link unitCostCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'UnitCostCalculationMethod',
          BomCalcCostPrice,
          true
        ),
        /**
         * Static representation of the {@link salesPriceCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'SalesPriceCalculationMethod',
          BomCalcSalesPrice,
          true
        ),
        /**
         * Static representation of the {@link willCostCalculationIssueNoActiveAssignedBomWarning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALCULATION_ISSUE_NO_ACTIVE_ASSIGNED_BOM_WARNING:
          fieldBuilder.buildEnumField(
            'WillCostCalculationIssueNoActiveAssignedBOMWarning',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willCostCalulationIssueOperationsResourceRequirementNotMetWarning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALULATION_ISSUE_OPERATIONS_RESOURCE_REQUIREMENT_NOT_MET_WARNING:
          fieldBuilder.buildEnumField(
            'WillCostCalulationIssueOperationsResourceRequirementNotMetWarning',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willCostCalulationIssueZeroCostPriceWarning} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALULATION_ISSUE_ZERO_COST_PRICE_WARNING:
          fieldBuilder.buildEnumField(
            'WillCostCalulationIssueZeroCostPriceWarning',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link showWarningIfCostPriceCalculationOlderThanDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_WARNING_IF_COST_PRICE_CALCULATION_OLDER_THAN_DAYS:
          fieldBuilder.buildEdmTypeField(
            'ShowWarningIfCostPriceCalculationOlderThanDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link stopExplosionAtItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOP_EXPLOSION_AT_ITEM: fieldBuilder.buildEnumField(
          'StopExplosionAtItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alternativeUnitCostCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_UNIT_COST_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'AlternativeUnitCostCalculationMethod',
          BomCalcCostPrice,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostCalculationGroups)
      };
    }

    return this._schema;
  }
}
