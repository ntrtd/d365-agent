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
import type { RetailTmpCustomerMediasApi } from './RetailTmpCustomerMediasApi';
import { RetailMediaAssociationStatus } from './RetailMediaAssociationStatus';

/**
 * This class represents the entity "RetailTmpCustomerMedias" of service "d365_metadata".
 */
export class RetailTmpCustomerMedias<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTmpCustomerMediasType<T>
{
  /**
   * Technical entity name for RetailTmpCustomerMedias.
   */
  static override _entityName = 'RetailTmpCustomerMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTmpCustomerMedias entity.
   */
  static _keys = ['dataAreaId', 'Customer', 'FileName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer.
   */
  declare customer: DeserializedType<T, 'Edm.String'>;
  /**
   * File Name.
   */
  declare fileName: DeserializedType<T, 'Edm.String'>;
  /**
   * Association Status.
   * @nullable
   */
  declare associationStatus?: RetailMediaAssociationStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTmpCustomerMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTmpCustomerMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customer: DeserializedType<T, 'Edm.String'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  associationStatus?: RetailMediaAssociationStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
}
