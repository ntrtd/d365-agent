/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransportationAppointmentHistories } from './TransportationAppointmentHistories';
import { TransportationAppointmentHistoriesRequestBuilder } from './TransportationAppointmentHistoriesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class TransportationAppointmentHistoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransportationAppointmentHistories<DeSerializersT>,
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
  ): TransportationAppointmentHistoriesApi<DeSerializersT> {
    return new TransportationAppointmentHistoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransportationAppointmentHistories;

  requestBuilder(): TransportationAppointmentHistoriesRequestBuilder<DeSerializersT> {
    return new TransportationAppointmentHistoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransportationAppointmentHistories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransportationAppointmentHistories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransportationAppointmentHistories<DeSerializersT>,
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
    typeof TransportationAppointmentHistories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransportationAppointmentHistories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPOINTMENT_ID: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORTATION_APPOINTMENT_HISTORY_ENTRY_NUMBER: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_CUSTOMER_PICKUP_ALLOWED: EnumField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACTOR_NUMBER: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_NOTE: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_MOVEMENT_DIRECTION_RULE: EnumField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      TmsApptDirection,
      true,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_CARRIER_ID: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAILER_NUMBER: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_STATUS: EnumField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      TmsApptStatus,
      true,
      true
    >;
    TRANSPORTATION_BROKER_ID: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_APPOINTMENT_RULE_ID: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CONTAINER_ID: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPOINTMENT_STATUS_REASON: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_START_DATE_TIME: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_END_DATE_TIME: OrderableEdmTypeField<
      TransportationAppointmentHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TransportationAppointmentHistories<DeSerializers>>;
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
         * Static representation of the {@link transportationAppointmentHistoryEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_APPOINTMENT_HISTORY_ENTRY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'TransportationAppointmentHistoryEntryNumber',
            'Edm.Int64',
            false
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
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
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
         * Static representation of the {@link appointmentNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_NOTE: fieldBuilder.buildEdmTypeField(
          'AppointmentNote',
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
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link trailerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrailerNumber',
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
         * Static representation of the {@link transportationBrokerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_BROKER_ID: fieldBuilder.buildEdmTypeField(
          'TransportationBrokerId',
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
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link appointmentStatusReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPOINTMENT_STATUS_REASON: fieldBuilder.buildEdmTypeField(
          'AppointmentStatusReason',
          'Edm.String',
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
         * Static representation of the {@link shippingCarrierVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierVendorAccountNumber',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransportationAppointmentHistories)
      };
    }

    return this._schema;
  }
}
