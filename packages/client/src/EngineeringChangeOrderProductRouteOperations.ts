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
import type { EngineeringChangeOrderProductRouteOperationsApi } from './EngineeringChangeOrderProductRouteOperationsApi';
import { RouteOprPriority } from './RouteOprPriority';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { SchedJobLinkType } from './SchedJobLinkType';
import {
  EngineeringChangeOrderProductRouteHeaders,
  EngineeringChangeOrderProductRouteHeadersType
} from './EngineeringChangeOrderProductRouteHeaders';
import {
  EngineeringChangeOrderProductRouteOperationProperties,
  EngineeringChangeOrderProductRouteOperationPropertiesType
} from './EngineeringChangeOrderProductRouteOperationProperties';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteOperations" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteOperations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductRouteOperationsType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteOperations.
   */
  static override _entityName = 'EngineeringChangeOrderProductRouteOperations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteOperations entity.
   */
  static _keys = [
    'dataAreaId',
    'OperationId',
    'OperationNumber',
    'EngineeringChangeOrderProductRouteId',
    'OperationPriority',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Id.
   */
  declare operationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Number.
   */
  declare operationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Engineering Change Order Product Route Id.
   */
  declare engineeringChangeOrderProductRouteId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Operation Priority.
   * @nullable
   */
  declare operationPriority?: RouteOprPriority | null;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Operation Rate Method.
   * @nullable
   */
  declare operationRateMethod?: JmgJobPayTypeEnum | null;
  /**
   * Next Operation Link Type.
   * @nullable
   */
  declare nextOperationLinkType?: SchedJobLinkType | null;
  /**
   * Operation Sequence.
   */
  declare operationSequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scrap Percentage.
   */
  declare scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Next Route Operation Number.
   */
  declare nextRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Engineering Change Order Product Route Production Site Id.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteProductionSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accumulated Scrap Percentage.
   */
  declare accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductRouteHeaders} entity.
   */
  declare engineeringChangeOrderProductRouteHeader?: EngineeringChangeOrderProductRouteHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperationProperties} entity.
   */
  declare engineeringChangeOrderProductRouteOperationProperties: EngineeringChangeOrderProductRouteOperationProperties<T>[];

  constructor(_entityApi: EngineeringChangeOrderProductRouteOperationsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteOperationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operationId: DeserializedType<T, 'Edm.String'>;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  engineeringChangeOrderProductRouteId: DeserializedType<T, 'Edm.String'>;
  operationPriority?: RouteOprPriority | null;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operationRateMethod?: JmgJobPayTypeEnum | null;
  nextOperationLinkType?: SchedJobLinkType | null;
  operationSequence: DeserializedType<T, 'Edm.Int32'>;
  scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  nextRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  engineeringChangeOrderProductRouteProductionSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteHeader?: EngineeringChangeOrderProductRouteHeadersType<T> | null;
  engineeringChangeOrderProductRouteOperationProperties: EngineeringChangeOrderProductRouteOperationPropertiesType<T>[];
}
