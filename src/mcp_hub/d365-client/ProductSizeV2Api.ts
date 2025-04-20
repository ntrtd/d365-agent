/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSizeV2 } from './ProductSizeV2';
import { ProductSizeV2RequestBuilder } from './ProductSizeV2RequestBuilder';
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
export class ProductSizeV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSizeV2<DeSerializersT>, DeSerializersT>
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
  ): ProductSizeV2Api<DeSerializersT> {
    return new ProductSizeV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductSizeV2;

  requestBuilder(): ProductSizeV2RequestBuilder<DeSerializersT> {
    return new ProductSizeV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductSizeV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductSizeV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductSizeV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductSizeV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductSizeV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SIZE_ID: OrderableEdmTypeField<
      ProductSizeV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEXCODE: OrderableEdmTypeField<
      ProductSizeV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFINER_GROUP: OrderableEdmTypeField<
      ProductSizeV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ProductSizeV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductSizeV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_ID: fieldBuilder.buildEdmTypeField('SizeId', 'Edm.String', false),
        /**
         * Static representation of the {@link hexcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEXCODE: fieldBuilder.buildEdmTypeField('Hexcode', 'Edm.String', true),
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
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductSizeV2)
      };
    }

    return this._schema;
  }
}
