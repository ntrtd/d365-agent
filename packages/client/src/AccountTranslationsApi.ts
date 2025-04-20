/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountTranslations } from './AccountTranslations';
import { AccountTranslationsRequestBuilder } from './AccountTranslationsRequestBuilder';
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
export class AccountTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccountTranslations<DeSerializersT>, DeSerializersT>
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
  ): AccountTranslationsApi<DeSerializersT> {
    return new AccountTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToOneLink<
      AccountTranslations<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      AccountTranslations<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      MainAccountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: new OneToOneLink(
        'LedgerChartOfAccountsEntityRole',
        this,
        linkedApis[0]
      ),
      MAIN_ACCOUNT_ENTITY_ROLE: new OneToOneLink(
        'MainAccountEntityRole',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AccountTranslations;

  requestBuilder(): AccountTranslationsRequestBuilder<DeSerializersT> {
    return new AccountTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccountTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccountTranslations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccountTranslations<DeSerializersT>,
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
    typeof AccountTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccountTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MAIN_ACCOUNT: OrderableEdmTypeField<
      AccountTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      AccountTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      AccountTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIGINAL_TEXT: OrderableEdmTypeField<
      AccountTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATED_TEXT: OrderableEdmTypeField<
      AccountTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToOneLink<
      AccountTranslations<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      AccountTranslations<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccountTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link originalText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TEXT: fieldBuilder.buildEdmTypeField(
          'OriginalText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translatedText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATED_TEXT: fieldBuilder.buildEdmTypeField(
          'TranslatedText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccountTranslations)
      };
    }

    return this._schema;
  }
}
