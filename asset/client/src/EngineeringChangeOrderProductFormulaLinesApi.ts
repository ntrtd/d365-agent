/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductFormulaLines } from './EngineeringChangeOrderProductFormulaLines';
import { EngineeringChangeOrderProductFormulaLinesRequestBuilder } from './EngineeringChangeOrderProductFormulaLinesRequestBuilder';
import { EngineeringChangeOrderProductFormulaHeadersApi } from './EngineeringChangeOrderProductFormulaHeadersApi';
import { EngineeringChangeOrderProductFormulaStepConsumptionApi } from './EngineeringChangeOrderProductFormulaStepConsumptionApi';
import { BomFormula } from './BomFormula';
import { PdsIngredientTypeEnum } from './PdsIngredientTypeEnum';
import { NoYes } from './NoYes';
import { BomType } from './BomType';
import { BomRoundUp } from './BomRoundUp';
import { BomConsumpType } from './BomConsumpType';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
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
export class EngineeringChangeOrderProductFormulaLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
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
  ): EngineeringChangeOrderProductFormulaLinesApi<DeSerializersT> {
    return new EngineeringChangeOrderProductFormulaLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductFormulaHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_HEADER: OneToOneLink<
      EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductFormulaStepConsumption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_STEP_CONSUMPTION: OneToOneLink<
      EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaStepConsumptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductFormulaHeadersApi<DeSerializersT>,
      EngineeringChangeOrderProductFormulaStepConsumptionApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_HEADER: new OneToOneLink(
        'EngineeringChangeOrderProductFormulaHeader',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_STEP_CONSUMPTION:
        new OneToOneLink(
          'EngineeringChangeOrderProductFormulaStepConsumption',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductFormulaLines;

  requestBuilder(): EngineeringChangeOrderProductFormulaLinesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductFormulaLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductFormulaLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductFormulaLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_HEADER_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSTITUTION_PRIORITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POSITION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_CALCULATION_METHOD: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      BomFormula,
      true,
      true
    >;
    INGREDIENT_TYPE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      PdsIngredientTypeEnum,
      true,
      true
    >;
    IS_CONSUMED_AT_OPERATION_COMPLETE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_CALCULATION_CONSTANT: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_WAREHOUSE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_COST_CALCULATION_INCLUDE_LINE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BOM_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RESOURCE_CONSUMPTION_USED: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    WILL_MANUFACTURED_ITEM_INHERIT_BATCH_ATTRIBUTES: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASE_VALUE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSTITUTION_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_CO_BY_ITEM_INHERIT_SHELF_LIFE_DATES: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_TYPE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      BomType,
      true,
      true
    >;
    QUANTITY_ROUNDING_UP_MULTIPLES: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_CO_BY_ITEM_INHERIT_BATCH_ATTRIBUTES: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHYSICAL_PRODUCT_DEPTH: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_HEIGHT: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPENSATING_ACTIVE_ITEM_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_UP_METHOD: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      BomRoundUp,
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PHYSICAL_PRODUCT_DENSITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABLE_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_TYPE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      BomConsumpType,
      true,
      true
    >;
    WILL_MANUFACTURED_ITEM_INHERIT_SHELF_LIFE_DATES: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPENSATING_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_BOM_RELEASE_RESERVATION_REQUIREMENT_RULE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      BomWhsReleasePolicy,
      true,
      true
    >;
    FORMULA_QUANTITY_PERCENTAGE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLUSHING_PRINCIPLE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      ProdFlushingPrincipBom,
      true,
      true
    >;
    QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PERCENTAGE_CONTROLLED: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_WIDTH: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SCALABLE: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONFIGURATION_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSTANT_SCRAP_QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_SET_SUBPRODUCTION_TO_CONSUMED: EnumField<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductFormulaHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_HEADER: OneToOneLink<
      EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductFormulaStepConsumption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_STEP_CONSUMPTION: OneToOneLink<
      EngineeringChangeOrderProductFormulaLines<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaStepConsumptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductFormulaLines<DeSerializers>
    >;
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
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_HEADER_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber',
            'Edm.Int32',
            false
          ),
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
         * Static representation of the {@link substitutionPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTION_PRIORITY: fieldBuilder.buildEdmTypeField(
          'SubstitutionPriority',
          'Edm.Int32',
          false
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
         * Static representation of the {@link ingredientType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INGREDIENT_TYPE: fieldBuilder.buildEnumField(
          'IngredientType',
          PdsIngredientTypeEnum,
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
         * Static representation of the {@link baseValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_VALUE: fieldBuilder.buildEdmTypeField(
          'BaseValue',
          'Edm.String',
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
         * Static representation of the {@link substitutionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SubstitutionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willCoByItemInheritShelfLifeDates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_CO_BY_ITEM_INHERIT_SHELF_LIFE_DATES: fieldBuilder.buildEnumField(
          'WillCoByItemInheritShelfLifeDates',
          NoYes,
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
         * Static representation of the {@link willCoByItemInheritBatchAttributes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_CO_BY_ITEM_INHERIT_BATCH_ATTRIBUTES: fieldBuilder.buildEnumField(
          'WillCoByItemInheritBatchAttributes',
          NoYes,
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
         * Static representation of the {@link physicalProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link compensatingActiveItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATING_ACTIVE_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'CompensatingActiveItemId',
          'Edm.String',
          true
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
         * Static representation of the {@link compensatingFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATING_FACTOR: fieldBuilder.buildEdmTypeField(
          'CompensatingFactor',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link formulaQuantityPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_QUANTITY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'FormulaQuantityPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link flushingPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLUSHING_PRINCIPLE: fieldBuilder.buildEnumField(
          'FlushingPrinciple',
          ProdFlushingPrincipBom,
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
         * Static representation of the {@link isPercentageControlled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PERCENTAGE_CONTROLLED: fieldBuilder.buildEnumField(
          'IsPercentageControlled',
          NoYes,
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
         * Static representation of the {@link isScalable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SCALABLE: fieldBuilder.buildEnumField('IsScalable', NoYes, true),
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
        /**
         * Static representation of the {@link willSetSubproductionToConsumed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SET_SUBPRODUCTION_TO_CONSUMED: fieldBuilder.buildEnumField(
          'WillSetSubproductionToConsumed',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductFormulaLines
        )
      };
    }

    return this._schema;
  }
}
