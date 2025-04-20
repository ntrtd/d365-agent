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
import type { RetailInfocodeCategorySpecificsApi } from './RetailInfocodeCategorySpecificsApi';
import { NoYes } from './NoYes';
import { RetailNoneAlwaysPositiveNegative } from './RetailNoneAlwaysPositiveNegative';

/**
 * This class represents the entity "RetailInfocodeCategorySpecifics" of service "d365_metadata".
 */
export class RetailInfocodeCategorySpecifics<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInfocodeCategorySpecificsType<T>
{
  /**
   * Technical entity name for RetailInfocodeCategorySpecifics.
   */
  static override _entityName = 'RetailInfocodeCategorySpecifics';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInfocodeCategorySpecifics entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductCategoryHierarchyName',
    'CategoryName',
    'InfoCodeNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Category Hierarchy Name.
   */
  declare productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Info Code Number.
   */
  declare infoCodeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Input Required.
   * @nullable
   */
  declare inputRequired?: NoYes | null;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * When Required.
   * @nullable
   */
  declare whenRequired?: RetailNoneAlwaysPositiveNegative | null;

  constructor(_entityApi: RetailInfocodeCategorySpecificsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInfocodeCategorySpecificsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  infoCodeNumber: DeserializedType<T, 'Edm.String'>;
  inputRequired?: NoYes | null;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  whenRequired?: RetailNoneAlwaysPositiveNegative | null;
}
