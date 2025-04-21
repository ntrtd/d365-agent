/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashBalances } from './CashBalances';
import { CashBalancesRequestBuilder } from './CashBalancesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class CashBalancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CashBalances<DeSerializersT>, DeSerializersT>
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
  ): CashBalancesApi<DeSerializersT> {
    return new CashBalancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CashBalances;

  requestBuilder(): CashBalancesRequestBuilder<DeSerializersT> {
    return new CashBalancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CashBalances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CashBalances<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CashBalances<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CashBalances, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CashBalances, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CashBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASH: OrderableEdmTypeField<
      CashBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CashBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      CashBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      CashBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      CashBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCHANGE_RATE_ADJUSTMENT_AMOUNT: OrderableEdmTypeField<
      CashBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CashBalances<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cash} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH: fieldBuilder.buildEdmTypeField('Cash', 'Edm.String', false),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link exchangeRateAdjustmentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_ADJUSTMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExchangeRateAdjustmentAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashBalances)
      };
    }

    return this._schema;
  }
}
