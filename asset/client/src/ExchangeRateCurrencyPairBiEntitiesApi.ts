/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExchangeRateCurrencyPairBiEntities } from './ExchangeRateCurrencyPairBiEntities';
import { ExchangeRateCurrencyPairBiEntitiesRequestBuilder } from './ExchangeRateCurrencyPairBiEntitiesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ExchangeRateCurrencyPairBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ExchangeRateCurrencyPairBiEntities<DeSerializersT>,
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
  ): ExchangeRateCurrencyPairBiEntitiesApi<DeSerializersT> {
    return new ExchangeRateCurrencyPairBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExchangeRateCurrencyPairBiEntities;

  requestBuilder(): ExchangeRateCurrencyPairBiEntitiesRequestBuilder<DeSerializersT> {
    return new ExchangeRateCurrencyPairBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExchangeRateCurrencyPairBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExchangeRateCurrencyPairBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExchangeRateCurrencyPairBiEntities<DeSerializersT>,
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
    typeof ExchangeRateCurrencyPairBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExchangeRateCurrencyPairBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FROM_CURRENCY_CODE: OrderableEdmTypeField<
      ExchangeRateCurrencyPairBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_CURRENCY_CODE: OrderableEdmTypeField<
      ExchangeRateCurrencyPairBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      ExchangeRateCurrencyPairBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      ExchangeRateCurrencyPairBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCHANGE_RATE_DISPLAY_FACTOR: EnumField<
      ExchangeRateCurrencyPairBiEntities<DeSerializers>,
      DeSerializersT,
      ExchangeRateDisplayFactor,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      ExchangeRateCurrencyPairBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExchangeRateCurrencyPairBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ExchangeRateCurrencyPairBiEntities<DeSerializers>>;
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
         * Static representation of the {@link exchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
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
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExchangeRateCurrencyPairBiEntities)
      };
    }

    return this._schema;
  }
}
