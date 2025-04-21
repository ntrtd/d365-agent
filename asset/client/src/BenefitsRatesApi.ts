/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsRates } from './BenefitsRates';
import { BenefitsRatesRequestBuilder } from './BenefitsRatesRequestBuilder';
import { BenefitsPayFrequenciesApi } from './BenefitsPayFrequenciesApi';
import { BenefitsRateTiersApi } from './BenefitsRateTiersApi';
import { BenefitRateRounding } from './BenefitRateRounding';
import { NoYes } from './NoYes';
import { BenefitRateTier } from './BenefitRateTier';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsRatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsRates<DeSerializersT>, DeSerializersT>
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
  ): BenefitsRatesApi<DeSerializersT> {
    return new BenefitsRatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPayFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY: OneToOneLink<
      BenefitsRates<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      BenefitsRates<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPayFrequenciesApi<DeSerializersT>,
      BenefitsRateTiersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PAY_FREQUENCY: new OneToOneLink(
        'BenefitsPayFrequency',
        this,
        linkedApis[0]
      ),
      BENEFIT_RATE_TIERS: new OneToManyLink(
        'BenefitRateTiers',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsRates;

  requestBuilder(): BenefitsRatesRequestBuilder<DeSerializersT> {
    return new BenefitsRatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsRates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsRates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitsRates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BenefitsRates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BenefitsRates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RATE_ID: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SMOKER_EMPLOYEE_AMOUNT: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_FREQUENCY_RATE_ROUNDING: EnumField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      BenefitRateRounding,
      true,
      true
    >;
    FLEX_CREDIT_RATE: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NON_SMOKER_EMPLOYER_AMOUNT: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NON_SMOKER_EMPLOYEE_AMOUNT: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATE_CHANGE_COMPLETED: EnumField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_TIERS: EnumField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      BenefitRateTier,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMOKER_EMPLOYER_AMOUNT: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADMINISTRATIVE_AMOUNT: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_FREQUENCY_ID: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE_EFFECTIVE_DATE: OrderableEdmTypeField<
      BenefitsRates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPayFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY: OneToOneLink<
      BenefitsRates<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      BenefitsRates<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsRates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link rateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_ID: fieldBuilder.buildEdmTypeField('RateId', 'Edm.String', false),
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link smokerEmployeeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMOKER_EMPLOYEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SmokerEmployeeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payFrequencyRateRounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY_RATE_ROUNDING: fieldBuilder.buildEnumField(
          'PayFrequencyRateRounding',
          BenefitRateRounding,
          true
        ),
        /**
         * Static representation of the {@link flexCreditRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLEX_CREDIT_RATE: fieldBuilder.buildEdmTypeField(
          'FlexCreditRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nonSmokerEmployerAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_SMOKER_EMPLOYER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NonSmokerEmployerAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nonSmokerEmployeeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_SMOKER_EMPLOYEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NonSmokerEmployeeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rateChangeCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_CHANGE_COMPLETED: fieldBuilder.buildEnumField(
          'RateChangeCompleted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useTiers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TIERS: fieldBuilder.buildEnumField(
          'UseTiers',
          BenefitRateTier,
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
         * Static representation of the {@link smokerEmployerAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMOKER_EMPLOYER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SmokerEmployerAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link administrativeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMINISTRATIVE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AdministrativeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'PayFrequencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changeEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'ChangeEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsRates)
      };
    }

    return this._schema;
  }
}
