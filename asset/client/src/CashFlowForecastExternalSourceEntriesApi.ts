/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowForecastExternalSourceEntries } from './CashFlowForecastExternalSourceEntries';
import { CashFlowForecastExternalSourceEntriesRequestBuilder } from './CashFlowForecastExternalSourceEntriesRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
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
export class CashFlowForecastExternalSourceEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CashFlowForecastExternalSourceEntries<DeSerializersT>,
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
  ): CashFlowForecastExternalSourceEntriesApi<DeSerializersT> {
    return new CashFlowForecastExternalSourceEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currencyCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_CODES: OneToOneLink<
      CashFlowForecastExternalSourceEntries<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CashFlowForecastExternalSourceEntries<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY_CODES: new OneToOneLink('CurrencyCodes', this, linkedApis[0]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CashFlowForecastExternalSourceEntries;

  requestBuilder(): CashFlowForecastExternalSourceEntriesRequestBuilder<DeSerializersT> {
    return new CashFlowForecastExternalSourceEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CashFlowForecastExternalSourceEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CashFlowForecastExternalSourceEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CashFlowForecastExternalSourceEntries<DeSerializersT>,
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
    typeof CashFlowForecastExternalSourceEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CashFlowForecastExternalSourceEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENTRY_ID: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NAME: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_CODE: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_SOURCE_LEGAL_ENTITY: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_SOURCE_NAME: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_AMOUNT: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CashFlowForecastExternalSourceEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencyCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_CODES: OneToOneLink<
      CashFlowForecastExternalSourceEntries<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CashFlowForecastExternalSourceEntries<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CashFlowForecastExternalSourceEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link entryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'EntryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'AccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalSourceLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_SOURCE_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'ExternalSourceLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalSourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_SOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'ExternalSourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashFlowForecastExternalSourceEntries)
      };
    }

    return this._schema;
  }
}
