/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransportationAppointments } from './TransportationAppointments';
import { TransportationAppointmentsRequestBuilder } from './TransportationAppointmentsRequestBuilder';
import { VendorsV2Api } from './VendorsV2Api';
import { CustomersV3Api } from './CustomersV3Api';
import { NoYes } from './NoYes';
import { TmsApptDirection } from './TmsApptDirection';
import { TmsApptStatus } from './TmsApptStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TransportationAppointmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TransportationAppointments<DeSerializersT>, DeSerializersT>
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
  ): TransportationAppointmentsApi<DeSerializersT> {
    return new TransportationAppointmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      TransportationAppointments<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      TransportationAppointments<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendorsV2Api<DeSerializersT>, CustomersV3Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VENDOR: new OneToOneLink('Vendor', this, linkedApis[0]),
      CUSTOMER: new OneToOneLink('Customer', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = TransportationAppointments;

  requestBuilder(): TransportationAppointmentsRequestBuilder<DeSerializersT> {
    return new TransportationAppointmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransportationAppointments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransportationAppointments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransportationAppointments<DeSerializersT>,
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
    typeof TransportationAppointments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransportationAppointments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPOINTMENT_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_CONTAINER_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACTOR_NUMBER: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CUSTOMER_PICKUP_ALLOWED: EnumField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLANNED_START_DATE_TIME: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_MOVEMENT_DIRECTION_RULE: EnumField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      TmsApptDirection,
      true,
      true
    >;
    APPOINTMENT_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAILER_NUMBER: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_APPOINTMENT_RULE_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_END_DATE_TIME: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSPORTATION_BROKER_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_NOTE: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_STATUS: EnumField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      TmsApptStatus,
      true,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_CARRIER_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_WAREHOUSE_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_NAME: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_SITE_ID: OrderableEdmTypeField<
      TransportationAppointments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      TransportationAppointments<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER: OneToOneLink<
      TransportationAppointments<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransportationAppointments<DeSerializers>>;
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
         * Static representation of the {@link shippingContainerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingContainerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tractorNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACTOR_NUMBER: fieldBuilder.buildEdmTypeField(
          'TractorNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCustomerPickupAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER_PICKUP_ALLOWED: fieldBuilder.buildEnumField(
          'IsCustomerPickupAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link plannedStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PlannedStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productMovementDirectionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MOVEMENT_DIRECTION_RULE: fieldBuilder.buildEnumField(
          'ProductMovementDirectionRule',
          TmsApptDirection,
          true
        ),
        /**
         * Static representation of the {@link appointmentWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AppointmentWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trailerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrailerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationAppointmentRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_APPOINTMENT_RULE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationAppointmentRuleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedEndDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PlannedEndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transportationBrokerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BROKER_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBrokerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link appointmentNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_NOTE: fieldBuilder.buildEdmTypeField(
          'AppointmentNote',
          'Edm.String',
          true
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
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link appointmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_STATUS: fieldBuilder.buildEnumField(
          'AppointmentStatus',
          TmsApptStatus,
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
        /**
         * Static representation of the {@link transportationCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'TransportationCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link appointmentWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'AppointmentWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link appointmentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_NAME: fieldBuilder.buildEdmTypeField(
          'AppointmentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link appointmentSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'AppointmentSiteId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransportationAppointments)
      };
    }

    return this._schema;
  }
}
