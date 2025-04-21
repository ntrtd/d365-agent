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
import type { RetailDevicesApi } from './RetailDevicesApi';
import { NoYes } from './NoYes';
import { RetailDeviceActivationStatusBase } from './RetailDeviceActivationStatusBase';

/**
 * This class represents the entity "RetailDevices" of service "d365_metadata".
 */
export class RetailDevices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailDevicesType<T>
{
  /**
   * Technical entity name for RetailDevices.
   */
  static override _entityName = 'RetailDevices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDevices entity.
   */
  static _keys = ['DeviceId'];
  /**
   * Device Id.
   */
  declare deviceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merged Self Service Package Reference.
   */
  declare mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retail Device Type.
   */
  declare retailDeviceType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Mass Activation.
   * @nullable
   */
  declare allowMassActivation?: NoYes | null;
  /**
   * Deactivated Date Time.
   */
  declare deactivatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activation Staff Id.
   * @nullable
   */
  declare activationStaffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terminal.
   * @nullable
   */
  declare terminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Device Id.
   * @nullable
   */
  declare physicalDeviceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activation Status.
   * @nullable
   */
  declare activationStatus?: RetailDeviceActivationStatusBase | null;
  /**
   * Deactivation Staff Id.
   * @nullable
   */
  declare deactivationStaffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deactivate Comments.
   * @nullable
   */
  declare deactivateComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activation Guid.
   */
  declare activationGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Activated Date Time.
   */
  declare activatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RetailDevicesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDevicesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deviceId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  retailDeviceType: DeserializedType<T, 'Edm.Int32'>;
  allowMassActivation?: NoYes | null;
  deactivatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activationStaffId?: DeserializedType<T, 'Edm.String'> | null;
  terminal?: DeserializedType<T, 'Edm.String'> | null;
  physicalDeviceId?: DeserializedType<T, 'Edm.String'> | null;
  activationStatus?: RetailDeviceActivationStatusBase | null;
  deactivationStaffId?: DeserializedType<T, 'Edm.String'> | null;
  deactivateComments?: DeserializedType<T, 'Edm.String'> | null;
  activationGuid: DeserializedType<T, 'Edm.Guid'>;
  activatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
