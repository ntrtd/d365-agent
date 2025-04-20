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
import type { PricingAttributeGroupsApi } from './PricingAttributeGroupsApi';
import { NoYes } from './NoYes';
import { GupPricingAttributeSourceLevel } from './GupPricingAttributeSourceLevel';
import {
  PricingAttributeLinks,
  PricingAttributeLinksType
} from './PricingAttributeLinks';

/**
 * This class represents the entity "PricingAttributeGroups" of service "d365_metadata".
 */
export class PricingAttributeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PricingAttributeGroupsType<T>
{
  /**
   * Technical entity name for PricingAttributeGroups.
   */
  static override _entityName = 'PricingAttributeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PricingAttributeGroups entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Valid.
   * @nullable
   */
  declare isValid?: NoYes | null;
  /**
   * Help Text.
   * @nullable
   */
  declare helpText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Level.
   * @nullable
   */
  declare sourceLevel?: GupPricingAttributeSourceLevel | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Friendly Name.
   * @nullable
   */
  declare friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PricingAttributeLinks} entity.
   */
  declare gupPricingAttributeLink: PricingAttributeLinks<T>[];

  constructor(_entityApi: PricingAttributeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface PricingAttributeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  isValid?: NoYes | null;
  helpText?: DeserializedType<T, 'Edm.String'> | null;
  sourceLevel?: GupPricingAttributeSourceLevel | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  gupPricingAttributeLink: PricingAttributeLinksType<T>[];
}
