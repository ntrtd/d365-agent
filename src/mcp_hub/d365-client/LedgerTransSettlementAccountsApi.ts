/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerTransSettlementAccounts } from './LedgerTransSettlementAccounts';
import { LedgerTransSettlementAccountsRequestBuilder } from './LedgerTransSettlementAccountsRequestBuilder';
import { MainAccountsApi } from './MainAccountsApi';
import { LedgerSettlementsAccountTypicalBalance } from './LedgerSettlementsAccountTypicalBalance';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LedgerTransSettlementAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerTransSettlementAccounts<DeSerializersT>, DeSerializersT>
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
  ): LedgerTransSettlementAccountsApi<DeSerializersT> {
    return new LedgerTransSettlementAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerTransSettlementAccountsMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_TRANS_SETTLEMENT_ACCOUNTS_MAIN_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      LedgerTransSettlementAccounts<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MainAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_TRANS_SETTLEMENT_ACCOUNTS_MAIN_ACCOUNT_ENTITY_ROLE:
        new OneToOneLink(
          'LedgerTransSettlementAccountsMainAccountEntityRole',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = LedgerTransSettlementAccounts;

  requestBuilder(): LedgerTransSettlementAccountsRequestBuilder<DeSerializersT> {
    return new LedgerTransSettlementAccountsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LedgerTransSettlementAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerTransSettlementAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerTransSettlementAccounts<DeSerializersT>,
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
    typeof LedgerTransSettlementAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerTransSettlementAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      LedgerTransSettlementAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      LedgerTransSettlementAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPICAL_BALANCE: EnumField<
      LedgerTransSettlementAccounts<DeSerializers>,
      DeSerializersT,
      LedgerSettlementsAccountTypicalBalance,
      true,
      true
    >;
    KEEP_DETAILS: EnumField<
      LedgerTransSettlementAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerTransSettlementAccountsMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_TRANS_SETTLEMENT_ACCOUNTS_MAIN_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      LedgerTransSettlementAccounts<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerTransSettlementAccounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link typicalBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPICAL_BALANCE: fieldBuilder.buildEnumField(
          'TypicalBalance',
          LedgerSettlementsAccountTypicalBalance,
          true
        ),
        /**
         * Static representation of the {@link keepDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_DETAILS: fieldBuilder.buildEnumField('KeepDetails', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerTransSettlementAccounts)
      };
    }

    return this._schema;
  }
}
