/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KittingKitLines } from './KittingKitLines';
import { KittingKitLinesRequestBuilder } from './KittingKitLinesRequestBuilder';
import { Kitting_KitHeadersApi } from './Kitting_KitHeadersApi';
import { BomRoundUp } from './BomRoundUp';
import { BomFormula } from './BomFormula';
import { BomConsumpType } from './BomConsumpType';
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
export class KittingKitLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KittingKitLines<DeSerializersT>, DeSerializersT>
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
  ): KittingKitLinesApi<DeSerializersT> {
    return new KittingKitLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link kittingKitHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_HEADER: OneToOneLink<
      KittingKitLines<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link kitHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KIT_HEADER: OneToOneLink<
      KittingKitLines<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      Kitting_KitHeadersApi<DeSerializersT>,
      Kitting_KitHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      KITTING_KIT_HEADER: new OneToOneLink(
        'Kitting_KitHeader',
        this,
        linkedApis[0]
      ),
      KIT_HEADER: new OneToOneLink('KitHeader', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = KittingKitLines;

  requestBuilder(): KittingKitLinesRequestBuilder<DeSerializersT> {
    return new KittingKitLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KittingKitLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KittingKitLines<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KittingKitLines<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof KittingKitLines, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KittingKitLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_WIDTH: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_WAREHOUSE_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_UP_METHOD: EnumField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      BomRoundUp,
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_CALCULATION_CONSTANT: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_DEPTH: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_ROUNDING_UP_MULTIPLES: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_PRODUCT_HEIGHT: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_PRODUCT_DENSITY: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_CALCULATION_METHOD: EnumField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      BomFormula,
      true,
      true
    >;
    CONSUMPTION_SITE_ID: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_TYPE: EnumField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      BomConsumpType,
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      KittingKitLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link kittingKitHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_HEADER: OneToOneLink<
      KittingKitLines<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link kitHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KIT_HEADER: OneToOneLink<
      KittingKitLines<DeSerializersT>,
      DeSerializersT,
      Kitting_KitHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<KittingKitLines<DeSerializers>>;
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
         * Static representation of the {@link kitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_ID: fieldBuilder.buildEdmTypeField('KitId', 'Edm.String', false),
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
         * Static representation of the {@link physicalProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'PhysicalProductWidth',
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
         * Static representation of the {@link roundingUpMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_UP_METHOD: fieldBuilder.buildEnumField(
          'RoundingUpMethod',
          BomRoundUp,
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
         * Static representation of the {@link productUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductUnitSymbol',
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
         * Static representation of the {@link consumptionCalculationConstant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_CALCULATION_CONSTANT: fieldBuilder.buildEdmTypeField(
          'ConsumptionCalculationConstant',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link physicalProductDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_DEPTH: fieldBuilder.buildEdmTypeField(
          'PhysicalProductDepth',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link physicalProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalProductHeight',
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
         * Static representation of the {@link physicalProductDensity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_PRODUCT_DENSITY: fieldBuilder.buildEdmTypeField(
          'PhysicalProductDensity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link consumptionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ConsumptionSiteId',
          'Edm.String',
          true
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
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KittingKitLines)
      };
    }

    return this._schema;
  }
}
