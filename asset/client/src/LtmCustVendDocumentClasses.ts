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
import type { LtmCustVendDocumentClassesApi } from './LtmCustVendDocumentClassesApi';
import { LtmCustVendEntity } from './LtmCustVendEntity';

/**
 * This class represents the entity "LTMCustVendDocumentClasses" of service "d365_metadata".
 */
export class LtmCustVendDocumentClasses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmCustVendDocumentClassesType<T>
{
  /**
   * Technical entity name for LtmCustVendDocumentClasses.
   */
  static override _entityName = 'LTMCustVendDocumentClasses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmCustVendDocumentClasses entity.
   */
  static _keys = [
    'dataAreaId',
    'DocumentClassificationId',
    'AccountTypeGroupId',
    'CustVendEntity'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type Group Id.
   */
  declare accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Vend Entity.
   * @nullable
   */
  declare custVendEntity?: LtmCustVendEntity | null;

  constructor(_entityApi: LtmCustVendDocumentClassesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmCustVendDocumentClassesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  custVendEntity?: LtmCustVendEntity | null;
}
