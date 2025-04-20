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
import type { ReceiptProfilesApi } from './ReceiptProfilesApi';

/**
 * This class represents the entity "ReceiptProfiles" of service "d365_metadata".
 */
export class ReceiptProfiles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReceiptProfilesType<T>
{
  /**
   * Technical entity name for ReceiptProfiles.
   */
  static override _entityName = 'ReceiptProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReceiptProfiles entity.
   */
  static _keys = ['ProfileId'];
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReceiptProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface ReceiptProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
