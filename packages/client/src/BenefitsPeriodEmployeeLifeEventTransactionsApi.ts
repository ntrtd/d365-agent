/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPeriodEmployeeLifeEventTransactions } from './BenefitsPeriodEmployeeLifeEventTransactions';
import { BenefitsPeriodEmployeeLifeEventTransactionsRequestBuilder } from './BenefitsPeriodEmployeeLifeEventTransactionsRequestBuilder';
import { BenefitsPeriodsApi } from './BenefitsPeriodsApi';
import { WorkersApi } from './WorkersApi';
import { BenefitsLifeEventTypesApi } from './BenefitsLifeEventTypesApi';
import { CompaniesApi } from './CompaniesApi';
import { EventLogType } from './EventLogType';
import { BenefitLifeEventStatus } from './BenefitLifeEventStatus';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
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
export class BenefitsPeriodEmployeeLifeEventTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
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
  ): BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT> {
    return new BenefitsPeriodEmployeeLifeEventTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsLifeEventType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_TYPE: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link company} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPANY: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      CompaniesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsPeriodsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      BenefitsLifeEventTypesApi<DeSerializersT>,
      CompaniesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_PERIOD: new OneToOneLink('BenefitsPeriod', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      BENEFITS_LIFE_EVENT_TYPE: new OneToOneLink(
        'BenefitsLifeEventType',
        this,
        linkedApis[2]
      ),
      COMPANY: new OneToOneLink('Company', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = BenefitsPeriodEmployeeLifeEventTransactions;

  requestBuilder(): BenefitsPeriodEmployeeLifeEventTransactionsRequestBuilder<DeSerializersT> {
    return new BenefitsPeriodEmployeeLifeEventTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
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
    typeof BenefitsPeriodEmployeeLifeEventTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPeriodEmployeeLifeEventTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_TYPE_ID: OrderableEdmTypeField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_DATE: OrderableEdmTypeField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_EVENT_ORIGIN: EnumField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      EventLogType,
      true,
      true
    >;
    STATUS: EnumField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      BenefitLifeEventStatus,
      true,
      true
    >;
    LIFE_EVENT_DATE_TIME: OrderableEdmTypeField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_EVENT_TYPES: EnumField<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      BenefitLifeEventTypes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsLifeEventType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_TYPE: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link company} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPANY: OneToOneLink<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      CompaniesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BenefitsPeriodEmployeeLifeEventTransactions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', false),
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
         * Static representation of the {@link lifeEventTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LifeEventTypeId',
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
         * Static representation of the {@link lifeEventDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_DATE: fieldBuilder.buildEdmTypeField(
          'LifeEventDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lifeEventOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_ORIGIN: fieldBuilder.buildEnumField(
          'LifeEventOrigin',
          EventLogType,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BenefitLifeEventStatus,
          true
        ),
        /**
         * Static representation of the {@link lifeEventDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LifeEventDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lifeEventTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_TYPES: fieldBuilder.buildEnumField(
          'LifeEventTypes',
          BenefitLifeEventTypes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          BenefitsPeriodEmployeeLifeEventTransactions
        )
      };
    }

    return this._schema;
  }
}
