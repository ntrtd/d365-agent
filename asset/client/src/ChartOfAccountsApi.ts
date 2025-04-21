/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChartOfAccounts } from './ChartOfAccounts';
import { ChartOfAccountsRequestBuilder } from './ChartOfAccountsRequestBuilder';
import { AccountTranslationsApi } from './AccountTranslationsApi';
import { ConsolidateAccountGroupsApi } from './ConsolidateAccountGroupsApi';
import { MainAccountTotalAccountIntervalsApi } from './MainAccountTotalAccountIntervalsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ChartOfAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ChartOfAccounts<DeSerializersT>, DeSerializersT>
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
  ): ChartOfAccountsApi<DeSerializersT> {
    return new ChartOfAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AccountTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerChartOfAccountsEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE_2: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ConsolidateAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalAccountLedgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      MainAccountTotalAccountIntervalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AccountTranslationsApi<DeSerializersT>,
      ConsolidateAccountGroupsApi<DeSerializersT>,
      MainAccountTotalAccountIntervalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: new OneToManyLink(
        'LedgerChartOfAccountsEntityRole',
        this,
        linkedApis[0]
      ),
      LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE_2: new OneToManyLink(
        'LedgerChartOfAccountsEntityRole2',
        this,
        linkedApis[1]
      ),
      TOTAL_ACCOUNT_LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: new OneToManyLink(
        'TotalAccountLedgerChartOfAccountsEntityRole',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ChartOfAccounts;

  requestBuilder(): ChartOfAccountsRequestBuilder<DeSerializersT> {
    return new ChartOfAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChartOfAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ChartOfAccounts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ChartOfAccounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ChartOfAccounts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ChartOfAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAIN_ACCOUNT_MASK: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHART_OF_ACCOUNTS_REC_ID: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ChartOfAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      AccountTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerChartOfAccountsEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE_2: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      ConsolidateAccountGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link totalAccountLedgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToManyLink<
      ChartOfAccounts<DeSerializersT>,
      DeSerializersT,
      MainAccountTotalAccountIntervalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ChartOfAccounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link mainAccountMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_MASK: fieldBuilder.buildEdmTypeField(
          'MainAccountMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chartOfAccountsRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS_REC_ID: fieldBuilder.buildEdmTypeField(
          'ChartOfAccountsRecId',
          'Edm.Int64',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChartOfAccounts)
      };
    }

    return this._schema;
  }
}
