/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitPeriodEmplGroupLifeEvents } from './BenefitPeriodEmplGroupLifeEvents';
import { BenefitPeriodEmplGroupLifeEventsRequestBuilder } from './BenefitPeriodEmplGroupLifeEventsRequestBuilder';
import { BenefitsPeriodsApi } from './BenefitsPeriodsApi';
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
export class BenefitPeriodEmplGroupLifeEventsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitPeriodEmplGroupLifeEvents<DeSerializersT>, DeSerializersT>
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
  ): BenefitPeriodEmplGroupLifeEventsApi<DeSerializersT> {
    return new BenefitPeriodEmplGroupLifeEventsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD: OneToOneLink<
      BenefitPeriodEmplGroupLifeEvents<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BenefitsPeriodsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PERIOD: new OneToOneLink('BenefitsPeriod', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BenefitPeriodEmplGroupLifeEvents;

  requestBuilder(): BenefitPeriodEmplGroupLifeEventsRequestBuilder<DeSerializersT> {
    return new BenefitPeriodEmplGroupLifeEventsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitPeriodEmplGroupLifeEvents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitPeriodEmplGroupLifeEvents<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitPeriodEmplGroupLifeEvents<DeSerializersT>,
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
    typeof BenefitPeriodEmplGroupLifeEvents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitPeriodEmplGroupLifeEvents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERIOD_ID: OrderableEdmTypeField<
      BenefitPeriodEmplGroupLifeEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_DATE: OrderableEdmTypeField<
      BenefitPeriodEmplGroupLifeEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD: OneToOneLink<
      BenefitPeriodEmplGroupLifeEvents<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitPeriodEmplGroupLifeEvents<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lifeEventDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_DATE: fieldBuilder.buildEdmTypeField(
          'LifeEventDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitPeriodEmplGroupLifeEvents)
      };
    }

    return this._schema;
  }
}
