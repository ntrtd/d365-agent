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
import type { DirPartyTableBiEntitiesApi } from './DirPartyTableBiEntitiesApi';

/**
 * This class represents the entity "DirPartyTableBiEntities" of service "d365_metadata".
 */
export class DirPartyTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DirPartyTableBiEntitiesType<T>
{
  /**
   * Technical entity name for DirPartyTableBiEntities.
   */
  static override _entityName = 'DirPartyTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DirPartyTableBiEntities entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Contact Linked In.
   */
  declare primaryContactLinkedIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Url.
   */
  declare primaryContactUrl: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Fax.
   */
  declare primaryContactFax: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Twitter.
   */
  declare primaryContactTwitter: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Book Names.
   * @nullable
   */
  declare addressBookNames?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location.
   */
  declare primaryAddressLocation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Primary Contact Phone.
   */
  declare primaryContactPhone: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Primary Contact Telex.
   */
  declare primaryContactTelex: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Primary Contact Email.
   */
  declare primaryContactEmail: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Primary Contact Facebook.
   */
  declare primaryContactFacebook: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: DirPartyTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DirPartyTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  primaryContactLinkedIn: DeserializedType<T, 'Edm.Int64'>;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactUrl: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactFax: DeserializedType<T, 'Edm.Int64'>;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactTwitter: DeserializedType<T, 'Edm.Int64'>;
  addressBookNames?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocation: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  primaryContactPhone: DeserializedType<T, 'Edm.Int64'>;
  primaryContactTelex: DeserializedType<T, 'Edm.Int64'>;
  primaryContactEmail: DeserializedType<T, 'Edm.Int64'>;
  primaryContactFacebook: DeserializedType<T, 'Edm.Int64'>;
}
