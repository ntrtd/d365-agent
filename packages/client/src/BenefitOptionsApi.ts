/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitOptions } from './BenefitOptions';
import { BenefitOptionsRequestBuilder } from './BenefitOptionsRequestBuilder';
import { BenefitsApi } from './BenefitsApi';
import { BenefitEligibilityOverridesApi } from './BenefitEligibilityOverridesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitOptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitOptions<DeSerializersT>, DeSerializersT>
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
  ): BenefitOptionsApi<DeSerializersT> {
    return new BenefitOptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS: OneToManyLink<
      BenefitOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEligibilityOverrides} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_OVERRIDES: OneToManyLink<
      BenefitOptions<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityOverridesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsApi<DeSerializersT>,
      BenefitEligibilityOverridesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS: new OneToManyLink('Benefits', this, linkedApis[0]),
      BENEFIT_ELIGIBILITY_OVERRIDES: new OneToManyLink(
        'BenefitEligibilityOverrides',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitOptions;

  requestBuilder(): BenefitOptionsRequestBuilder<DeSerializersT> {
    return new BenefitOptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitOptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitOptions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitOptions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitOptions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BenefitOptions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_OPTION_ID: OrderableEdmTypeField<
      BenefitOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOW_BENEFICIARY_DESIGNATIONS: EnumField<
      BenefitOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_DEPENDENT_COVERAGE: EnumField<
      BenefitOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WAIVE: EnumField<
      BenefitOptions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS: OneToManyLink<
      BenefitOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitEligibilityOverrides} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_ELIGIBILITY_OVERRIDES: OneToManyLink<
      BenefitOptions<DeSerializersT>,
      DeSerializersT,
      BenefitEligibilityOverridesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitOptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'BenefitOptionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allowBeneficiaryDesignations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_BENEFICIARY_DESIGNATIONS: fieldBuilder.buildEnumField(
          'AllowBeneficiaryDesignations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowDependentCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_DEPENDENT_COVERAGE: fieldBuilder.buildEnumField(
          'AllowDependentCoverage',
          NoYes,
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
        /**
         * Static representation of the {@link isWaive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WAIVE: fieldBuilder.buildEnumField('IsWaive', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitOptions)
      };
    }

    return this._schema;
  }
}
