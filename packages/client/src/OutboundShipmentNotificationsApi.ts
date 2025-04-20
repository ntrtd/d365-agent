/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentNotifications } from './OutboundShipmentNotifications';
import { OutboundShipmentNotificationsRequestBuilder } from './OutboundShipmentNotificationsRequestBuilder';
import { OutboundShipmentLineNotificationsApi } from './OutboundShipmentLineNotificationsApi';
import { OutboundNotificationsApi } from './OutboundNotificationsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OutboundShipmentNotificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentNotifications<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentNotificationsApi<DeSerializersT> {
    return new OutboundShipmentNotificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentLineNotifications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_LINE_NOTIFICATIONS: OneToManyLink<
      OutboundShipmentNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentLineNotificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundNotification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_NOTIFICATION: OneToOneLink<
      OutboundShipmentNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundNotificationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OutboundShipmentLineNotificationsApi<DeSerializersT>,
      OutboundNotificationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_LINE_NOTIFICATIONS: new OneToManyLink(
        'OutboundShipmentLineNotifications',
        this,
        linkedApis[0]
      ),
      OUTBOUND_NOTIFICATION: new OneToOneLink(
        'OutboundNotification',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentNotifications;

  requestBuilder(): OutboundShipmentNotificationsRequestBuilder<DeSerializersT> {
    return new OutboundShipmentNotificationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentNotifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentNotifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentNotifications<DeSerializersT>,
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
    typeof OutboundShipmentNotifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentNotifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_NOTIFICATION_NUMBER: OrderableEdmTypeField<
      OutboundShipmentNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_NUMBER: OrderableEdmTypeField<
      OutboundShipmentNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      OutboundShipmentNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentLineNotifications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_LINE_NOTIFICATIONS: OneToManyLink<
      OutboundShipmentNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentLineNotificationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundNotification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_NOTIFICATION: OneToOneLink<
      OutboundShipmentNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundNotificationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentNotifications<DeSerializers>>;
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
         * Static representation of the {@link shipmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentNotifications)
      };
    }

    return this._schema;
  }
}
