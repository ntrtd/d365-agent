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
import type { ExternalIdToCustomerMapsApi } from './ExternalIdToCustomerMapsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExternalIdToCustomerMaps" of service "d365_metadata".
 */
export class ExternalIdToCustomerMaps<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalIdToCustomerMapsType<T>
{
  /**
   * Technical entity name for ExternalIdToCustomerMaps.
   */
  static override _entityName = 'ExternalIdToCustomerMaps';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExternalIdToCustomerMaps entity.
   */
  static _keys = ['dataAreaId', 'ExternalIdentityId', 'ProviderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Identity Id.
   */
  declare externalIdentityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Provider Id.
   */
  declare providerId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Activated.
   * @nullable
   */
  declare isActivated?: NoYes | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Auto Linked.
   * @nullable
   */
  declare isAutoLinked?: NoYes | null;

  constructor(_entityApi: ExternalIdToCustomerMapsApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalIdToCustomerMapsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  externalIdentityId: DeserializedType<T, 'Edm.String'>;
  providerId: DeserializedType<T, 'Edm.Int64'>;
  isActivated?: NoYes | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isAutoLinked?: NoYes | null;
}
