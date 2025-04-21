/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPayFrequencyPayPeriods } from './BenefitsPayFrequencyPayPeriods';
import { BenefitsPayFrequencyPayPeriodsRequestBuilder } from './BenefitsPayFrequencyPayPeriodsRequestBuilder';
import { BenefitsPayFrequenciesApi } from './BenefitsPayFrequenciesApi';
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
export class BenefitsPayFrequencyPayPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitsPayFrequencyPayPeriods<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPayFrequencyPayPeriodsApi<DeSerializersT> {
    return new BenefitsPayFrequencyPayPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPayFrequency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PAY_FREQUENCY: OneToOneLink<
      BenefitsPayFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BenefitsPayFrequenciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PAY_FREQUENCY: new OneToOneLink(
        'BenefitsPayFrequency',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BenefitsPayFrequencyPayPeriods;

  requestBuilder(): BenefitsPayFrequencyPayPeriodsRequestBuilder<DeSerializersT> {
    return new BenefitsPayFrequencyPayPeriodsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPayFrequencyPayPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPayFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPayFrequencyPayPeriods<DeSerializersT>,
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
    typeof BenefitsPayFrequencyPayPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPayFrequencyPayPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAYMENT_FREQUENCY_ID: OrderableEdmTypeField<
      BenefitsPayFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_START_DATE_TIME: OrderableEdmTypeField<
      BenefitsPayFrequencyPayPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD_END_DATE_TIME: OrderableEdmTypeField<
      BenefitsPayFrequencyPayPeriods<DeSerializers>,
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
      BenefitsPayFrequencyPayPeriods<DeSerializersT>,
      DeSerializersT,
      BenefitsPayFrequenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsPayFrequencyPayPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link paymentFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'PaymentFrequencyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PeriodStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link periodEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PeriodEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPayFrequencyPayPeriods)
      };
    }

    return this._schema;
  }
}
