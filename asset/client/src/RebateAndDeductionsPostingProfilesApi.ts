/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAndDeductionsPostingProfiles } from './RebateAndDeductionsPostingProfiles';
import { RebateAndDeductionsPostingProfilesRequestBuilder } from './RebateAndDeductionsPostingProfilesRequestBuilder';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { RebateAndDeductionsAgreementDealsApi } from './RebateAndDeductionsAgreementDealsApi';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebatePostingAccountType } from './TamRebatePostingAccountType';
import { TamRebatePaymentType } from './TamRebatePaymentType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RebateAndDeductionsPostingProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
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
  ): RebateAndDeductionsPostingProfilesApi<DeSerializersT> {
    return new RebateAndDeductionsPostingProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link guaranteeAssignedRebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dealGuaranteeAssignedRebateAndDeductionsAgreementDeals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dealAssignedRebateAndDeductionsAgreementDeals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[0]
      ),
      GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS:
        new OneToManyLink(
          'GuaranteeAssignedRebateAndDeductionsAgreementHeaders',
          this,
          linkedApis[1]
        ),
      DEAL_GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS:
        new OneToManyLink(
          'DealGuaranteeAssignedRebateAndDeductionsAgreementDeals',
          this,
          linkedApis[2]
        ),
      DEAL_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: new OneToManyLink(
        'DealAssignedRebateAndDeductionsAgreementDeals',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RebateAndDeductionsPostingProfiles;

  requestBuilder(): RebateAndDeductionsPostingProfilesRequestBuilder<DeSerializersT> {
    return new RebateAndDeductionsPostingProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAndDeductionsPostingProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAndDeductionsPostingProfiles<DeSerializersT>,
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
    typeof RebateAndDeductionsPostingProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAndDeductionsPostingProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE_MODULE: EnumField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      ModuleInventCustVend,
      true,
      true
    >;
    POSTING_PROFILE_ID: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REBATE_LEDGER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_REBATE_TYPE: EnumField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebateType,
      true,
      true
    >;
    PROVISION_DEBIT_TYPE: EnumField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePostingAccountType,
      true,
      true
    >;
    REBATE_CREDIT_TYPE: EnumField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePostingAccountType,
      true,
      true
    >;
    PROVISION_CREDIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_PAYMENT_TYPE: EnumField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePaymentType,
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITE_OFF_LEDGER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISION_LEDGER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISION_DEBIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_ACCOUNT_TYPE: EnumField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebatePostingAccountType,
      true,
      true
    >;
    POSTING_PROFILE_DESCRIPTION: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_DEAL_POSTING_DYNAMIC_ACCOUNT_RULE: EnumField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      TamRebateDynamicAccount,
      true,
      true
    >;
    WRITE_OFF_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      RebateAndDeductionsPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link guaranteeAssignedRebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dealGuaranteeAssignedRebateAndDeductionsAgreementDeals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_GUARANTEE_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dealAssignedRebateAndDeductionsAgreementDeals} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_ASSIGNED_REBATE_AND_DEDUCTIONS_AGREEMENT_DEALS: OneToManyLink<
      RebateAndDeductionsPostingProfiles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDealsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RebateAndDeductionsPostingProfiles<DeSerializers>>;
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
         * Static representation of the {@link postingRebateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_REBATE_TYPE: fieldBuilder.buildEnumField(
          'PostingRebateType',
          TamRebateType,
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
        ALL_FIELDS: new AllFields('*', RebateAndDeductionsPostingProfiles)
      };
    }

    return this._schema;
  }
}
