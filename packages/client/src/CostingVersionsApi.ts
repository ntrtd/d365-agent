/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostingVersions } from './CostingVersions';
import { CostingVersionsRequestBuilder } from './CostingVersionsRequestBuilder';
import { CostConfigurationPriceListCostingVersionsApi } from './CostConfigurationPriceListCostingVersionsApi';
import { RoutePendingRouteCostCategoryUnitCostsApi } from './RoutePendingRouteCostCategoryUnitCostsApi';
import { NoYes } from './NoYes';
import { BomCostPriceModel } from './BomCostPriceModel';
import { CostingVersionCostingType } from './CostingVersionCostingType';
import { BomCalcFallBack } from './BomCalcFallBack';
import { CostProfitSet } from './CostProfitSet';
import { NoYesCombo } from './NoYesCombo';
import { PurchPriceModel } from './PurchPriceModel';
import { BomCalcExplosionMode } from './BomCalcExplosionMode';
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
export class CostingVersionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CostingVersions<DeSerializersT>, DeSerializersT>
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
  ): CostingVersionsApi<DeSerializersT> {
    return new CostingVersionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link costingVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COSTING_VERSION: OneToManyLink<
      CostingVersions<DeSerializersT>,
      DeSerializersT,
      CostConfigurationPriceListCostingVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link pendingRouteCostCategoryUnitCosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PENDING_ROUTE_COST_CATEGORY_UNIT_COSTS: OneToManyLink<
      CostingVersions<DeSerializersT>,
      DeSerializersT,
      RoutePendingRouteCostCategoryUnitCostsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CostConfigurationPriceListCostingVersionsApi<DeSerializersT>,
      RoutePendingRouteCostCategoryUnitCostsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COSTING_VERSION: new OneToManyLink('CostingVersion', this, linkedApis[0]),
      PENDING_ROUTE_COST_CATEGORY_UNIT_COSTS: new OneToManyLink(
        'PendingRouteCostCategoryUnitCosts',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CostingVersions;

  requestBuilder(): CostingVersionsRequestBuilder<DeSerializersT> {
    return new CostingVersionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostingVersions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CostingVersions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CostingVersions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CostingVersions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostingVersions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION_ID: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_UNIT_PRICE_INCLUDING_CHARGE: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_FROM_DATE: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECORDING_RESTRICTION: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_PRICE_MODEL: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      BomCostPriceModel,
      true,
      true
    >;
    COSTING_TYPE: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      CostingVersionCostingType,
      true,
      true
    >;
    IS_PRODUCTION_PROCUREMENT_MODE_PRICE_CALCULATION_ALLOWED: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_SALES_PRICES_ALLOWED: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROUND_OFF_CALCULATION: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FALLBACK_PRINCIPLE: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      BomCalcFallBack,
      true,
      true
    >;
    PROFIT_SETTING: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      CostProfitSet,
      true,
      true
    >;
    LAST_UPDATE_DATE: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_VERSION_BLOCKED: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    ARE_PURCHASE_PRICES_ALLOWED: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTRICTING_PRICE_SITE_ID: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FALLBACK_COSTING_VERSION_ID: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVATION_BLOCKED: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    RESTRICT_CALCULATION: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_ACTIVATION_DATE: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_PRICE_MODEL: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      PurchPriceModel,
      true,
      true
    >;
    ARE_PRICE_CALCULATIONS_USING_PURCHASE_PROCUREMENT_MODE_ALLOWED: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_COST_PRICES_ALLOWED: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPLOSION_MODE: EnumField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      BomCalcExplosionMode,
      true,
      true
    >;
    VERSION_NAME: OrderableEdmTypeField<
      CostingVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costingVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COSTING_VERSION: OneToManyLink<
      CostingVersions<DeSerializersT>,
      DeSerializersT,
      CostConfigurationPriceListCostingVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link pendingRouteCostCategoryUnitCosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PENDING_ROUTE_COST_CATEGORY_UNIT_COSTS: OneToManyLink<
      CostingVersions<DeSerializersT>,
      DeSerializersT,
      RoutePendingRouteCostCategoryUnitCostsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CostingVersions<DeSerializers>>;
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
         * Static representation of the {@link versionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_ID: fieldBuilder.buildEdmTypeField(
          'VersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isUnitPriceIncludingCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNIT_PRICE_INCLUDING_CHARGE: fieldBuilder.buildEnumField(
          'IsUnitPriceIncludingCharge',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link recordingRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORDING_RESTRICTION: fieldBuilder.buildEnumField(
          'RecordingRestriction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costPriceModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE_MODEL: fieldBuilder.buildEnumField(
          'CostPriceModel',
          BomCostPriceModel,
          true
        ),
        /**
         * Static representation of the {@link costingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_TYPE: fieldBuilder.buildEnumField(
          'CostingType',
          CostingVersionCostingType,
          true
        ),
        /**
         * Static representation of the {@link isProductionProcurementModePriceCalculationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTION_PROCUREMENT_MODE_PRICE_CALCULATION_ALLOWED:
          fieldBuilder.buildEnumField(
            'IsProductionProcurementModePriceCalculationAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link areSalesPricesAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SALES_PRICES_ALLOWED: fieldBuilder.buildEnumField(
          'AreSalesPricesAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link roundOffCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_CALCULATION: fieldBuilder.buildEnumField(
          'RoundOffCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fallbackPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FALLBACK_PRINCIPLE: fieldBuilder.buildEnumField(
          'FallbackPrinciple',
          BomCalcFallBack,
          true
        ),
        /**
         * Static representation of the {@link profitSetting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_SETTING: fieldBuilder.buildEnumField(
          'ProfitSetting',
          CostProfitSet,
          true
        ),
        /**
         * Static representation of the {@link lastUpdateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'LastUpdateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isVersionBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VERSION_BLOCKED: fieldBuilder.buildEnumField(
          'IsVersionBlocked',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link arePurchasePricesAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PURCHASE_PRICES_ALLOWED: fieldBuilder.buildEnumField(
          'ArePurchasePricesAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link restrictingPriceSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTING_PRICE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'RestrictingPriceSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fallbackCostingVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FALLBACK_COSTING_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'FallbackCostingVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivationBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVATION_BLOCKED: fieldBuilder.buildEnumField(
          'IsActivationBlocked',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link restrictCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_CALCULATION: fieldBuilder.buildEnumField(
          'RestrictCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lastActivationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_ACTIVATION_DATE: fieldBuilder.buildEdmTypeField(
          'LastActivationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchasePriceModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_MODEL: fieldBuilder.buildEnumField(
          'PurchasePriceModel',
          PurchPriceModel,
          true
        ),
        /**
         * Static representation of the {@link arePriceCalculationsUsingPurchaseProcurementModeAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_PRICE_CALCULATIONS_USING_PURCHASE_PROCUREMENT_MODE_ALLOWED:
          fieldBuilder.buildEnumField(
            'ArePriceCalculationsUsingPurchaseProcurementModeAllowed',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link areCostPricesAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_COST_PRICES_ALLOWED: fieldBuilder.buildEnumField(
          'AreCostPricesAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link explosionMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPLOSION_MODE: fieldBuilder.buildEnumField(
          'ExplosionMode',
          BomCalcExplosionMode,
          true
        ),
        /**
         * Static representation of the {@link versionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_NAME: fieldBuilder.buildEdmTypeField(
          'VersionName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostingVersions)
      };
    }

    return this._schema;
  }
}
