/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExchangeRateTypes } from './ExchangeRateTypes';
import { ExchangeRateTypesRequestBuilder } from './ExchangeRateTypesRequestBuilder';
import { ExchangeRateCurrencyPairsApi } from './ExchangeRateCurrencyPairsApi';
import { ExchangeRatesApi } from './ExchangeRatesApi';
import { MainAccountLegalEntitiesApi } from './MainAccountLegalEntitiesApi';
import { MainAccountsApi } from './MainAccountsApi';
import { ExchangeRatesNonIsoApi } from './ExchangeRatesNonIsoApi';
import { ExchangeRatesCdsEntityApi } from './ExchangeRatesCdsEntityApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ExchangeRateTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExchangeRateTypes<DeSerializersT>, DeSerializersT>
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
  ): ExchangeRateTypesApi<DeSerializersT> {
    return new ExchangeRateTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateCurrencyPairs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CURRENCY_PAIRS: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRateCurrencyPairsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_TYPES: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccountLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_LEGAL_ENTITY: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      MainAccountLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateNonIsoExchangeRateTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_NON_ISO_EXCHANGE_RATE_TYPES: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesNonIsoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateCdsEntityExchangeRateTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CDS_ENTITY_EXCHANGE_RATE_TYPES: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExchangeRateCurrencyPairsApi<DeSerializersT>,
      ExchangeRatesApi<DeSerializersT>,
      MainAccountLegalEntitiesApi<DeSerializersT>,
      MainAccountsApi<DeSerializersT>,
      ExchangeRatesNonIsoApi<DeSerializersT>,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCHANGE_RATE_CURRENCY_PAIRS: new OneToManyLink(
        'ExchangeRateCurrencyPairs',
        this,
        linkedApis[0]
      ),
      EXCHANGE_RATE_TYPES: new OneToManyLink(
        'ExchangeRateTypes',
        this,
        linkedApis[1]
      ),
      MAIN_ACCOUNT_LEGAL_ENTITY: new OneToManyLink(
        'MainAccountLegalEntity',
        this,
        linkedApis[2]
      ),
      MAIN_ACCOUNT: new OneToManyLink('MainAccount', this, linkedApis[3]),
      EXCHANGE_RATE_NON_ISO_EXCHANGE_RATE_TYPES: new OneToManyLink(
        'ExchangeRateNonISOExchangeRateTypes',
        this,
        linkedApis[4]
      ),
      EXCHANGE_RATE_CDS_ENTITY_EXCHANGE_RATE_TYPES: new OneToManyLink(
        'ExchangeRateCDSEntityExchangeRateTypes',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = ExchangeRateTypes;

  requestBuilder(): ExchangeRateTypesRequestBuilder<DeSerializersT> {
    return new ExchangeRateTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExchangeRateTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExchangeRateTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExchangeRateTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ExchangeRateTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExchangeRateTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      ExchangeRateTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExchangeRateTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateCurrencyPairs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CURRENCY_PAIRS: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRateCurrencyPairsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_TYPES: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccountLegalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_LEGAL_ENTITY: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      MainAccountLegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mainAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateNonIsoExchangeRateTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_NON_ISO_EXCHANGE_RATE_TYPES: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesNonIsoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link exchangeRateCdsEntityExchangeRateTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE_CDS_ENTITY_EXCHANGE_RATE_TYPES: OneToManyLink<
      ExchangeRateTypes<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesCdsEntityApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExchangeRateTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExchangeRateTypes)
      };
    }

    return this._schema;
  }
}
