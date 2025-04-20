/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundNotifications } from './OutboundNotifications';
import { OutboundNotificationsRequestBuilder } from './OutboundNotificationsRequestBuilder';
import { OutboundShipmentNotificationsApi } from './OutboundShipmentNotificationsApi';
import { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
import { WhsOutboundNotificationStatus } from './WhsOutboundNotificationStatus';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OutboundNotificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OutboundNotifications<DeSerializersT>, DeSerializersT>
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
  ): OutboundNotificationsApi<DeSerializersT> {
    return new OutboundNotificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentNotifications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_NOTIFICATIONS: OneToManyLink<
      OutboundNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentNotificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      OutboundNotifications<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OutboundShipmentNotificationsApi<DeSerializersT>,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_NOTIFICATIONS: new OneToManyLink(
        'OutboundShipmentNotifications',
        this,
        linkedApis[0]
      ),
      SOURCE_SYSTEM: new OneToOneLink('SourceSystem', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = OutboundNotifications;

  requestBuilder(): OutboundNotificationsRequestBuilder<DeSerializersT> {
    return new OutboundNotificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OutboundNotifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OutboundNotifications<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundNotifications<DeSerializersT>,
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
    typeof OutboundNotifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundNotifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_NOTIFICATION_NUMBER: OrderableEdmTypeField<
      OutboundNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_NOTIFICATION_STATUS: EnumField<
      OutboundNotifications<DeSerializers>,
      DeSerializersT,
      WhsOutboundNotificationStatus,
      true,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      OutboundNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentNotifications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_NOTIFICATIONS: OneToManyLink<
      OutboundNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentNotificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceSystem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM: OneToOneLink<
      OutboundNotifications<DeSerializersT>,
      DeSerializersT,
      WarehouseIntegrationSourceSystemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundNotifications<DeSerializers>>;
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
         * Static representation of the {@link outboundNotificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_NOTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OutboundNotificationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link outboundNotificationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_NOTIFICATION_STATUS: fieldBuilder.buildEnumField(
          'OutboundNotificationStatus',
          WhsOutboundNotificationStatus,
          true
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundNotifications)
      };
    }

    return this._schema;
  }
}
