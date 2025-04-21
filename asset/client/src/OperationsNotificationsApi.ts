/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OperationsNotifications } from './OperationsNotifications';
import { OperationsNotificationsRequestBuilder } from './OperationsNotificationsRequestBuilder';
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
export class OperationsNotificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OperationsNotifications<DeSerializersT>, DeSerializersT>
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
  ): OperationsNotificationsApi<DeSerializersT> {
    return new OperationsNotificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OperationsNotifications;

  requestBuilder(): OperationsNotificationsRequestBuilder<DeSerializersT> {
    return new OperationsNotificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OperationsNotifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OperationsNotifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OperationsNotifications<DeSerializersT>,
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
    typeof OperationsNotifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OperationsNotifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      OperationsNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    NOTIFICATION_RAISED_DATE_TIME: OrderableEdmTypeField<
      OperationsNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYLOAD: OrderableEdmTypeField<
      OperationsNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      OperationsNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<OperationsNotifications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link notificationRaisedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_RAISED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'NotificationRaisedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payload} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYLOAD: fieldBuilder.buildEdmTypeField('Payload', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OperationsNotifications)
      };
    }

    return this._schema;
  }
}
