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
import type { RetailLoyaltySchemesApi } from './RetailLoyaltySchemesApi';

/**
 * This class represents the entity "RetailLoyaltySchemes" of service "d365_metadata".
 */
export class RetailLoyaltySchemes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltySchemesType<T>
{
  /**
   * Technical entity name for RetailLoyaltySchemes.
   */
  static override _entityName = 'RetailLoyaltySchemes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltySchemes entity.
   */
  static _keys = ['LoyaltySchemeId'];
  /**
   * Loyalty Scheme Id.
   */
  declare loyaltySchemeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loyalty Name.
   * @nullable
   */
  declare loyaltyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltySchemesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltySchemesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltySchemeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  loyaltyName?: DeserializedType<T, 'Edm.String'> | null;
}
