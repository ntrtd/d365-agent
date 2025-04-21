/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RateCurrencyPairCalculationRules } from './RateCurrencyPairCalculationRules';
import { RateCurrencyPairCalculationRulesRequestBuilder } from './RateCurrencyPairCalculationRulesRequestBuilder';
import { TableAll } from './TableAll';
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
export class RateCurrencyPairCalculationRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RateCurrencyPairCalculationRules<DeSerializersT>, DeSerializersT>
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
  ): RateCurrencyPairCalculationRulesApi<DeSerializersT> {
    return new RateCurrencyPairCalculationRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RateCurrencyPairCalculationRules;

  requestBuilder(): RateCurrencyPairCalculationRulesRequestBuilder<DeSerializersT> {
    return new RateCurrencyPairCalculationRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RateCurrencyPairCalculationRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RateCurrencyPairCalculationRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RateCurrencyPairCalculationRules<DeSerializersT>,
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
    typeof RateCurrencyPairCalculationRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RateCurrencyPairCalculationRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      RateCurrencyPairCalculationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      RateCurrencyPairCalculationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_CURRENCY: OrderableEdmTypeField<
      RateCurrencyPairCalculationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_CURRENCY: OrderableEdmTypeField<
      RateCurrencyPairCalculationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FOR_COMPANY: EnumField<
      RateCurrencyPairCalculationRules<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    VALID_FOR_EXCHANGE_RATE_TYPE: EnumField<
      RateCurrencyPairCalculationRules<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    TRIANGULATION_CURRENCY: OrderableEdmTypeField<
      RateCurrencyPairCalculationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RateCurrencyPairCalculationRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link exchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
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
         * Static representation of the {@link validForCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR_COMPANY: fieldBuilder.buildEnumField(
          'ValidForCompany',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link validForExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR_EXCHANGE_RATE_TYPE: fieldBuilder.buildEnumField(
          'ValidForExchangeRateType',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link triangulationCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANGULATION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TriangulationCurrency',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RateCurrencyPairCalculationRules)
      };
    }

    return this._schema;
  }
}
