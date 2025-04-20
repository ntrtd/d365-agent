/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitEligibilityPolicyRuleTypes } from './BenefitEligibilityPolicyRuleTypes';
import { BenefitEligibilityPolicyRuleTypesRequestBuilder } from './BenefitEligibilityPolicyRuleTypesRequestBuilder';
import { BenefitHcmDetailsApi } from './BenefitHcmDetailsApi';
import { BenefitEligibilityRulesApi } from './BenefitEligibilityRulesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitEligibilityPolicyRuleTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitEligibilityPolicyRuleTypes<DeSerializersT>, DeSerializersT>
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
  ): BenefitEligibilityPolicyRuleTypesApi<DeSerializersT> {
    return new BenefitEligibilityPolicyRuleTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_DETAILS: OneToManyLink<
      BenefitEligibilityPolicyRuleTypes<DeSerializersT>,
      DeSerializersT,
      BenefitHcmDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_RULE: OneToOneLink<
      BenefitEligibilityPolicyRuleTypes<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitHcmDetailsApi<DeSerializersT>,
      BenefitEligibilityRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_DETAILS: new OneToManyLink('BenefitDetails', this, linkedApis[0]),
      BENEFIT_ELIGIBILITY_RULE: new OneToOneLink(
        'BenefitEligibilityRule',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitEligibilityPolicyRuleTypes;

  requestBuilder(): BenefitEligibilityPolicyRuleTypesRequestBuilder<DeSerializersT> {
    return new BenefitEligibilityPolicyRuleTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitEligibilityPolicyRuleTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitEligibilityPolicyRuleTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitEligibilityPolicyRuleTypes<DeSerializersT>,
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
    typeof BenefitEligibilityPolicyRuleTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitEligibilityPolicyRuleTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RULE_NAME: OrderableEdmTypeField<
      BenefitEligibilityPolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AOT_QUERY_NAME: OrderableEdmTypeField<
      BenefitEligibilityPolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitEligibilityPolicyRuleTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_DETAILS: OneToManyLink<
      BenefitEligibilityPolicyRuleTypes<DeSerializersT>,
      DeSerializersT,
      BenefitHcmDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_RULE: OneToOneLink<
      BenefitEligibilityPolicyRuleTypes<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitEligibilityPolicyRuleTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'RuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link aotQueryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AOT_QUERY_NAME: fieldBuilder.buildEdmTypeField(
          'AOTQueryName',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitEligibilityPolicyRuleTypes)
      };
    }

    return this._schema;
  }
}
