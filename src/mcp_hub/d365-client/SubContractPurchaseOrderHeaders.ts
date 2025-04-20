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
import type { SubContractPurchaseOrderHeadersApi } from './SubContractPurchaseOrderHeadersApi';
import { ProjSubConState } from './ProjSubConState';
import { PurchStatus } from './PurchStatus';
import { ProjSubconStatus } from './ProjSubconStatus';

/**
 * This class represents the entity "SubContractPurchaseOrderHeaders" of service "d365_metadata".
 */
export class SubContractPurchaseOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubContractPurchaseOrderHeadersType<T>
{
  /**
   * Technical entity name for SubContractPurchaseOrderHeaders.
   */
  static override _entityName = 'SubContractPurchaseOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubContractPurchaseOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'ProjSubContractNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Sub Contract Number.
   */
  declare projSubContractNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sub Con State.
   * @nullable
   */
  declare subConState?: ProjSubConState | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Con Date.
   */
  declare subConDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purch Status.
   * @nullable
   */
  declare purchStatus?: PurchStatus | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sub Con Status.
   * @nullable
   */
  declare subConStatus?: ProjSubconStatus | null;
  /**
   * Order Account.
   * @nullable
   */
  declare orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Con Name.
   * @nullable
   */
  declare subConName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubContractPurchaseOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SubContractPurchaseOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projSubContractNumber: DeserializedType<T, 'Edm.String'>;
  subConState?: ProjSubConState | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  subConDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchStatus?: PurchStatus | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subConStatus?: ProjSubconStatus | null;
  orderAccount?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  subConName?: DeserializedType<T, 'Edm.String'> | null;
}
