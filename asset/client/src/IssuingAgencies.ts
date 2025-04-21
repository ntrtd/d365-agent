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
import type { IssuingAgenciesApi } from './IssuingAgenciesApi';
import { I9DocumentTypes, I9DocumentTypesType } from './I9DocumentTypes';
import {
  PersonIdentificationNumbers,
  PersonIdentificationNumbersType
} from './PersonIdentificationNumbers';

/**
 * This class represents the entity "IssuingAgencies" of service "d365_metadata".
 */
export class IssuingAgencies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IssuingAgenciesType<T>
{
  /**
   * Technical entity name for IssuingAgencies.
   */
  static override _entityName = 'IssuingAgencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IssuingAgencies entity.
   */
  static _keys = ['IssuingAgency'];
  /**
   * Issuing Agency.
   */
  declare issuingAgency: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Extension.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  declare mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sms.
   * @nullable
   */
  declare sms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pager.
   * @nullable
   */
  declare pager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telex Number.
   * @nullable
   */
  declare telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link I9DocumentTypes} entity.
   */
  declare i9DocumentTypes: I9DocumentTypes<T>[];
  /**
   * One-to-many navigation property to the {@link PersonIdentificationNumbers} entity.
   */
  declare personIdentificationNumbers: PersonIdentificationNumbers<T>[];

  constructor(_entityApi: IssuingAgenciesApi<T>) {
    super(_entityApi);
  }
}

export interface IssuingAgenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  issuingAgency: DeserializedType<T, 'Edm.String'>;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  sms?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  pager?: DeserializedType<T, 'Edm.String'> | null;
  telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  i9DocumentTypes: I9DocumentTypesType<T>[];
  personIdentificationNumbers: PersonIdentificationNumbersType<T>[];
}
