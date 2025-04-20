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
import type { SalesOrderPoolsApi } from './SalesOrderPoolsApi';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';

/**
 * This class represents the entity "SalesOrderPools" of service "d365_metadata".
 */
export class SalesOrderPools<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderPoolsType<T>
{
  /**
   * Technical entity name for SalesOrderPools.
   */
  static override _entityName = 'SalesOrderPools';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesOrderPools entity.
   */
  static _keys = ['dataAreaId', 'PoolId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pool Id.
   */
  declare poolId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pool Name.
   * @nullable
   */
  declare poolName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];

  constructor(_entityApi: SalesOrderPoolsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderPoolsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  poolId: DeserializedType<T, 'Edm.String'>;
  poolName?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
}
