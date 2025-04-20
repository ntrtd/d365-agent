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
import type { CallCenterCatalogRequestsApi } from './CallCenterCatalogRequestsApi';
import { McrCatalogStatus } from './McrCatalogStatus';

/**
 * This class represents the entity "CallCenterCatalogRequests" of service "d365_metadata".
 */
export class CallCenterCatalogRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterCatalogRequestsType<T>
{
  /**
   * Technical entity name for CallCenterCatalogRequests.
   */
  static override _entityName = 'CallCenterCatalogRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterCatalogRequests entity.
   */
  static _keys = ['dataAreaId', 'CatalogDescription', 'CatalogRequestNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Catalog Description.
   */
  declare catalogDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Catalog Request Number.
   */
  declare catalogRequestNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Log Id.
   * @nullable
   */
  declare logId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Relation Account.
   * @nullable
   */
  declare businessRelationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Status.
   * @nullable
   */
  declare requestStatus?: McrCatalogStatus | null;
  /**
   * Source Code.
   * @nullable
   */
  declare sourceCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CallCenterCatalogRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterCatalogRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  catalogDescription: DeserializedType<T, 'Edm.String'>;
  catalogRequestNumber: DeserializedType<T, 'Edm.Decimal'>;
  logId?: DeserializedType<T, 'Edm.String'> | null;
  businessRelationAccount?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  requestStatus?: McrCatalogStatus | null;
  sourceCode?: DeserializedType<T, 'Edm.String'> | null;
}
