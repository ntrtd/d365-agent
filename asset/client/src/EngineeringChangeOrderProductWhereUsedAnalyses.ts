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
import type { EngineeringChangeOrderProductWhereUsedAnalysesApi } from './EngineeringChangeOrderProductWhereUsedAnalysesApi';
import { EngChgEcmWhereUsedStatusType } from './EngChgEcmWhereUsedStatusType';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "EngineeringChangeOrderProductWhereUsedAnalyses" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductWhereUsedAnalyses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductWhereUsedAnalysesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductWhereUsedAnalyses.
   */
  static override _entityName =
    'EngineeringChangeOrderProductWhereUsedAnalyses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductWhereUsedAnalyses entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderProductLineNumber',
    'UsedInProductNumber',
    'EngineeringChangeOrderNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Used In Product Number.
   */
  declare usedInProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reviewer Personnel Number.
   * @nullable
   */
  declare reviewerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Used Product Analysis Status.
   * @nullable
   */
  declare usedProductAnalysisStatus?: EngChgEcmWhereUsedStatusType | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare usedInProduct?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProduct?: EngineeringChangeOrderProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare reviewerWorker?: Workers<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductWhereUsedAnalysesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductWhereUsedAnalysesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  usedInProductNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  reviewerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  usedProductAnalysisStatus?: EngChgEcmWhereUsedStatusType | null;
  usedInProduct?: ProductsV2Type<T> | null;
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2Type<T> | null;
  engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3Type<T> | null;
  reviewerWorker?: WorkersType<T> | null;
}
