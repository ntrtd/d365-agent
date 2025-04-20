/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SystemNotifications } from './SystemNotifications';
import { SystemNotificationsRequestBuilder } from './SystemNotificationsRequestBuilder';
import { SystemNotificationType } from './SystemNotificationType';
import { SystemNotificationSeverity } from './SystemNotificationSeverity';
import { SystemNotificationState } from './SystemNotificationState';
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
export class SystemNotificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SystemNotifications<DeSerializersT>, DeSerializersT>
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
  ): SystemNotificationsApi<DeSerializersT> {
    return new SystemNotificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SystemNotifications;

  requestBuilder(): SystemNotificationsRequestBuilder<DeSerializersT> {
    return new SystemNotificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SystemNotifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SystemNotifications<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SystemNotifications<DeSerializersT>,
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
    typeof SystemNotifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SystemNotifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RULE_ID: OrderableEdmTypeField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYSTEM_NOTIFICATION_ID: OrderableEdmTypeField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE_TIME: OrderableEdmTypeField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REMINDER_INTERVAL: OrderableEdmTypeField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MESSAGE: OrderableEdmTypeField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      SystemNotificationType,
      true,
      true
    >;
    SEVERITY: EnumField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      SystemNotificationSeverity,
      true,
      true
    >;
    SEQUENCE_ID: OrderableEdmTypeField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATE: EnumField<
      SystemNotifications<DeSerializers>,
      DeSerializersT,
      SystemNotificationState,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SystemNotifications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_ID: fieldBuilder.buildEdmTypeField('RuleId', 'Edm.String', false),
        /**
         * Static representation of the {@link systemNotificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_NOTIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'SystemNotificationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link expirationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ExpirationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reminderInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMINDER_INTERVAL: fieldBuilder.buildEdmTypeField(
          'ReminderInterval',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link message} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE: fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', SystemNotificationType, true),
        /**
         * Static representation of the {@link severity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEVERITY: fieldBuilder.buildEnumField(
          'Severity',
          SystemNotificationSeverity,
          true
        ),
        /**
         * Static representation of the {@link sequenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_ID: fieldBuilder.buildEdmTypeField(
          'SequenceId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEnumField(
          'State',
          SystemNotificationState,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SystemNotifications)
      };
    }

    return this._schema;
  }
}
