/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsEmployeeFutureLifeEventTransactions } from './BenefitsEmployeeFutureLifeEventTransactions';
import { BenefitsEmployeeFutureLifeEventTransactionsRequestBuilder } from './BenefitsEmployeeFutureLifeEventTransactionsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { BenefitsLifeEventTypesApi } from './BenefitsLifeEventTypesApi';
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
export class BenefitsEmployeeFutureLifeEventTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
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
  ): BenefitsEmployeeFutureLifeEventTransactionsApi<DeSerializersT> {
    return new BenefitsEmployeeFutureLifeEventTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsLifeEventType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_TYPE: OneToOneLink<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      BenefitsLifeEventTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      BENEFITS_LIFE_EVENT_TYPE: new OneToOneLink(
        'BenefitsLifeEventType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsEmployeeFutureLifeEventTransactions;

  requestBuilder(): BenefitsEmployeeFutureLifeEventTransactionsRequestBuilder<DeSerializersT> {
    return new BenefitsEmployeeFutureLifeEventTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
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
    typeof BenefitsEmployeeFutureLifeEventTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsEmployeeFutureLifeEventTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LINE_NUM: OrderableEdmTypeField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIFE_EVENT_TYPE_ID: OrderableEdmTypeField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_DATE: OrderableEdmTypeField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_EVENT_ORIGIN: EnumField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      EventLogType,
      true,
      true
    >;
    STATUS: EnumField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      BenefitLifeEventStatus,
      true,
      true
    >;
    LIFE_EVENT_DATE_TIME: OrderableEdmTypeField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIFE_EVENT_TYPES: EnumField<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      BenefitLifeEventTypes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefitsLifeEventType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_TYPE: OneToOneLink<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BenefitsEmployeeFutureLifeEventTransactions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', false),
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
          BenefitsEmployeeFutureLifeEventTransactions
        )
      };
    }

    return this._schema;
  }
}
