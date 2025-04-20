/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStyleGroupLineV2 } from './ProductStyleGroupLineV2';
import { ProductStyleGroupLineV2RequestBuilder } from './ProductStyleGroupLineV2RequestBuilder';
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
export class ProductStyleGroupLineV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStyleGroupLineV2<DeSerializersT>, DeSerializersT>
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
  ): ProductStyleGroupLineV2Api<DeSerializersT> {
    return new ProductStyleGroupLineV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductStyleGroupLineV2;

  requestBuilder(): ProductStyleGroupLineV2RequestBuilder<DeSerializersT> {
    return new ProductStyleGroupLineV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStyleGroupLineV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductStyleGroupLineV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductStyleGroupLineV2<DeSerializersT>,
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
    typeof ProductStyleGroupLineV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductStyleGroupLineV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_STYLE_GROUP_ID: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFINER_GROUP: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STYLE_NAME: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE_DESCRIPTION: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEXCODE: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BARCODE_NUMBER: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ProductStyleGroupLineV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductStyleGroupLineV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productStyleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleGroupId',
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
         * Static representation of the {@link replenishmentWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWeight',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link styleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE_NAME: fieldBuilder.buildEdmTypeField(
          'StyleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link styleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StyleDescription',
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
        ALL_FIELDS: new AllFields('*', ProductStyleGroupLineV2)
      };
    }

    return this._schema;
  }
}
