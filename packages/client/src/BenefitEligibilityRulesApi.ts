/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitEligibilityRules } from './BenefitEligibilityRules';
import { BenefitEligibilityRulesRequestBuilder } from './BenefitEligibilityRulesRequestBuilder';
import { BenefitEligibilityPoliciesApi } from './BenefitEligibilityPoliciesApi';
import { BenefitEligibilityPolicyRuleTypesApi } from './BenefitEligibilityPolicyRuleTypesApi';
import { NoYes } from './NoYes';
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
export class BenefitEligibilityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitEligibilityRules<DeSerializersT>, DeSerializersT>
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
  ): BenefitEligibilityRulesApi<DeSerializersT> {
    return new BenefitEligibilityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_POLICY: OneToOneLink<
      BenefitEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityPolicyRuleType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_POLICY_RULE_TYPE: OneToOneLink<
      BenefitEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityPolicyRuleTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitEligibilityPoliciesApi<DeSerializersT>,
      BenefitEligibilityPolicyRuleTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_ELIGIBILITY_POLICY: new OneToOneLink(
        'BenefitEligibilityPolicy',
        this,
        linkedApis[0]
      ),
      BENEFIT_ELIGIBILITY_POLICY_RULE_TYPE: new OneToOneLink(
        'BenefitEligibilityPolicyRuleType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitEligibilityRules;

  requestBuilder(): BenefitEligibilityRulesRequestBuilder<DeSerializersT> {
    return new BenefitEligibilityRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitEligibilityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitEligibilityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitEligibilityRules<DeSerializersT>,
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
    typeof BenefitEligibilityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitEligibilityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_NAME: OrderableEdmTypeField<
      BenefitEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_RULES_NAME: OrderableEdmTypeField<
      BenefitEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPRESSION_ID: OrderableEdmTypeField<
      BenefitEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INHERITED: EnumField<
      BenefitEligibilityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_POLICY: OneToOneLink<
      BenefitEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityPoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityPolicyRuleType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_POLICY_RULE_TYPE: OneToOneLink<
      BenefitEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityPolicyRuleTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitEligibilityRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link policyRulesName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_RULES_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyRulesName',
          'Edm.String',
          false
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
         * Static representation of the {@link expressionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPRESSION_ID: fieldBuilder.buildEdmTypeField(
          'ExpressionId',
          'Edm.Guid',
          false
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
         * Static representation of the {@link isInherited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INHERITED: fieldBuilder.buildEnumField('IsInherited', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitEligibilityRules)
      };
    }

    return this._schema;
  }
}
