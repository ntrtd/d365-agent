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
import type { ApprovalCategoriesApi } from './ApprovalCategoriesApi';

/**
 * This class represents the entity "ApprovalCategories" of service "d365_metadata".
 */
export class ApprovalCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApprovalCategoriesType<T>
{
  /**
   * Technical entity name for ApprovalCategories.
   */
  static override _entityName = 'ApprovalCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalCategories entity.
   */
  static _keys = ['ReferenceTableId'];
  /**
   * Reference Table Id.
   */
  declare referenceTableId: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: ApprovalCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  referenceTableId: DeserializedType<T, 'Edm.Int32'>;
}
