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
import type { RetailLoyaltySchemeChannelsApi } from './RetailLoyaltySchemeChannelsApi';

/**
 * This class represents the entity "RetailLoyaltySchemeChannels" of service "d365_metadata".
 */
export class RetailLoyaltySchemeChannels<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltySchemeChannelsType<T>
{
  /**
   * Technical entity name for RetailLoyaltySchemeChannels.
   */
  static override _entityName = 'RetailLoyaltySchemeChannels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltySchemeChannels entity.
   */
  static _keys = [
    'LoyaltySchemeId',
    'OrganizationPartyNumber',
    'OMHierarchyTypeName'
  ];
  /**
   * Loyalty Scheme Id.
   */
  declare loyaltySchemeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Party Number.
   */
  declare organizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Hierarchy Type Name.
   */
  declare omHierarchyTypeName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailLoyaltySchemeChannelsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltySchemeChannelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltySchemeId: DeserializedType<T, 'Edm.String'>;
  organizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  omHierarchyTypeName: DeserializedType<T, 'Edm.String'>;
}
