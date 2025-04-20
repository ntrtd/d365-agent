/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAndDeductionsAgreementDeals } from './RebateAndDeductionsAgreementDeals';
import { RebateAndDeductionsAgreementDealsRequestBuilder } from './RebateAndDeductionsAgreementDealsRequestBuilder';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { RebateStatusTablesApi } from './RebateStatusTablesApi';
import { RebateAndDeductionsPostingProfilesApi } from './RebateAndDeductionsPostingProfilesApi';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { NoYes } from './NoYes';
import { TamRebateDealWorkflowState } from './TamRebateDealWorkflowState';
import { TamRebateReconciliation } from './TamRebateReconciliation';
import { TamRebateType } from './TamRebateType';
import { TamRebateOutputType } from './TamRebateOutputType';
import { TamRebateTypeGup } from './TamRebateTypeGup';
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
export class RebateAndDeductionsAgreementDealsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RebateAndDeductionsAgreementDeals<DeSerializersT>, DeSerializersT>
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
  ): RebateAndDeductionsAgreementDealsApi<DeSerializersT> {
    return new RebateAndDeductionsAgreementDealsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_STATUS: OneToOneLink<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateStatusTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dealGuaranteeRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dealRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      RebateStatusTablesApi<DeSerializersT>,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[0]
      ),
      REBATE_AND_DEDUCTIONS_STATUS: new OneToOneLink(
        'RebateAndDeductionsStatus',
        this,
        linkedApis[1]
      ),
      DEAL_GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: new OneToOneLink(
        'DealGuaranteeRebateAndDeductionsPostingProfile',
        this,
        linkedApis[2]
      ),
      DEAL_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: new OneToOneLink(
        'DealRebateAndDeductionsPostingProfile',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RebateAndDeductionsAgreementDeals;

  requestBuilder(): RebateAndDeductionsAgreementDealsRequestBuilder<DeSerializersT> {
    return new RebateAndDeductionsAgreementDealsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAndDeductionsAgreementDeals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAndDeductionsAgreementDeals<DeSerializersT>,
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
    typeof RebateAndDeductionsAgreementDeals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAndDeductionsAgreementDeals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEAL_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEAL_MODULE: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      ModuleInventCustVend,
      true,
      true
    >;
    GUARANTEE_POSTING_PROFILE_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEAL_ACTIVE: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_STATUS_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEAL_DOCUMENT_NOTES: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEAL_DESCRIPTION: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEAL_CURRENCY_CODE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEAL_VALID_TO_DATE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKFLOW_STATE: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      TamRebateDealWorkflowState,
      true,
      true
    >;
    DEAL_RECONCILIATION: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      TamRebateReconciliation,
      true,
      true
    >;
    MATCHED_BY_ORDER_ACCOUNT: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEAL_VALID_FROM_DATE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEAL_TYPE: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      TamRebateType,
      true,
      true
    >;
    WILL_REBATE_DEAL_PROCESSING_PROCEED_GUARANTEE_CUMULATIVE: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEAL_OUTPUT_TYPE: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      TamRebateOutputType,
      true,
      true
    >;
    DEAL_POSTING_PROFILE_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_COMPANY_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AGREEMENT_TYPE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_TYPE_GUP: EnumField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
      DeSerializersT,
      TamRebateTypeGup,
      true,
      true
    >;
    RECIPIENT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDeals<DeSerializers>,
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
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_STATUS: OneToOneLink<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateStatusTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dealGuaranteeRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dealRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEAL_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      RebateAndDeductionsAgreementDeals<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RebateAndDeductionsAgreementDeals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dealNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DealNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dealModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_MODULE: fieldBuilder.buildEnumField(
          'DealModule',
          ModuleInventCustVend,
          true
        ),
        /**
         * Static representation of the {@link guaranteePostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'GuaranteePostingProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDealActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEAL_ACTIVE: fieldBuilder.buildEnumField(
          'IsDealActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rebateAndDeductionsStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'RebateAndDeductionsStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dealDocumentNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_DOCUMENT_NOTES: fieldBuilder.buildEdmTypeField(
          'DealDocumentNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dealDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DealDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dealCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'DealCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dealValidToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'DealValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workflowState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATE: fieldBuilder.buildEnumField(
          'WorkflowState',
          TamRebateDealWorkflowState,
          true
        ),
        /**
         * Static representation of the {@link dealReconciliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_RECONCILIATION: fieldBuilder.buildEnumField(
          'DealReconciliation',
          TamRebateReconciliation,
          true
        ),
        /**
         * Static representation of the {@link matchedByOrderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHED_BY_ORDER_ACCOUNT: fieldBuilder.buildEnumField(
          'MatchedByOrderAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dealValidFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'DealValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dealType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_TYPE: fieldBuilder.buildEnumField('DealType', TamRebateType, true),
        /**
         * Static representation of the {@link willRebateDealProcessingProceedGuaranteeCumulative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_DEAL_PROCESSING_PROCEED_GUARANTEE_CUMULATIVE:
          fieldBuilder.buildEnumField(
            'WillRebateDealProcessingProceedGuaranteeCumulative',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link dealOutputType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_OUTPUT_TYPE: fieldBuilder.buildEnumField(
          'DealOutputType',
          TamRebateOutputType,
          true
        ),
        /**
         * Static representation of the {@link dealPostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'DealPostingProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'RebateCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateAgreementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AGREEMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'RebateAgreementType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateTypeGup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_TYPE_GUP: fieldBuilder.buildEnumField(
          'RebateTypeGUP',
          TamRebateTypeGup,
          true
        ),
        /**
         * Static representation of the {@link recipient} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECIPIENT: fieldBuilder.buildEdmTypeField(
          'Recipient',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RebateAndDeductionsAgreementDeals)
      };
    }

    return this._schema;
  }
}
