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
import type { RetailAssortmentProductLinesApi } from './RetailAssortmentProductLinesApi';
import { RetailAssortmentStatusType } from './RetailAssortmentStatusType';
import { RetailAssortmentExcludeIncludeType } from './RetailAssortmentExcludeIncludeType';

/**
 * This class represents the entity "RetailAssortmentProductLines" of service "d365_metadata".
 */
export class RetailAssortmentProductLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailAssortmentProductLinesType<T>
{
  /**
   * Technical entity name for RetailAssortmentProductLines.
   */
  static override _entityName = 'RetailAssortmentProductLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAssortmentProductLines entity.
   */
  static _keys = ['AssortmentId', 'LineNumber', 'Status'];
  /**
   * Assortment Id.
   */
  declare assortmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailAssortmentStatusType | null;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Data Area Id.
   * @nullable
   */
  declare sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Color.
   * @nullable
   */
  declare color?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Configuration Id.
   * @nullable
   */
  declare configurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RetailAssortmentExcludeIncludeType | null;
  /**
   * Category Hierarchy Name.
   * @nullable
   */
  declare categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Style.
   * @nullable
   */
  declare style?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailAssortmentProductLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAssortmentProductLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  assortmentId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  status?: RetailAssortmentStatusType | null;
  size?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  color?: DeserializedType<T, 'Edm.String'> | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  configurationId?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: RetailAssortmentExcludeIncludeType | null;
  categoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  style?: DeserializedType<T, 'Edm.String'> | null;
}
