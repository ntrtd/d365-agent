/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessagesAdditionalFields } from './MessagesAdditionalFields';
import { MessagesAdditionalFieldsRequestBuilder } from './MessagesAdditionalFieldsRequestBuilder';
import { ElectronicMessagesApi } from './ElectronicMessagesApi';
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
export class MessagesAdditionalFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MessagesAdditionalFields<DeSerializersT>, DeSerializersT>
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
  ): MessagesAdditionalFieldsApi<DeSerializersT> {
    return new MessagesAdditionalFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link electronicMessages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_MESSAGES: OneToOneLink<
      MessagesAdditionalFields<DeSerializersT>,
      DeSerializersT,
      ElectronicMessagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ElectronicMessagesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ELECTRONIC_MESSAGES: new OneToOneLink(
        'ElectronicMessages',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = MessagesAdditionalFields;

  requestBuilder(): MessagesAdditionalFieldsRequestBuilder<DeSerializersT> {
    return new MessagesAdditionalFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessagesAdditionalFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessagesAdditionalFields<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessagesAdditionalFields<DeSerializersT>,
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
    typeof MessagesAdditionalFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessagesAdditionalFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MessagesAdditionalFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      MessagesAdditionalFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDITIONAL_FIELD_ID: OrderableEdmTypeField<
      MessagesAdditionalFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDITIONAL_FIELD_VALUE: OrderableEdmTypeField<
      MessagesAdditionalFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link electronicMessages} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ELECTRONIC_MESSAGES: OneToOneLink<
      MessagesAdditionalFields<DeSerializersT>,
      DeSerializersT,
      ElectronicMessagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessagesAdditionalFields<DeSerializers>>;
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
         * Static representation of the {@link additionalFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'AdditionalFieldId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link additionalFieldValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_FIELD_VALUE: fieldBuilder.buildEdmTypeField(
          'AdditionalFieldValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessagesAdditionalFields)
      };
    }

    return this._schema;
  }
}
