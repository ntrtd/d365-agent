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
import type { RetailEcoResCategoryHierarchyApi } from './RetailEcoResCategoryHierarchyApi';
import { EcoResCategoryHierarchyModifier } from './EcoResCategoryHierarchyModifier';

/**
 * This class represents the entity "RetailEcoResCategoryHierarchy" of service "d365_metadata".
 */
export class RetailEcoResCategoryHierarchy<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEcoResCategoryHierarchyType<T>
{
  /**
   * Technical entity name for RetailEcoResCategoryHierarchy.
   */
  static override _entityName = 'RetailEcoResCategoryHierarchy';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEcoResCategoryHierarchy entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Ax Rec Id.
   */
  declare axRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Hierarchy Modifier.
   * @nullable
   */
  declare hierarchyModifier?: EcoResCategoryHierarchyModifier | null;

  constructor(_entityApi: RetailEcoResCategoryHierarchyApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEcoResCategoryHierarchyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  axRecId: DeserializedType<T, 'Edm.Int64'>;
  hierarchyModifier?: EcoResCategoryHierarchyModifier | null;
}
