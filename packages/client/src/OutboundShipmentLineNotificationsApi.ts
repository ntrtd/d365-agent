/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OutboundShipmentLineNotifications } from './OutboundShipmentLineNotifications';
import { OutboundShipmentLineNotificationsRequestBuilder } from './OutboundShipmentLineNotificationsRequestBuilder';
import { OutboundShipmentNotificationsApi } from './OutboundShipmentNotificationsApi';
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
export class OutboundShipmentLineNotificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OutboundShipmentLineNotifications<DeSerializersT>, DeSerializersT>
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
  ): OutboundShipmentLineNotificationsApi<DeSerializersT> {
    return new OutboundShipmentLineNotificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentNotification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_NOTIFICATION: OneToOneLink<
      OutboundShipmentLineNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentNotificationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OutboundShipmentNotificationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OUTBOUND_SHIPMENT_NOTIFICATION: new OneToOneLink(
        'OutboundShipmentNotification',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = OutboundShipmentLineNotifications;

  requestBuilder(): OutboundShipmentLineNotificationsRequestBuilder<DeSerializersT> {
    return new OutboundShipmentLineNotificationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OutboundShipmentLineNotifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OutboundShipmentLineNotifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OutboundShipmentLineNotifications<DeSerializersT>,
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
    typeof OutboundShipmentLineNotifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OutboundShipmentLineNotifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OutboundShipmentLineNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_NOTIFICATION_NUMBER: OrderableEdmTypeField<
      OutboundShipmentLineNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_NUMBER: OrderableEdmTypeField<
      OutboundShipmentLineNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      OutboundShipmentLineNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      OutboundShipmentLineNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_CREATED_CUMULATIVE_QUANTITY: OrderableEdmTypeField<
      OutboundShipmentLineNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORK_CREATED_QUANTITY_UNIT_OF_MEASURE: OrderableEdmTypeField<
      OutboundShipmentLineNotifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link outboundShipmentNotification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_NOTIFICATION: OneToOneLink<
      OutboundShipmentLineNotifications<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentNotificationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OutboundShipmentLineNotifications<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workCreatedCumulativeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CREATED_CUMULATIVE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'WorkCreatedCumulativeQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workCreatedQuantityUnitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CREATED_QUANTITY_UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'WorkCreatedQuantityUnitOfMeasure',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OutboundShipmentLineNotifications)
      };
    }

    return this._schema;
  }
}
