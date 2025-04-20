/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductionOrderBillOfMaterialLines } from './ProductionOrderBillOfMaterialLines';
import { ProductionOrderBillOfMaterialLinesRequestBuilder } from './ProductionOrderBillOfMaterialLinesRequestBuilder';
import { ProductionOrderHeadersApi } from './ProductionOrderHeadersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { ProdReservation } from './ProdReservation';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
import { BomRoundUp } from './BomRoundUp';
import { BomType } from './BomType';
import { ProdBackStatus } from './ProdBackStatus';
import { BomConsumpType } from './BomConsumpType';
import { BomFormula } from './BomFormula';
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
export class ProductionOrderBillOfMaterialLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductionOrderBillOfMaterialLines<DeSerializersT>,
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
  ): ProductionOrderBillOfMaterialLinesApi<DeSerializersT> {
    return new ProductionOrderBillOfMaterialLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderBillOfMaterialLines<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProductionOrderBillOfMaterialLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductionOrderHeadersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCTION_ORDER_HEADER: new OneToOneLink(
        'ProductionOrderHeader',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProductionOrderBillOfMaterialLines;

  requestBuilder(): ProductionOrderBillOfMaterialLinesRequestBuilder<DeSerializersT> {
    return new ProductionOrderBillOfMaterialLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductionOrderBillOfMaterialLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductionOrderBillOfMaterialLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductionOrderBillOfMaterialLines<DeSerializersT>,
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
    typeof ProductionOrderBillOfMaterialLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductionOrderBillOfMaterialLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOM_LINE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FULLY_CONSUMED: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_BOM_RELEASE_RESERVATION_REQUIREMENT_RULE: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      BomWhsReleasePolicy,
      true,
      true
    >;
    AUTO_RESERVATION_MODE: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      ProdReservation,
      true,
      true
    >;
    DEMAND_PRODUCTION_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_PRODUCT_DENSITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FLUSHING_PRINCIPLE: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      ProdFlushingPrincipBom,
      true,
      true
    >;
    VARIABLE_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_ROUTE_OPERATION_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASED_BOM_LINE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_HEIGHT: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOM_LINE_QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_BOM_LINE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CONSUMED_AT_OPERATION_COMPLETE: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_TRANSFER_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CONSTANT_CONSUMPTION_RELEASED: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEMAND_SALES_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEMAND_PRODUCTION_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_PRODUCT_DEPTH: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_UP_METHOD: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      BomRoundUp,
      true,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_PRODUCTION_ORDER_HEADER_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_CALCULATION_CONSTANT: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MATERIAL_OVERPICK_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_INVENTORY_JOURNAL_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_UP_MULTIPLES_BOM_LINE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_COST_CALCULATION_INCLUDE_LINE: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RAW_MATERIAL_SCHEDULED_CONSUMPTION_TIME: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      BomType,
      true,
      true
    >;
    ESTIMATED_BOM_LINE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STARTED_BOM_LINE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_TRANSFER_ORDER_LINE_RECEIVING_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RESOURCE_CONSUMPTION_USED: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RAW_MATERIAL_SCHEDULED_CONSUMPTION_DATE: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_REMAINDER_STATUS: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      ProdBackStatus,
      true,
      true
    >;
    SOURCE_BOM_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_SITE_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_SALES_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_MASTER_PLAN_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BOM_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_PRODUCT_WIDTH: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_TYPE: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      BomConsumpType,
      true,
      true
    >;
    CONSUMPTION_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_CALCULATION_METHOD: EnumField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      BomFormula,
      true,
      true
    >;
    CONSTANT_SCRAP_BOM_LINE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBCONTRACTING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_INVENTORY_JOURNAL_NUMBER: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_LINE_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductionOrderBillOfMaterialLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderBillOfMaterialLines<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProductionOrderBillOfMaterialLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductionOrderBillOfMaterialLines<DeSerializers>>;
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
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bomLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BOMLineQuantity',
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
         * Static representation of the {@link warehouseBomReleaseReservationRequirementRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_BOM_RELEASE_RESERVATION_REQUIREMENT_RULE:
          fieldBuilder.buildEnumField(
            'WarehouseBomReleaseReservationRequirementRule',
            BomWhsReleasePolicy,
            true
          ),
        /**
         * Static representation of the {@link autoReservationMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_RESERVATION_MODE: fieldBuilder.buildEnumField(
          'AutoReservationMode',
          ProdReservation,
          true
        ),
        /**
         * Static representation of the {@link demandProductionOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandProductionOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link demandProductionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandProductionOrderNumber',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalProductDensity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_DENSITY: fieldBuilder.buildEdmTypeField(
          'PhysicalProductDensity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link flushingPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLUSHING_PRINCIPLE: fieldBuilder.buildEnumField(
          'FlushingPrinciple',
          ProdFlushingPrincipBom,
          true
        ),
        /**
         * Static representation of the {@link variableScrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'VariableScrapPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subRouteOperationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_ROUTE_OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'SubRouteOperationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releasedBomLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_BOM_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReleasedBOMLineQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link physicalProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bomLineQuantityDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_LINE_QUANTITY_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'BOMLineQuantityDenominator',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainingBomLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_BOM_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingBOMLineQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isConsumedAtOperationComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSUMED_AT_OPERATION_COMPLETE: fieldBuilder.buildEnumField(
          'IsConsumedAtOperationComplete',
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
         * Static representation of the {@link demandTransferOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_TRANSFER_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandTransferOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isConstantConsumptionReleased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSTANT_CONSUMPTION_RELEASED: fieldBuilder.buildEnumField(
          'IsConstantConsumptionReleased',
          NoYes,
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
         * Static representation of the {@link remainingInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link demandSalesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandSalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startedInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link demandProductionOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandProductionOrderLineNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalProductDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_DEPTH: fieldBuilder.buildEdmTypeField(
          'PhysicalProductDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingUpMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_UP_METHOD: fieldBuilder.buildEnumField(
          'RoundingUpMethod',
          BomRoundUp,
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
         * Static representation of the {@link demandProductionOrderHeaderInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_HEADER_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandProductionOrderHeaderInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link consumptionCalculationConstant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_CALCULATION_CONSTANT: fieldBuilder.buildEdmTypeField(
          'ConsumptionCalculationConstant',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link routeOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RouteOperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link materialOverpickPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_OVERPICK_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MaterialOverpickPercentage',
          'Edm.Decimal',
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
         * Static representation of the {@link positionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'PositionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link demandInventoryJournalLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_INVENTORY_JOURNAL_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandInventoryJournalLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link roundingUpMultiplesBomLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_UP_MULTIPLES_BOM_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RoundingUpMultiplesBOMLineQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willCostCalculationIncludeLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALCULATION_INCLUDE_LINE: fieldBuilder.buildEnumField(
          'WillCostCalculationIncludeLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rawMaterialScheduledConsumptionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RAW_MATERIAL_SCHEDULED_CONSUMPTION_TIME: fieldBuilder.buildEdmTypeField(
          'RawMaterialScheduledConsumptionTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField('LineType', BomType, true),
        /**
         * Static representation of the {@link estimatedBomLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_BOM_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedBOMLineQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startedBomLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_BOM_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedBOMLineQuantity',
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
         * Static representation of the {@link demandTransferOrderLineReceivingInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_TRANSFER_ORDER_LINE_RECEIVING_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandTransferOrderLineReceivingInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isResourceConsumptionUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESOURCE_CONSUMPTION_USED: fieldBuilder.buildEdmTypeField(
          'IsResourceConsumptionUsed',
          'Edm.Boolean',
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
         * Static representation of the {@link rawMaterialScheduledConsumptionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RAW_MATERIAL_SCHEDULED_CONSUMPTION_DATE: fieldBuilder.buildEdmTypeField(
          'RawMaterialScheduledConsumptionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lineRemainderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_REMAINDER_STATUS: fieldBuilder.buildEnumField(
          'LineRemainderStatus',
          ProdBackStatus,
          true
        ),
        /**
         * Static representation of the {@link sourceBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BOM_ID: fieldBuilder.buildEdmTypeField(
          'SourceBOMId',
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
         * Static representation of the {@link demandSalesOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_SALES_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandSalesOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link estimatedInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedInventoryQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BOM_ID: fieldBuilder.buildEdmTypeField(
          'SubBOMId',
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
         * Static representation of the {@link physicalProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'PhysicalProductWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumptionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_TYPE: fieldBuilder.buildEnumField(
          'ConsumptionType',
          BomConsumpType,
          true
        ),
        /**
         * Static representation of the {@link consumptionWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'ConsumptionCalculationMethod',
          BomFormula,
          true
        ),
        /**
         * Static representation of the {@link constantScrapBomLineQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_SCRAP_BOM_LINE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConstantScrapBOMLineQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subcontractingVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubcontractingVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link demandInventoryJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_INVENTORY_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandInventoryJournalNumber',
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
         * Static representation of the {@link bomLineUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_LINE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BOMLineUnitSymbol',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductionOrderBillOfMaterialLines)
      };
    }

    return this._schema;
  }
}
