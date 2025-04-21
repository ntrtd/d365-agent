/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPayFrequencies } from './BenefitsPayFrequencies';
import { BenefitsPayFrequenciesRequestBuilder } from './BenefitsPayFrequenciesRequestBuilder';
import { BenefitsParametersApi } from './BenefitsParametersApi';
import { BenefitsRatesApi } from './BenefitsRatesApi';
import { BenefitsParametersV2Api } from './BenefitsParametersV2Api';
import { BenefitsPayFrequencyPayPeriodsApi } from './BenefitsPayFrequencyPayPeriodsApi';
import { BenefitPayFrequencyPeriod } from './BenefitPayFrequencyPeriod';
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
export class BenefitsPayFrequenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsPayFrequencies<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPayFrequenciesApi<DeSerializersT> {
    return new BenefitsPayFrequenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER: OneToOneLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_RATE: OneToManyLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2: OneToOneLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPayFrequencyPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY_PAY_PERIOD: OneToManyLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequencyPayPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsParametersApi<DeSerializersT>,
      BenefitsRatesApi<DeSerializersT>,
      BenefitsParametersV2Api<DeSerializersT>,
      BenefitsPayFrequencyPayPeriodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PARAMETER: new OneToOneLink(
        'BenefitsParameter',
        this,
        linkedApis[0]
      ),
      BENEFITS_RATE: new OneToManyLink('BenefitsRate', this, linkedApis[1]),
      BENEFITS_PARAMETER_V_2: new OneToOneLink(
        'BenefitsParameterV2',
        this,
        linkedApis[2]
      ),
      BENEFITS_PAY_FREQUENCY_PAY_PERIOD: new OneToManyLink(
        'BenefitsPayFrequencyPayPeriod',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = BenefitsPayFrequencies;

  requestBuilder(): BenefitsPayFrequenciesRequestBuilder<DeSerializersT> {
    return new BenefitsPayFrequenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPayFrequencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPayFrequencies<DeSerializersT>,
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
    typeof BenefitsPayFrequencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPayFrequencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAY_FREQUENCY_ID: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEEKLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIWEEKLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD: EnumField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      BenefitPayFrequencyPeriod,
      true,
      true
    >;
    NUMBER_OF_PAY_PERIODS: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ANNUAL_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUARTERLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEMI_ANNUAL_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SEMI_MONTHLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DAILY_CONVERSION_FACTOR: OrderableEdmTypeField<
      BenefitsPayFrequencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER: OneToOneLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_RATE: OneToManyLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsRatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsParameterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PARAMETER_V_2: OneToOneLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsParametersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPayFrequencyPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY_PAY_PERIOD: OneToManyLink<
      BenefitsPayFrequencies<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequencyPayPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPayFrequencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link payFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'PayFrequencyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weeklyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEKLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'WeeklyConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link monthlyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'MonthlyConversionFactor',
          'Edm.Decimal',
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
         * Static representation of the {@link biweeklyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIWEEKLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'BiweeklyConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEnumField(
          'Period',
          BenefitPayFrequencyPeriod,
          true
        ),
        /**
         * Static representation of the {@link numberOfPayPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PAY_PERIODS: fieldBuilder.buildEdmTypeField(
          'NumberOfPayPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link annualConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'AnnualConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quarterlyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTERLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'QuarterlyConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link semiAnnualConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEMI_ANNUAL_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'SemiAnnualConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link semiMonthlyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEMI_MONTHLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'SemiMonthlyConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dailyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAILY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'DailyConversionFactor',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPayFrequencies)
      };
    }

    return this._schema;
  }
}
