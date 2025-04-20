/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitTaxRulesUs } from './BenefitTaxRulesUs';
import { BenefitTaxRulesUsRequestBuilder } from './BenefitTaxRulesUsRequestBuilder';
import { BenefitPlansApi } from './BenefitPlansApi';
import { PayrollTaxGroupsApi } from './PayrollTaxGroupsApi';
import { NoYes } from './NoYes';
import { PayrollPreTaxBasis } from './PayrollPreTaxBasis';
import { PayrollCustomPretaxMethod } from './PayrollCustomPretaxMethod';
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
export class BenefitTaxRulesUsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitTaxRulesUs<DeSerializersT>, DeSerializersT>
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
  ): BenefitTaxRulesUsApi<DeSerializersT> {
    return new BenefitTaxRulesUsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      BenefitTaxRulesUs<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_TAX_GROUP: OneToOneLink<
      BenefitTaxRulesUs<DeSerializersT>,
      DeSerializersT,
      PayrollTaxGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitPlansApi<DeSerializersT>,
      PayrollTaxGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_PLAN: new OneToOneLink('BenefitPlan', this, linkedApis[0]),
      PAYROLL_TAX_GROUP: new OneToOneLink(
        'PayrollTaxGroup',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitTaxRulesUs;

  requestBuilder(): BenefitTaxRulesUsRequestBuilder<DeSerializersT> {
    return new BenefitTaxRulesUsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitTaxRulesUs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitTaxRulesUs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitTaxRulesUs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BenefitTaxRulesUs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitTaxRulesUs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_PLAN_ID: OrderableEdmTypeField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_EXEMPT_FROM_LOCAL_INCOME_TAX: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRE_TAX_BASIS: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      PayrollPreTaxBasis,
      true,
      true
    >;
    CUSTOM_PRETAX_METHOD: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      PayrollCustomPretaxMethod,
      true,
      true
    >;
    IS_EXEMPT_FROM_STATE_INCOME_TAX: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXEMPT_FROM_FEDERAL_INCOME_TAX: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXEMPT_FROM_MEDICARE: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXEMPT_FROM_STATE_UNEMPLOYMENT: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_GROUP_ID: OrderableEdmTypeField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXEMPT_FROM_STATE_DISABILITY_INSURANCE: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXEMPT_FROM_FICA: EnumField<
      BenefitTaxRulesUs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PLAN: OneToOneLink<
      BenefitTaxRulesUs<DeSerializersT>,
      DeSerializersT,
      BenefitPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollTaxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_TAX_GROUP: OneToOneLink<
      BenefitTaxRulesUs<DeSerializersT>,
      DeSerializersT,
      PayrollTaxGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitTaxRulesUs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'BenefitPlanID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isExemptFromLocalIncomeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_LOCAL_INCOME_TAX: fieldBuilder.buildEnumField(
          'IsExemptFromLocalIncomeTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link preTaxBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_TAX_BASIS: fieldBuilder.buildEnumField(
          'PreTaxBasis',
          PayrollPreTaxBasis,
          true
        ),
        /**
         * Static representation of the {@link customPretaxMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_PRETAX_METHOD: fieldBuilder.buildEnumField(
          'CustomPretaxMethod',
          PayrollCustomPretaxMethod,
          true
        ),
        /**
         * Static representation of the {@link isExemptFromStateIncomeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_STATE_INCOME_TAX: fieldBuilder.buildEnumField(
          'IsExemptFromStateIncomeTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isExemptFromFederalIncomeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_FEDERAL_INCOME_TAX: fieldBuilder.buildEnumField(
          'IsExemptFromFederalIncomeTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isExemptFromMedicare} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_MEDICARE: fieldBuilder.buildEnumField(
          'IsExemptFromMedicare',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isExemptFromStateUnemployment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_STATE_UNEMPLOYMENT: fieldBuilder.buildEnumField(
          'IsExemptFromStateUnemployment',
          NoYes,
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
         * Static representation of the {@link isExemptFromStateDisabilityInsurance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_STATE_DISABILITY_INSURANCE: fieldBuilder.buildEnumField(
          'IsExemptFromStateDisabilityInsurance',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isExemptFromFica} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT_FROM_FICA: fieldBuilder.buildEnumField(
          'IsExemptFromFICA',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitTaxRulesUs)
      };
    }

    return this._schema;
  }
}
