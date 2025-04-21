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
import type { RetailRecoListElementsApi } from './RetailRecoListElementsApi';
import { RetailRecoListElementTypeBase } from './RetailRecoListElementTypeBase';

/**
 * This class represents the entity "RetailRecoListElements" of service "d365_metadata".
 */
export class RetailRecoListElements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailRecoListElementsType<T>
{
  /**
   * Technical entity name for RetailRecoListElements.
   */
  static override _entityName = 'RetailRecoListElements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailRecoListElements entity.
   */
  static _keys = ['ListId', 'ElementType', 'ProductNumber'];
  /**
   * List Id.
   */
  declare listId: DeserializedType<T, 'Edm.String'>;
  /**
   * Element Type.
   * @nullable
   */
  declare elementType?: RetailRecoListElementTypeBase | null;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailRecoListElementsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailRecoListElementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  listId: DeserializedType<T, 'Edm.String'>;
  elementType?: RetailRecoListElementTypeBase | null;
  productNumber: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
}
