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
import type { RetailMediaProductRelationsApi } from './RetailMediaProductRelationsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailMediaProductRelations" of service "d365_metadata".
 */
export class RetailMediaProductRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailMediaProductRelationsType<T>
{
  /**
   * Technical entity name for RetailMediaProductRelations.
   */
  static override _entityName = 'RetailMediaProductRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailMediaProductRelations entity.
   */
  static _keys = [
    'ResourceId',
    'ProductNumber',
    'CatalogId',
    'InternalOrganizationPartyNumber'
  ];
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Catalog Id.
   */
  declare catalogId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Organization Party Number.
   */
  declare internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Additional Media.
   * @nullable
   */
  declare isAdditionalMedia?: NoYes | null;
  /**
   * Is Default Media.
   * @nullable
   */
  declare isDefaultMedia?: NoYes | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailMediaProductRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailMediaProductRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resourceId: DeserializedType<T, 'Edm.Int32'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  catalogId: DeserializedType<T, 'Edm.String'>;
  internalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  isAdditionalMedia?: NoYes | null;
  isDefaultMedia?: NoYes | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
}
