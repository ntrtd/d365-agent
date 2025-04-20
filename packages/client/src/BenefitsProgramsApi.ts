/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPrograms } from './BenefitsPrograms';
import { BenefitsProgramsRequestBuilder } from './BenefitsProgramsRequestBuilder';
import { BenefitsProgramEligibilityRulesApi } from './BenefitsProgramEligibilityRulesApi';
import { BenefitsPlansApi } from './BenefitsPlansApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsProgramsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsPrograms<DeSerializersT>, DeSerializersT>
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
  ): BenefitsProgramsApi<DeSerializersT> {
    return new BenefitsProgramsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitsProgramEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsPrograms<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN: OneToManyLink<
      BenefitsPrograms<DeSerializersT>,
      DeSerializersT,
      BenefitsPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsProgramEligibilityRulesApi<DeSerializersT>,
      BenefitsPlansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PROGRAM_ELIGIBILITY_RULE: new OneToManyLink(
        'BenefitsProgramEligibilityRule',
        this,
        linkedApis[0]
      ),
      BENEFITS_PLAN: new OneToManyLink('BenefitsPlan', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BenefitsPrograms;

  requestBuilder(): BenefitsProgramsRequestBuilder<DeSerializersT> {
    return new BenefitsProgramsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPrograms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsPrograms<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitsPrograms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitsPrograms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPrograms,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROGRAM_ID: OrderableEdmTypeField<
      BenefitsPrograms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEDUCTION_WAITING_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPrograms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitsPrograms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsPrograms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COVERAGE_WAITING_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPrograms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsPrograms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsProgramEligibilityRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PROGRAM_ELIGIBILITY_RULE: OneToManyLink<
      BenefitsPrograms<DeSerializersT>,
      DeSerializersT,
      BenefitsProgramEligibilityRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PLAN: OneToManyLink<
      BenefitsPrograms<DeSerializersT>,
      DeSerializersT,
      BenefitsPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPrograms<DeSerializers>>;
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
         * Static representation of the {@link deductionWaitingPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_WAITING_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'DeductionWaitingPeriodId',
          'Edm.String',
          true
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link coverageWaitingPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_WAITING_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'CoverageWaitingPeriodId',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPrograms)
      };
    }

    return this._schema;
  }
}
