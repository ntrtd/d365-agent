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
import type { RetailInternalOrganizationAttributeGroupsApi } from './RetailInternalOrganizationAttributeGroupsApi';
import { AttributeGroups, AttributeGroupsType } from './AttributeGroups';
import {
  RetailInternalOrganizations,
  RetailInternalOrganizationsType
} from './RetailInternalOrganizations';

/**
 * This class represents the entity "RetailInternalOrganizationAttributeGroups" of service "d365_metadata".
 */
export class RetailInternalOrganizationAttributeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInternalOrganizationAttributeGroupsType<T>
{
  /**
   * Technical entity name for RetailInternalOrganizationAttributeGroups.
   */
  static override _entityName = 'RetailInternalOrganizationAttributeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInternalOrganizationAttributeGroups entity.
   */
  static _keys = ['PartyNumber', 'AttributeGroupName'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Group Name.
   */
  declare attributeGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Group Display Order.
   */
  declare attributeGroupDisplayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link AttributeGroups} entity.
   */
  declare attributeGroup?: AttributeGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailInternalOrganizations} entity.
   */
  declare retailInternalOrganization?: RetailInternalOrganizations<T> | null;

  constructor(_entityApi: RetailInternalOrganizationAttributeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInternalOrganizationAttributeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  attributeGroupName: DeserializedType<T, 'Edm.String'>;
  attributeGroupDisplayOrder: DeserializedType<T, 'Edm.Decimal'>;
  attributeGroup?: AttributeGroupsType<T> | null;
  retailInternalOrganization?: RetailInternalOrganizationsType<T> | null;
}
