/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCatalogInternalOrganizationProductAttributeValues2 } from './RetailCatalogInternalOrganizationProductAttributeValues2';
import { RetailCatalogInternalOrganizationProductAttributeValues2RequestBuilder } from './RetailCatalogInternalOrganizationProductAttributeValues2RequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { RetailCatalogsApi } from './RetailCatalogsApi';
import { RetailCatalogInternalOrganizationsApi } from './RetailCatalogInternalOrganizationsApi';
import { RetailCatalogProductsApi } from './RetailCatalogProductsApi';
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
export class RetailCatalogInternalOrganizationProductAttributeValues2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
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
  ): RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT> {
    return new RetailCatalogInternalOrganizationProductAttributeValues2Api(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link integerUnitOfMeasureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INTEGER_UNIT_OF_MEASURE_ENTITY: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      RetailCatalogsApi<DeSerializersT>,
      RetailCatalogInternalOrganizationsApi<DeSerializersT>,
      RetailCatalogProductsApi<DeSerializersT>,
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
      RETAIL_CATALOG: new OneToOneLink('RetailCatalog', this, linkedApis[2]),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION: new OneToOneLink(
        'RetailCatalogInternalOrganization',
        this,
        linkedApis[3]
      ),
      RETAIL_CATALOG_PRODUCT: new OneToOneLink(
        'RetailCatalogProduct',
        this,
        linkedApis[4]
      ),
      RETAIL_INTERNAL_ORGANIZATION: new OneToOneLink(
        'RetailInternalOrganization',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = RetailCatalogInternalOrganizationProductAttributeValues2;

  requestBuilder(): RetailCatalogInternalOrganizationProductAttributeValues2RequestBuilder<DeSerializersT> {
    return new RetailCatalogInternalOrganizationProductAttributeValues2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
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
    typeof RetailCatalogInternalOrganizationProductAttributeValues2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCatalogInternalOrganizationProductAttributeValues2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG_NUMBER: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGER_VALUE: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DECIMAL_UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TIME_VALUE: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DECIMAL_VALUE: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTEGER_UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOOLEAN_VALUE: EnumField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_VALUE: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TEXT_VALUE: OrderableEdmTypeField<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>,
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
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link integerUnitOfMeasureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INTEGER_UNIT_OF_MEASURE_ENTITY: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalogProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_PRODUCT: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailCatalogProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RetailCatalogInternalOrganizationProductAttributeValues2<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link catalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogNumber',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link integerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_VALUE: fieldBuilder.buildEdmTypeField(
          'IntegerValue',
          'Edm.Int32',
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
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
         * Static representation of the {@link decimalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'DecimalValue',
          'Edm.Decimal',
          false
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
        /**
         * Static representation of the {@link booleanValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOLEAN_VALUE: fieldBuilder.buildEnumField('BooleanValue', NoYes, true),
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
        ALL_FIELDS: new AllFields(
          '*',
          RetailCatalogInternalOrganizationProductAttributeValues2
        )
      };
    }

    return this._schema;
  }
}
