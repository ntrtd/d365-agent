/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSwatchOverrides } from './ProductSwatchOverrides';
import { ProductSwatchOverridesRequestBuilder } from './ProductSwatchOverridesRequestBuilder';
import { RetailProductDimensionType } from './RetailProductDimensionType';
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
export class ProductSwatchOverridesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSwatchOverrides<DeSerializersT>, DeSerializersT>
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
  ): ProductSwatchOverridesApi<DeSerializersT> {
    return new ProductSwatchOverridesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductSwatchOverrides;

  requestBuilder(): ProductSwatchOverridesRequestBuilder<DeSerializersT> {
    return new ProductSwatchOverridesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductSwatchOverrides<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductSwatchOverrides<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductSwatchOverrides<DeSerializersT>,
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
    typeof ProductSwatchOverrides,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductSwatchOverrides,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_MASTER: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DIMENSION_VALUE: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DIMENSION_TYPE: EnumField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      RetailProductDimensionType,
      true,
      true
    >;
    CATALOG_ID: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_ORGANIZATION: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HEX_CODE: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMAGE: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      ProductSwatchOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductSwatchOverrides<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER: fieldBuilder.buildEdmTypeField(
          'ProductMaster',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dimensionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionValue',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dimensionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_TYPE: fieldBuilder.buildEnumField(
          'DimensionType',
          RetailProductDimensionType,
          true
        ),
        /**
         * Static representation of the {@link catalogId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_ID: fieldBuilder.buildEdmTypeField(
          'CatalogId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internalOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'InternalOrganization',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link hexCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEX_CODE: fieldBuilder.buildEdmTypeField('HexCode', 'Edm.String', true),
        /**
         * Static representation of the {@link image} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE: fieldBuilder.buildEdmTypeField('Image', 'Edm.Int64', false),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductSwatchOverrides)
      };
    }

    return this._schema;
  }
}
