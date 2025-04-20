/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BatchOrderCoProductsV2 } from './BatchOrderCoProductsV2';
import { BatchOrderCoProductsV2RequestBuilder } from './BatchOrderCoProductsV2RequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProdBackStatus } from './ProdBackStatus';
import { PmfCostAllocationMethod } from './PmfCostAllocationMethod';
import { PmfCoByRoundUp } from './PmfCoByRoundUp';
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
export class BatchOrderCoProductsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BatchOrderCoProductsV2<DeSerializersT>, DeSerializersT>
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
  ): BatchOrderCoProductsV2Api<DeSerializersT> {
    return new BatchOrderCoProductsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BatchOrderCoProductsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BatchOrderCoProductsV2;

  requestBuilder(): BatchOrderCoProductsV2RequestBuilder<DeSerializersT> {
    return new BatchOrderCoProductsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BatchOrderCoProductsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BatchOrderCoProductsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BatchOrderCoProductsV2<DeSerializersT>,
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
    typeof BatchOrderCoProductsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BatchOrderCoProductsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_CO_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENDED_DATE: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORTED_AS_FINISHED_DATE: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BATCH_ORDER_REMAINDER_STATUS: EnumField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      ProdBackStatus,
      true,
      true
    >;
    ESTIMATED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_WAREHOUSE_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_SITE_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ALLOCATION_METHOD: EnumField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      PmfCostAllocationMethod,
      true,
      true
    >;
    REMAINING_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_CO_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CO_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_DATE: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STARTED_DATE: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_MASTER_PLAN_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CO_PRODUCT_QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_UP_METHOD: EnumField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      PmfCoByRoundUp,
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ALLOCATION_PERCENTAGE: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_UP_MULTIPLES_CO_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BATCH_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_CO_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_FULLY_CONSUMED: EnumField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      BatchOrderCoProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BatchOrderCoProductsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BatchOrderCoProductsV2<DeSerializers>>;
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
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startedCoProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_CO_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedCoProductQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link endedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDED_DATE: fieldBuilder.buildEdmTypeField(
          'EndedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reportedAsFinishedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_AS_FINISHED_DATE: fieldBuilder.buildEdmTypeField(
          'ReportedAsFinishedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link batchOrderRemainderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_REMAINDER_STATUS: fieldBuilder.buildEnumField(
          'BatchOrderRemainderStatus',
          ProdBackStatus,
          true
        ),
        /**
         * Static representation of the {@link estimatedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'CostAllocationMethod',
          PmfCostAllocationMethod,
          true
        ),
        /**
         * Static representation of the {@link remainingCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourcePlannedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PLANNED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourcePlannedOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingCoProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_CO_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingCoProductQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link coProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CoProductQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_DATE: fieldBuilder.buildEdmTypeField(
          'StartedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceMasterPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_MASTER_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'SourceMasterPlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link coProductQuantityDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CO_PRODUCT_QUANTITY_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'CoProductQuantityDenominator',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingUpMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_UP_METHOD: fieldBuilder.buildEnumField(
          'RoundingUpMethod',
          PmfCoByRoundUp,
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subcontractingPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubcontractingPurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAllocationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ALLOCATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'CostAllocationPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingUpMultiplesCoProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_UP_MULTIPLES_CO_PRODUCT_QUANTITY:
          fieldBuilder.buildEdmTypeField(
            'RoundingUpMultiplesCoProductQuantity',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link subcontractingPurchaseOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'SubcontractingPurchaseOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link batchOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimatedCoProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_CO_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedCoProductQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isFullyConsumed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FULLY_CONSUMED: fieldBuilder.buildEnumField(
          'IsFullyConsumed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BatchOrderCoProductsV2)
      };
    }

    return this._schema;
  }
}
