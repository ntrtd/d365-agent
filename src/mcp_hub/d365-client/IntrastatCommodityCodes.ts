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
import type { IntrastatCommodityCodesApi } from './IntrastatCommodityCodesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "IntrastatCommodityCodes" of service "d365_metadata".
 */
export class IntrastatCommodityCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatCommodityCodesType<T>
{
  /**
   * Technical entity name for IntrastatCommodityCodes.
   */
  static override _entityName = 'IntrastatCommodityCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatCommodityCodes entity.
   */
  static _keys = ['CommodityHierarchyName', 'Name'];
  /**
   * Commodity Hierarchy Name.
   */
  declare commodityHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Additional Units.
   * @nullable
   */
  declare additionalUnits?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity.
   * @nullable
   */
  declare commodity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Name.
   * @nullable
   */
  declare parentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Commodity.
   * @nullable
   */
  declare parentCommodity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Parameters Data Area Id.
   * @nullable
   */
  declare intrastatParametersDataAreaId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Optional Weight.
   * @nullable
   */
  declare optionalWeight?: NoYes | null;

  constructor(_entityApi: IntrastatCommodityCodesApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatCommodityCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  commodityHierarchyName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  additionalUnits?: DeserializedType<T, 'Edm.String'> | null;
  commodity?: DeserializedType<T, 'Edm.String'> | null;
  parentName?: DeserializedType<T, 'Edm.String'> | null;
  parentCommodity?: DeserializedType<T, 'Edm.String'> | null;
  intrastatParametersDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  optionalWeight?: NoYes | null;
}
