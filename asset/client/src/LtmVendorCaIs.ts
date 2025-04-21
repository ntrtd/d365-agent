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
import type { LtmVendorCaIsApi } from './LtmVendorCaIsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMVendorCAIs" of service "d365_metadata".
 */
export class LtmVendorCaIs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmVendorCaIsType<T>
{
  /**
   * Technical entity name for LtmVendorCaIs.
   */
  static override _entityName = 'LTMVendorCAIs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmVendorCaIs entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountNum',
    'CAIDateFrom',
    'CAIDateTo',
    'CAI',
    'CAIDocNumFrom',
    'CAIDocNumTo',
    'SalesPointId',
    'DocumentClassificationLetterId',
    'CAISuspended'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Num.
   */
  declare accountNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Cai Date From.
   */
  declare caiDateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cai Date To.
   */
  declare caiDateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cai.
   */
  declare cai: DeserializedType<T, 'Edm.String'>;
  /**
   * Cai Doc Num From.
   */
  declare caiDocNumFrom: DeserializedType<T, 'Edm.String'>;
  /**
   * Cai Doc Num To.
   */
  declare caiDocNumTo: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Point Id.
   */
  declare salesPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Letter Id.
   */
  declare documentClassificationLetterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cai Suspended.
   * @nullable
   */
  declare caiSuspended?: NoYes | null;

  constructor(_entityApi: LtmVendorCaIsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmVendorCaIsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountNum: DeserializedType<T, 'Edm.String'>;
  caiDateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  caiDateTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cai: DeserializedType<T, 'Edm.String'>;
  caiDocNumFrom: DeserializedType<T, 'Edm.String'>;
  caiDocNumTo: DeserializedType<T, 'Edm.String'>;
  salesPointId: DeserializedType<T, 'Edm.String'>;
  documentClassificationLetterId: DeserializedType<T, 'Edm.String'>;
  caiSuspended?: NoYes | null;
}
