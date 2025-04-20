/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExchangeRateCurrencyPairs } from './ExchangeRateCurrencyPairs';
import { ExchangeRateCurrencyPairsRequestBuilder } from './ExchangeRateCurrencyPairsRequestBuilder';
import { ExchangeRateTypesApi } from './ExchangeRateTypesApi';
import { ExchangeRatesCdsEntityApi } from './ExchangeRatesCdsEntityApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ExchangeRateCurrencyPairsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExchangeRateCurrencyPairs<DeSerializersT>, DeSerializersT>
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
  ): ExchangeRateCurrencyPairsApi<DeSerializersT> {
    return new ExchangeRateCurrencyPairsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_TYPE: OneToOneLink<
      ExchangeRateCurrencyPairs<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateCurrencyPairExchangeRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CURRENCY_PAIR_EXCHANGE_RATE: OneToManyLink<
      ExchangeRateCurrencyPairs<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExchangeRateTypesApi<DeSerializersT>,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCHANGE_RATE_TYPE: new OneToOneLink(
        'ExchangeRateType',
        this,
        linkedApis[0]
      ),
      EXCHANGE_RATE_CURRENCY_PAIR_EXCHANGE_RATE: new OneToManyLink(
        'ExchangeRateCurrencyPair_ExchangeRate',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ExchangeRateCurrencyPairs;

  requestBuilder(): ExchangeRateCurrencyPairsRequestBuilder<DeSerializersT> {
    return new ExchangeRateCurrencyPairsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExchangeRateCurrencyPairs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExchangeRateCurrencyPairs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExchangeRateCurrencyPairs<DeSerializersT>,
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
    typeof ExchangeRateCurrencyPairs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExchangeRateCurrencyPairs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FROM_CURRENCY_CODE: OrderableEdmTypeField<
      ExchangeRateCurrencyPairs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_CURRENCY_CODE: OrderableEdmTypeField<
      ExchangeRateCurrencyPairs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXCHANGE_RATE_TYPE_NAME: OrderableEdmTypeField<
      ExchangeRateCurrencyPairs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXCHANGE_RATE_DISPLAY_FACTOR: EnumField<
      ExchangeRateCurrencyPairs<DeSerializers>,
      DeSerializersT,
      ExchangeRateDisplayFactor,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_TYPE: OneToOneLink<
      ExchangeRateCurrencyPairs<DeSerializersT>,
      DeSerializersT,
      ExchangeRateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateCurrencyPairExchangeRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CURRENCY_PAIR_EXCHANGE_RATE: OneToManyLink<
      ExchangeRateCurrencyPairs<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExchangeRateCurrencyPairs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link exchangeRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ExchangeRateTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateDisplayFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DISPLAY_FACTOR: fieldBuilder.buildEnumField(
          'ExchangeRateDisplayFactor',
          ExchangeRateDisplayFactor,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExchangeRateCurrencyPairs)
      };
    }

    return this._schema;
  }
}
