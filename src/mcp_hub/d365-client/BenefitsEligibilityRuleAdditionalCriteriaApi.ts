/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsEligibilityRuleAdditionalCriteria } from './BenefitsEligibilityRuleAdditionalCriteria';
import { BenefitsEligibilityRuleAdditionalCriteriaRequestBuilder } from './BenefitsEligibilityRuleAdditionalCriteriaRequestBuilder';
import { BenefitEligibleType } from './BenefitEligibleType';
import { BenefitAgeDirection } from './BenefitAgeDirection';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsEligibilityRuleAdditionalCriteriaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializersT>,
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
  ): BenefitsEligibilityRuleAdditionalCriteriaApi<DeSerializersT> {
    return new BenefitsEligibilityRuleAdditionalCriteriaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsEligibilityRuleAdditionalCriteria;

  requestBuilder(): BenefitsEligibilityRuleAdditionalCriteriaRequestBuilder<DeSerializersT> {
    return new BenefitsEligibilityRuleAdditionalCriteriaRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsEligibilityRuleAdditionalCriteria<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsEligibilityRuleAdditionalCriteria<DeSerializersT>,
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
    typeof BenefitsEligibilityRuleAdditionalCriteria,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsEligibilityRuleAdditionalCriteria,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ELIGIBILITY_RULE_ID: OrderableEdmTypeField<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELIGIBLE_TYPE: EnumField<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializers>,
      DeSerializersT,
      BenefitEligibleType,
      true,
      true
    >;
    REFERENCE_ID: OrderableEdmTypeField<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGE_DIRECTION: EnumField<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializers>,
      DeSerializersT,
      BenefitAgeDirection,
      true,
      true
    >;
    AGE: OrderableEdmTypeField<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      BenefitsEligibilityRuleAdditionalCriteria<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link eligibilityRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY_RULE_ID: fieldBuilder.buildEdmTypeField(
          'EligibilityRuleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link eligibleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBLE_TYPE: fieldBuilder.buildEnumField(
          'EligibleType',
          BenefitEligibleType,
          true
        ),
        /**
         * Static representation of the {@link referenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ageDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGE_DIRECTION: fieldBuilder.buildEnumField(
          'AgeDirection',
          BenefitAgeDirection,
          true
        ),
        /**
         * Static representation of the {@link age} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGE: fieldBuilder.buildEdmTypeField('Age', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          BenefitsEligibilityRuleAdditionalCriteria
        )
      };
    }

    return this._schema;
  }
}
