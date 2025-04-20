/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { EntryCertificateJournalsApi } from './EntryCertificateJournalsApi';
import { EntryCertificateStatusW } from './EntryCertificateStatusW';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "EntryCertificateJournals" of service "d365_metadata".
 */
export class EntryCertificateJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EntryCertificateJournalsType<T>
{
  /**
   * Technical entity name for EntryCertificateJournals.
   */
  static override _entityName = 'EntryCertificateJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EntryCertificateJournals entity.
   */
  static _keys = ['dataAreaId', 'EntryCertificate', 'CustomerAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entry Certificate.
   */
  declare entryCertificate: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery County.
   * @nullable
   */
  declare deliveryCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Slip.
   * @nullable
   */
  declare packingSlip?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery District Name.
   * @nullable
   */
  declare deliveryDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Location Id.
   * @nullable
   */
  declare deliveryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Invoice Id.
   * @nullable
   */
  declare documentInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: EntryCertificateStatusW | null;
  /**
   * Delivery Country Iso Code.
   * @nullable
   */
  declare deliveryCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order.
   * @nullable
   */
  declare salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Third Party.
   * @nullable
   */
  declare isThirdParty?: NoYes | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery State.
   * @nullable
   */
  declare deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lot Id.
   * @nullable
   */
  declare lotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Valid To.
   */
  declare deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Post Box.
   * @nullable
   */
  declare deliveryPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Zip Code.
   * @nullable
   */
  declare deliveryZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery City.
   * @nullable
   */
  declare deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address.
   * @nullable
   */
  declare deliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Longitude.
   */
  declare deliveryLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Time Zone.
   * @nullable
   */
  declare deliveryTimeZone?: Timezone | null;
  /**
   * Delivery Country.
   * @nullable
   */
  declare deliveryCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Latitude.
   */
  declare deliveryLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Invoice Date.
   */
  declare documentInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Invoice Rec Id.
   */
  declare documentInvoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Delivery Street.
   * @nullable
   */
  declare deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Street Number.
   * @nullable
   */
  declare deliveryStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Description.
   * @nullable
   */
  declare deliveryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Valid From.
   */
  declare deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EntryCertificateJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface EntryCertificateJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  entryCertificate: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  deliveryCounty?: DeserializedType<T, 'Edm.String'> | null;
  packingSlip?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryLocationId?: DeserializedType<T, 'Edm.String'> | null;
  documentInvoiceId?: DeserializedType<T, 'Edm.String'> | null;
  status?: EntryCertificateStatusW | null;
  deliveryCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  salesOrder?: DeserializedType<T, 'Edm.String'> | null;
  isThirdParty?: NoYes | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  deliveryState?: DeserializedType<T, 'Edm.String'> | null;
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  lotId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  deliveryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  language?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCity?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  deliveryLongitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryTimeZone?: Timezone | null;
  deliveryCountry?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryLatitude: DeserializedType<T, 'Edm.Decimal'>;
  documentInvoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentInvoiceRecId: DeserializedType<T, 'Edm.Int64'>;
  deliveryStreet?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
}
