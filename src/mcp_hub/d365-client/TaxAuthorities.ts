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
import type { TaxAuthoritiesApi } from './TaxAuthoritiesApi';
import { AgencyBr } from './AgencyBr';
import { Timezone } from './Timezone';
import { TaxRepRoundOffType } from './TaxRepRoundOffType';
import { TaxReportLayout } from './TaxReportLayout';
import { TaxPeriods, TaxPeriodsType } from './TaxPeriods';

/**
 * This class represents the entity "TaxAuthorities" of service "d365_metadata".
 */
export class TaxAuthorities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxAuthoritiesType<T>
{
  /**
   * Technical entity name for TaxAuthorities.
   */
  static override _entityName = 'TaxAuthorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxAuthorities entity.
   */
  static _keys = ['dataAreaId', 'TaxAuthorityCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Authority Code.
   */
  declare taxAuthorityCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Authority Identification.
   * @nullable
   */
  declare taxAuthorityIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agency.
   * @nullable
   */
  declare agency?: AgencyBr | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Round Off Type.
   * @nullable
   */
  declare roundOffType?: TaxRepRoundOffType | null;
  /**
   * Latitude.
   */
  declare latitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sms.
   * @nullable
   */
  declare sms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Local.
   * @nullable
   */
  declare phoneLocal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tele Fax.
   * @nullable
   */
  declare teleFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Layout.
   * @nullable
   */
  declare reportLayout?: TaxReportLayout | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Round Off.
   */
  declare roundOff: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telex.
   * @nullable
   */
  declare telex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Num.
   * @nullable
   */
  declare vendorAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Longitude.
   */
  declare longitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pager.
   * @nullable
   */
  declare pager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Box.
   * @nullable
   */
  declare postBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Iso Code.
   * @nullable
   */
  declare countryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cellular Phone.
   * @nullable
   */
  declare cellularPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Compliment.
   * @nullable
   */
  declare buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TaxPeriods} entity.
   */
  declare taxPeriod: TaxPeriods<T>[];

  constructor(_entityApi: TaxAuthoritiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxAuthoritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxAuthorityCode: DeserializedType<T, 'Edm.String'>;
  taxAuthorityIdentification?: DeserializedType<T, 'Edm.String'> | null;
  agency?: AgencyBr | null;
  timeZone?: Timezone | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  roundOffType?: TaxRepRoundOffType | null;
  latitude: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sms?: DeserializedType<T, 'Edm.String'> | null;
  phoneLocal?: DeserializedType<T, 'Edm.String'> | null;
  teleFax?: DeserializedType<T, 'Edm.String'> | null;
  reportLayout?: TaxReportLayout | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  roundOff: DeserializedType<T, 'Edm.Decimal'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  telex?: DeserializedType<T, 'Edm.String'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  longitude: DeserializedType<T, 'Edm.Decimal'>;
  pager?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  postBox?: DeserializedType<T, 'Edm.String'> | null;
  countryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  cellularPhone?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  taxPeriod: TaxPeriodsType<T>[];
}
