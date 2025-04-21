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
import type { IntrastatStatisticProceduresApi } from './IntrastatStatisticProceduresApi';

/**
 * This class represents the entity "IntrastatStatisticProcedures" of service "d365_metadata".
 */
export class IntrastatStatisticProcedures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatStatisticProceduresType<T>
{
  /**
   * Technical entity name for IntrastatStatisticProcedures.
   */
  static override _entityName = 'IntrastatStatisticProcedures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatStatisticProcedures entity.
   */
  static _keys = ['dataAreaId', 'StatisticProcedureId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statistic Procedure Id.
   */
  declare statisticProcedureId: DeserializedType<T, 'Edm.String'>;
  /**
   * Commodity Name.
   * @nullable
   */
  declare commodityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text 1.
   * @nullable
   */
  declare text1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity Hierarchy Name.
   * @nullable
   */
  declare commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text 2.
   * @nullable
   */
  declare text2?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntrastatStatisticProceduresApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatStatisticProceduresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statisticProcedureId: DeserializedType<T, 'Edm.String'>;
  commodityName?: DeserializedType<T, 'Edm.String'> | null;
  text1?: DeserializedType<T, 'Edm.String'> | null;
  commodityHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  text2?: DeserializedType<T, 'Edm.String'> | null;
}
