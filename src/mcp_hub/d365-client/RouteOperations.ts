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
import type { RouteOperationsApi } from './RouteOperationsApi';
import { SchedJobLinkType } from './SchedJobLinkType';
import { Operations, OperationsType } from './Operations';
import { RouteHeaders, RouteHeadersType } from './RouteHeaders';

/**
 * This class represents the entity "RouteOperations" of service "d365_metadata".
 */
export class RouteOperations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RouteOperationsType<T>
{
  /**
   * Technical entity name for RouteOperations.
   */
  static override _entityName = 'RouteOperations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RouteOperations entity.
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
   */
  declare operationPriority: DeserializedType<T, 'Edm.Int32'>;
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
   * Next Operation Attachment Type.
   * @nullable
   */
  declare nextOperationAttachmentType?: SchedJobLinkType | null;
  /**
   * Operation Id.
   * @nullable
   */
  declare operationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Operations} entity.
   */
  declare operation?: Operations<T> | null;
  /**
   * One-to-one navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeader?: RouteHeaders<T> | null;

  constructor(_entityApi: RouteOperationsApi<T>) {
    super(_entityApi);
  }
}

export interface RouteOperationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  routeId: DeserializedType<T, 'Edm.String'>;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  operationPriority: DeserializedType<T, 'Edm.Int32'>;
  accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  nextRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  nextOperationAttachmentType?: SchedJobLinkType | null;
  operationId?: DeserializedType<T, 'Edm.String'> | null;
  operation?: OperationsType<T> | null;
  routeHeader?: RouteHeadersType<T> | null;
}
