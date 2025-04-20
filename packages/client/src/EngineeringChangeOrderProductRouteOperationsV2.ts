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
import type { EngineeringChangeOrderProductRouteOperationsV2Api } from './EngineeringChangeOrderProductRouteOperationsV2Api';
import { RouteOprPriority } from './RouteOprPriority';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { SchedJobLinkType } from './SchedJobLinkType';
import {
  EngineeringChangeOrderProductRouteHeadersV2,
  EngineeringChangeOrderProductRouteHeadersV2Type
} from './EngineeringChangeOrderProductRouteHeadersV2';
import {
  EngineeringChangeOrderProductRouteOperationPropertiesV2,
  EngineeringChangeOrderProductRouteOperationPropertiesV2Type
} from './EngineeringChangeOrderProductRouteOperationPropertiesV2';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteOperationsV2" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteOperationsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductRouteOperationsV2Type<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteOperationsV2.
   */
  static override _entityName =
    'EngineeringChangeOrderProductRouteOperationsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteOperationsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber',
    'OperationNumber',
    'OperationPriority',
    'ChangeType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
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
   * Engineering Change Order Product Route Header Creation Sequence Number.
   */
  declare engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
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
   * Change Type.
   * @nullable
   */
  declare changeType?: EngChgEcmChangeTypes | null;
  /**
   * Operation Rate Method.
   * @nullable
   */
  declare operationRateMethod?: JmgJobPayTypeEnum | null;
  /**
   * Engineering Change Order Product Route Id.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Operation Id.
   * @nullable
   */
  declare operationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accumulated Scrap Percentage.
   */
  declare accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductRouteHeadersV2} entity.
   */
  declare engineeringChangeOrderProductRouteHeaderV2?: EngineeringChangeOrderProductRouteHeadersV2<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperationPropertiesV2} entity.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesV2: EngineeringChangeOrderProductRouteOperationPropertiesV2<T>[];

  constructor(
    _entityApi: EngineeringChangeOrderProductRouteOperationsV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteOperationsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  operationPriority?: RouteOprPriority | null;
  changeType?: EngChgEcmChangeTypes | null;
  operationRateMethod?: JmgJobPayTypeEnum | null;
  engineeringChangeOrderProductRouteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  nextOperationLinkType?: SchedJobLinkType | null;
  operationSequence: DeserializedType<T, 'Edm.Int32'>;
  scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  nextRouteOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  operationId?: DeserializedType<T, 'Edm.String'> | null;
  accumulatedScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteHeaderV2?: EngineeringChangeOrderProductRouteHeadersV2Type<T> | null;
  engineeringChangeOrderProductRouteOperationPropertiesV2: EngineeringChangeOrderProductRouteOperationPropertiesV2Type<T>[];
}
