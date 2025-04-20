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
import type { OfficeAppAppletRegistrationsApi } from './OfficeAppAppletRegistrationsApi';

/**
 * This class represents the entity "OfficeAppAppletRegistrations" of service "d365_metadata".
 */
export class OfficeAppAppletRegistrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OfficeAppAppletRegistrationsType<T>
{
  /**
   * Technical entity name for OfficeAppAppletRegistrations.
   */
  static override _entityName = 'OfficeAppAppletRegistrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OfficeAppAppletRegistrations entity.
   */
  static _keys = ['AppletID'];
  /**
   * Applet Id.
   */
  declare appletId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dependent On.
   * @nullable
   */
  declare dependentOn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relative Url.
   * @nullable
   */
  declare relativeUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supported Applications.
   */
  declare supportedApplications: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Required App Version.
   * @nullable
   */
  declare requiredAppVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OfficeAppAppletRegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface OfficeAppAppletRegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  appletId: DeserializedType<T, 'Edm.String'>;
  dependentOn?: DeserializedType<T, 'Edm.String'> | null;
  relativeUrl?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  supportedApplications: DeserializedType<T, 'Edm.Int32'>;
  requiredAppVersion?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
