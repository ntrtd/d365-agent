/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductColorV2 } from './ProductColorV2';
import { ProductColorV2RequestBuilder } from './ProductColorV2RequestBuilder';
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
export class ProductColorV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductColorV2<DeSerializersT>, DeSerializersT>
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
  ): ProductColorV2Api<DeSerializersT> {
    return new ProductColorV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductColorV2;

  requestBuilder(): ProductColorV2RequestBuilder<DeSerializersT> {
    return new ProductColorV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductColorV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductColorV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductColorV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductColorV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductColorV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COLOR_ID: OrderableEdmTypeField<
      ProductColorV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEXCODE: OrderableEdmTypeField<
      ProductColorV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFINER_GROUP: OrderableEdmTypeField<
      ProductColorV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ProductColorV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductColorV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link colorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ColorId',
          'Edm.String',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', ProductColorV2)
      };
    }

    return this._schema;
  }
}
