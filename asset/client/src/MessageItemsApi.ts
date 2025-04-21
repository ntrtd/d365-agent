/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageItems } from './MessageItems';
import { MessageItemsRequestBuilder } from './MessageItemsRequestBuilder';
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
export class MessageItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MessageItems<DeSerializersT>, DeSerializersT>
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
  ): MessageItemsApi<DeSerializersT> {
    return new MessageItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MessageItems;

  requestBuilder(): MessageItemsRequestBuilder<DeSerializersT> {
    return new MessageItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessageItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MessageItems<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MessageItems<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MessageItems, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(MessageItems, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_TYPE: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESSING_ID: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_STATUS: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DATE: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_DATE_TIME: OrderableEdmTypeField<
      MessageItems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<MessageItems<DeSerializers>>;
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
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEdmTypeField(
          'ItemType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link processingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_ID: fieldBuilder.buildEdmTypeField(
          'ProcessingId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_STATUS: fieldBuilder.buildEdmTypeField(
          'ItemStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DATE: fieldBuilder.buildEdmTypeField(
          'ItemDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'TransDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageItems)
      };
    }

    return this._schema;
  }
}
