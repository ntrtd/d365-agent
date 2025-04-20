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
import type { AzureAdWorkersApi } from './AzureAdWorkersApi';
import { NoYes } from './NoYes';
import { HcmWorkerStatus } from './HcmWorkerStatus';

/**
 * This class represents the entity "AzureADWorkers" of service "d365_metadata".
 */
export class AzureAdWorkers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AzureAdWorkersType<T>
{
  /**
   * Technical entity name for AzureAdWorkers.
   */
  static override _entityName = 'AzureADWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AzureAdWorkers entity.
   */
  static _keys = ['EmployeeId'];
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Name.
   * @nullable
   */
  declare displayName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   */
  declare department: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Given Name.
   * @nullable
   */
  declare givenName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Phone Is Mobile.
   * @nullable
   */
  declare primaryContactPhoneIsMobile?: NoYes | null;
  /**
   * Most Recent Modified Date.
   */
  declare mostRecentModifiedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Common Name.
   * @nullable
   */
  declare commonName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Office Location.
   * @nullable
   */
  declare officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HcmWorkerStatus | null;
  /**
   * Job Title Id.
   */
  declare jobTitleId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Manager.
   * @nullable
   */
  declare manager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Title.
   * @nullable
   */
  declare jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephonenumber.
   * @nullable
   */
  declare telephonenumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Address.
   * @nullable
   */
  declare streetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AzureAdWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface AzureAdWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeId: DeserializedType<T, 'Edm.String'>;
  displayName?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  department: DeserializedType<T, 'Edm.Int64'>;
  givenName?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhoneIsMobile?: NoYes | null;
  mostRecentModifiedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  commonName?: DeserializedType<T, 'Edm.String'> | null;
  officeLocation?: DeserializedType<T, 'Edm.String'> | null;
  status?: HcmWorkerStatus | null;
  jobTitleId: DeserializedType<T, 'Edm.Int64'>;
  manager?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  telephonenumber?: DeserializedType<T, 'Edm.String'> | null;
  streetAddress?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
}
