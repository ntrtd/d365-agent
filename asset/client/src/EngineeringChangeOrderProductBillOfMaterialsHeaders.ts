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
import type { EngineeringChangeOrderProductBillOfMaterialsHeadersApi } from './EngineeringChangeOrderProductBillOfMaterialsHeadersApi';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import { Workers, WorkersType } from './Workers';
import {
  EngineeringChangeOrderProductBillOfMaterialsLines,
  EngineeringChangeOrderProductBillOfMaterialsLinesType
} from './EngineeringChangeOrderProductBillOfMaterialsLines';

/**
 * This class represents the entity "EngineeringChangeOrderProductBillOfMaterialsHeaders" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductBillOfMaterialsHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductBillOfMaterialsHeadersType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductBillOfMaterialsHeaders.
   */
  static override _entityName =
    'EngineeringChangeOrderProductBillOfMaterialsHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductBillOfMaterialsHeaders entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'ProductionSiteId',
    'BOMId'
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
   * Bom Id.
   */
  declare bomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Name.
   * @nullable
   */
  declare bomName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approved.
   */
  declare isApproved: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProduct?: EngineeringChangeOrderProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approverWorker?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsLines} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsLines: EngineeringChangeOrderProductBillOfMaterialsLines<T>[];

  constructor(
    _entityApi: EngineeringChangeOrderProductBillOfMaterialsHeadersApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductBillOfMaterialsHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  bomId: DeserializedType<T, 'Edm.String'>;
  bomName?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isApproved: DeserializedType<T, 'Edm.Boolean'>;
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  approverWorker?: WorkersType<T> | null;
  engineeringChangeOrderProductBillOfMaterialsLines: EngineeringChangeOrderProductBillOfMaterialsLinesType<T>[];
}
