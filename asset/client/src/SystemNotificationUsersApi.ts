/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SystemNotificationUsers } from './SystemNotificationUsers';
import { SystemNotificationUsersRequestBuilder } from './SystemNotificationUsersRequestBuilder';
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
export class SystemNotificationUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SystemNotificationUsers<DeSerializersT>, DeSerializersT>
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
  ): SystemNotificationUsersApi<DeSerializersT> {
    return new SystemNotificationUsersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SystemNotificationUsers;

  requestBuilder(): SystemNotificationUsersRequestBuilder<DeSerializersT> {
    return new SystemNotificationUsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SystemNotificationUsers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SystemNotificationUsers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SystemNotificationUsers<DeSerializersT>,
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
    typeof SystemNotificationUsers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SystemNotificationUsers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      SystemNotificationUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISMISSED: EnumField<
      SystemNotificationUsers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_NOTIFICATION_ID: OrderableEdmTypeField<
      SystemNotificationUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SystemNotificationUsers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', false),
        /**
         * Static representation of the {@link dismissed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISMISSED: fieldBuilder.buildEnumField('Dismissed', NoYes, true),
        /**
         * Static representation of the {@link systemNotificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_NOTIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'SystemNotificationId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SystemNotificationUsers)
      };
    }

    return this._schema;
  }
}
