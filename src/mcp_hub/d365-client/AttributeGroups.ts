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
import type { AttributeGroupsApi } from './AttributeGroupsApi';
import {
  RetailInternalOrganizationAttributeGroups,
  RetailInternalOrganizationAttributeGroupsType
} from './RetailInternalOrganizationAttributeGroups';
import {
  RetailInternalOrganizationProductAttributeValues,
  RetailInternalOrganizationProductAttributeValuesType
} from './RetailInternalOrganizationProductAttributeValues';

/**
 * This class represents the entity "AttributeGroups" of service "d365_metadata".
 */
export class AttributeGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AttributeGroupsType<T>
{
  /**
   * Technical entity name for AttributeGroups.
   */
  static override _entityName = 'AttributeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AttributeGroups entity.
   */
  static _keys = ['GroupName'];
  /**
   * Group Name.
   */
  declare groupName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationAttributeGroups} entity.
   */
  declare retailInternalOrganizationAttributeGroup: RetailInternalOrganizationAttributeGroups<T>[];
  /**
   * One-to-many navigation property to the {@link RetailInternalOrganizationProductAttributeValues} entity.
   */
  declare retailInternalOrganizationProductAttributeValue: RetailInternalOrganizationProductAttributeValues<T>[];

  constructor(_entityApi: AttributeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AttributeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupName: DeserializedType<T, 'Edm.String'>;
  retailInternalOrganizationAttributeGroup: RetailInternalOrganizationAttributeGroupsType<T>[];
  retailInternalOrganizationProductAttributeValue: RetailInternalOrganizationProductAttributeValuesType<T>[];
}
