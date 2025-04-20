/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitDetails } from './BenefitDetails';
import { BenefitDetailsRequestBuilder } from './BenefitDetailsRequestBuilder';
import { BenefitsApi } from './BenefitsApi';
import { PayrollContributionBasis } from './PayrollContributionBasis';
import { PayrollDeductionBasis } from './PayrollDeductionBasis';
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
export class BenefitDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitDetails<DeSerializersT>, DeSerializersT>
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
  ): BenefitDetailsApi<DeSerializersT> {
    return new BenefitDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      BenefitDetails<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [BenefitsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BenefitDetails;

  requestBuilder(): BenefitDetailsRequestBuilder<DeSerializersT> {
    return new BenefitDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitDetails<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitDetails<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitDetails, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BenefitDetails, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_CONTRIBUTION_BASIS: EnumField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      PayrollContributionBasis,
      true,
      true
    >;
    DEFAULT_DEDUCTION_ACCOUNTING_CURRENCY_AMT: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEDUCTION_CALCULATION_FREQUENCY_ID: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CONTRIBUTION_ACCOUNTING_CURRENCY_AMT: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DEDUCTION_BASIS: EnumField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      PayrollDeductionBasis,
      true,
      true
    >;
    CONTRIBUTION_CALCULATION_RATE_ID: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRIBUTION_CALCULATION_FREQUENCY_ID: OrderableEdmTypeField<
      BenefitDetails<DeSerializers>,
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
      BenefitDetails<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitDetails<DeSerializers>>;
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link defaultContributionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONTRIBUTION_BASIS: fieldBuilder.buildEnumField(
          'DefaultContributionBasis',
          PayrollContributionBasis,
          true
        ),
        /**
         * Static representation of the {@link defaultDeductionAccountingCurrencyAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DEDUCTION_ACCOUNTING_CURRENCY_AMT:
          fieldBuilder.buildEdmTypeField(
            'DefaultDeductionAccountingCurrencyAmt',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link deductionCalculationFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_CALCULATION_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'DeductionCalculationFrequencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultContributionAccountingCurrencyAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONTRIBUTION_ACCOUNTING_CURRENCY_AMT:
          fieldBuilder.buildEdmTypeField(
            'DefaultContributionAccountingCurrencyAmt',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link defaultDeductionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DEDUCTION_BASIS: fieldBuilder.buildEnumField(
          'DefaultDeductionBasis',
          PayrollDeductionBasis,
          true
        ),
        /**
         * Static representation of the {@link contributionCalculationRateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_CALCULATION_RATE_ID: fieldBuilder.buildEdmTypeField(
          'ContributionCalculationRateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contributionCalculationFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_CALCULATION_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'ContributionCalculationFrequencyId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitDetails)
      };
    }

    return this._schema;
  }
}
