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
import type { EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api } from './EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api';
import { NoYes } from './NoYes';
import {
  EngineeringChangeOrderProductBillOfMaterialsLinesV2,
  EngineeringChangeOrderProductBillOfMaterialsLinesV2Type
} from './EngineeringChangeOrderProductBillOfMaterialsLinesV2';
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
 * This class represents the entity "EngineeringChangeOrderProductBillOfMaterialsHeadersV2" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductBillOfMaterialsHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductBillOfMaterialsHeadersV2.
   */
  static override _entityName =
    'EngineeringChangeOrderProductBillOfMaterialsHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductBillOfMaterialsHeadersV2 entity.
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
   * Bom Id.
   * @nullable
   */
  declare bomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Production Site Id.
   * @nullable
   */
  declare productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Personnel Number.
   * @nullable
   */
  declare approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Name.
   * @nullable
   */
  declare bomName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Approved.
   */
  declare isApproved: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Engineering Bom Reference.
   * @nullable
   */
  declare engineeringBomReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsLinesV2: EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>[];
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

  constructor(
    _entityApi: EngineeringChangeOrderProductBillOfMaterialsHeadersV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  bomId?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  bomName?: DeserializedType<T, 'Edm.String'> | null;
  isApproved: DeserializedType<T, 'Edm.Boolean'>;
  engineeringBomReference?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductBillOfMaterialsLinesV2: EngineeringChangeOrderProductBillOfMaterialsLinesV2Type<T>[];
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  approverWorker?: WorkersType<T> | null;
  engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2Type<T> | null;
  engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3Type<T> | null;
}
