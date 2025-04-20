/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInternalOrganizationProductAttributeValues2 } from './RetailInternalOrganizationProductAttributeValues2';
import { RetailInternalOrganizationProductAttributeValues2RequestBuilder } from './RetailInternalOrganizationProductAttributeValues2RequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { RetailInternalOrganizationProductsApi } from './RetailInternalOrganizationProductsApi';
import { RetailInternalOrganizationsApi } from './RetailInternalOrganizationsApi';
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
export class RetailInternalOrganizationProductAttributeValues2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT> {
    return new RetailInternalOrganizationProductAttributeValues2Api(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link integerUnitOfMeasureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INTEGER_UNIT_OF_MEASURE_ENTITY: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganizationProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      RetailInternalOrganizationProductsApi<DeSerializersT>,
      RetailInternalOrganizationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[0]),
      INTEGER_UNIT_OF_MEASURE_ENTITY: new OneToOneLink(
        'IntegerUnitOfMeasureEntity',
        this,
        linkedApis[1]
      ),
      RETAIL_INTERNAL_ORGANIZATION_PRODUCT: new OneToOneLink(
        'RetailInternalOrganizationProduct',
        this,
        linkedApis[2]
      ),
      RETAIL_INTERNAL_ORGANIZATION: new OneToOneLink(
        'RetailInternalOrganization',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RetailInternalOrganizationProductAttributeValues2;

  requestBuilder(): RetailInternalOrganizationProductAttributeValues2RequestBuilder<DeSerializersT> {
    return new RetailInternalOrganizationProductAttributeValues2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
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
    typeof RetailInternalOrganizationProductAttributeValues2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInternalOrganizationProductAttributeValues2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INTERNAL_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DECIMAL_UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOOLEAN_VALUE: EnumField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEGER_VALUE: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_TIME_VALUE: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_VALUE: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TEXT_VALUE: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEGER_UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link integerUnitOfMeasureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INTEGER_UNIT_OF_MEASURE_ENTITY: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganizationProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RetailInternalOrganizationProductAttributeValues2<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link internalOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'InternalOrganizationPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
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
         * Static representation of the {@link decimalUnitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'DecimalUnitOfMeasureSymbol',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link integerUnitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'IntegerUnitOfMeasureSymbol',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailInternalOrganizationProductAttributeValues2
        )
      };
    }

    return this._schema;
  }
}
