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
import type { EngineeringChangeOrderProductRouteHeadersV2Api } from './EngineeringChangeOrderProductRouteHeadersV2Api';
import { NoYes } from './NoYes';
import {
  EngineeringChangeOrderProductRouteOperationsV2,
  EngineeringChangeOrderProductRouteOperationsV2Type
} from './EngineeringChangeOrderProductRouteOperationsV2';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import { Workers, WorkersType } from './Workers';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';

/**
 * This class represents the entity "EngineeringChangeOrderProductRouteHeadersV2" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductRouteHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductRouteHeadersV2Type<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductRouteHeadersV2.
   */
  static override _entityName = 'EngineeringChangeOrderProductRouteHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductRouteHeadersV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'CreationSequenceNumber'
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
   * Creation Sequence Number.
   */
  declare creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Reference Id.
   * @nullable
   */
  declare engineeringReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Id.
   * @nullable
   */
  declare routeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Name.
   * @nullable
   */
  declare routeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteOperationsV2} entity.
   */
  declare engineeringChangeOrderProductRouteOperationsV2: EngineeringChangeOrderProductRouteOperationsV2<T>[];
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProduct?: EngineeringChangeOrderProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approverWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3<T> | null;

  constructor(_entityApi: EngineeringChangeOrderProductRouteHeadersV2Api<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductRouteHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  routeId?: DeserializedType<T, 'Edm.String'> | null;
  routeName?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductRouteOperationsV2: EngineeringChangeOrderProductRouteOperationsV2Type<T>[];
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  approverWorker?: WorkersType<T> | null;
  engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2Type<T> | null;
  engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3Type<T> | null;
}
