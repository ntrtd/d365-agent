/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConsolidateAccountGroups } from './ConsolidateAccountGroups';
import { ConsolidateAccountGroupsRequestBuilder } from './ConsolidateAccountGroupsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { MainAccountsApi } from './MainAccountsApi';
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
export class ConsolidateAccountGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConsolidateAccountGroups<DeSerializersT>, DeSerializersT>
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
  ): ConsolidateAccountGroupsApi<DeSerializersT> {
    return new ConsolidateAccountGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerChartOfAccountsEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE_2: OneToOneLink<
      ConsolidateAccountGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link consolidationMainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSOLIDATION_MAIN_ACCOUNT_ENTITY_ROLE_2: OneToOneLink<
      ConsolidateAccountGroups<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE_2: OneToOneLink<
      ConsolidateAccountGroups<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      MainAccountsApi<DeSerializersT>,
      MainAccountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE_2: new OneToOneLink(
        'LedgerChartOfAccountsEntityRole2',
        this,
        linkedApis[0]
      ),
      CONSOLIDATION_MAIN_ACCOUNT_ENTITY_ROLE_2: new OneToOneLink(
        'ConsolidationMainAccountEntityRole2',
        this,
        linkedApis[1]
      ),
      MAIN_ACCOUNT_ENTITY_ROLE_2: new OneToOneLink(
        'MainAccountEntityRole2',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ConsolidateAccountGroups;

  requestBuilder(): ConsolidateAccountGroupsRequestBuilder<DeSerializersT> {
    return new ConsolidateAccountGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConsolidateAccountGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ConsolidateAccountGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConsolidateAccountGroups<DeSerializersT>,
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
    typeof ConsolidateAccountGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConsolidateAccountGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONSOLIDATION_ACCOUNT_GROUP: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAIN_ACCOUNT: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSOLIDATION_ACCOUNT_GROUP_NAME: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATION_ACCOUNT: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAT_LEVEL: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAIN_ACCOUNT_NAME: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATION_ACCOUNT_NAME: OrderableEdmTypeField<
      ConsolidateAccountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerChartOfAccountsEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE_2: OneToOneLink<
      ConsolidateAccountGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link consolidationMainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSOLIDATION_MAIN_ACCOUNT_ENTITY_ROLE_2: OneToOneLink<
      ConsolidateAccountGroups<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountEntityRole2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE_2: OneToOneLink<
      ConsolidateAccountGroups<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConsolidateAccountGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link consolidationAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'ConsolidationAccountGroup',
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
         * Static representation of the {@link mainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MainAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consolidationAccountGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_ACCOUNT_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ConsolidationAccountGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consolidationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsolidationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link satLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_LEVEL: fieldBuilder.buildEdmTypeField(
          'SATLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mainAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'MainAccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consolidationAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'ConsolidationAccountName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConsolidateAccountGroups)
      };
    }

    return this._schema;
  }
}
