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
import type { WithholdItemGroupsApi } from './WithholdItemGroupsApi';

/**
 * This class represents the entity "WithholdItemGroups" of service "d365_metadata".
 */
export class WithholdItemGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdItemGroupsType<T>
{
  /**
   * Technical entity name for WithholdItemGroups.
   */
  static override _entityName = 'WithholdItemGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdItemGroups entity.
   */
  static _keys = ['dataAreaId', 'TaxWithholdItemGroup', 'TaxWithholdCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Item Group.
   */
  declare taxWithholdItemGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Code.
   */
  declare taxWithholdCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Revenue Code.
   * @nullable
   */
  declare taxWithholdRevenueCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdItemGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdItemGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxWithholdItemGroup: DeserializedType<T, 'Edm.String'>;
  taxWithholdCode: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdRevenueCode?: DeserializedType<T, 'Edm.String'> | null;
}
