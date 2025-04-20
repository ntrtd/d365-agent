/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitCalculationRateDetails } from './BenefitCalculationRateDetails';
import { BenefitCalculationRateDetailsRequestBuilder } from './BenefitCalculationRateDetailsRequestBuilder';
import { BenefitCalculationRatesApi } from './BenefitCalculationRatesApi';
import { PayrollContributionMethod } from './PayrollContributionMethod';
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
export class BenefitCalculationRateDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitCalculationRateDetails<DeSerializersT>, DeSerializersT>
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
  ): BenefitCalculationRateDetailsApi<DeSerializersT> {
    return new BenefitCalculationRateDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitCalculationRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_CALCULATION_RATE: OneToOneLink<
      BenefitCalculationRateDetails<DeSerializersT>,
      DeSerializersT,
      BenefitCalculationRatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BenefitCalculationRatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_CALCULATION_RATE: new OneToOneLink(
        'BenefitCalculationRate',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BenefitCalculationRateDetails;

  requestBuilder(): BenefitCalculationRateDetailsRequestBuilder<DeSerializersT> {
    return new BenefitCalculationRateDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitCalculationRateDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitCalculationRateDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitCalculationRateDetails<DeSerializersT>,
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
    typeof BenefitCalculationRateDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitCalculationRateDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BenefitCalculationRateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      BenefitCalculationRateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      BenefitCalculationRateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_DEDUCTION: OrderableEdmTypeField<
      BenefitCalculationRateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRIBUTION_METHOD: EnumField<
      BenefitCalculationRateDetails<DeSerializers>,
      DeSerializersT,
      PayrollContributionMethod,
      true,
      true
    >;
    EMPLOYER_CONTRIBUTION: OrderableEdmTypeField<
      BenefitCalculationRateDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitCalculationRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_CALCULATION_RATE: OneToOneLink<
      BenefitCalculationRateDetails<DeSerializersT>,
      DeSerializersT,
      BenefitCalculationRatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitCalculationRateDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerDeduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_DEDUCTION: fieldBuilder.buildEdmTypeField(
          'WorkerDeduction',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contributionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRIBUTION_METHOD: fieldBuilder.buildEnumField(
          'ContributionMethod',
          PayrollContributionMethod,
          true
        ),
        /**
         * Static representation of the {@link employerContribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_CONTRIBUTION: fieldBuilder.buildEdmTypeField(
          'EmployerContribution',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitCalculationRateDetails)
      };
    }

    return this._schema;
  }
}
