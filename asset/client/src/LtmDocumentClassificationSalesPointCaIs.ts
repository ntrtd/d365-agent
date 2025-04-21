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
import type { LtmDocumentClassificationSalesPointCaIsApi } from './LtmDocumentClassificationSalesPointCaIsApi';
import { LtmAccountType } from './LtmAccountType';

/**
 * This class represents the entity "LTMDocumentClassificationSalesPointCAIs" of service "d365_metadata".
 */
export class LtmDocumentClassificationSalesPointCaIs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationSalesPointCaIsType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationSalesPointCaIs.
   */
  static override _entityName = 'LTMDocumentClassificationSalesPointCAIs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationSalesPointCaIs entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountType',
    'DocumentClassificationId',
    'SalesPointId',
    'CaiCae'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LtmAccountType | null;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Point Id.
   */
  declare salesPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cai Cae.
   */
  declare caiCae: DeserializedType<T, 'Edm.String'>;
  /**
   * Doc Num To.
   * @nullable
   */
  declare docNumTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date To.
   */
  declare dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ca Additional.
   * @nullable
   */
  declare caAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Num From.
   * @nullable
   */
  declare docNumFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date From.
   */
  declare dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: LtmDocumentClassificationSalesPointCaIsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationSalesPointCaIsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountType?: LtmAccountType | null;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  salesPointId: DeserializedType<T, 'Edm.String'>;
  caiCae: DeserializedType<T, 'Edm.String'>;
  docNumTo?: DeserializedType<T, 'Edm.String'> | null;
  dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  caAdditional?: DeserializedType<T, 'Edm.String'> | null;
  docNumFrom?: DeserializedType<T, 'Edm.String'> | null;
  dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
