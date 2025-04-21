/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageItemsLogsV2 } from './MessageItemsLogsV2';
import { MessageItemsLogsV2RequestBuilder } from './MessageItemsLogsV2RequestBuilder';
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
export class MessageItemsLogsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MessageItemsLogsV2<DeSerializersT>, DeSerializersT>
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
  ): MessageItemsLogsV2Api<DeSerializersT> {
    return new MessageItemsLogsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MessageItemsLogsV2;

  requestBuilder(): MessageItemsLogsV2RequestBuilder<DeSerializersT> {
    return new MessageItemsLogsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessageItemsLogsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MessageItemsLogsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageItemsLogsV2<DeSerializersT>,
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
    typeof MessageItemsLogsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageItemsLogsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_TYPE_ID: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION_ID: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_D_TIME: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_STATUS_TO: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_ID: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_STATUS_FROM: OrderableEdmTypeField<
      MessageItemsLogsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MessageItemsLogsV2<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link itemTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ItemTypeId',
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
         * Static representation of the {@link createdDTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_D_TIME: fieldBuilder.buildEdmTypeField(
          'CreatedDTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemStatusTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_STATUS_TO: fieldBuilder.buildEdmTypeField(
          'ItemStatusTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_ID: fieldBuilder.buildEdmTypeField(
          'ProcessingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemStatusFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_STATUS_FROM: fieldBuilder.buildEdmTypeField(
          'ItemStatusFrom',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageItemsLogsV2)
      };
    }

    return this._schema;
  }
}
