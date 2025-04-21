/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessagesLogs } from './MessagesLogs';
import { MessagesLogsRequestBuilder } from './MessagesLogsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class MessagesLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MessagesLogs<DeSerializersT>, DeSerializersT>
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
  ): MessagesLogsApi<DeSerializersT> {
    return new MessagesLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MessagesLogs;

  requestBuilder(): MessagesLogsRequestBuilder<DeSerializersT> {
    return new MessagesLogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessagesLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MessagesLogs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MessagesLogs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MessagesLogs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(MessagesLogs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MessagesLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      MessagesLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION_ID: OrderableEdmTypeField<
      MessagesLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_STATUS_ID_TO: OrderableEdmTypeField<
      MessagesLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_CODE: OrderableEdmTypeField<
      MessagesLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_DESCRIPTION: OrderableEdmTypeField<
      MessagesLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_STATUS_ID_FROM: OrderableEdmTypeField<
      MessagesLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MessagesLogs<DeSerializers>>;
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
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link actionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_ID: fieldBuilder.buildEdmTypeField(
          'ActionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link messageStatusIdTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_STATUS_ID_TO: fieldBuilder.buildEdmTypeField(
          'MessageStatusIdTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_CODE: fieldBuilder.buildEdmTypeField(
          'ProcessingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProcessingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageStatusIdFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_STATUS_ID_FROM: fieldBuilder.buildEdmTypeField(
          'MessageStatusIdFrom',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessagesLogs)
      };
    }

    return this._schema;
  }
}
