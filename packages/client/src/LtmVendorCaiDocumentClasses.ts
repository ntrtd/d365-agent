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
import type { LtmVendorCaiDocumentClassesApi } from './LtmVendorCaiDocumentClassesApi';

/**
 * This class represents the entity "LTMVendorCAIDocumentClasses" of service "d365_metadata".
 */
export class LtmVendorCaiDocumentClasses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmVendorCaiDocumentClassesType<T>
{
  /**
   * Technical entity name for LtmVendorCaiDocumentClasses.
   */
  static override _entityName = 'LTMVendorCAIDocumentClasses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmVendorCaiDocumentClasses entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountNum',
    'CAI',
    'DocumentClassificationId'
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
   * Cai.
   */
  declare cai: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LtmVendorCaiDocumentClassesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmVendorCaiDocumentClassesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountNum: DeserializedType<T, 'Edm.String'>;
  cai: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
}
