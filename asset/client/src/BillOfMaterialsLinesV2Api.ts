/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillOfMaterialsLinesV2 } from './BillOfMaterialsLinesV2';
import { BillOfMaterialsLinesV2RequestBuilder } from './BillOfMaterialsLinesV2RequestBuilder';
import { VendorsV2Api } from './VendorsV2Api';
import { BillOfMaterialsHeadersApi } from './BillOfMaterialsHeadersApi';
import { RouteHeadersApi } from './RouteHeadersApi';
import { BomFormula } from './BomFormula';
import { NoYes } from './NoYes';
import { BomType } from './BomType';
import { BomRoundUp } from './BomRoundUp';
import { BomConsumpType } from './BomConsumpType';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
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
export class BillOfMaterialsLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BillOfMaterialsLinesV2<DeSerializersT>, DeSerializersT>
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
  ): BillOfMaterialsLinesV2Api<DeSerializersT> {
    return new BillOfMaterialsLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_OF_MATERIALS_HEADER: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorsV2Api<DeSerializersT>,
      BillOfMaterialsHeadersApi<DeSerializersT>,
      RouteHeadersApi<DeSerializersT>,
      BillOfMaterialsHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR: new OneToOneLink('Vendor', this, linkedApis[0]),
      BILL_OF_MATERIALS_HEADER: new OneToOneLink(
        'BillOfMaterialsHeader',
        this,
        linkedApis[1]
      ),
      ROUTE_HEADER: new OneToOneLink('RouteHeader', this, linkedApis[2]),
      SUB_BILL_OF_MATERIALS_HEADER: new OneToOneLink(
        'SubBillOfMaterialsHeader',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = BillOfMaterialsLinesV2;

  requestBuilder(): BillOfMaterialsLinesV2RequestBuilder<DeSerializersT> {
    return new BillOfMaterialsLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BillOfMaterialsLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillOfMaterialsLinesV2<DeSerializersT>,
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
    typeof BillOfMaterialsLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillOfMaterialsLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_CALCULATION_METHOD: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      BomFormula,
      true,
      true
    >;
    IS_CONSUMED_AT_OPERATION_COMPLETE: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_CALCULATION_CONSTANT: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_WAREHOUSE_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_SITE_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_COST_CALCULATION_INCLUDE_LINE: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BOM_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RESOURCE_CONSUMPTION_USED: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    WILL_MANUFACTURED_ITEM_INHERIT_BATCH_ATTRIBUTES: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      BomType,
      true,
      true
    >;
    QUANTITY_ROUNDING_UP_MULTIPLES: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_DEPTH: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_HEIGHT: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_UP_METHOD: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      BomRoundUp,
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PHYSICAL_PRODUCT_DENSITY: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_TYPE: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      BomConsumpType,
      true,
      true
    >;
    WILL_MANUFACTURED_ITEM_INHERIT_SHELF_LIFE_DATES: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FLUSHING_PRINCIPLE: EnumField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      ProdFlushingPrincipBom,
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_WIDTH: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIGURATION_GROUP_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSTANT_SCRAP_QUANTITY: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_ROUTE_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      BillOfMaterialsLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_OF_MATERIALS_HEADER: OneToOneLink<
      BillOfMaterialsLinesV2<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BillOfMaterialsLinesV2<DeSerializers>>;
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
         * Static representation of the {@link bomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ID: fieldBuilder.buildEdmTypeField('BOMId', 'Edm.String', false),
        /**
         * Static representation of the {@link lineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_CREATION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineCreationSequenceNumber',
          'Edm.Int32',
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
         * Static representation of the {@link positionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'PositionNumber',
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
         * Static representation of the {@link isConsumedAtOperationComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSUMED_AT_OPERATION_COMPLETE: fieldBuilder.buildEnumField(
          'IsConsumedAtOperationComplete',
          NoYes,
          true
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
         * Static representation of the {@link consumptionCalculationConstant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_CALCULATION_CONSTANT: fieldBuilder.buildEdmTypeField(
          'ConsumptionCalculationConstant',
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
         * Static representation of the {@link consumptionWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link willCostCalculationIncludeLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALCULATION_INCLUDE_LINE: fieldBuilder.buildEnumField(
          'WillCostCalculationIncludeLine',
          NoYes,
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
         * Static representation of the {@link isResourceConsumptionUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESOURCE_CONSUMPTION_USED: fieldBuilder.buildEdmTypeField(
          'IsResourceConsumptionUsed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link willManufacturedItemInheritBatchAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_MANUFACTURED_ITEM_INHERIT_BATCH_ATTRIBUTES:
          fieldBuilder.buildEnumField(
            'WillManufacturedItemInheritBatchAttributes',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link productUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField('LineType', BomType, true),
        /**
         * Static representation of the {@link quantityRoundingUpMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_ROUNDING_UP_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'QuantityRoundingUpMultiples',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link physicalProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalProductHeight',
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
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link variableScrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'VariableScrapPercentage',
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
         * Static representation of the {@link willManufacturedItemInheritShelfLifeDates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_MANUFACTURED_ITEM_INHERIT_SHELF_LIFE_DATES:
          fieldBuilder.buildEnumField(
            'WillManufacturedItemInheritShelfLifeDates',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantityDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'QuantityDenominator',
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
         * Static representation of the {@link physicalProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'PhysicalProductWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link configurationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ConfigurationGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link constantScrapQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT_SCRAP_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConstantScrapQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'SubRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
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
        ALL_FIELDS: new AllFields('*', BillOfMaterialsLinesV2)
      };
    }

    return this._schema;
  }
}
