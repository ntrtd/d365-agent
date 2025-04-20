/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationEvents } from './CompensationEvents';
import { CompensationEventsRequestBuilder } from './CompensationEventsRequestBuilder';
import { CompensationProcessEventsApi } from './CompensationProcessEventsApi';
import { NoYes } from './NoYes';
import { HrmCompEventErrorStatus } from './HrmCompEventErrorStatus';
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
export class CompensationEventsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompensationEvents<DeSerializersT>, DeSerializersT>
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
  ): CompensationEventsApi<DeSerializersT> {
    return new CompensationEventsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compensationProcessEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PROCESS_EVENT: OneToOneLink<
      CompensationEvents<DeSerializersT>,
      DeSerializersT,
      CompensationProcessEventsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CompensationProcessEventsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_PROCESS_EVENT: new OneToOneLink(
        'CompensationProcessEvent',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CompensationEvents;

  requestBuilder(): CompensationEventsRequestBuilder<DeSerializersT> {
    return new CompensationEventsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationEvents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompensationEvents<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationEvents<DeSerializersT>,
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
    typeof CompensationEvents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationEvents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EVENT_ID: OrderableEdmTypeField<
      CompensationEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCKED: EnumField<
      CompensationEvents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCESS_ID: OrderableEdmTypeField<
      CompensationEvents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_DATE: OrderableEdmTypeField<
      CompensationEvents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ERROR_STATUS: EnumField<
      CompensationEvents<DeSerializers>,
      DeSerializersT,
      HrmCompEventErrorStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationProcessEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PROCESS_EVENT: OneToOneLink<
      CompensationEvents<DeSerializersT>,
      DeSerializersT,
      CompensationProcessEventsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationEvents<DeSerializers>>;
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
         * Static representation of the {@link eventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_ID: fieldBuilder.buildEdmTypeField(
          'EventId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link locked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED: fieldBuilder.buildEnumField('Locked', NoYes, true),
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_DATE: fieldBuilder.buildEdmTypeField(
          'LoadDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link errorStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_STATUS: fieldBuilder.buildEnumField(
          'ErrorStatus',
          HrmCompEventErrorStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationEvents)
      };
    }

    return this._schema;
  }
}
