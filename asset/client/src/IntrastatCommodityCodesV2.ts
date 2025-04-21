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
import type { IntrastatCommodityCodesV2Api } from './IntrastatCommodityCodesV2Api';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "IntrastatCommodityCodesV2" of service "d365_metadata".
 */
export class IntrastatCommodityCodesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatCommodityCodesV2Type<T>
{
  /**
   * Technical entity name for IntrastatCommodityCodesV2.
   */
  static override _entityName = 'IntrastatCommodityCodesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatCommodityCodesV2 entity.
   */
  static _keys = [
    'CommodityHierarchyName',
    'Name',
    'IntrastatParametersDataAreaId'
  ];
  /**
   * Commodity Hierarchy Name.
   */
  declare commodityHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Intrastat Parameters Data Area Id.
   */
  declare intrastatParametersDataAreaId: DeserializedType<T, 'Edm.String'>;
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
   * Optional Weight.
   * @nullable
   */
  declare optionalWeight?: NoYes | null;

  constructor(_entityApi: IntrastatCommodityCodesV2Api<T>) {
    super(_entityApi);
  }
}

export interface IntrastatCommodityCodesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  commodityHierarchyName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  intrastatParametersDataAreaId: DeserializedType<T, 'Edm.String'>;
  additionalUnits?: DeserializedType<T, 'Edm.String'> | null;
  commodity?: DeserializedType<T, 'Edm.String'> | null;
  parentName?: DeserializedType<T, 'Edm.String'> | null;
  parentCommodity?: DeserializedType<T, 'Edm.String'> | null;
  optionalWeight?: NoYes | null;
}
