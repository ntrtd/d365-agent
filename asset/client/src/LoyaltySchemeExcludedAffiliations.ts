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
import type { LoyaltySchemeExcludedAffiliationsApi } from './LoyaltySchemeExcludedAffiliationsApi';

/**
 * This class represents the entity "LoyaltySchemeExcludedAffiliations" of service "d365_metadata".
 */
export class LoyaltySchemeExcludedAffiliations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LoyaltySchemeExcludedAffiliationsType<T>
{
  /**
   * Technical entity name for LoyaltySchemeExcludedAffiliations.
   */
  static override _entityName = 'LoyaltySchemeExcludedAffiliations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoyaltySchemeExcludedAffiliations entity.
   */
  static _keys = ['dataAreaId', 'RetailAffiliationName', 'LoyaltyScheme'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Affiliation Name.
   */
  declare retailAffiliationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Scheme.
   */
  declare loyaltyScheme: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LoyaltySchemeExcludedAffiliationsApi<T>) {
    super(_entityApi);
  }
}

export interface LoyaltySchemeExcludedAffiliationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailAffiliationName: DeserializedType<T, 'Edm.String'>;
  loyaltyScheme: DeserializedType<T, 'Edm.String'>;
}
