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
import type { EngineeringOrganizationsApi } from './EngineeringOrganizationsApi';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';

/**
 * This class represents the entity "EngineeringOrganizations" of service "d365_metadata".
 */
export class EngineeringOrganizations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringOrganizationsType<T>
{
  /**
   * Technical entity name for EngineeringOrganizations.
   */
  static override _entityName = 'EngineeringOrganizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringOrganizations entity.
   */
  static _keys = ['EngineeringOrganizationId'];
  /**
   * Engineering Organization Id.
   */
  declare engineeringOrganizationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Party Number.
   * @nullable
   */
  declare organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare engineeringProductCategoryDetails: EngineeringProductCategoryDetails<T>[];

  constructor(_entityApi: EngineeringOrganizationsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringOrganizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringOrganizationId: DeserializedType<T, 'Edm.String'>;
  organizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductCategoryDetails: EngineeringProductCategoryDetailsType<T>[];
}
