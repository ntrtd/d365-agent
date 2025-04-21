/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankClientAccountBalances } from './BankClientAccountBalances';
import { BankClientAccountBalancesRequestBuilder } from './BankClientAccountBalancesRequestBuilder';
import { BankClientBalanceTypeRu } from './BankClientBalanceTypeRu';
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
export class BankClientAccountBalancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankClientAccountBalances<DeSerializersT>, DeSerializersT>
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
  ): BankClientAccountBalancesApi<DeSerializersT> {
    return new BankClientAccountBalancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankClientAccountBalances;

  requestBuilder(): BankClientAccountBalancesRequestBuilder<DeSerializersT> {
    return new BankClientAccountBalancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankClientAccountBalances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankClientAccountBalances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankClientAccountBalances<DeSerializersT>,
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
    typeof BankClientAccountBalances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankClientAccountBalances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankClientAccountBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      BankClientAccountBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_TYPE: EnumField<
      BankClientAccountBalances<DeSerializers>,
      DeSerializersT,
      BankClientBalanceTypeRu,
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      BankClientAccountBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      BankClientAccountBalances<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      BankClientAccountBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BankClientAccountBalances<DeSerializers>>;
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
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recordType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_TYPE: fieldBuilder.buildEnumField(
          'RecordType',
          BankClientBalanceTypeRu,
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankClientAccountBalances)
      };
    }

    return this._schema;
  }
}
