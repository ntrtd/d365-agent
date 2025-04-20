/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsProgramEligibilityRules } from './BenefitsProgramEligibilityRules';
import { BenefitsProgramEligibilityRulesRequestBuilder } from './BenefitsProgramEligibilityRulesRequestBuilder';
import { BenefitsProgramsApi } from './BenefitsProgramsApi';
import { BenefitsEligibilityRulesApi } from './BenefitsEligibilityRulesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsProgramEligibilityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitsProgramEligibilityRules<DeSerializersT>, DeSerializersT>
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
  ): BenefitsProgramEligibilityRulesApi<DeSerializersT> {
    return new BenefitsProgramEligibilityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsProgram} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM: OneToOneLink<
      BenefitsProgramEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_ELIGIBILITY_RULE: OneToOneLink<
      BenefitsProgramEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsEligibilityRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsProgramsApi<DeSerializersT>,
      BenefitsEligibilityRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PROGRAM: new OneToOneLink(
        'BenefitsProgram',
        this,
        linkedApis[0]
      ),
      BENEFITS_ELIGIBILITY_RULE: new OneToOneLink(
        'BenefitsEligibilityRule',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsProgramEligibilityRules;

  requestBuilder(): BenefitsProgramEligibilityRulesRequestBuilder<DeSerializersT> {
    return new BenefitsProgramEligibilityRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsProgramEligibilityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsProgramEligibilityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsProgramEligibilityRules<DeSerializersT>,
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
    typeof BenefitsProgramEligibilityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsProgramEligibilityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROGRAM_ID: OrderableEdmTypeField<
      BenefitsProgramEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELIGIBILITY_RULE_ID: OrderableEdmTypeField<
      BenefitsProgramEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsProgram} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM: OneToOneLink<
      BenefitsProgramEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_ELIGIBILITY_RULE: OneToOneLink<
      BenefitsProgramEligibilityRules<DeSerializersT>,
      DeSerializersT,
      BenefitsEligibilityRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsProgramEligibilityRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link programId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROGRAM_ID: fieldBuilder.buildEdmTypeField(
          'ProgramId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link eligibilityRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY_RULE_ID: fieldBuilder.buildEdmTypeField(
          'EligibilityRuleId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsProgramEligibilityRules)
      };
    }

    return this._schema;
  }
}
