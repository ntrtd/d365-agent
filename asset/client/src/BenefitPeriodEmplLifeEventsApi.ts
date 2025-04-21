/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitPeriodEmplLifeEvents } from './BenefitPeriodEmplLifeEvents';
import { BenefitPeriodEmplLifeEventsRequestBuilder } from './BenefitPeriodEmplLifeEventsRequestBuilder';
import { BenefitsPeriodsApi } from './BenefitsPeriodsApi';
import { CompaniesApi } from './CompaniesApi';
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
export class BenefitPeriodEmplLifeEventsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BenefitPeriodEmplLifeEvents<DeSerializersT>, DeSerializersT>
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
  ): BenefitPeriodEmplLifeEventsApi<DeSerializersT> {
    return new BenefitPeriodEmplLifeEventsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD: OneToOneLink<
      BenefitPeriodEmplLifeEvents<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link company} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPANY: OneToOneLink<
      BenefitPeriodEmplLifeEvents<DeSerializersT>,
      DeSerializersT,
      CompaniesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPeriodsApi<DeSerializersT>,
      CompaniesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PERIOD: new OneToOneLink('BenefitsPeriod', this, linkedApis[0]),
      COMPANY: new OneToOneLink('Company', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BenefitPeriodEmplLifeEvents;

  requestBuilder(): BenefitPeriodEmplLifeEventsRequestBuilder<DeSerializersT> {
    return new BenefitPeriodEmplLifeEventsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitPeriodEmplLifeEvents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitPeriodEmplLifeEvents<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitPeriodEmplLifeEvents<DeSerializersT>,
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
    typeof BenefitPeriodEmplLifeEvents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitPeriodEmplLifeEvents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERIOD_ID: OrderableEdmTypeField<
      BenefitPeriodEmplLifeEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitPeriodEmplLifeEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitPeriodEmplLifeEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_DATE: OrderableEdmTypeField<
      BenefitPeriodEmplLifeEvents<DeSerializers>,
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
      BenefitPeriodEmplLifeEvents<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link company} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPANY: OneToOneLink<
      BenefitPeriodEmplLifeEvents<DeSerializersT>,
      DeSerializersT,
      CompaniesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitPeriodEmplLifeEvents<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
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
        ALL_FIELDS: new AllFields('*', BenefitPeriodEmplLifeEvents)
      };
    }

    return this._schema;
  }
}
