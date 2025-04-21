/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EntryCertificateJournals } from './EntryCertificateJournals';
import { EntryCertificateJournalsRequestBuilder } from './EntryCertificateJournalsRequestBuilder';
import { EntryCertificateStatusW } from './EntryCertificateStatusW';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
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
export class EntryCertificateJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EntryCertificateJournals<DeSerializersT>, DeSerializersT>
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
  ): EntryCertificateJournalsApi<DeSerializersT> {
    return new EntryCertificateJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EntryCertificateJournals;

  requestBuilder(): EntryCertificateJournalsRequestBuilder<DeSerializersT> {
    return new EntryCertificateJournalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EntryCertificateJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EntryCertificateJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EntryCertificateJournals<DeSerializersT>,
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
    typeof EntryCertificateJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EntryCertificateJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTRY_CERTIFICATE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_COUNTY: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_SLIP: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DISTRICT_NAME: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_LOCATION_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_INVOICE_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      EntryCertificateStatusW,
      true,
      true
    >;
    DELIVERY_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_THIRD_PARTY: EnumField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOT_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_VALID_TO: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POST_BOX: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ZIP_CODE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_CITY: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_LONGITUDE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_TIME_ZONE: EnumField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DELIVERY_COUNTRY: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_LATITUDE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_INVOICE_DATE: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DOCUMENT_INVOICE_REC_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_STREET: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET_NUMBER: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_DESCRIPTION: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_VALID_FROM: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      EntryCertificateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EntryCertificateJournals<DeSerializers>>;
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
         * Static representation of the {@link entryCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'EntryCertificate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTY: fieldBuilder.buildEdmTypeField(
          'DeliveryCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP: fieldBuilder.buildEdmTypeField(
          'PackingSlip',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'DocumentInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          EntryCertificateStatusW,
          true
        ),
        /**
         * Static representation of the {@link deliveryCountryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryCountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isThirdParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_THIRD_PARTY: fieldBuilder.buildEnumField(
          'IsThirdParty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_ID: fieldBuilder.buildEdmTypeField('LotId', 'Edm.String', true),
        /**
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link deliveryValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_TO: fieldBuilder.buildEdmTypeField(
          'DeliveryValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
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
         * Static representation of the {@link deliveryPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link deliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link deliveryCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY: fieldBuilder.buildEdmTypeField(
          'DeliveryCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link deliveryLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentInvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link documentInvoiceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_INVOICE_REC_ID: fieldBuilder.buildEdmTypeField(
          'DocumentInvoiceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link deliveryStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EntryCertificateJournals)
      };
    }

    return this._schema;
  }
}
