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
import type { CdsPostalAddressLocationsApi } from './CdsPostalAddressLocationsApi';
import {
  PostalAddressElectronicContactsV2,
  PostalAddressElectronicContactsV2Type
} from './PostalAddressElectronicContactsV2';
import {
  CdsPostalAddressHistory,
  CdsPostalAddressHistoryType
} from './CdsPostalAddressHistory';
import {
  CdsPartyPostalAddressLocations,
  CdsPartyPostalAddressLocationsType
} from './CdsPartyPostalAddressLocations';
import {
  CdsPostalAddressHistoryV2,
  CdsPostalAddressHistoryV2Type
} from './CdsPostalAddressHistoryV2';

/**
 * This class represents the entity "CDSPostalAddressLocations" of service "d365_metadata".
 */
export class CdsPostalAddressLocations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsPostalAddressLocationsType<T>
{
  /**
   * Technical entity name for CdsPostalAddressLocations.
   */
  static override _entityName = 'CDSPostalAddressLocations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsPostalAddressLocations entity.
   */
  static _keys = ['LocationId'];
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Location Id.
   * @nullable
   */
  declare parentLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PostalAddressElectronicContactsV2} entity.
   */
  declare postalAddressElectronicContactV2: PostalAddressElectronicContactsV2<T>[];
  /**
   * One-to-many navigation property to the {@link CdsPostalAddressHistory} entity.
   */
  declare cdsPostalAddressHistory: CdsPostalAddressHistory<T>[];
  /**
   * One-to-many navigation property to the {@link CdsPartyPostalAddressLocations} entity.
   */
  declare cdsPartyPostalAddressLocation: CdsPartyPostalAddressLocations<T>[];
  /**
   * One-to-many navigation property to the {@link CdsPostalAddressHistoryV2} entity.
   */
  declare cdsPostalAddressHistoryV2: CdsPostalAddressHistoryV2<T>[];

  constructor(_entityApi: CdsPostalAddressLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface CdsPostalAddressLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locationId: DeserializedType<T, 'Edm.String'>;
  parentLocationId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postalAddressElectronicContactV2: PostalAddressElectronicContactsV2Type<T>[];
  cdsPostalAddressHistory: CdsPostalAddressHistoryType<T>[];
  cdsPartyPostalAddressLocation: CdsPartyPostalAddressLocationsType<T>[];
  cdsPostalAddressHistoryV2: CdsPostalAddressHistoryV2Type<T>[];
}
