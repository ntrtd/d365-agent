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
import type { RetailHardwareProfileMerchantsInfoApi } from './RetailHardwareProfileMerchantsInfoApi';

/**
 * This class represents the entity "RetailHardwareProfileMerchantsInfo" of service "d365_metadata".
 */
export class RetailHardwareProfileMerchantsInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailHardwareProfileMerchantsInfoType<T>
{
  /**
   * Technical entity name for RetailHardwareProfileMerchantsInfo.
   */
  static override _entityName = 'RetailHardwareProfileMerchantsInfo';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailHardwareProfileMerchantsInfo entity.
   */
  static _keys = ['ProfileId'];
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Merchant Properties.
   * @nullable
   */
  declare merchantProperties?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailHardwareProfileMerchantsInfoApi<T>) {
    super(_entityApi);
  }
}

export interface RetailHardwareProfileMerchantsInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileId: DeserializedType<T, 'Edm.String'>;
  merchantProperties?: DeserializedType<T, 'Edm.String'> | null;
}
