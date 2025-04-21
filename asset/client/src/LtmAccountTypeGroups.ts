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
import type { LtmAccountTypeGroupsApi } from './LtmAccountTypeGroupsApi';
import { LtmCustVendEntity } from './LtmCustVendEntity';

/**
 * This class represents the entity "LTMAccountTypeGroups" of service "d365_metadata".
 */
export class LtmAccountTypeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmAccountTypeGroupsType<T>
{
  /**
   * Technical entity name for LtmAccountTypeGroups.
   */
  static override _entityName = 'LTMAccountTypeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmAccountTypeGroups entity.
   */
  static _keys = ['dataAreaId', 'AccountTypeGroupId', 'CustVendEntity'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type Group Id.
   */
  declare accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Vend Entity.
   * @nullable
   */
  declare custVendEntity?: LtmCustVendEntity | null;
  /**
   * Account Type Group Description.
   * @nullable
   */
  declare accountTypeGroupDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: LtmAccountTypeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmAccountTypeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountTypeGroupId: DeserializedType<T, 'Edm.String'>;
  custVendEntity?: LtmCustVendEntity | null;
  accountTypeGroupDescription?: DeserializedType<T, 'Edm.String'> | null;
}
