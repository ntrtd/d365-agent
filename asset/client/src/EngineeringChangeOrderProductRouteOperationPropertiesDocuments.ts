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
import type { EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi } from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import {
  EngineeringChangeOrderProductRouteOperationProperties,
  EngineeringChangeOrderProductRouteOperationPropertiesType
} from './EngineeringChangeOrderProductRouteOperationProperties';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteOperationPropertiesDocuments" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesDocuments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteOperationPropertiesDocuments.
   */
  static override _entityName =
    'EngineeringChangeOrderProductRouteOperationPropertiesDocuments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteOperationPropertiesDocuments entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EngineeringChangeOrderProductRouteHeaderProductionSiteId',
    'EngineeringChangeOrderProductRouteOperationId',
    'EngineeringChangeOrderProductRouteOperationNumber',
    'EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId',
    'EngineeringChangeOrderProductRouteOperationPropertiesRouteId',
    'EngineeringChangeOrderProductRouteOperationPropertiesItemNumber',
    'EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId',
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
   * Engineering Change Order Product Route Header Production Site Id.
   */
  declare engineeringChangeOrderProductRouteHeaderProductionSiteId: DeserializedType<
    T,
    'Edm.String'
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
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductRouteOperationProperties} entity.
   */
  declare engineeringChangeOrderProductRouteOperationProperties?: EngineeringChangeOrderProductRouteOperationProperties<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteOperationPropertiesDocumentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductRouteHeaderProductionSiteId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationId: DeserializedType<
    T,
    'Edm.String'
  >;
  engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
    T,
    'Edm.Int32'
  >;
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
  documentId: DeserializedType<T, 'Edm.Guid'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  documentModificationType?: EngChgEcmChangeTypes | null;
  engineeringChangeOrderProductRouteOperationProperties?: EngineeringChangeOrderProductRouteOperationPropertiesType<T> | null;
}
