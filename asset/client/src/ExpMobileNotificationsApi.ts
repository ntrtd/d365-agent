/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileNotifications } from './ExpMobileNotifications';
import { ExpMobileNotificationsRequestBuilder } from './ExpMobileNotificationsRequestBuilder';
import { NoYes } from './NoYes';
import { TrvExpMobileNotificationEventType } from './TrvExpMobileNotificationEventType';
import { TrvExpMobileNotificationType } from './TrvExpMobileNotificationType';
import { TrvDocumentType } from './TrvDocumentType';
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
export class ExpMobileNotificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileNotifications<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileNotificationsApi<DeSerializersT> {
    return new ExpMobileNotificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileNotifications;

  requestBuilder(): ExpMobileNotificationsRequestBuilder<DeSerializersT> {
    return new ExpMobileNotificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileNotifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileNotifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileNotifications<DeSerializersT>,
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
    typeof ExpMobileNotifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileNotifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENT_REC_ID: OrderableEdmTypeField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MARKED_READ: EnumField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOTIFICATION_LINE_1: OrderableEdmTypeField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_TYPE: EnumField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      TrvExpMobileNotificationEventType,
      true,
      true
    >;
    EVENT_TIME_STAMP: OrderableEdmTypeField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTIFIED_EMAIL_ID: OrderableEdmTypeField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_DATA_AREA_ID: OrderableEdmTypeField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTIFICATION_TYPE: EnumField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      TrvExpMobileNotificationType,
      true,
      true
    >;
    EXP_NUMBER: OrderableEdmTypeField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: EnumField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      TrvDocumentType,
      true,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobileNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileNotifications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link entRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'EntRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link markedRead} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKED_READ: fieldBuilder.buildEnumField('MarkedRead', NoYes, true),
        /**
         * Static representation of the {@link notificationLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_LINE_1: fieldBuilder.buildEdmTypeField(
          'NotificationLine1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_TYPE: fieldBuilder.buildEnumField(
          'EventType',
          TrvExpMobileNotificationEventType,
          true
        ),
        /**
         * Static representation of the {@link eventTimeStamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_TIME_STAMP: fieldBuilder.buildEdmTypeField(
          'EventTimeStamp',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link notifiedEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFIED_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'NotifiedEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link notificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_TYPE: fieldBuilder.buildEnumField(
          'NotificationType',
          TrvExpMobileNotificationType,
          true
        ),
        /**
         * Static representation of the {@link expNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'DocumentType',
          TrvDocumentType,
          true
        ),
        /**
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileNotifications)
      };
    }

    return this._schema;
  }
}
