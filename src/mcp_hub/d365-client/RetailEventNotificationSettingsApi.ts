/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEventNotificationSettings } from './RetailEventNotificationSettings';
import { RetailEventNotificationSettingsRequestBuilder } from './RetailEventNotificationSettingsRequestBuilder';
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
export class RetailEventNotificationSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailEventNotificationSettings<DeSerializersT>, DeSerializersT>
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
  ): RetailEventNotificationSettingsApi<DeSerializersT> {
    return new RetailEventNotificationSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEventNotificationSettings;

  requestBuilder(): RetailEventNotificationSettingsRequestBuilder<DeSerializersT> {
    return new RetailEventNotificationSettingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEventNotificationSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEventNotificationSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEventNotificationSettings<DeSerializersT>,
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
    typeof RetailEventNotificationSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEventNotificationSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailEventNotificationSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTIFICATION_TYPE: OrderableEdmTypeField<
      RetailEventNotificationSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_ID: OrderableEdmTypeField<
      RetailEventNotificationSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMAIL_ID: OrderableEdmTypeField<
      RetailEventNotificationSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      RetailEventNotificationSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailEventNotificationSettings<DeSerializers>>;
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
         * Static representation of the {@link notificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_TYPE: fieldBuilder.buildEdmTypeField(
          'NotificationType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link emailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ID: fieldBuilder.buildEdmTypeField('EmailId', 'Edm.String', true),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEventNotificationSettings)
      };
    }

    return this._schema;
  }
}
