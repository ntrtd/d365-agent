/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductAttributeValuesV2 } from './ProductAttributeValuesV2';
import { ProductAttributeValuesV2RequestBuilder } from './ProductAttributeValuesV2RequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { CurrenciesApi } from './CurrenciesApi';
import { NoYes } from './NoYes';
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
export class ProductAttributeValuesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductAttributeValuesV2<DeSerializersT>, DeSerializersT>
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
  ): ProductAttributeValuesV2Api<DeSerializersT> {
    return new ProductAttributeValuesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      ProductAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      ProductAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductsV2Api<DeSerializersT>, CurrenciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT: new OneToOneLink('Product', this, linkedApis[0]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProductAttributeValuesV2;

  requestBuilder(): ProductAttributeValuesV2RequestBuilder<DeSerializersT> {
    return new ProductAttributeValuesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductAttributeValuesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductAttributeValuesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductAttributeValuesV2<DeSerializersT>,
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
    typeof ProductAttributeValuesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductAttributeValuesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOLEAN_VALUE: EnumField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEGER_VALUE: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TIME_VALUE: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_VALUE: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TEXT_VALUE: OrderableEdmTypeField<
      ProductAttributeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      ProductAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      ProductAttributeValuesV2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductAttributeValuesV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link booleanValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOLEAN_VALUE: fieldBuilder.buildEnumField('BooleanValue', NoYes, true),
        /**
         * Static representation of the {@link integerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'IntegerValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'DecimalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'DateTimeValue',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currencyValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_VALUE: fieldBuilder.buildEdmTypeField(
          'CurrencyValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link textValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_VALUE: fieldBuilder.buildEdmTypeField(
          'TextValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductAttributeValuesV2)
      };
    }

    return this._schema;
  }
}
