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
import type { RetailChannelAttributeGroupsApi } from './RetailChannelAttributeGroupsApi';
import { RetailChannelAttributeModifier } from './RetailChannelAttributeModifier';
import { RetailAttributeAppliesToModifier } from './RetailAttributeAppliesToModifier';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';

/**
 * This class represents the entity "RetailChannelAttributeGroups" of service "d365_metadata".
 */
export class RetailChannelAttributeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelAttributeGroupsType<T>
{
  /**
   * Technical entity name for RetailChannelAttributeGroups.
   */
  static override _entityName = 'RetailChannelAttributeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelAttributeGroups entity.
   */
  static _keys = [
    'OMOperatingUnitNumber',
    'AttributeGroupName',
    'AttributeModifier'
  ];
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Group Name.
   */
  declare attributeGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Modifier.
   * @nullable
   */
  declare attributeModifier?: RetailChannelAttributeModifier | null;
  /**
   * Attribute Applies To Modifier.
   * @nullable
   */
  declare attributeAppliesToModifier?: RetailAttributeAppliesToModifier | null;
  /**
   * One-to-one navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel?: OnlineChannels<T> | null;

  constructor(_entityApi: RetailChannelAttributeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelAttributeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  attributeGroupName: DeserializedType<T, 'Edm.String'>;
  attributeModifier?: RetailChannelAttributeModifier | null;
  attributeAppliesToModifier?: RetailAttributeAppliesToModifier | null;
  onlineChannel?: OnlineChannelsType<T> | null;
}
