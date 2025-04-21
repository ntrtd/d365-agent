/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrenciesNonIso } from './CurrenciesNonIso';
import { CurrenciesNonIsoRequestBuilder } from './CurrenciesNonIsoRequestBuilder';
import { ExchangeRatesNonIsoApi } from './ExchangeRatesNonIsoApi';
import { RoundOffType } from './RoundOffType';
import { NoYes } from './NoYes';
import { GenderMaleFemale } from './GenderMaleFemale';
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
export class CurrenciesNonIsoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CurrenciesNonIso<DeSerializersT>, DeSerializersT>
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
  ): CurrenciesNonIsoApi<DeSerializersT> {
    return new CurrenciesNonIsoApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateNonIso} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_NON_ISO: OneToOneLink<
      CurrenciesNonIso<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesNonIsoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateFromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_FROM_CURRENCIES: OneToOneLink<
      CurrenciesNonIso<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesNonIsoApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExchangeRatesNonIsoApi<DeSerializersT>,
      ExchangeRatesNonIsoApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCHANGE_RATE_NON_ISO: new OneToOneLink(
        'ExchangeRateNonISO',
        this,
        linkedApis[0]
      ),
      EXCHANGE_RATE_FROM_CURRENCIES: new OneToOneLink(
        'ExchangeRateFromCurrencies',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CurrenciesNonIso;

  requestBuilder(): CurrenciesNonIsoRequestBuilder<DeSerializersT> {
    return new CurrenciesNonIsoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CurrenciesNonIso<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CurrenciesNonIso<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CurrenciesNonIso<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CurrenciesNonIso, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CurrenciesNonIso,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CURRENCY_CODE: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUNDING_METHOD_PURCHASE_ORDERS: EnumField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    ROUNDING_METHOD_PRICES: EnumField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_METHOD_SALES_ORDERS: EnumField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    SYMBOL: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_RULE_FIXED_ASSET_DEPRECIATION: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_CURRENCY_FOR_TRIANGULATION: EnumField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_GENDER: EnumField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      GenderMaleFemale,
      true,
      true
    >;
    ROUNDING_RULE_PURCHASE_ORDERS: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GENERAL_ROUNDING_RULE: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_METHOD_FIXED_ASSET_DEPRECIATION: EnumField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    ROUNDING_RULE_SALES_ORDERS: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_RULE_PRICES: OrderableEdmTypeField<
      CurrenciesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateNonIso} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_NON_ISO: OneToOneLink<
      CurrenciesNonIso<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesNonIsoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateFromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_FROM_CURRENCIES: OneToOneLink<
      CurrenciesNonIso<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesNonIsoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CurrenciesNonIso<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roundingMethodPurchaseOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_PURCHASE_ORDERS: fieldBuilder.buildEnumField(
          'RoundingMethodPurchaseOrders',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link roundingMethodPrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_PRICES: fieldBuilder.buildEnumField(
          'RoundingMethodPrices',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link roundingMethodSalesOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_SALES_ORDERS: fieldBuilder.buildEnumField(
          'RoundingMethodSalesOrders',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link symbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMBOL: fieldBuilder.buildEdmTypeField('Symbol', 'Edm.String', true),
        /**
         * Static representation of the {@link roundingRuleFixedAssetDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_FIXED_ASSET_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'RoundingRuleFixedAssetDepreciation',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link referenceCurrencyForTriangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_CURRENCY_FOR_TRIANGULATION: fieldBuilder.buildEnumField(
          'ReferenceCurrencyForTriangulation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currencyGender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_GENDER: fieldBuilder.buildEnumField(
          'CurrencyGender',
          GenderMaleFemale,
          true
        ),
        /**
         * Static representation of the {@link roundingRulePurchaseOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_PURCHASE_ORDERS: fieldBuilder.buildEdmTypeField(
          'RoundingRulePurchaseOrders',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link generalRoundingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_ROUNDING_RULE: fieldBuilder.buildEdmTypeField(
          'GeneralRoundingRule',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingMethodFixedAssetDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_FIXED_ASSET_DEPRECIATION: fieldBuilder.buildEnumField(
          'RoundingMethodFixedAssetDepreciation',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link roundingRuleSalesOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_SALES_ORDERS: fieldBuilder.buildEdmTypeField(
          'RoundingRuleSalesOrders',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingRulePrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE_PRICES: fieldBuilder.buildEdmTypeField(
          'RoundingRulePrices',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CurrenciesNonIso)
      };
    }

    return this._schema;
  }
}
