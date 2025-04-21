/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductColorGroupLineV2 } from './ProductColorGroupLineV2';
import { ProductColorGroupLineV2RequestBuilder } from './ProductColorGroupLineV2RequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ProductColorGroupLineV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductColorGroupLineV2<DeSerializersT>, DeSerializersT>
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
  ): ProductColorGroupLineV2Api<DeSerializersT> {
    return new ProductColorGroupLineV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductColorGroupLineV2;

  requestBuilder(): ProductColorGroupLineV2RequestBuilder<DeSerializersT> {
    return new ProductColorGroupLineV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductColorGroupLineV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductColorGroupLineV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductColorGroupLineV2<DeSerializersT>,
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
    typeof ProductColorGroupLineV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductColorGroupLineV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_COLOR_GROUP_ID: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COLOR_NAME: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFINER_GROUP: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR_DESCRIPTION: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEXCODE: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BARCODE_NUMBER: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ProductColorGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductColorGroupLineV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productColorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link colorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR_NAME: fieldBuilder.buildEdmTypeField(
          'ColorName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refinerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFINER_GROUP: fieldBuilder.buildEdmTypeField(
          'RefinerGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link colorDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ColorDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replenishmentWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWeight',
          'Edm.Int32',
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
         * Static representation of the {@link hexcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEXCODE: fieldBuilder.buildEdmTypeField('Hexcode', 'Edm.String', true),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link barcodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BarcodeNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductColorGroupLineV2)
      };
    }

    return this._schema;
  }
}
