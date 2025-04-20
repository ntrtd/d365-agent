/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExchangeRatesNonIso } from './ExchangeRatesNonIso';
import { ExchangeRatesNonIsoRequestBuilder } from './ExchangeRatesNonIsoRequestBuilder';
import { ExchangeRateTypesApi } from './ExchangeRateTypesApi';
import { CurrenciesNonIsoApi } from './CurrenciesNonIsoApi';
import { ExchangeRateDisplayFactor } from './ExchangeRateDisplayFactor';
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
export class ExchangeRatesNonIsoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExchangeRatesNonIso<DeSerializersT>, DeSerializersT>
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
  ): ExchangeRatesNonIsoApi<DeSerializersT> {
    return new ExchangeRatesNonIsoApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateExchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_EXCHANGE_RATE_TYPE: OneToOneLink<
      ExchangeRatesNonIso<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencyNonIso} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_NON_ISO: OneToOneLink<
      ExchangeRatesNonIso<DeSerializersT>,
      DeSerializersT,
      CurrenciesNonIsoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_CURRENCIES: OneToOneLink<
      ExchangeRatesNonIso<DeSerializersT>,
      DeSerializersT,
      CurrenciesNonIsoApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExchangeRateTypesApi<DeSerializersT>,
      CurrenciesNonIsoApi<DeSerializersT>,
      CurrenciesNonIsoApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCHANGE_RATE_EXCHANGE_RATE_TYPE: new OneToOneLink(
        'ExchangeRateExchangeRateType',
        this,
        linkedApis[0]
      ),
      CURRENCY_NON_ISO: new OneToOneLink('CurrencyNonISO', this, linkedApis[1]),
      FROM_CURRENCIES: new OneToOneLink('FromCurrencies', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ExchangeRatesNonIso;

  requestBuilder(): ExchangeRatesNonIsoRequestBuilder<DeSerializersT> {
    return new ExchangeRatesNonIsoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExchangeRatesNonIso<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExchangeRatesNonIso<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExchangeRatesNonIso<DeSerializersT>,
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
    typeof ExchangeRatesNonIso,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExchangeRatesNonIso,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RATE_TYPE_NAME: OrderableEdmTypeField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_CURRENCY: OrderableEdmTypeField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_CURRENCY: OrderableEdmTypeField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RATE_TYPE_DESCRIPTION: OrderableEdmTypeField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE: OrderableEdmTypeField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONVERSION_FACTOR: EnumField<
      ExchangeRatesNonIso<DeSerializers>,
      DeSerializersT,
      ExchangeRateDisplayFactor,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateExchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_EXCHANGE_RATE_TYPE: OneToOneLink<
      ExchangeRatesNonIso<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencyNonIso} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_NON_ISO: OneToOneLink<
      ExchangeRatesNonIso<DeSerializersT>,
      DeSerializersT,
      CurrenciesNonIsoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fromCurrencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_CURRENCIES: OneToOneLink<
      ExchangeRatesNonIso<DeSerializersT>,
      DeSerializersT,
      CurrenciesNonIsoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExchangeRatesNonIso<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link rateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'RateTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_CURRENCY: fieldBuilder.buildEdmTypeField(
          'FromCurrency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ToCurrency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rateTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RateTypeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link conversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVERSION_FACTOR: fieldBuilder.buildEnumField(
          'ConversionFactor',
          ExchangeRateDisplayFactor,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExchangeRatesNonIso)
      };
    }

    return this._schema;
  }
}
