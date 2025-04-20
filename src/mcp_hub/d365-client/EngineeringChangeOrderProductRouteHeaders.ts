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
import type { EngineeringChangeOrderProductRouteHeadersApi } from './EngineeringChangeOrderProductRouteHeadersApi';
import { NoYes } from './NoYes';
import {
  EngineeringChangeOrderProductRouteOperations,
  EngineeringChangeOrderProductRouteOperationsType
} from './EngineeringChangeOrderProductRouteOperations';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteHeaders" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductRouteHeadersType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteHeaders.
   */
  static override _entityName = 'EngineeringChangeOrderProductRouteHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'ProductionSiteId'
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
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Name.
   * @nullable
   */
  declare routeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Id.
   * @nullable
   */
  declare routeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperations} entity.
   */
  declare engineeringChangeOrderProductRouteOperations: EngineeringChangeOrderProductRouteOperations<T>[];
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProduct?: EngineeringChangeOrderProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approverWorker?: Workers<T> | null;

  constructor(_entityApi: EngineeringChangeOrderProductRouteHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeName?: DeserializedType<T, 'Edm.String'> | null;
  routeId?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  engineeringChangeOrderProductRouteOperations: EngineeringChangeOrderProductRouteOperationsType<T>[];
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  approverWorker?: WorkersType<T> | null;
}
