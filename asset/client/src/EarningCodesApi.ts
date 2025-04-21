/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EarningCodes } from './EarningCodes';
import { EarningCodesRequestBuilder } from './EarningCodesRequestBuilder';
import { PremiumEarningCodesApi } from './PremiumEarningCodesApi';
import { BenefitsDeductionsApi } from './BenefitsDeductionsApi';
import { LeaveBuySellPolicySellTiersApi } from './LeaveBuySellPolicySellTiersApi';
import { LeaveTypesApi } from './LeaveTypesApi';
import { LeaveBuySellPolicyBuyTiersApi } from './LeaveBuySellPolicyBuyTiersApi';
import { PayrollFringeBenefitType } from './PayrollFringeBenefitType';
import { PayrollIncludeInPaymentType } from './PayrollIncludeInPaymentType';
import { NoYes } from './NoYes';
import { PayrollQuantityUnit } from './PayrollQuantityUnit';
import { PayrollTaxMethod } from './PayrollTaxMethod';
import { PayrollRateBasis } from './PayrollRateBasis';
import { PayrollBaseDefinition } from './PayrollBaseDefinition';
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
export class EarningCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EarningCodes<DeSerializersT>, DeSerializersT>
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
  ): EarningCodesApi<DeSerializersT> {
    return new EarningCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link premiumEarnings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREMIUM_EARNINGS: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      PremiumEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsDeduction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_DEDUCTION: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsDeductionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employerBenefitsDeduction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYER_BENEFITS_DEDUCTION: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsDeductionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicySellTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_SELL_TIER: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPES: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicyBuyTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_BUY_TIER: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PremiumEarningCodesApi<DeSerializersT>,
      BenefitsDeductionsApi<DeSerializersT>,
      BenefitsDeductionsApi<DeSerializersT>,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>,
      LeaveTypesApi<DeSerializersT>,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PREMIUM_EARNINGS: new OneToManyLink(
        'PremiumEarnings',
        this,
        linkedApis[0]
      ),
      BENEFITS_DEDUCTION: new OneToManyLink(
        'BenefitsDeduction',
        this,
        linkedApis[1]
      ),
      EMPLOYER_BENEFITS_DEDUCTION: new OneToManyLink(
        'EmployerBenefitsDeduction',
        this,
        linkedApis[2]
      ),
      LEAVE_BUY_SELL_POLICY_SELL_TIER: new OneToManyLink(
        'LeaveBuySellPolicySellTier',
        this,
        linkedApis[3]
      ),
      LEAVE_TYPES: new OneToManyLink('LeaveTypes', this, linkedApis[4]),
      LEAVE_BUY_SELL_POLICY_BUY_TIER: new OneToManyLink(
        'LeaveBuySellPolicyBuyTier',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = EarningCodes;

  requestBuilder(): EarningCodesRequestBuilder<DeSerializersT> {
    return new EarningCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EarningCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EarningCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EarningCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EarningCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EarningCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EARNING_CODE: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EARNING_CODE_GROUP_ID: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FRINGE_BENEFIT_TYPE: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollFringeBenefitType,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INCLUDE_IN_PAYMENT_TYPE: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollIncludeInPaymentType,
      true,
      true
    >;
    IS_PRODUCTIVE: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUANTITY_UNIT: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollQuantityUnit,
      true,
      true
    >;
    IS_RETROACTIVE: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BASE_EARNINGS_COMPONENT: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETROACTIVE_EARNING_CODE_ID: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FORMULA: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_METHOD: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollTaxMethod,
      true,
      true
    >;
    GROSS_UP_EARNING_CODE_ID: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_BASIS: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollRateBasis,
      true,
      true
    >;
    TRACK_FMLA_HOURS: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BASE_DEFINITION: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      PayrollBaseDefinition,
      true,
      true
    >;
    TAX_GROUP_ID: OrderableEdmTypeField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EARNING_STATEMENT_LINE_RATE_EDITABLE: EnumField<
      EarningCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link premiumEarnings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREMIUM_EARNINGS: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      PremiumEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsDeduction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_DEDUCTION: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsDeductionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employerBenefitsDeduction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYER_BENEFITS_DEDUCTION: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsDeductionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicySellTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_SELL_TIER: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicySellTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_TYPES: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBuySellPolicyBuyTier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BUY_SELL_POLICY_BUY_TIER: OneToManyLink<
      EarningCodes<DeSerializersT>,
      DeSerializersT,
      LeaveBuySellPolicyBuyTiersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EarningCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link earningCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE: fieldBuilder.buildEdmTypeField(
          'EarningCode',
          'Edm.String',
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
        /**
         * Static representation of the {@link earningCodeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fringeBenefitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRINGE_BENEFIT_TYPE: fieldBuilder.buildEnumField(
          'FringeBenefitType',
          PayrollFringeBenefitType,
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link includeInPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_IN_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'IncludeInPaymentType',
          PayrollIncludeInPaymentType,
          true
        ),
        /**
         * Static representation of the {@link isProductive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTIVE: fieldBuilder.buildEnumField('IsProductive', NoYes, true),
        /**
         * Static representation of the {@link quantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT: fieldBuilder.buildEnumField(
          'QuantityUnit',
          PayrollQuantityUnit,
          true
        ),
        /**
         * Static representation of the {@link isRetroactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETROACTIVE: fieldBuilder.buildEnumField(
          'IsRetroactive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isBaseEarningsComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BASE_EARNINGS_COMPONENT: fieldBuilder.buildEnumField(
          'IsBaseEarningsComponent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retroactiveEarningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETROACTIVE_EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'RetroactiveEarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultFormula} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FORMULA: fieldBuilder.buildEdmTypeField(
          'DefaultFormula',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_METHOD: fieldBuilder.buildEnumField(
          'TaxMethod',
          PayrollTaxMethod,
          true
        ),
        /**
         * Static representation of the {@link grossUpEarningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_UP_EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'GrossUpEarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_BASIS: fieldBuilder.buildEnumField(
          'RateBasis',
          PayrollRateBasis,
          true
        ),
        /**
         * Static representation of the {@link trackFmlaHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACK_FMLA_HOURS: fieldBuilder.buildEnumField(
          'TrackFMLAHours',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link baseDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DEFINITION: fieldBuilder.buildEnumField(
          'BaseDefinition',
          PayrollBaseDefinition,
          true
        ),
        /**
         * Static representation of the {@link taxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isEarningStatementLineRateEditable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EARNING_STATEMENT_LINE_RATE_EDITABLE: fieldBuilder.buildEnumField(
          'IsEarningStatementLineRateEditable',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EarningCodes)
      };
    }

    return this._schema;
  }
}
