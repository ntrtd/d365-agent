/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BatchOrderByProductsV2 } from './BatchOrderByProductsV2';
import { BatchOrderByProductsV2RequestBuilder } from './BatchOrderByProductsV2RequestBuilder';
import { BatchOrderHeadersApi } from './BatchOrderHeadersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { PmfCoByRoundUp } from './PmfCoByRoundUp';
import { ProdBackStatus } from './ProdBackStatus';
import { PmfBurdenType } from './PmfBurdenType';
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
export class BatchOrderByProductsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BatchOrderByProductsV2<DeSerializersT>, DeSerializersT>
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
  ): BatchOrderByProductsV2Api<DeSerializersT> {
    return new BatchOrderByProductsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link batchOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_HEADER: OneToOneLink<
      BatchOrderByProductsV2<DeSerializersT>,
      DeSerializersT,
      BatchOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_SET: OneToOneLink<
      BatchOrderByProductsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BatchOrderHeadersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BATCH_ORDER_HEADER: new OneToOneLink(
        'BatchOrderHeader',
        this,
        linkedApis[0]
      ),
      DEFAULT_DIMENSION_SET: new OneToOneLink(
        'DefaultDimensionSet',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BatchOrderByProductsV2;

  requestBuilder(): BatchOrderByProductsV2RequestBuilder<DeSerializersT> {
    return new BatchOrderByProductsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BatchOrderByProductsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BatchOrderByProductsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BatchOrderByProductsV2<DeSerializersT>,
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
    typeof BatchOrderByProductsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BatchOrderByProductsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FULLY_CONSUMED: EnumField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENDED_DATE: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_UP_MULTIPLES_BY_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTED_AS_FINISHED_DATE: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REMAINING_BY_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BY_PRODUCT_QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BY_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_UP_METHOD: EnumField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      PmfCoByRoundUp,
      true,
      true
    >;
    STARTED_DATE: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_WAREHOUSE_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_BY_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_DATE: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ESTIMATED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BATCH_ORDER_REMAINDER_STATUS: EnumField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      ProdBackStatus,
      true,
      true
    >;
    BURDEN_ALLOCATION_AMOUNT: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_SITE_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_MASTER_PLAN_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BURDEN_ALLOCATION_METHOD: EnumField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      PmfBurdenType,
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_BY_PRODUCT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STARTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      BatchOrderByProductsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link batchOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_HEADER: OneToOneLink<
      BatchOrderByProductsV2<DeSerializersT>,
      DeSerializersT,
      BatchOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_SET: OneToOneLink<
      BatchOrderByProductsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BatchOrderByProductsV2<DeSerializers>>;
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
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
         * Static representation of the {@link subcontractingPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubcontractingPurchaseOrderNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link endedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDED_DATE: fieldBuilder.buildEdmTypeField(
          'EndedDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingUpMultiplesByProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_UP_MULTIPLES_BY_PRODUCT_QUANTITY:
          fieldBuilder.buildEdmTypeField(
            'RoundingUpMultiplesByProductQuantity',
            'Edm.Decimal',
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
         * Static representation of the {@link remainingByProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_BY_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingByProductQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link byProductQuantityDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BY_PRODUCT_QUANTITY_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'ByProductQuantityDenominator',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link byProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BY_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ByProductQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
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
         * Static representation of the {@link roundingUpMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_UP_METHOD: fieldBuilder.buildEnumField(
          'RoundingUpMethod',
          PmfCoByRoundUp,
          true
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
         * Static representation of the {@link consumptionWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startedByProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_BY_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedByProductQuantity',
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
         * Static representation of the {@link estimatedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedCatchWeightQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link burdenAllocationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BURDEN_ALLOCATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BurdenAllocationAmount',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
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
         * Static representation of the {@link consumptionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionSiteId',
          'Edm.String',
          true
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
         * Static representation of the {@link burdenAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BURDEN_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'BurdenAllocationMethod',
          PmfBurdenType,
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimatedByProductQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_BY_PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedByProductQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BatchOrderByProductsV2)
      };
    }

    return this._schema;
  }
}
