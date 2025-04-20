/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsCoverageOptionPersonalContactsEligibilityOptions } from './BenefitsCoverageOptionPersonalContactsEligibilityOptions';
import { BenefitsCoverageOptionPersonalContactsEligibilityOptionsRequestBuilder } from './BenefitsCoverageOptionPersonalContactsEligibilityOptionsRequestBuilder';
import { BenefitsCoverageOptionsApi } from './BenefitsCoverageOptionsApi';
import { BenefitsPersonalContactsEligibilityOptionsApi } from './BenefitsPersonalContactsEligibilityOptionsApi';
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
export class BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
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
  ): BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<DeSerializersT> {
    return new BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsCoverageOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION: OneToOneLink<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPersonalContactsEligibilityOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERSONAL_CONTACTS_ELIGIBILITY_OPTION: OneToOneLink<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPersonalContactsEligibilityOptionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsCoverageOptionsApi<DeSerializersT>,
      BenefitsPersonalContactsEligibilityOptionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_COVERAGE_OPTION: new OneToOneLink(
        'BenefitsCoverageOption',
        this,
        linkedApis[0]
      ),
      BENEFITS_PERSONAL_CONTACTS_ELIGIBILITY_OPTION: new OneToOneLink(
        'BenefitsPersonalContactsEligibilityOption',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsCoverageOptionPersonalContactsEligibilityOptions;

  requestBuilder(): BenefitsCoverageOptionPersonalContactsEligibilityOptionsRequestBuilder<DeSerializersT> {
    return new BenefitsCoverageOptionPersonalContactsEligibilityOptionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
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
    typeof BenefitsCoverageOptionPersonalContactsEligibilityOptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsCoverageOptionPersonalContactsEligibilityOptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONAL_CONTACTS_ELIGIBILITY_OPTION_ID: OrderableEdmTypeField<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsCoverageOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION: OneToOneLink<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPersonalContactsEligibilityOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERSONAL_CONTACTS_ELIGIBILITY_OPTION: OneToOneLink<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsPersonalContactsEligibilityOptionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BenefitsCoverageOptionPersonalContactsEligibilityOptions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link coverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageOptionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link personalContactsEligibilityOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_CONTACTS_ELIGIBILITY_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'PersonalContactsEligibilityOptionId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          BenefitsCoverageOptionPersonalContactsEligibilityOptions
        )
      };
    }

    return this._schema;
  }
}
