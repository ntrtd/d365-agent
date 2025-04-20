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
import type { RetailSalesTaxOverrideGroupMembersApi } from './RetailSalesTaxOverrideGroupMembersApi';

/**
 * This class represents the entity "RetailSalesTaxOverrideGroupMembers" of service "d365_metadata".
 */
export class RetailSalesTaxOverrideGroupMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSalesTaxOverrideGroupMembersType<T>
{
  /**
   * Technical entity name for RetailSalesTaxOverrideGroupMembers.
   */
  static override _entityName = 'RetailSalesTaxOverrideGroupMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSalesTaxOverrideGroupMembers entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesTaxOverrideCode',
    'SalesTaxOverrideGroupCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Override Code.
   */
  declare salesTaxOverrideCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Override Group Code.
   */
  declare salesTaxOverrideGroupCode: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailSalesTaxOverrideGroupMembersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSalesTaxOverrideGroupMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTaxOverrideCode: DeserializedType<T, 'Edm.String'>;
  salesTaxOverrideGroupCode: DeserializedType<T, 'Edm.String'>;
}
