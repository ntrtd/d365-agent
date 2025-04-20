/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationProcessEvents } from './CompensationProcessEvents';
import { CompensationProcessEventsRequestBuilder } from './CompensationProcessEventsRequestBuilder';
import { CompensationEventsApi } from './CompensationEventsApi';
import { HrmCompProcessType } from './HrmCompProcessType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationProcessEventsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CompensationProcessEvents<DeSerializersT>, DeSerializersT>
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
  ): CompensationProcessEventsApi<DeSerializersT> {
    return new CompensationProcessEventsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_EVENT: OneToManyLink<
      CompensationProcessEvents<DeSerializersT>,
      DeSerializersT,
      CompensationEventsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CompensationEventsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_EVENT: new OneToManyLink(
        'CompensationEvent',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CompensationProcessEvents;

  requestBuilder(): CompensationProcessEventsRequestBuilder<DeSerializersT> {
    return new CompensationProcessEventsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationProcessEvents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationProcessEvents<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationProcessEvents<DeSerializersT>,
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
    typeof CompensationProcessEvents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationProcessEvents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CYCLE_START: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      HrmCompProcessType,
      true,
      true
    >;
    TRANSACTION_ACTIVE_DATE: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVIEW_DEADLINE: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POINT_IN_TIME_DATE: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CYCLE_END: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIXED_PAY_PRO_RATED_HIRE_DATE: OrderableEdmTypeField<
      CompensationProcessEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_EVENT: OneToManyLink<
      CompensationProcessEvents<DeSerializersT>,
      DeSerializersT,
      CompensationEventsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationProcessEvents<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', false),
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
         * Static representation of the {@link cycleStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_START: fieldBuilder.buildEdmTypeField(
          'CycleStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TYPE: fieldBuilder.buildEnumField(
          'ProcessType',
          HrmCompProcessType,
          true
        ),
        /**
         * Static representation of the {@link transactionActiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ACTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionActiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reviewDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEW_DEADLINE: fieldBuilder.buildEdmTypeField(
          'ReviewDeadline',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link pointInTimeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POINT_IN_TIME_DATE: fieldBuilder.buildEdmTypeField(
          'PointInTimeDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link cycleEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_END: fieldBuilder.buildEdmTypeField(
          'CycleEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fixedPayProRatedHireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PAY_PRO_RATED_HIRE_DATE: fieldBuilder.buildEdmTypeField(
          'FixedPayProRatedHireDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationProcessEvents)
      };
    }

    return this._schema;
  }
}
