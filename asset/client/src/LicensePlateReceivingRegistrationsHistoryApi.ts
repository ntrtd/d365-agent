/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LicensePlateReceivingRegistrationsHistory } from './LicensePlateReceivingRegistrationsHistory';
import { LicensePlateReceivingRegistrationsHistoryRequestBuilder } from './LicensePlateReceivingRegistrationsHistoryRequestBuilder';
import { LicensePlatesApi } from './LicensePlatesApi';
import { InboundShipmentHeadersApi } from './InboundShipmentHeadersApi';
import { InboundLoadHeadersApi } from './InboundLoadHeadersApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LicensePlateReceivingRegistrationsHistoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
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
  ): LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT> {
    return new LicensePlateReceivingRegistrationsHistoryApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link licensePlates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATES: OneToOneLink<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_HEADER: OneToOneLink<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundLoadHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_LOAD_HEADER: OneToOneLink<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
      DeSerializersT,
      InboundLoadHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LicensePlatesApi<DeSerializersT>,
      InboundShipmentHeadersApi<DeSerializersT>,
      InboundLoadHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LICENSE_PLATES: new OneToOneLink('LicensePlates', this, linkedApis[0]),
      INBOUND_SHIPMENT_HEADER: new OneToOneLink(
        'InboundShipmentHeader',
        this,
        linkedApis[1]
      ),
      INBOUND_LOAD_HEADER: new OneToOneLink(
        'InboundLoadHeader',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = LicensePlateReceivingRegistrationsHistory;

  requestBuilder(): LicensePlateReceivingRegistrationsHistoryRequestBuilder<DeSerializersT> {
    return new LicensePlateReceivingRegistrationsHistoryRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
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
    typeof LicensePlateReceivingRegistrationsHistory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LicensePlateReceivingRegistrationsHistory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INBOUND_LOAD_ID: OrderableEdmTypeField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_ID: OrderableEdmTypeField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTRATION_DATE_TIME: OrderableEdmTypeField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REGISTERING_WAREHOUSE_MOBILE_DEVICE_USER_ID: OrderableEdmTypeField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAS_WORK_CREATED_ON_REGISTRATION: EnumField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link licensePlates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATES: OneToOneLink<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_HEADER: OneToOneLink<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
      DeSerializersT,
      InboundShipmentHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundLoadHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_LOAD_HEADER: OneToOneLink<
      LicensePlateReceivingRegistrationsHistory<DeSerializersT>,
      DeSerializersT,
      InboundLoadHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      LicensePlateReceivingRegistrationsHistory<DeSerializers>
    >;
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
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inboundLoadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_LOAD_ID: fieldBuilder.buildEdmTypeField(
          'InboundLoadId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link registrationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RegistrationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link registeringWarehouseMobileDeviceUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTERING_WAREHOUSE_MOBILE_DEVICE_USER_ID:
          fieldBuilder.buildEdmTypeField(
            'RegisteringWarehouseMobileDeviceUserId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link wasWorkCreatedOnRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAS_WORK_CREATED_ON_REGISTRATION: fieldBuilder.buildEnumField(
          'WasWorkCreatedOnRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parentLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentLicensePlateNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          LicensePlateReceivingRegistrationsHistory
        )
      };
    }

    return this._schema;
  }
}
