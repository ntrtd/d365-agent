/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GupRebateAndDeductionsPostingProfiles } from './GupRebateAndDeductionsPostingProfiles';
import { GupRebateAndDeductionsPostingProfilesRequestBuilder } from './GupRebateAndDeductionsPostingProfilesRequestBuilder';
import { JournalNamesApi } from './JournalNamesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { GupRebateAndDeductionsAgreementHeadersApi } from './GupRebateAndDeductionsAgreementHeadersApi';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebatePostingAccountType } from './TamRebatePostingAccountType';
import { TamRebatePaymentType } from './TamRebatePaymentType';
import { NoYes } from './NoYes';
import { TamRebateDynamicAccount } from './TamRebateDynamicAccount';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class GupRebateAndDeductionsPostingProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT
    >
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
  ): GupRebateAndDeductionsPostingProfilesApi<DeSerializersT> {
    return new GupRebateAndDeductionsPostingProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link provisionLedgerJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_LEDGER_JOURNAL_NAME: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateLedgerJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_LEDGER_JOURNAL_NAME: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link writeOffLedgerJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_LEDGER_JOURNAL_NAME: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link writeOffLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link provisionDebitLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_DEBIT_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link provisionCreditLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_CREDIT_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link guaranteeAssignedRebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalNamesApi<DeSerializersT>,
      JournalNamesApi<DeSerializersT>,
      JournalNamesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      GupRebateAndDeductionsAgreementHeadersApi<DeSerializersT>,
      GupRebateAndDeductionsAgreementHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROVISION_LEDGER_JOURNAL_NAME: new OneToOneLink(
        'ProvisionLedgerJournalName',
        this,
        linkedApis[0]
      ),
      REBATE_LEDGER_JOURNAL_NAME: new OneToOneLink(
        'RebateLedgerJournalName',
        this,
        linkedApis[1]
      ),
      WRITE_OFF_LEDGER_JOURNAL_NAME: new OneToOneLink(
        'WriteOffLedgerJournalName',
        this,
        linkedApis[2]
      ),
      WRITE_OFF_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'WriteOffLedgerDimensionCombination',
        this,
        linkedApis[3]
      ),
      PROVISION_DEBIT_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'ProvisionDebitLedgerDimensionCombination',
        this,
        linkedApis[4]
      ),
      REBATE_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'RebateLedgerDimensionCombination',
        this,
        linkedApis[5]
      ),
      PROVISION_CREDIT_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'ProvisionCreditLedgerDimensionCombination',
        this,
        linkedApis[6]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[7]
      ),
      GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS:
        new OneToManyLink(
          'GuaranteeAssignedRebateAndDeductionsAgreementHeaders',
          this,
          linkedApis[8]
        )
    };
    return this;
  }

  entityConstructor = GupRebateAndDeductionsPostingProfiles;

  requestBuilder(): GupRebateAndDeductionsPostingProfilesRequestBuilder<DeSerializersT> {
    return new GupRebateAndDeductionsPostingProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
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
    typeof GupRebateAndDeductionsPostingProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GupRebateAndDeductionsPostingProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE_MODULE: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      ModuleInventCustVend,
      true,
      true
    >;
    POSTING_PROFILE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REBATE_LEDGER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_JOURNAL_NAME_ID_FUND: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_REBATE_TYPE: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebateType,
      true,
      true
    >;
    FUND_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISION_DEBIT_TYPE: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePostingAccountType,
      true,
      true
    >;
    REBATE_CREDIT_TYPE: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePostingAccountType,
      true,
      true
    >;
    PROVISION_CREDIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_PAYMENT_TYPE: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePaymentType,
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP_FUND: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITE_OFF_LEDGER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISION_LEDGER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISION_DEBIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_ACCOUNT_TYPE: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePostingAccountType,
      true,
      true
    >;
    PRICE_INCLUDES_SALES_TAX: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_DESCRIPTION: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_DEAL_POSTING_DYNAMIC_ACCOUNT_RULE: EnumField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebateDynamicAccount,
      true,
      true
    >;
    WRITE_OFF_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      GupRebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link provisionLedgerJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_LEDGER_JOURNAL_NAME: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateLedgerJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_LEDGER_JOURNAL_NAME: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link writeOffLedgerJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_LEDGER_JOURNAL_NAME: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link writeOffLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WRITE_OFF_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link provisionDebitLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_DEBIT_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link provisionCreditLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROVISION_CREDIT_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link guaranteeAssignedRebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      GupRebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GupRebateAndDeductionsPostingProfiles<DeSerializers>>;
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
         * Static representation of the {@link postingProfileModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_MODULE: fieldBuilder.buildEnumField(
          'PostingProfileModule',
          ModuleInventCustVend,
          true
        ),
        /**
         * Static representation of the {@link postingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'PostingProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'PostingLegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rebateLedgerJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_LEDGER_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'RebateLedgerJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerJournalNameIdFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_NAME_ID_FUND: fieldBuilder.buildEdmTypeField(
          'LedgerJournalNameIdFund',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingRebateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_REBATE_TYPE: fieldBuilder.buildEnumField(
          'PostingRebateType',
          TamRebateType,
          true
        ),
        /**
         * Static representation of the {@link fundLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'FundLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provisionDebitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_DEBIT_TYPE: fieldBuilder.buildEnumField(
          'ProvisionDebitType',
          TamRebatePostingAccountType,
          true
        ),
        /**
         * Static representation of the {@link rebateCreditType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_CREDIT_TYPE: fieldBuilder.buildEnumField(
          'RebateCreditType',
          TamRebatePostingAccountType,
          true
        ),
        /**
         * Static representation of the {@link provisionCreditMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_CREDIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ProvisionCreditMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link rebatePaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'RebatePaymentType',
          TamRebatePaymentType,
          true
        ),
        /**
         * Static representation of the {@link salesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroupFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_FUND: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupFund',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link writeOffLedgerJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_OFF_LEDGER_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'WriteOffLedgerJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provisionLedgerJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_LEDGER_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'ProvisionLedgerJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RebateMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provisionDebitMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_DEBIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ProvisionDebitMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link rebateLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'RebateLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'PostingAccountType',
          TamRebatePostingAccountType,
          true
        ),
        /**
         * Static representation of the {@link priceIncludesSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_INCLUDES_SALES_TAX: fieldBuilder.buildEnumField(
          'PriceIncludesSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PostingProfileDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateDealPostingDynamicAccountRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_DEAL_POSTING_DYNAMIC_ACCOUNT_RULE: fieldBuilder.buildEnumField(
          'RebateDealPostingDynamicAccountRule',
          TamRebateDynamicAccount,
          true
        ),
        /**
         * Static representation of the {@link writeOffMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_OFF_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'WriteOffMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GupRebateAndDeductionsPostingProfiles)
      };
    }

    return this._schema;
  }
}
