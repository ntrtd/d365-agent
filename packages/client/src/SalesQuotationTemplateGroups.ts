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
import type { SalesQuotationTemplateGroupsApi } from './SalesQuotationTemplateGroupsApi';

/**
 * This class represents the entity "SalesQuotationTemplateGroups" of service "d365_metadata".
 */
export class SalesQuotationTemplateGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesQuotationTemplateGroupsType<T>
{
  /**
   * Technical entity name for SalesQuotationTemplateGroups.
   */
  static override _entityName = 'SalesQuotationTemplateGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesQuotationTemplateGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Description.
   * @nullable
   */
  declare groupDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesQuotationTemplateGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesQuotationTemplateGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
}
