/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExchangeRatesCdsEntity } from './ExchangeRatesCdsEntity';
import { ExchangeRatesCdsEntityRequestBuilder } from './ExchangeRatesCdsEntityRequestBuilder';
import { ExchangeRateTypesApi } from './ExchangeRateTypesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { ExchangeRateCurrencyPairsApi } from './ExchangeRateCurrencyPairsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExchangeRatesCdsEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExchangeRatesCdsEntity<DeSerializersT>, DeSerializersT>
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
  ): ExchangeRatesCdsEntityApi<DeSerializersT> {
    return new ExchangeRatesCdsEntityApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateExchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_EXCHANGE_RATE_TYPE: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateCurrencyPair} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CURRENCY_PAIR: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      ExchangeRateCurrencyPairsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_CURRENCIES: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExchangeRateTypesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      ExchangeRateCurrencyPairsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCHANGE_RATE_EXCHANGE_RATE_TYPE: new OneToOneLink(
        'ExchangeRateExchangeRateType',
        this,
        linkedApis[0]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1]),
      EXCHANGE_RATE_CURRENCY_PAIR: new OneToOneLink(
        'ExchangeRateCurrencyPair',
        this,
        linkedApis[2]
      ),
      FROM_CURRENCIES: new OneToOneLink('FromCurrencies', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ExchangeRatesCdsEntity;

  requestBuilder(): ExchangeRatesCdsEntityRequestBuilder<DeSerializersT> {
    return new ExchangeRatesCdsEntityRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExchangeRatesCdsEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExchangeRatesCdsEntity<DeSerializersT>,
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
    typeof ExchangeRatesCdsEntity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExchangeRatesCdsEntity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXCHANGE_RATE_TYPE_NAME: OrderableEdmTypeField<
      ExchangeRatesCdsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_CURRENCY_CODE: OrderableEdmTypeField<
      ExchangeRatesCdsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_CURRENCY_CODE: OrderableEdmTypeField<
      ExchangeRatesCdsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ExchangeRatesCdsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RATE: OrderableEdmTypeField<
      ExchangeRatesCdsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ExchangeRatesCdsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateExchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_EXCHANGE_RATE_TYPE: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateCurrencyPair} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CURRENCY_PAIR: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      ExchangeRateCurrencyPairsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_CURRENCIES: OneToOneLink<
      ExchangeRatesCdsEntity<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExchangeRatesCdsEntity<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link exchangeRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'FromCurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ToCurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExchangeRatesCdsEntity)
      };
    }

    return this._schema;
  }
}
