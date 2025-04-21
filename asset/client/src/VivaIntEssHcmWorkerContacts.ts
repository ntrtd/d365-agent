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
import type { VivaIntEssHcmWorkerContactsApi } from './VivaIntEssHcmWorkerContactsApi';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "VivaIntEssHcmWorkerContacts" of service "d365_metadata".
 */
export class VivaIntEssHcmWorkerContacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VivaIntEssHcmWorkerContactsType<T>
{
  /**
   * Technical entity name for VivaIntEssHcmWorkerContacts.
   */
  static override _entityName = 'VivaIntEssHcmWorkerContacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VivaIntEssHcmWorkerContacts entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Contact Phone Purpose.
   * @nullable
   */
  declare primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Type.
   * @nullable
   */
  declare primaryContactPhoneType?: LogisticsElectronicAddressMethodType | null;
  /**
   * Primary Electronic Address Id.
   * @nullable
   */
  declare primaryElectronicAddressId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Calling Code.
   * @nullable
   */
  declare primaryContactPhoneCallingCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Party Number.
   * @nullable
   */
  declare primaryPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Is Primary.
   * @nullable
   */
  declare primaryContactPhoneIsPrimary?: NoYes | null;
  /**
   * Primary Contact Phone Description.
   * @nullable
   */
  declare primaryContactPhoneDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone Roles.
   * @nullable
   */
  declare primaryContactPhoneRoles?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VivaIntEssHcmWorkerContactsApi<T>) {
    super(_entityApi);
  }
}

export interface VivaIntEssHcmWorkerContactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  primaryContactPhonePurpose?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneType?: LogisticsElectronicAddressMethodType | null;
  primaryElectronicAddressId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneCallingCode?: DeserializedType<T, 'Edm.String'> | null;
  primaryPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneIsPrimary?: NoYes | null;
  primaryContactPhoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneRoles?: DeserializedType<T, 'Edm.String'> | null;
}
