/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductAttributeValueTypes } from './ProductAttributeValueTypes';
import { ProductAttributeValueTypesRequestBuilder } from './ProductAttributeValueTypesRequestBuilder';
import { AttributeDataType } from './AttributeDataType';
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
export class ProductAttributeValueTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductAttributeValueTypes<DeSerializersT>, DeSerializersT>
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
  ): ProductAttributeValueTypesApi<DeSerializersT> {
    return new ProductAttributeValueTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductAttributeValueTypes;

  requestBuilder(): ProductAttributeValueTypesRequestBuilder<DeSerializersT> {
    return new ProductAttributeValueTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductAttributeValueTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductAttributeValueTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductAttributeValueTypes<DeSerializersT>,
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
    typeof ProductAttributeValueTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductAttributeValueTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_TYPE: EnumField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      AttributeDataType,
      true,
      true
    >;
    UPPER_DATE_TIME_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPPER_DECIMAL_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOWER_CURRENCY_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOWER_DECIMAL_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOWER_INTEGER_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UPPER_INTEGER_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOWER_DATE_TIME_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UPPER_CURRENCY_VALUE: OrderableEdmTypeField<
      ProductAttributeValueTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProductAttributeValueTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ProductAttributeTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_TYPE: fieldBuilder.buildEnumField(
          'ValueType',
          AttributeDataType,
          true
        ),
        /**
         * Static representation of the {@link upperDateTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_DATE_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'UpperDateTimeValue',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link upperDecimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'UpperDecimalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lowerCurrencyValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_CURRENCY_VALUE: fieldBuilder.buildEdmTypeField(
          'LowerCurrencyValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lowerDecimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'LowerDecimalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lowerIntegerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'LowerIntegerValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link upperIntegerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'UpperIntegerValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lowerDateTimeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_DATE_TIME_VALUE: fieldBuilder.buildEdmTypeField(
          'LowerDateTimeValue',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link upperCurrencyValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_CURRENCY_VALUE: fieldBuilder.buildEdmTypeField(
          'UpperCurrencyValue',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductAttributeValueTypes)
      };
    }

    return this._schema;
  }
}
