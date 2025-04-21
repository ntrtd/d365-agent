/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerInterCompanyAccounts } from './LedgerInterCompanyAccounts';
import { LedgerInterCompanyAccountsRequestBuilder } from './LedgerInterCompanyAccountsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { JournalNamesApi } from './JournalNamesApi';
import { CustVendSettleCompanyPostOption } from './CustVendSettleCompanyPostOption';
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
export class LedgerInterCompanyAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerInterCompanyAccounts<DeSerializersT>, DeSerializersT>
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
  ): LedgerInterCompanyAccountsApi<DeSerializersT> {
    return new LedgerInterCompanyAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountSourceCreditDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_SOURCE_CREDIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountDestinationCreditDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_DESTINATION_CREDIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountDestinationDebitDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_DESTINATION_DEBIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerIntercompanyJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTERCOMPANY_JOURNAL_NAME: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountSourceDebitDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_SOURCE_DEBIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      JournalNamesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_INTER_COMPANY_ACCOUNT_SOURCE_CREDIT_DIMENSION: new OneToOneLink(
        'LedgerInterCompanyAccountSourceCreditDimension',
        this,
        linkedApis[0]
      ),
      LEDGER_INTER_COMPANY_ACCOUNT_DESTINATION_CREDIT_DIMENSION:
        new OneToOneLink(
          'LedgerInterCompanyAccountDestinationCreditDimension',
          this,
          linkedApis[1]
        ),
      LEDGER_INTER_COMPANY_ACCOUNT_DESTINATION_DEBIT_DIMENSION:
        new OneToOneLink(
          'LedgerInterCompanyAccountDestinationDebitDimension',
          this,
          linkedApis[2]
        ),
      LEDGER_INTERCOMPANY_JOURNAL_NAME: new OneToOneLink(
        'LedgerIntercompanyJournalName',
        this,
        linkedApis[3]
      ),
      LEDGER_INTER_COMPANY_ACCOUNT_SOURCE_DEBIT_DIMENSION: new OneToOneLink(
        'LedgerInterCompanyAccountSourceDebitDimension',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = LedgerInterCompanyAccounts;

  requestBuilder(): LedgerInterCompanyAccountsRequestBuilder<DeSerializersT> {
    return new LedgerInterCompanyAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerInterCompanyAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerInterCompanyAccounts<DeSerializersT>,
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
    typeof LedgerInterCompanyAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerInterCompanyAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ORIGINATING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESTINATION_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POST_INTEREST: EnumField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      CustVendSettleCompanyPostOption,
      true,
      true
    >;
    JOURNAL: OrderableEdmTypeField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINATING_DEBIT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_DEBIT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_FINE: EnumField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      CustVendSettleCompanyPostOption,
      true,
      true
    >;
    DESTINATION_CREDIT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_POST_FINANCIAL_INTEREST: EnumField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      CustVendSettleCompanyPostOption,
      true,
      true
    >;
    POST_CURRENCY_EXCHANGE_GAIN_OR_LOSS: EnumField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      CustVendSettleCompanyPostOption,
      true,
      true
    >;
    POST_CASH_DISCOUNT: EnumField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      CustVendSettleCompanyPostOption,
      true,
      true
    >;
    ORIGINATING_CREDIT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PAYMENT_POST_FINE: EnumField<
      LedgerInterCompanyAccounts<DeSerializers>,
      DeSerializersT,
      CustVendSettleCompanyPostOption,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountSourceCreditDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_SOURCE_CREDIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountDestinationCreditDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_DESTINATION_CREDIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountDestinationDebitDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_DESTINATION_DEBIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerIntercompanyJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTERCOMPANY_JOURNAL_NAME: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerInterCompanyAccountSourceDebitDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTER_COMPANY_ACCOUNT_SOURCE_DEBIT_DIMENSION: OneToOneLink<
      LedgerInterCompanyAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerInterCompanyAccounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link originatingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'OriginatingLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link destinationLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'DestinationLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postInterest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_INTEREST: fieldBuilder.buildEnumField(
          'PostInterest',
          CustVendSettleCompanyPostOption,
          true
        ),
        /**
         * Static representation of the {@link journal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL: fieldBuilder.buildEdmTypeField('Journal', 'Edm.String', true),
        /**
         * Static representation of the {@link originatingDebitAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATING_DEBIT_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OriginatingDebitAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationDebitAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_DEBIT_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DestinationDebitAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postFine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_FINE: fieldBuilder.buildEnumField(
          'PostFine',
          CustVendSettleCompanyPostOption,
          true
        ),
        /**
         * Static representation of the {@link destinationCreditAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_CREDIT_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DestinationCreditAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendorPaymentPostFinancialInterest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_POST_FINANCIAL_INTEREST: fieldBuilder.buildEnumField(
          'VendorPaymentPostFinancialInterest',
          CustVendSettleCompanyPostOption,
          true
        ),
        /**
         * Static representation of the {@link postCurrencyExchangeGainOrLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_CURRENCY_EXCHANGE_GAIN_OR_LOSS: fieldBuilder.buildEnumField(
          'PostCurrencyExchangeGainOrLoss',
          CustVendSettleCompanyPostOption,
          true
        ),
        /**
         * Static representation of the {@link postCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'PostCashDiscount',
          CustVendSettleCompanyPostOption,
          true
        ),
        /**
         * Static representation of the {@link originatingCreditAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATING_CREDIT_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'OriginatingCreditAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendorPaymentPostFine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PAYMENT_POST_FINE: fieldBuilder.buildEnumField(
          'VendorPaymentPostFine',
          CustVendSettleCompanyPostOption,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerInterCompanyAccounts)
      };
    }

    return this._schema;
  }
}
