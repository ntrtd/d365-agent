/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAndDeductionsAgreementDateSetups } from './RebateAndDeductionsAgreementDateSetups';
import { RebateAndDeductionsAgreementDateSetupsRequestBuilder } from './RebateAndDeductionsAgreementDateSetupsRequestBuilder';
import { ProjectPeriodsApi } from './ProjectPeriodsApi';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { GupRebateAndDeductionsAgreementDateSetupCriterionsApi } from './GupRebateAndDeductionsAgreementDateSetupCriterionsApi';
import { TamRebateGuaranteePaid } from './TamRebateGuaranteePaid';
import { NoYes } from './NoYes';
import { WeekDays } from './WeekDays';
import { TamRebatePeriodCode } from './TamRebatePeriodCode';
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
export class RebateAndDeductionsAgreementDateSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
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
  ): RebateAndDeductionsAgreementDateSetupsApi<DeSerializersT> {
    return new RebateAndDeductionsAgreementDateSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customRebateClaimPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_REBATE_CLAIM_PERIOD: OneToOneLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      ProjectPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER: OneToOneLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customRebateProvisionPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_REBATE_PROVISION_PERIOD: OneToOneLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      ProjectPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementDateSetupCriteria} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP_CRITERIA: OneToManyLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsAgreementDateSetupCriterionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProjectPeriodsApi<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      ProjectPeriodsApi<DeSerializersT>,
      GupRebateAndDeductionsAgreementDateSetupCriterionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOM_REBATE_CLAIM_PERIOD: new OneToOneLink(
        'CustomRebateClaimPeriod',
        this,
        linkedApis[0]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER: new OneToOneLink(
        'RebateAndDeductionsAgreementHeader',
        this,
        linkedApis[1]
      ),
      CUSTOM_REBATE_PROVISION_PERIOD: new OneToOneLink(
        'CustomRebateProvisionPeriod',
        this,
        linkedApis[2]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP_CRITERIA: new OneToManyLink(
        'RebateAndDeductionsAgreementDateSetupCriteria',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RebateAndDeductionsAgreementDateSetups;

  requestBuilder(): RebateAndDeductionsAgreementDateSetupsRequestBuilder<DeSerializersT> {
    return new RebateAndDeductionsAgreementDateSetupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
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
    typeof RebateAndDeductionsAgreementDateSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAndDeductionsAgreementDateSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROVISION_PERIOD_RECURRENCE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GUARANTEE_PAYMENT_RULE: EnumField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      TamRebateGuaranteePaid,
      true,
      true
    >;
    GUARANTEE_PERIOD_RECURRENCE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WILL_SOURCE_DOCUMENT_POSTING_CALCULATE_PROVISION: EnumField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOM_PROVISION_PERIOD_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_VALID_FROM_DATE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROVISION_WEEK_DAY_PERIOD_START: EnumField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      WeekDays,
      true,
      true
    >;
    CLAIM_PERIOD_RECURRENCE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOM_CLAIM_PERIOD_ID: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_GUARANTEE_AMOUNT: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROVISION_PERIOD_FREQUENCY: EnumField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      TamRebatePeriodCode,
      true,
      true
    >;
    CLAIM_PERIOD_FREQUENCY: EnumField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      TamRebatePeriodCode,
      true,
      true
    >;
    AGREEMENT_VALID_TO_DATE: OrderableEdmTypeField<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customRebateClaimPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_REBATE_CLAIM_PERIOD: OneToOneLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      ProjectPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsAgreementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER: OneToOneLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customRebateProvisionPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_REBATE_PROVISION_PERIOD: OneToOneLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      ProjectPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementDateSetupCriteria} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_DATE_SETUP_CRITERIA: OneToManyLink<
      RebateAndDeductionsAgreementDateSetups<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsAgreementDateSetupCriterionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RebateAndDeductionsAgreementDateSetups<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link agreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link provisionPeriodRecurrence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_PERIOD_RECURRENCE: fieldBuilder.buildEdmTypeField(
          'ProvisionPeriodRecurrence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link guaranteePaymentRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_PAYMENT_RULE: fieldBuilder.buildEnumField(
          'GuaranteePaymentRule',
          TamRebateGuaranteePaid,
          true
        ),
        /**
         * Static representation of the {@link guaranteePeriodRecurrence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_PERIOD_RECURRENCE: fieldBuilder.buildEdmTypeField(
          'GuaranteePeriodRecurrence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link willSourceDocumentPostingCalculateProvision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SOURCE_DOCUMENT_POSTING_CALCULATE_PROVISION:
          fieldBuilder.buildEnumField(
            'WillSourceDocumentPostingCalculateProvision',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link customProvisionPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_PROVISION_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'CustomProvisionPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementValidFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'AgreementValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link provisionWeekDayPeriodStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_WEEK_DAY_PERIOD_START: fieldBuilder.buildEnumField(
          'ProvisionWeekDayPeriodStart',
          WeekDays,
          true
        ),
        /**
         * Static representation of the {@link claimPeriodRecurrence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_PERIOD_RECURRENCE: fieldBuilder.buildEdmTypeField(
          'ClaimPeriodRecurrence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customClaimPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_CLAIM_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'CustomClaimPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumGuaranteeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_GUARANTEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumGuaranteeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link provisionPeriodFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_PERIOD_FREQUENCY: fieldBuilder.buildEnumField(
          'ProvisionPeriodFrequency',
          TamRebatePeriodCode,
          true
        ),
        /**
         * Static representation of the {@link claimPeriodFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_PERIOD_FREQUENCY: fieldBuilder.buildEnumField(
          'ClaimPeriodFrequency',
          TamRebatePeriodCode,
          true
        ),
        /**
         * Static representation of the {@link agreementValidToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'AgreementValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RebateAndDeductionsAgreementDateSetups)
      };
    }

    return this._schema;
  }
}
