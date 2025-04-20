/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConsolidateAccounts } from './ConsolidateAccounts';
import { ConsolidateAccountsRequestBuilder } from './ConsolidateAccountsRequestBuilder';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';
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
export class ConsolidateAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConsolidateAccounts<DeSerializersT>, DeSerializersT>
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
  ): ConsolidateAccountsApi<DeSerializersT> {
    return new ConsolidateAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ConsolidateAccounts;

  requestBuilder(): ConsolidateAccountsRequestBuilder<DeSerializersT> {
    return new ConsolidateAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConsolidateAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ConsolidateAccounts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConsolidateAccounts<DeSerializersT>,
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
    typeof ConsolidateAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConsolidateAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONSOLIDATION_ACCOUNT_GROUP: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAIN_ACCOUNT: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSOLIDATION_ACCOUNT_GROUP_NAME: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATION_ACCOUNT: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_CATEGORY: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_NAME: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_TYPE: EnumField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountType,
      true,
      true
    >;
    CONSOLIDATION_ACCOUNT_NAME: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_NAME: OrderableEdmTypeField<
      ConsolidateAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ConsolidateAccounts<DeSerializers>>;
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
         * Static representation of the {@link mainAccountCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'MainAccountCategory',
          'Edm.String',
          true
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
         * Static representation of the {@link mainAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'MainAccountType',
          DimensionLedgerAccountType,
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
        /**
         * Static representation of the {@link costCenterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_NAME: fieldBuilder.buildEdmTypeField(
          'CostCenterName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConsolidateAccounts)
      };
    }

    return this._schema;
  }
}
