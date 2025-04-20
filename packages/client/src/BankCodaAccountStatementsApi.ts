/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankCodaAccountStatements } from './BankCodaAccountStatements';
import { BankCodaAccountStatementsRequestBuilder } from './BankCodaAccountStatementsRequestBuilder';
import { BankCodaTransType } from './BankCodaTransType';
import { NoYes } from './NoYes';
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
export class BankCodaAccountStatementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankCodaAccountStatements<DeSerializersT>, DeSerializersT>
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
  ): BankCodaAccountStatementsApi<DeSerializersT> {
    return new BankCodaAccountStatementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankCodaAccountStatements;

  requestBuilder(): BankCodaAccountStatementsRequestBuilder<DeSerializersT> {
    return new BankCodaAccountStatementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankCodaAccountStatements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankCodaAccountStatements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankCodaAccountStatements<DeSerializersT>,
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
    typeof BankCodaAccountStatements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankCodaAccountStatements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_STATEMENT_DATE: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_STATEMENT: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENDING_BALANCE: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_AMOUNT: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPENING_BALANCE: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_TRANSACTION_TYPE: EnumField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      BankCodaTransType,
      true,
      true
    >;
    RECONCILED: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSFER_DETAILS: EnumField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MOVEMENT_LINES_UPDATE_DELAYED: EnumField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSED_DATE: OrderableEdmTypeField<
      BankCodaAccountStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BankCodaAccountStatements<DeSerializers>>;
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
         * Static representation of the {@link bankStatementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'BankStatementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bankStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT: fieldBuilder.buildEdmTypeField(
          'BankStatement',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link endingBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_BALANCE: fieldBuilder.buildEdmTypeField(
          'EndingBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link openingBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_BALANCE: fieldBuilder.buildEdmTypeField(
          'OpeningBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'BankTransactionType',
          BankCodaTransType,
          true
        ),
        /**
         * Static representation of the {@link reconciled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILED: fieldBuilder.buildEdmTypeField(
          'Reconciled',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transferDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_DETAILS: fieldBuilder.buildEnumField(
          'TransferDetails',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isMovementLinesUpdateDelayed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MOVEMENT_LINES_UPDATE_DELAYED: fieldBuilder.buildEnumField(
          'IsMovementLinesUpdateDelayed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'ClosedDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankCodaAccountStatements)
      };
    }

    return this._schema;
  }
}
