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
import type { FiscalIntegrationFunctionalityProfileGroupsApi } from './FiscalIntegrationFunctionalityProfileGroupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FiscalIntegrationFunctionalityProfileGroups" of service "d365_metadata".
 */
export class FiscalIntegrationFunctionalityProfileGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalIntegrationFunctionalityProfileGroupsType<T>
{
  /**
   * Technical entity name for FiscalIntegrationFunctionalityProfileGroups.
   */
  static override _entityName = 'FiscalIntegrationFunctionalityProfileGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalIntegrationFunctionalityProfileGroups entity.
   */
  static _keys = ['GroupNumber', 'ProfileNumber'];
  /**
   * Group Number.
   */
  declare groupNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Number.
   */
  declare profileNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Profile Description.
   * @nullable
   */
  declare functionalProfileDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active From.
   */
  declare activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Disable.
   * @nullable
   */
  declare isDisable?: NoYes | null;
  /**
   * Mark As Registered.
   * @nullable
   */
  declare markAsRegistered?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip.
   * @nullable
   */
  declare skip?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalIntegrationFunctionalityProfileGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalIntegrationFunctionalityProfileGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupNumber: DeserializedType<T, 'Edm.String'>;
  profileNumber: DeserializedType<T, 'Edm.String'>;
  functionalProfileDescription?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  activeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  isDisable?: NoYes | null;
  markAsRegistered?: DeserializedType<T, 'Edm.String'> | null;
  skip?: DeserializedType<T, 'Edm.String'> | null;
}
