/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrackingDimensionGroups } from './TrackingDimensionGroups';
import { TrackingDimensionGroupsRequestBuilder } from './TrackingDimensionGroupsRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { AssetMaintenanceReleasedProductsApi } from './AssetMaintenanceReleasedProductsApi';
import { NoYes } from './NoYes';
import { WhsWhenToCapture } from './WhsWhenToCapture';
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
export class TrackingDimensionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TrackingDimensionGroups<DeSerializersT>, DeSerializersT>
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
  ): TrackingDimensionGroupsApi<DeSerializersT> {
    return new TrackingDimensionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsTrackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_TRACKING_DIMENSION_GROUP: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductsV2Api<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      DvReleasedProductsApi<DeSerializersT>,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCTS: new OneToManyLink('Products', this, linkedApis[0]),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[1]
      ),
      DV_RELEASED_PRODUCTS: new OneToManyLink(
        'DVReleasedProducts',
        this,
        linkedApis[2]
      ),
      ENT_ASSET_RELEASED_PRODUCTS_TRACKING_DIMENSION_GROUP: new OneToManyLink(
        'EntAssetReleasedProducts_TrackingDimensionGroup',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = TrackingDimensionGroups;

  requestBuilder(): TrackingDimensionGroupsRequestBuilder<DeSerializersT> {
    return new TrackingDimensionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TrackingDimensionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrackingDimensionGroups<DeSerializersT>,
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
    typeof TrackingDimensionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrackingDimensionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_NAME: OrderableEdmTypeField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIMARY_STOCKING_ENABLED_FOR_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_COVERAGE_PLAN_ENABLED_FOR_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BLANK_ISSUE_ALLOWED_FOR_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_PRICE_BY_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PURCHASE_PRICE_BY_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROUP_DESCRIPTION: OrderableEdmTypeField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVENTORY_OWNER_ACTIVE: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_COVERAGE_PLAN_ENABLED_FOR_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SERIAL_NUMBER_ACTIVE: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BLANK_RECEIPT_ALLOWED_FOR_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FINANCIAL_INVENTORY_ENABLED_FOR_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SERIAL_NUMBER_ENABLED_FOR_SALES_PROCESS: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SERIAL_NUMBER_ENABLED_FOR_PRODUCTION_CONSUMPTION_PROCESS: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FINANCIAL_INVENTORY_ENABLED_FOR_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_PRICE_BY_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERIAL_NUMBER_CAPTURING_OPERATION: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      WhsWhenToCapture,
      true,
      true
    >;
    IS_BLANK_ISSUE_ALLOWED_FOR_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PHYSICAL_INVENTORY_ENABLED_FOR_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BATCH_NUMBER_ACTIVE: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SERIAL_NUMBER_CONTROL_ENABLED: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIMARY_STOCKING_ENABLED_FOR_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PURCHASE_PRICE_BY_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PHYSICAL_INVENTORY_ENABLED_FOR_BATCH_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BLANK_RECEIPT_ALLOWED_FOR_SERIAL_NUMBER: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_COVERAGE_PLAN_ENABLED_FOR_INVENTORY_PROFILE: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_GTD_ACTIVE: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INVENTORY_PROFILE_ACTIVE: EnumField<
      TrackingDimensionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsTrackingDimensionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_TRACKING_DIMENSION_GROUP: OneToManyLink<
      TrackingDimensionGroups<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TrackingDimensionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrimaryStockingEnabledForBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_STOCKING_ENABLED_FOR_BATCH_NUMBER:
          fieldBuilder.buildEnumField(
            'IsPrimaryStockingEnabledForBatchNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isCoveragePlanEnabledForBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COVERAGE_PLAN_ENABLED_FOR_BATCH_NUMBER: fieldBuilder.buildEnumField(
          'IsCoveragePlanEnabledForBatchNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isBlankIssueAllowedForBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BLANK_ISSUE_ALLOWED_FOR_BATCH_NUMBER: fieldBuilder.buildEnumField(
          'IsBlankIssueAllowedForBatchNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSalesPriceByBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PRICE_BY_BATCH_NUMBER: fieldBuilder.buildEnumField(
          'IsSalesPriceByBatchNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPurchasePriceBySerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_PRICE_BY_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'IsPurchasePriceBySerialNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link groupDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GroupDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInventoryOwnerActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_OWNER_ACTIVE: fieldBuilder.buildEnumField(
          'IsInventoryOwnerActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCoveragePlanEnabledForSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COVERAGE_PLAN_ENABLED_FOR_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'IsCoveragePlanEnabledForSerialNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSerialNumberActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERIAL_NUMBER_ACTIVE: fieldBuilder.buildEnumField(
          'IsSerialNumberActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isBlankReceiptAllowedForBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BLANK_RECEIPT_ALLOWED_FOR_BATCH_NUMBER: fieldBuilder.buildEnumField(
          'IsBlankReceiptAllowedForBatchNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFinancialInventoryEnabledForSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINANCIAL_INVENTORY_ENABLED_FOR_SERIAL_NUMBER:
          fieldBuilder.buildEnumField(
            'IsFinancialInventoryEnabledForSerialNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isSerialNumberEnabledForSalesProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERIAL_NUMBER_ENABLED_FOR_SALES_PROCESS: fieldBuilder.buildEnumField(
          'IsSerialNumberEnabledForSalesProcess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSerialNumberEnabledForProductionConsumptionProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERIAL_NUMBER_ENABLED_FOR_PRODUCTION_CONSUMPTION_PROCESS:
          fieldBuilder.buildEnumField(
            'IsSerialNumberEnabledForProductionConsumptionProcess',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isFinancialInventoryEnabledForBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINANCIAL_INVENTORY_ENABLED_FOR_BATCH_NUMBER:
          fieldBuilder.buildEnumField(
            'IsFinancialInventoryEnabledForBatchNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isSalesPriceBySerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PRICE_BY_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'IsSalesPriceBySerialNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serialNumberCapturingOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER_CAPTURING_OPERATION: fieldBuilder.buildEnumField(
          'SerialNumberCapturingOperation',
          WhsWhenToCapture,
          true
        ),
        /**
         * Static representation of the {@link isBlankIssueAllowedForSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BLANK_ISSUE_ALLOWED_FOR_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'IsBlankIssueAllowedForSerialNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPhysicalInventoryEnabledForSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHYSICAL_INVENTORY_ENABLED_FOR_SERIAL_NUMBER:
          fieldBuilder.buildEnumField(
            'IsPhysicalInventoryEnabledForSerialNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isBatchNumberActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_NUMBER_ACTIVE: fieldBuilder.buildEnumField(
          'IsBatchNumberActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSerialNumberControlEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SERIAL_NUMBER_CONTROL_ENABLED: fieldBuilder.buildEnumField(
          'IsSerialNumberControlEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPrimaryStockingEnabledForSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_STOCKING_ENABLED_FOR_SERIAL_NUMBER:
          fieldBuilder.buildEnumField(
            'IsPrimaryStockingEnabledForSerialNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isPurchasePriceByBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_PRICE_BY_BATCH_NUMBER: fieldBuilder.buildEnumField(
          'IsPurchasePriceByBatchNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPhysicalInventoryEnabledForBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHYSICAL_INVENTORY_ENABLED_FOR_BATCH_NUMBER:
          fieldBuilder.buildEnumField(
            'IsPhysicalInventoryEnabledForBatchNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isBlankReceiptAllowedForSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BLANK_RECEIPT_ALLOWED_FOR_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'IsBlankReceiptAllowedForSerialNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCoveragePlanEnabledForInventoryProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COVERAGE_PLAN_ENABLED_FOR_INVENTORY_PROFILE:
          fieldBuilder.buildEnumField(
            'IsCoveragePlanEnabledForInventoryProfile',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isGtdActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GTD_ACTIVE: fieldBuilder.buildEnumField('IsGTDActive', NoYes, true),
        /**
         * Static representation of the {@link isInventoryProfileActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_PROFILE_ACTIVE: fieldBuilder.buildEnumField(
          'IsInventoryProfileActive',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrackingDimensionGroups)
      };
    }

    return this._schema;
  }
}
