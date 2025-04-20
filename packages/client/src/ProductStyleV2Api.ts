/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStyleV2 } from './ProductStyleV2';
import { ProductStyleV2RequestBuilder } from './ProductStyleV2RequestBuilder';
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
export class ProductStyleV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStyleV2<DeSerializersT>, DeSerializersT>
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
  ): ProductStyleV2Api<DeSerializersT> {
    return new ProductStyleV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductStyleV2;

  requestBuilder(): ProductStyleV2RequestBuilder<DeSerializersT> {
    return new ProductStyleV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStyleV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductStyleV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductStyleV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductStyleV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductStyleV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STYLE_ID: OrderableEdmTypeField<
      ProductStyleV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEXCODE: OrderableEdmTypeField<
      ProductStyleV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ProductStyleV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFINER_GROUP: OrderableEdmTypeField<
      ProductStyleV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ProductStyleV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductStyleV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link styleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE_ID: fieldBuilder.buildEdmTypeField(
          'StyleId',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields('*', ProductStyleV2)
      };
    }

    return this._schema;
  }
}
