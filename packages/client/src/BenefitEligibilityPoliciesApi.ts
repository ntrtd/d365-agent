/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitEligibilityPolicies } from './BenefitEligibilityPolicies';
import { BenefitEligibilityPoliciesRequestBuilder } from './BenefitEligibilityPoliciesRequestBuilder';
import { BenefitEligibilityRulesApi } from './BenefitEligibilityRulesApi';
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
export class BenefitEligibilityPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitEligibilityPolicies<DeSerializersT>, DeSerializersT>
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
  ): BenefitEligibilityPoliciesApi<DeSerializersT> {
    return new BenefitEligibilityPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_RULE: OneToOneLink<
      BenefitEligibilityPolicies<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BenefitEligibilityRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_ELIGIBILITY_RULE: new OneToOneLink(
        'BenefitEligibilityRule',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BenefitEligibilityPolicies;

  requestBuilder(): BenefitEligibilityPoliciesRequestBuilder<DeSerializersT> {
    return new BenefitEligibilityPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitEligibilityPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitEligibilityPolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitEligibilityPolicies<DeSerializersT>,
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
    typeof BenefitEligibilityPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitEligibilityPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_NAME: OrderableEdmTypeField<
      BenefitEligibilityPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_POLICY_ACTIVE: EnumField<
      BenefitEligibilityPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POLICY_DESCRIPTION: OrderableEdmTypeField<
      BenefitEligibilityPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_RULE: OneToOneLink<
      BenefitEligibilityPolicies<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitEligibilityPolicies<DeSerializers>>;
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
         * Static representation of the {@link isPolicyActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POLICY_ACTIVE: fieldBuilder.buildEnumField(
          'IsPolicyActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link policyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PolicyDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitEligibilityPolicies)
      };
    }

    return this._schema;
  }
}
