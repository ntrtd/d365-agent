/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SystemParameters } from './SystemParameters';
import { SystemParametersRequestBuilder } from './SystemParametersRequestBuilder';
import { ExchangeRatesApi } from './ExchangeRatesApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionLedgerAccountDelimiter } from './DimensionLedgerAccountDelimiter';
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
export class SystemParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SystemParameters<DeSerializersT>, DeSerializersT>
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
  ): SystemParametersApi<DeSerializersT> {
    return new SystemParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE: OneToOneLink<
      SystemParameters<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      SystemParameters<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExchangeRatesApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCHANGE_RATE: new OneToOneLink('ExchangeRate', this, linkedApis[0]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SystemParameters;

  requestBuilder(): SystemParametersRequestBuilder<DeSerializersT> {
    return new SystemParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SystemParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SystemParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SystemParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SystemParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SystemParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHART_OF_ACCOUNTS_DELIMITER: EnumField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountDelimiter,
      true,
      true
    >;
    INCREMENT: OrderableEdmTypeField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THAI_SOFTWARE_SEQUENCE_NUMBER: OrderableEdmTypeField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_LANGUAGE: OrderableEdmTypeField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_ROWS_OF_SSRS_REPORTS: OrderableEdmTypeField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYSTEM_EXCHANGE_RATE_TYPE_ID: OrderableEdmTypeField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_CURRENCY_CODE: OrderableEdmTypeField<
      SystemParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link exchangeRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCHANGE_RATE: OneToOneLink<
      SystemParameters<DeSerializersT>,
      DeSerializersT,
      ExchangeRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      SystemParameters<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SystemParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link chartOfAccountsDelimiter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS_DELIMITER: fieldBuilder.buildEnumField(
          'ChartOfAccountsDelimiter',
          DimensionLedgerAccountDelimiter,
          true
        ),
        /**
         * Static representation of the {@link increment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREMENT: fieldBuilder.buildEdmTypeField(
          'Increment',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thaiSoftwareSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THAI_SOFTWARE_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ThaiSoftwareSequenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'SystemLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumRowsOfSsrsReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_ROWS_OF_SSRS_REPORTS: fieldBuilder.buildEdmTypeField(
          'MaximumRowsOfSSRSReports',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link systemExchangeRateTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_EXCHANGE_RATE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'SystemExchangeRateTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SystemCurrencyCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SystemParameters)
      };
    }

    return this._schema;
  }
}
