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
import type { RouteOperationsV2Api } from './RouteOperationsV2Api';
import { RouteOprPriority } from './RouteOprPriority';
import { SchedJobLinkType } from './SchedJobLinkType';

/**
 * This class represents the entity "RouteOperationsV2" of service "d365_metadata".
 */
export class RouteOperationsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RouteOperationsV2Type<T>
{
  /**
   * Technical entity name for RouteOperationsV2.
   */
  static override _entityName = 'RouteOperationsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RouteOperationsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'RouteId',
    'OperationNumber',
    'OperationPriority'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Route Id.
   */
  declare routeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Number.
   */
  declare operationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Operation Priority.
   * @nullable
   */
  declare operationPriority?: RouteOprPriority | null;
  /**
   * Accumulated Scrap Percentage.
   */
  declare accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Next Route Operation Number.
   */
  declare nextRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scrap Percentage.
   */
  declare scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Next Operation Link Type.
   * @nullable
   */
  declare nextOperationLinkType?: SchedJobLinkType | null;
  /**
   * Operation Id.
   * @nullable
   */
  declare operationId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RouteOperationsV2Api<T>) {
    super(_entityApi);
  }
}

export interface RouteOperationsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  routeId: DeserializedType<T, 'Edm.String'>;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  operationPriority?: RouteOprPriority | null;
  accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  nextRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  nextOperationLinkType?: SchedJobLinkType | null;
  operationId?: DeserializedType<T, 'Edm.String'> | null;
}
