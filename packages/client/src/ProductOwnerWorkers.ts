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
import type { ProductOwnerWorkersApi } from './ProductOwnerWorkersApi';
import { ProductOwners, ProductOwnersType } from './ProductOwners';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "ProductOwnerWorkers" of service "d365_metadata".
 */
export class ProductOwnerWorkers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductOwnerWorkersType<T>
{
  /**
   * Technical entity name for ProductOwnerWorkers.
   */
  static override _entityName = 'ProductOwnerWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductOwnerWorkers entity.
   */
  static _keys = ['ProductOwnerId', 'AssignedPersonnelNumber'];
  /**
   * Product Owner Id.
   */
  declare productOwnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Assigned Personnel Number.
   */
  declare assignedPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ProductOwners} entity.
   */
  declare productOwner?: ProductOwners<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare assignedWorker?: Workers<T> | null;

  constructor(_entityApi: ProductOwnerWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface ProductOwnerWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productOwnerId: DeserializedType<T, 'Edm.String'>;
  assignedPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  productOwner?: ProductOwnersType<T> | null;
  assignedWorker?: WorkersType<T> | null;
}
