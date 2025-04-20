/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SiteGateEntryHeaders } from './SiteGateEntryHeaders';
import { SiteGateEntryHeadersRequestBuilder } from './SiteGateEntryHeadersRequestBuilder';
import { InventSiteGateEntryStatusIn } from './InventSiteGateEntryStatusIn';
import { NoYes } from './NoYes';
import { InventSiteGateRefDocTypeIn } from './InventSiteGateRefDocTypeIn';
import { InventSiteGateEntryTypeIn } from './InventSiteGateEntryTypeIn';
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
export class SiteGateEntryHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SiteGateEntryHeaders<DeSerializersT>, DeSerializersT>
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
  ): SiteGateEntryHeadersApi<DeSerializersT> {
    return new SiteGateEntryHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SiteGateEntryHeaders;

  requestBuilder(): SiteGateEntryHeadersRequestBuilder<DeSerializersT> {
    return new SiteGateEntryHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SiteGateEntryHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SiteGateEntryHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SiteGateEntryHeaders<DeSerializersT>,
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
    typeof SiteGateEntryHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SiteGateEntryHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GATE_ENTRY: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORTATION_RECEIPT_DATE: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ARRIVAL_DATE_AND_TIME: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      InventSiteGateEntryStatusIn,
      true,
      true
    >;
    VEHICLE_NUMBER: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_RECEIPT_NUMBER: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHALLAN_DATE: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSPORTER: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTORY_GATE: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_MEASUREMENT: EnumField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RGP_NUMBER: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_DOCUMENT_TYPE: EnumField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      InventSiteGateRefDocTypeIn,
      true,
      true
    >;
    GATE_ENTRY_TYPE: EnumField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      InventSiteGateEntryTypeIn,
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_PARTY: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHALLAN_NUMBER: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRIVER_MOBILE_PHONE: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRIVER_NAME: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXIT_DATE_AND_TIME: OrderableEdmTypeField<
      SiteGateEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SiteGateEntryHeaders<DeSerializers>>;
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
         * Static representation of the {@link gateEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GATE_ENTRY: fieldBuilder.buildEdmTypeField(
          'GateEntry',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transportationReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'TransportationReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link arrivalDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRIVAL_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'ArrivalDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          InventSiteGateEntryStatusIn,
          true
        ),
        /**
         * Static representation of the {@link vehicleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'VehicleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationReceiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransportationReceiptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link challanDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_DATE: fieldBuilder.buildEdmTypeField(
          'ChallanDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transporter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTER: fieldBuilder.buildEdmTypeField(
          'Transporter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link factoryGate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTORY_GATE: fieldBuilder.buildEdmTypeField(
          'FactoryGate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_MEASUREMENT: fieldBuilder.buildEnumField(
          'SkipMeasurement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rgpNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RGP_NUMBER: fieldBuilder.buildEdmTypeField(
          'RGPNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'ReferenceDocumentType',
          InventSiteGateRefDocTypeIn,
          true
        ),
        /**
         * Static representation of the {@link gateEntryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GATE_ENTRY_TYPE: fieldBuilder.buildEnumField(
          'GateEntryType',
          InventSiteGateEntryTypeIn,
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_PARTY: fieldBuilder.buildEdmTypeField(
          'ReferenceParty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link challanNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChallanNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link driverMobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'DriverMobilePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.String', true),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.String', true),
        /**
         * Static representation of the {@link driverName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_NAME: fieldBuilder.buildEdmTypeField(
          'DriverName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exitDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXIT_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'ExitDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SiteGateEntryHeaders)
      };
    }

    return this._schema;
  }
}
