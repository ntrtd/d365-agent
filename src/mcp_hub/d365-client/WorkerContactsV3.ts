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
import type { WorkerContactsV3Api } from './WorkerContactsV3Api';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "WorkerContactsV3" of service "d365_metadata".
 */
export class WorkerContactsV3<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerContactsV3Type<T>
{
  /**
   * Technical entity name for WorkerContactsV3.
   */
  static override _entityName = 'WorkerContactsV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerContactsV3 entity.
   */
  static _keys = ['PersonnelNumber', 'ElectronicAddressId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Electronic Address Id.
   */
  declare electronicAddressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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
   * Locator.
   * @nullable
   */
  declare locator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
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
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: WorkerContactsV3Api<T>) {
    super(_entityApi);
  }
}

export interface WorkerContactsV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  electronicAddressId: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  locator?: DeserializedType<T, 'Edm.String'> | null;
  type?: LogisticsElectronicAddressMethodType | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isMobilePhone?: NoYes | null;
  locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
