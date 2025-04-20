/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicMessages } from './ElectronicMessages';
import { ElectronicMessagesRequestBuilder } from './ElectronicMessagesRequestBuilder';
import { MessagesAdditionalFieldsApi } from './MessagesAdditionalFieldsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ElectronicMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ElectronicMessages<DeSerializersT>, DeSerializersT>
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
  ): ElectronicMessagesApi<DeSerializersT> {
    return new ElectronicMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link messagesAdditionalFields} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGES_ADDITIONAL_FIELDS: OneToManyLink<
      ElectronicMessages<DeSerializersT>,
      DeSerializersT,
      MessagesAdditionalFieldsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MessagesAdditionalFieldsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      MESSAGES_ADDITIONAL_FIELDS: new OneToManyLink(
        'MessagesAdditionalFields',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ElectronicMessages;

  requestBuilder(): ElectronicMessagesRequestBuilder<DeSerializersT> {
    return new ElectronicMessagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ElectronicMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ElectronicMessages<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicMessages<DeSerializersT>,
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
    typeof ElectronicMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ElectronicMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      ElectronicMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      ElectronicMessages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESSING_ID: OrderableEdmTypeField<
      ElectronicMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_STATUS_ID: OrderableEdmTypeField<
      ElectronicMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      ElectronicMessages<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link messagesAdditionalFields} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGES_ADDITIONAL_FIELDS: OneToManyLink<
      ElectronicMessages<DeSerializersT>,
      DeSerializersT,
      MessagesAdditionalFieldsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ElectronicMessages<DeSerializers>>;
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
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link messageStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'MessageStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ElectronicMessages)
      };
    }

    return this._schema;
  }
}
