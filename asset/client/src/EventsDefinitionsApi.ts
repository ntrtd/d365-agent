/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EventsDefinitions } from './EventsDefinitions';
import { EventsDefinitionsRequestBuilder } from './EventsDefinitionsRequestBuilder';
import { BusinessEventsDirection } from './BusinessEventsDirection';
import { BusinessEventsDefinitionCoreTable } from './BusinessEventsDefinitionCoreTable';
import { NoYes } from './NoYes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class EventsDefinitionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EventsDefinitions<DeSerializersT>, DeSerializersT>
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
  ): EventsDefinitionsApi<DeSerializersT> {
    return new EventsDefinitionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EventsDefinitions;

  requestBuilder(): EventsDefinitionsRequestBuilder<DeSerializersT> {
    return new EventsDefinitionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EventsDefinitions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EventsDefinitions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EventsDefinitions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EventsDefinitions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EventsDefinitions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REF_ENTITY_NAME: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DATA_SOURCE_NAME: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHANNEL: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIRECTION: EnumField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      BusinessEventsDirection,
      true,
      true
    >;
    LEGAL_ENTITY_SPECIFIC: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORE_TABLE: EnumField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      BusinessEventsDefinitionCoreTable,
      true,
      true
    >;
    REF_TABLE_RECVERSION_FIELD: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROOT_TABLE_ID: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REF_TABLE_NAME: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSOR_CLASS: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALIDATE: EnumField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HANDLER_CLASS: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLED: EnumField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REF_TABLE_REC_ID_FIELD: OrderableEdmTypeField<
      EventsDefinitions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<EventsDefinitions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link refEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'RefEntityName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dataSourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'DataSourceName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEdmTypeField('Channel', 'Edm.String', false),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField(
          'Direction',
          BusinessEventsDirection,
          true
        ),
        /**
         * Static representation of the {@link legalEntitySpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_SPECIFIC: fieldBuilder.buildEdmTypeField(
          'LegalEntitySpecific',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.Int32', false),
        /**
         * Static representation of the {@link coreTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORE_TABLE: fieldBuilder.buildEnumField(
          'CoreTable',
          BusinessEventsDefinitionCoreTable,
          true
        ),
        /**
         * Static representation of the {@link refTableRecversionField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_RECVERSION_FIELD: fieldBuilder.buildEdmTypeField(
          'RefTableRecversionField',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link rootTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RootTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link refTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'RefTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processorClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSOR_CLASS: fieldBuilder.buildEdmTypeField(
          'ProcessorClass',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link validate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE: fieldBuilder.buildEnumField('Validate', NoYes, true),
        /**
         * Static representation of the {@link handlerClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLER_CLASS: fieldBuilder.buildEdmTypeField(
          'HandlerClass',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLED: fieldBuilder.buildEnumField('Enabled', NoYes, true),
        /**
         * Static representation of the {@link refTableRecIdField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_REC_ID_FIELD: fieldBuilder.buildEdmTypeField(
          'RefTableRecIdField',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EventsDefinitions)
      };
    }

    return this._schema;
  }
}
