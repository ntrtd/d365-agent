/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustBalanceStats } from './CustBalanceStats';
import { CustBalanceStatsRequestBuilder } from './CustBalanceStatsRequestBuilder';
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
export class CustBalanceStatsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustBalanceStats<DeSerializersT>, DeSerializersT>
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
  ): CustBalanceStatsApi<DeSerializersT> {
    return new CustBalanceStatsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustBalanceStats;

  requestBuilder(): CustBalanceStatsRequestBuilder<DeSerializersT> {
    return new CustBalanceStatsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustBalanceStats<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustBalanceStats<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustBalanceStats<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustBalanceStats, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustBalanceStats,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustBalanceStats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      CustBalanceStats<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BALANCE_DATE: OrderableEdmTypeField<
      CustBalanceStats<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      CustBalanceStats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPOSURE: OrderableEdmTypeField<
      CustBalanceStats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BALANCE: OrderableEdmTypeField<
      CustBalanceStats<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustBalanceStats<DeSerializers>>;
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
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link balanceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_DATE: fieldBuilder.buildEdmTypeField(
          'BalanceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exposure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPOSURE: fieldBuilder.buildEdmTypeField(
          'Exposure',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link balance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE: fieldBuilder.buildEdmTypeField(
          'Balance',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustBalanceStats)
      };
    }

    return this._schema;
  }
}
