/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitHcmDetails } from './BenefitHcmDetails';
import { BenefitHcmDetailsRequestBuilder } from './BenefitHcmDetailsRequestBuilder';
import { BenefitsApi } from './BenefitsApi';
import { BenefitEligibilityPolicyRuleTypesApi } from './BenefitEligibilityPolicyRuleTypesApi';
import { HcmBenefitEligibilityType } from './HcmBenefitEligibilityType';
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
export class BenefitHcmDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitHcmDetails<DeSerializersT>, DeSerializersT>
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
  ): BenefitHcmDetailsApi<DeSerializersT> {
    return new BenefitHcmDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      BenefitHcmDetails<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link policyRuleType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICY_RULE_TYPE: OneToOneLink<
      BenefitHcmDetails<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityPolicyRuleTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsApi<DeSerializersT>,
      BenefitEligibilityPolicyRuleTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[0]),
      POLICY_RULE_TYPE: new OneToOneLink('PolicyRuleType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BenefitHcmDetails;

  requestBuilder(): BenefitHcmDetailsRequestBuilder<DeSerializersT> {
    return new BenefitHcmDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitHcmDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitHcmDetails<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitHcmDetails<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BenefitHcmDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitHcmDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      BenefitHcmDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      BenefitHcmDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ELIGIBILITY: EnumField<
      BenefitHcmDetails<DeSerializers>,
      DeSerializersT,
      HcmBenefitEligibilityType,
      true,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      BenefitHcmDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RULE_NAME: OrderableEdmTypeField<
      BenefitHcmDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      BenefitHcmDetails<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link policyRuleType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICY_RULE_TYPE: OneToOneLink<
      BenefitHcmDetails<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityPolicyRuleTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitHcmDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link eligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY: fieldBuilder.buildEnumField(
          'Eligibility',
          HcmBenefitEligibilityType,
          true
        ),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'RuleName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitHcmDetails)
      };
    }

    return this._schema;
  }
}
