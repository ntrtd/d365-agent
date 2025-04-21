/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Kitting_DynamicKitPartDefaults } from './Kitting_DynamicKitPartDefaults';
import { Kitting_DynamicKitPartDefaultsRequestBuilder } from './Kitting_DynamicKitPartDefaultsRequestBuilder';
import { BomRoundUp } from './BomRoundUp';
import { NoYes } from './NoYes';
import { BomConsumpType } from './BomConsumpType';
import { KittingBomFormula } from './KittingBomFormula';
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
export class Kitting_DynamicKitPartDefaultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Kitting_DynamicKitPartDefaults<DeSerializersT>, DeSerializersT>
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
  ): Kitting_DynamicKitPartDefaultsApi<DeSerializersT> {
    return new Kitting_DynamicKitPartDefaultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Kitting_DynamicKitPartDefaults;

  requestBuilder(): Kitting_DynamicKitPartDefaultsRequestBuilder<DeSerializersT> {
    return new Kitting_DynamicKitPartDefaultsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    Kitting_DynamicKitPartDefaults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Kitting_DynamicKitPartDefaults<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Kitting_DynamicKitPartDefaults<DeSerializersT>,
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
    typeof Kitting_DynamicKitPartDefaults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Kitting_DynamicKitPartDefaults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_KIT_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_PART_GROUP: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUND_UP_QTY: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_WAREHOUSE_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUND_UP: EnumField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      BomRoundUp,
      true,
      true
    >;
    BOM_QTY_SERIE: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSTANT: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEIGHT: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCLUDE: EnumField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPTH: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DENSITY: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIDTH: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BOM_CONSUMP: EnumField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      BomConsumpType,
      true,
      true
    >;
    CONSUMPTION_SITE_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMULA: EnumField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      KittingBomFormula,
      true,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT: EnumField<
      Kitting_DynamicKitPartDefaults<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Kitting_DynamicKitPartDefaults<DeSerializers>>;
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
         * Static representation of the {@link dynamicKitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DYNAMIC_KIT_ID: fieldBuilder.buildEdmTypeField(
          'DynamicKitId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dynamicPartGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DYNAMIC_PART_GROUP: fieldBuilder.buildEdmTypeField(
          'DynamicPartGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roundUpQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_UP_QTY: fieldBuilder.buildEdmTypeField(
          'RoundUpQty',
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
         * Static representation of the {@link roundUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_UP: fieldBuilder.buildEnumField('RoundUp', BomRoundUp, true),
        /**
         * Static representation of the {@link bomQtySerie} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_QTY_SERIE: fieldBuilder.buildEdmTypeField(
          'BOMQtySerie',
          'Edm.Decimal',
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
         * Static representation of the {@link constant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTANT: fieldBuilder.buildEdmTypeField(
          'Constant',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
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
         * Static representation of the {@link height} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT: fieldBuilder.buildEdmTypeField('Height', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link exclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE: fieldBuilder.buildEnumField('Exclude', NoYes, true),
        /**
         * Static representation of the {@link depth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPTH: fieldBuilder.buildEdmTypeField('Depth', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link density} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENSITY: fieldBuilder.buildEdmTypeField(
          'Density',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link width} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH: fieldBuilder.buildEdmTypeField('Width', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link bomConsump} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_CONSUMP: fieldBuilder.buildEnumField(
          'BOMConsump',
          BomConsumpType,
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
         * Static representation of the {@link formula} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA: fieldBuilder.buildEnumField(
          'Formula',
          KittingBomFormula,
          true
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEnumField('IsDefault', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Kitting_DynamicKitPartDefaults)
      };
    }

    return this._schema;
  }
}
