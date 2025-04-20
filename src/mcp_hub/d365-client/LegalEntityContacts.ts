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
import type { LegalEntityContactsApi } from './LegalEntityContactsApi';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "LegalEntityContacts" of service "d365_metadata".
 */
export class LegalEntityContacts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LegalEntityContactsType<T>
{
  /**
   * Technical entity name for LegalEntityContacts.
   */
  static override _entityName = 'LegalEntityContacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LegalEntityContacts entity.
   */
  static _keys = ['Type', 'Description', 'Locator', 'DataArea'];
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Locator.
   */
  declare locator: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area.
   */
  declare dataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Mobile Phone.
   * @nullable
   */
  declare isMobilePhone?: NoYes | null;
  /**
   * Locator Extension.
   * @nullable
   */
  declare locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Code.
   * @nullable
   */
  declare countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;

  constructor(_entityApi: LegalEntityContactsApi<T>) {
    super(_entityApi);
  }
}

export interface LegalEntityContactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  type?: LogisticsElectronicAddressMethodType | null;
  description: DeserializedType<T, 'Edm.String'>;
  locator: DeserializedType<T, 'Edm.String'>;
  dataArea: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  isPrimary?: NoYes | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isMobilePhone?: NoYes | null;
  locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity?: LegalEntitiesType<T> | null;
}
