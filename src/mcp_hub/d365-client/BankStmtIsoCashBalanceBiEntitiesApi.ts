/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankStmtIsoCashBalanceBiEntities } from './BankStmtIsoCashBalanceBiEntities';
import { BankStmtIsoCashBalanceBiEntitiesRequestBuilder } from './BankStmtIsoCashBalanceBiEntitiesRequestBuilder';
import { DebitCredit } from './DebitCredit';
import { BankStatementBalanceType } from './BankStatementBalanceType';
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
export class BankStmtIsoCashBalanceBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankStmtIsoCashBalanceBiEntities<DeSerializersT>, DeSerializersT>
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
  ): BankStmtIsoCashBalanceBiEntitiesApi<DeSerializersT> {
    return new BankStmtIsoCashBalanceBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankStmtIsoCashBalanceBiEntities;

  requestBuilder(): BankStmtIsoCashBalanceBiEntitiesRequestBuilder<DeSerializersT> {
    return new BankStmtIsoCashBalanceBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BankStmtIsoCashBalanceBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankStmtIsoCashBalanceBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankStmtIsoCashBalanceBiEntities<DeSerializersT>,
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
    typeof BankStmtIsoCashBalanceBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankStmtIsoCashBalanceBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_COUNT: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT_CREDIT_DEBIT_INDICATOR: EnumField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      DebitCredit,
      true,
      true
    >;
    CASH_BALANCE_AMOUNT: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_STMT_ISO_ACCOUNT_STATEMENT: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_STATEMENT_BALANCE_TYPE: EnumField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      BankStatementBalanceType,
      true,
      true
    >;
    FUNDS_TYPE: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      BankStmtIsoCashBalanceBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BankStmtIsoCashBalanceBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
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
         * Static representation of the {@link itemCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_COUNT: fieldBuilder.buildEdmTypeField(
          'ItemCount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amountCreditDebitIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CREDIT_DEBIT_INDICATOR: fieldBuilder.buildEnumField(
          'AmountCreditDebitIndicator',
          DebitCredit,
          true
        ),
        /**
         * Static representation of the {@link cashBalanceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_BALANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashBalanceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankStmtIsoAccountStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STMT_ISO_ACCOUNT_STATEMENT: fieldBuilder.buildEdmTypeField(
          'BankStmtISOAccountStatement',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankStatementBalanceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_BALANCE_TYPE: fieldBuilder.buildEnumField(
          'BankStatementBalanceType',
          BankStatementBalanceType,
          true
        ),
        /**
         * Static representation of the {@link fundsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDS_TYPE: fieldBuilder.buildEdmTypeField(
          'FundsType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link typeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'TypeCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankStmtIsoCashBalanceBiEntities)
      };
    }

    return this._schema;
  }
}
