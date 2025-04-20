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
import type { CustomerPricingAttributeGroupsApi } from './CustomerPricingAttributeGroupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomerPricingAttributeGroups" of service "d365_metadata".
 */
export class CustomerPricingAttributeGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPricingAttributeGroupsType<T>
{
  /**
   * Technical entity name for CustomerPricingAttributeGroups.
   */
  static override _entityName = 'CustomerPricingAttributeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPricingAttributeGroups entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Friendly Name.
   * @nullable
   */
  declare friendlyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomerPricingAttributeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPricingAttributeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  isValid?: NoYes | null;
  helpText?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  friendlyName?: DeserializedType<T, 'Edm.String'> | null;
}
