/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransportationAppointmentDriverLogs } from './TransportationAppointmentDriverLogs';
import { TransportationAppointmentDriverLogsRequestBuilder } from './TransportationAppointmentDriverLogsRequestBuilder';
import { NoYes } from './NoYes';
import { TmsAppointmentAlert } from './TmsAppointmentAlert';
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
export class TransportationAppointmentDriverLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransportationAppointmentDriverLogs<DeSerializersT>,
      DeSerializersT
    >
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
  ): TransportationAppointmentDriverLogsApi<DeSerializersT> {
    return new TransportationAppointmentDriverLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransportationAppointmentDriverLogs;

  requestBuilder(): TransportationAppointmentDriverLogsRequestBuilder<DeSerializersT> {
    return new TransportationAppointmentDriverLogsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransportationAppointmentDriverLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransportationAppointmentDriverLogs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransportationAppointmentDriverLogs<DeSerializersT>,
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
    typeof TransportationAppointmentDriverLogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransportationAppointmentDriverLogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPOINTMENT_ID: OrderableEdmTypeField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DROP_TRAILER_ALLOWED: EnumField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTUAL_APPOINTMENT_END_DATE_TIME: OrderableEdmTypeField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DRIVER_LICENSE: OrderableEdmTypeField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_APPOINTMENT_ALERT_RULE: EnumField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      TmsAppointmentAlert,
      true,
      true
    >;
    ACTUAL_APPOINTMENT_START_DATE_TIME: OrderableEdmTypeField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DRIVER_NAME: OrderableEdmTypeField<
      TransportationAppointmentDriverLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TransportationAppointmentDriverLogs<DeSerializers>>;
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
         * Static representation of the {@link appointmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_ID: fieldBuilder.buildEdmTypeField(
          'AppointmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingCarrierVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDropTrailerAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DROP_TRAILER_ALLOWED: fieldBuilder.buildEnumField(
          'IsDropTrailerAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link actualAppointmentEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_APPOINTMENT_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActualAppointmentEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link driverLicense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_LICENSE: fieldBuilder.buildEdmTypeField(
          'DriverLicense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationAppointmentAlertRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_APPOINTMENT_ALERT_RULE: fieldBuilder.buildEnumField(
          'TransportationAppointmentAlertRule',
          TmsAppointmentAlert,
          true
        ),
        /**
         * Static representation of the {@link actualAppointmentStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_APPOINTMENT_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ActualAppointmentStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link driverName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_NAME: fieldBuilder.buildEdmTypeField(
          'DriverName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransportationAppointmentDriverLogs)
      };
    }

    return this._schema;
  }
}
