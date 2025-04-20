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
import type { ContactsForAiApi } from './ContactsForAiApi';
import { VendorsForAi, VendorsForAiType } from './VendorsForAi';

/**
 * This class represents the entity "ContactsForAI" of service "d365_metadata".
 */
export class ContactsForAi<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContactsForAiType<T>
{
  /**
   * Technical entity name for ContactsForAi.
   */
  static override _entityName = 'ContactsForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ContactsForAi entity.
   */
  static _keys = ['dataAreaId', 'ContactPersonId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Id.
   */
  declare contactPersonId: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Fax Number.
   * @nullable
   */
  declare primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Url.
   * @nullable
   */
  declare primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profession.
   * @nullable
   */
  declare profession?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * @nullable
   */
  declare department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Known As Name.
   * @nullable
   */
  declare knownAsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Phone Number.
   * @nullable
   */
  declare primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Email Address.
   * @nullable
   */
  declare primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Function.
   * @nullable
   */
  declare function?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorsForAi} entity.
   */
  declare vendor?: VendorsForAi<T> | null;

  constructor(_entityApi: ContactsForAiApi<T>) {
    super(_entityApi);
  }
}

export interface ContactsForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contactPersonId: DeserializedType<T, 'Edm.String'>;
  primaryFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryUrl?: DeserializedType<T, 'Edm.String'> | null;
  profession?: DeserializedType<T, 'Edm.String'> | null;
  department?: DeserializedType<T, 'Edm.String'> | null;
  knownAsName?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  primaryPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  function?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: VendorsForAiType<T> | null;
}
