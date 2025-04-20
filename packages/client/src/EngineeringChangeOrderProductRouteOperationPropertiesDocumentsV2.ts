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
import type { EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api } from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import { RouteOprPriority } from './RouteOprPriority';
import {
  EngineeringChangeOrderProductRouteOperationPropertiesV2,
  EngineeringChangeOrderProductRouteOperationPropertiesV2Type
} from './EngineeringChangeOrderProductRouteOperationPropertiesV2';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Type<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2.
   */
  static override _entityName =
    'EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber',
    'EngineeringChangeOrderProductRouteOperationId',
    'EngineeringChangeOrderProductRouteOperationNumber',
    'EngineeringChangeOrderProductRouteOperationChangeType',
    'EngineeringChangeOrderProductRouteOperationPriority',
    'EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId',
    'EngineeringChangeOrderProductRouteOperationPropertiesRouteId',
    'EngineeringChangeOrderProductRouteOperationPropertiesItemNumber',
    'EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId',
    'EngineeringChangeOrderProductRouteOperationPropertiesChangeType',
    'DocumentId'
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
   * Engineering Change Order Product Route Operation Id.
   */
  declare engineeringChangeOrderProductRouteOperationId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Change Order Product Route Operation Number.
   */
  declare engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Engineering Change Order Product Route Operation Change Type.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteOperationChangeType?: EngChgEcmChangeTypes | null;
  /**
   * Engineering Change Order Product Route Operation Priority.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority | null;
  /**
   * Engineering Change Order Product Route Operation Properties Product Configuration Id.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Change Order Product Route Operation Properties Route Id.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesRouteId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Change Order Product Route Operation Properties Item Number.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesItemNumber: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Change Order Product Route Operation Properties Product Group Id.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesProductGroupId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Change Order Product Route Operation Properties Change Type.
   * @nullable
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesChangeType?: EngChgEcmChangeTypes | null;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Modification Type.
   * @nullable
   */
  declare documentModificationType?: EngChgEcmChangeTypes | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductRouteOperationPropertiesV2} entity.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesV2?: EngineeringChangeOrderProductRouteOperationPropertiesV2<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteHeaderCreationSequenceNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  engineeringChangeOrderProductRouteOperationId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
  engineeringChangeOrderProductRouteOperationChangeType?: EngChgEcmChangeTypes | null;
  engineeringChangeOrderProductRouteOperationPriority?: RouteOprPriority | null;
  engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationPropertiesRouteId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationPropertiesItemNumber: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationPropertiesProductGroupId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationPropertiesChangeType?: EngChgEcmChangeTypes | null;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  documentModificationType?: EngChgEcmChangeTypes | null;
  engineeringChangeOrderProductRouteOperationPropertiesV2?: EngineeringChangeOrderProductRouteOperationPropertiesV2Type<T> | null;
}
