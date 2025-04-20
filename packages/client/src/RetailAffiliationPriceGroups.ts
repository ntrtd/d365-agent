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
import type { RetailAffiliationPriceGroupsApi } from './RetailAffiliationPriceGroupsApi';
import {
  PriceCustomerGroups,
  PriceCustomerGroupsType
} from './PriceCustomerGroups';
import {
  RetailAffiliations,
  RetailAffiliationsType
} from './RetailAffiliations';

/**
 * This class represents the entity "RetailAffiliationPriceGroups" of service "d365_metadata".
 */
export class RetailAffiliationPriceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailAffiliationPriceGroupsType<T>
{
  /**
   * Technical entity name for RetailAffiliationPriceGroups.
   */
  static override _entityName = 'RetailAffiliationPriceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAffiliationPriceGroups entity.
   */
  static _keys = ['dataAreaId', 'AffiliationName', 'PriceCustomerGroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Affiliation Name.
   */
  declare affiliationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Customer Group Code.
   */
  declare priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link PriceCustomerGroups} entity.
   */
  declare priceCustomerGroup?: PriceCustomerGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailAffiliations} entity.
   */
  declare retailAffiliation?: RetailAffiliations<T> | null;

  constructor(_entityApi: RetailAffiliationPriceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAffiliationPriceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  affiliationName: DeserializedType<T, 'Edm.String'>;
  priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>;
  priceCustomerGroup?: PriceCustomerGroupsType<T> | null;
  retailAffiliation?: RetailAffiliationsType<T> | null;
}
