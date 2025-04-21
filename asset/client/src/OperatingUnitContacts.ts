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
import type { OperatingUnitContactsApi } from './OperatingUnitContactsApi';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';

/**
 * This class represents the entity "OperatingUnitContacts" of service "d365_metadata".
 */
export class OperatingUnitContacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OperatingUnitContactsType<T>
{
  /**
   * Technical entity name for OperatingUnitContacts.
   */
  static override _entityName = 'OperatingUnitContacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperatingUnitContacts entity.
   */
  static _keys = ['Type', 'Description', 'Locator', 'OMOperatingUnitNumber'];
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
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare operatingUnit?: OperatingUnits<T> | null;

  constructor(_entityApi: OperatingUnitContactsApi<T>) {
    super(_entityApi);
  }
}

export interface OperatingUnitContactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  type?: LogisticsElectronicAddressMethodType | null;
  description: DeserializedType<T, 'Edm.String'>;
  locator: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  isPrimary?: NoYes | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isMobilePhone?: NoYes | null;
  locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  operatingUnit?: OperatingUnitsType<T> | null;
}
