/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalNames } from './JournalNames';
import { JournalNamesRequestBuilder } from './JournalNamesRequestBuilder';
import { CustomerPaymentMethodsApi } from './CustomerPaymentMethodsApi';
import { AssetParametersProposalJournalNamesApi } from './AssetParametersProposalJournalNamesApi';
import { GupRebateAndDeductionsPostingProfilesApi } from './GupRebateAndDeductionsPostingProfilesApi';
import { BudgetParametersApi } from './BudgetParametersApi';
import { LedgerInterCompanyAccountsApi } from './LedgerInterCompanyAccountsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { BankAccountsApi } from './BankAccountsApi';
import { VendorPaymentMethodsApi } from './VendorPaymentMethodsApi';
import { NewVoucher } from './NewVoucher';
import { NoYes } from './NoYes';
import { DetailSummary } from './DetailSummary';
import { LedgerJournalFeePosting } from './LedgerJournalFeePosting';
import { LedgerJournalDateInitTypeRu } from './LedgerJournalDateInitTypeRu';
import { LedgerJournalType } from './LedgerJournalType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerJournalAcType } from './LedgerJournalAcType';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class JournalNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JournalNames<DeSerializersT>, DeSerializersT>
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
  ): JournalNamesApi<DeSerializersT> {
    return new JournalNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetParameterProposalJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      AssetParametersProposalJournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link provisionJournalNameAssignedRebateAndDeductionsPostingProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateJournalNameAssignedRebateAndDeductionsPostingProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link writeOffJournalNameAssignedRebateAndDeductionsPostingProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_JOURNAL_NAME: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      BudgetParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerIntercompanyJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTERCOMPANY_JOURNAL_NAME: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      LedgerInterCompanyAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerPaymentMethodsApi<DeSerializersT>,
      AssetParametersProposalJournalNamesApi<DeSerializersT>,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>,
      BudgetParametersApi<DeSerializersT>,
      LedgerInterCompanyAccountsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      BankAccountsApi<DeSerializersT>,
      VendorPaymentMethodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_PAYMENT_METHOD: new OneToManyLink(
        'CustomerPaymentMethod',
        this,
        linkedApis[0]
      ),
      ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME: new OneToManyLink(
        'AssetParameterProposalJournalName',
        this,
        linkedApis[1]
      ),
      PROVISION_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES:
        new OneToManyLink(
          'ProvisionJournalNameAssignedRebateAndDeductionsPostingProfiles',
          this,
          linkedApis[2]
        ),
      REBATE_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES:
        new OneToManyLink(
          'RebateJournalNameAssignedRebateAndDeductionsPostingProfiles',
          this,
          linkedApis[3]
        ),
      WRITE_OFF_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES:
        new OneToManyLink(
          'WriteOffJournalNameAssignedRebateAndDeductionsPostingProfiles',
          this,
          linkedApis[4]
        ),
      BUDGET_JOURNAL_NAME: new OneToManyLink(
        'BudgetJournalName',
        this,
        linkedApis[5]
      ),
      LEDGER_INTERCOMPANY_JOURNAL_NAME: new OneToManyLink(
        'LedgerIntercompanyJournalName',
        this,
        linkedApis[6]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[7]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[8]),
      BANK_ACCOUNT: new OneToManyLink('BankAccount', this, linkedApis[9]),
      VENDOR_PAYMENT_METHOD: new OneToManyLink(
        'VendorPaymentMethod',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = JournalNames;

  requestBuilder(): JournalNamesRequestBuilder<DeSerializersT> {
    return new JournalNamesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JournalNames<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JournalNames<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JournalNames, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JournalNames, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_SERIES_CODE: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_ID: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_VOUCHER: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NewVoucher,
      true,
      true
    >;
    PRIVATE_FOR_USER_GROUP: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_ALLOCATION_AT_POSTING: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_ONLY_POSITIVE_DEBITS_AND_CREDITS: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER_SERIES_COMPANY_ID: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FINANCIAL_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIDE_SALES_TAX_FIELDS_IN_JOURNAL_ENTRY_FORMS: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAIL_LEVEL: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    AMOUNTS_INCLUDE_SALES_TAX: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEES_POSTING: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      LedgerJournalFeePosting,
      true,
      true
    >;
    IS_WORKFLOW_APPROVAL_ACTIVE: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREPAYMENT_JOURNAL_VOUCHER: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELETE_LINES_AFTER_POSTING: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVAL_USER_GROUP: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LINE_LIMIT: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINCIPLE_OF_DATE_INITIALIZATION: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      LedgerJournalDateInitTypeRu,
      true,
      true
    >;
    TYPE: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      LedgerJournalType,
      true,
      true
    >;
    DEFAULT_CASH_ACCOUNT: OrderableEdmTypeField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FIXED_EXCHANGE_RATE: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_APPROVAL_ACTIVE: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_BALANCE_CONTROL: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FIXED_OFFSET_ACCOUNT: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    POSTING_DATE_CONTROL: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    GENERATE_PAYMENTS_BEFORE_POSTING: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRES_SIMULATION_VALIDATION_IT: EnumField<
      JournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_METHOD: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetParameterProposalJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      AssetParametersProposalJournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link provisionJournalNameAssignedRebateAndDeductionsPostingProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateJournalNameAssignedRebateAndDeductionsPostingProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link writeOffJournalNameAssignedRebateAndDeductionsPostingProfiles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_JOURNAL_NAME_ASSIGNED_REBATE_AND_DEDUCTIONS_POSTING_PROFILES: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_JOURNAL_NAME: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      BudgetParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerIntercompanyJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_INTERCOMPANY_JOURNAL_NAME: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      LedgerInterCompanyAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentMethod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_METHOD: OneToManyLink<
      JournalNames<DeSerializersT>,
      DeSerializersT,
      VendorPaymentMethodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JournalNames<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherSeriesCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_SERIES_CODE: fieldBuilder.buildEdmTypeField(
          'VoucherSeriesCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_ID: fieldBuilder.buildEdmTypeField(
          'WorkflowId',
          'Edm.String',
          true
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
         * Static representation of the {@link newVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_VOUCHER: fieldBuilder.buildEnumField(
          'NewVoucher',
          NewVoucher,
          true
        ),
        /**
         * Static representation of the {@link privateForUserGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVATE_FOR_USER_GROUP: fieldBuilder.buildEdmTypeField(
          'PrivateForUserGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherAllocationAtPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_ALLOCATION_AT_POSTING: fieldBuilder.buildEnumField(
          'VoucherAllocationAtPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowOnlyPositiveDebitsAndCredits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_ONLY_POSITIVE_DEBITS_AND_CREDITS: fieldBuilder.buildEnumField(
          'AllowOnlyPositiveDebitsAndCredits',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link voucherSeriesCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_SERIES_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'VoucherSeriesCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultFinancialDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FINANCIAL_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultFinancialDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link hideSalesTaxFieldsInJournalEntryForms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_SALES_TAX_FIELDS_IN_JOURNAL_ENTRY_FORMS:
          fieldBuilder.buildEnumField(
            'HideSalesTaxFieldsInJournalEntryForms',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link detailLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_LEVEL: fieldBuilder.buildEnumField(
          'DetailLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link amountsIncludeSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNTS_INCLUDE_SALES_TAX: fieldBuilder.buildEnumField(
          'AmountsIncludeSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link feesPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEES_POSTING: fieldBuilder.buildEnumField(
          'FeesPosting',
          LedgerJournalFeePosting,
          true
        ),
        /**
         * Static representation of the {@link isWorkflowApprovalActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKFLOW_APPROVAL_ACTIVE: fieldBuilder.buildEnumField(
          'IsWorkflowApprovalActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prepaymentJournalVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_JOURNAL_VOUCHER: fieldBuilder.buildEnumField(
          'PrepaymentJournalVoucher',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deleteLinesAfterPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_LINES_AFTER_POSTING: fieldBuilder.buildEnumField(
          'DeleteLinesAfterPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link approvalUserGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_USER_GROUP: fieldBuilder.buildEdmTypeField(
          'ApprovalUserGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingLineLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LINE_LIMIT: fieldBuilder.buildEdmTypeField(
          'PostingLineLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link principleOfDateInitialization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINCIPLE_OF_DATE_INITIALIZATION: fieldBuilder.buildEnumField(
          'PrincipleOfDateInitialization',
          LedgerJournalDateInitTypeRu,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', LedgerJournalType, true),
        /**
         * Static representation of the {@link defaultCashAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CASH_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultCashAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFixedExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'IsFixedExchangeRate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isApprovalActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVAL_ACTIVE: fieldBuilder.buildEnumField(
          'IsApprovalActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endBalanceControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_BALANCE_CONTROL: fieldBuilder.buildEnumField(
          'EndBalanceControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isFixedOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_OFFSET_ACCOUNT: fieldBuilder.buildEnumField(
          'IsFixedOffsetAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link postingDateControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE_CONTROL: fieldBuilder.buildEnumField(
          'PostingDateControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link generatePaymentsBeforePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_PAYMENTS_BEFORE_POSTING: fieldBuilder.buildEnumField(
          'GeneratePaymentsBeforePosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requiresSimulationValidationIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRES_SIMULATION_VALIDATION_IT: fieldBuilder.buildEnumField(
          'RequiresSimulationValidation_IT',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalNames)
      };
    }

    return this._schema;
  }
}
