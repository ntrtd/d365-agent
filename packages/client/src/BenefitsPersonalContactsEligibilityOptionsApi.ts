/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPersonalContactsEligibilityOptions } from './BenefitsPersonalContactsEligibilityOptions';
import { BenefitsPersonalContactsEligibilityOptionsRequestBuilder } from './BenefitsPersonalContactsEligibilityOptionsRequestBuilder';
import { BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi } from './BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi';
import { BenefitDesigneeEligibilityCode } from './BenefitDesigneeEligibilityCode';
import { DirSystemRelationshipType } from './DirSystemRelationshipType';
import { BenefitStatus } from './BenefitStatus';
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
export class BenefitsPersonalContactsEligibilityOptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsPersonalContactsEligibilityOptions<DeSerializersT>,
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
  ): BenefitsPersonalContactsEligibilityOptionsApi<DeSerializersT> {
    return new BenefitsPersonalContactsEligibilityOptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitsCoverageOptionPersonalContactsEligibilityOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION_PERSONAL_CONTACTS_ELIGIBILITY_OPTION: OneToManyLink<
      BenefitsPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_COVERAGE_OPTION_PERSONAL_CONTACTS_ELIGIBILITY_OPTION:
        new OneToManyLink(
          'BenefitsCoverageOptionPersonalContactsEligibilityOption',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = BenefitsPersonalContactsEligibilityOptions;

  requestBuilder(): BenefitsPersonalContactsEligibilityOptionsRequestBuilder<DeSerializersT> {
    return new BenefitsPersonalContactsEligibilityOptionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPersonalContactsEligibilityOptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPersonalContactsEligibilityOptions<DeSerializersT>,
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
    typeof BenefitsPersonalContactsEligibilityOptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPersonalContactsEligibilityOptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ELIGIBILITY_OPTION_ID: OrderableEdmTypeField<
      BenefitsPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_ELIGIBILITY_CODE: EnumField<
      BenefitsPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      BenefitDesigneeEligibilityCode,
      true,
      true
    >;
    RELATIONSHIP: EnumField<
      BenefitsPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      DirSystemRelationshipType,
      true,
      true
    >;
    STATUS: EnumField<
      BenefitsPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      BenefitStatus,
      true,
      true
    >;
    AGE: OrderableEdmTypeField<
      BenefitsPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsPersonalContactsEligibilityOptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsCoverageOptionPersonalContactsEligibilityOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_COVERAGE_OPTION_PERSONAL_CONTACTS_ELIGIBILITY_OPTION: OneToManyLink<
      BenefitsPersonalContactsEligibilityOptions<DeSerializersT>,
      DeSerializersT,
      BenefitsCoverageOptionPersonalContactsEligibilityOptionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BenefitsPersonalContactsEligibilityOptions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link eligibilityOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'EligibilityOptionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contactEligibilityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_ELIGIBILITY_CODE: fieldBuilder.buildEnumField(
          'ContactEligibilityCode',
          BenefitDesigneeEligibilityCode,
          true
        ),
        /**
         * Static representation of the {@link relationship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP: fieldBuilder.buildEnumField(
          'Relationship',
          DirSystemRelationshipType,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', BenefitStatus, true),
        /**
         * Static representation of the {@link age} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGE: fieldBuilder.buildEdmTypeField('Age', 'Edm.Int32', false),
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
        ALL_FIELDS: new AllFields(
          '*',
          BenefitsPersonalContactsEligibilityOptions
        )
      };
    }

    return this._schema;
  }
}
