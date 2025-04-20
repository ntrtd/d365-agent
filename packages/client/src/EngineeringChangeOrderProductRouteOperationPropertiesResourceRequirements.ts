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
import type { EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi } from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi';
import {
  EngineeringChangeOrderProductRouteOperationProperties,
  EngineeringChangeOrderProductRouteOperationPropertiesType
} from './EngineeringChangeOrderProductRouteOperationProperties';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements.
   */
  static override _entityName =
    'EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements entity.
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
    'RouteOperationPropertiesResourceRequirementRecordId'
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
   * Route Operation Properties Resource Requirement Record Id.
   */
  declare routeOperationPropertiesResourceRequirementRecordId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Engineering Change Order Product Route Operation Properties Record Id.
   */
  declare engineeringChangeOrderProductRouteOperationPropertiesRecordId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductRouteOperationProperties} entity.
   */
  declare engineeringChangeOrderProductRouteOperationProperties?: EngineeringChangeOrderProductRouteOperationProperties<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsType<
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
  routeOperationPropertiesResourceRequirementRecordId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  engineeringChangeOrderProductRouteOperationPropertiesRecordId: DeserializedType<
    T,
    'Edm.Int64'
  >;
  engineeringChangeOrderProductRouteOperationProperties?: EngineeringChangeOrderProductRouteOperationPropertiesType<T> | null;
}
