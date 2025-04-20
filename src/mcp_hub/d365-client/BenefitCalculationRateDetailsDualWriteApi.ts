/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitCalculationRateDetailsDualWrite } from './BenefitCalculationRateDetailsDualWrite';
import { BenefitCalculationRateDetailsDualWriteRequestBuilder } from './BenefitCalculationRateDetailsDualWriteRequestBuilder';
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
export class BenefitCalculationRateDetailsDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitCalculationRateDetailsDualWrite<DeSerializersT>,
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
  ): BenefitCalculationRateDetailsDualWriteApi<DeSerializersT> {
    return new BenefitCalculationRateDetailsDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitCalculationRate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_CALCULATION_RATE: OneToOneLink<
      BenefitCalculationRateDetailsDualWrite<DeSerializersT>,
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

  entityConstructor = BenefitCalculationRateDetailsDualWrite;

  requestBuilder(): BenefitCalculationRateDetailsDualWriteRequestBuilder<DeSerializersT> {
    return new BenefitCalculationRateDetailsDualWriteRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitCalculationRateDetailsDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitCalculationRateDetailsDualWrite<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitCalculationRateDetailsDualWrite<DeSerializersT>,
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
    typeof BenefitCalculationRateDetailsDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitCalculationRateDetailsDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BenefitCalculationRateDetailsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      BenefitCalculationRateDetailsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_DEDUCTION: OrderableEdmTypeField<
      BenefitCalculationRateDetailsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRIBUTION_METHOD: EnumField<
      BenefitCalculationRateDetailsDualWrite<DeSerializers>,
      DeSerializersT,
      PayrollContributionMethod,
      true,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      BenefitCalculationRateDetailsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYER_CONTRIBUTION: OrderableEdmTypeField<
      BenefitCalculationRateDetailsDualWrite<DeSerializers>,
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
      BenefitCalculationRateDetailsDualWrite<DeSerializersT>,
      DeSerializersT,
      BenefitCalculationRatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BenefitCalculationRateDetailsDualWrite<DeSerializers>
    >;
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
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
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
        ALL_FIELDS: new AllFields('*', BenefitCalculationRateDetailsDualWrite)
      };
    }

    return this._schema;
  }
}
