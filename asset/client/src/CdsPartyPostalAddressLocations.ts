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
import type { CdsPartyPostalAddressLocationsApi } from './CdsPartyPostalAddressLocationsApi';
import { NoYes } from './NoYes';
import {
  CdsPostalAddressLocations,
  CdsPostalAddressLocationsType
} from './CdsPostalAddressLocations';
import { CdsParties, CdsPartiesType } from './CdsParties';

/**
 * This class represents the entity "CDSPartyPostalAddressLocations" of service "d365_metadata".
 */
export class CdsPartyPostalAddressLocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsPartyPostalAddressLocationsType<T>
{
  /**
   * Technical entity name for CdsPartyPostalAddressLocations.
   */
  static override _entityName = 'CDSPartyPostalAddressLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsPartyPostalAddressLocations entity.
   */
  static _keys = ['PartyNumber', 'LocationId'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Location Owner.
   * @nullable
   */
  declare isLocationOwner?: NoYes | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link CdsPostalAddressLocations} entity.
   */
  declare cdsPostalAddressLocation?: CdsPostalAddressLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link CdsParties} entity.
   */
  declare cdsParty?: CdsParties<T> | null;

  constructor(_entityApi: CdsPartyPostalAddressLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsPartyPostalAddressLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isLocationOwner?: NoYes | null;
  isPrimary?: NoYes | null;
  isPrivate?: NoYes | null;
  cdsPostalAddressLocation?: CdsPostalAddressLocationsType<T> | null;
  cdsParty?: CdsPartiesType<T> | null;
}
