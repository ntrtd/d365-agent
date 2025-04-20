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
import type { BillOfMaterialsHeadersApi } from './BillOfMaterialsHeadersApi';
import { NoYes } from './NoYes';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';
import {
  BillOfMaterialsLinesV2,
  BillOfMaterialsLinesV2Type
} from './BillOfMaterialsLinesV2';
import {
  BillOfMaterialsVersions,
  BillOfMaterialsVersionsType
} from './BillOfMaterialsVersions';
import {
  BillOfMaterialsVersionsV3,
  BillOfMaterialsVersionsV3Type
} from './BillOfMaterialsVersionsV3';
import {
  BillOfMaterialsVersionsODataV2,
  BillOfMaterialsVersionsODataV2Type
} from './BillOfMaterialsVersionsODataV2';
import {
  BillOfMaterialsVersionsV4,
  BillOfMaterialsVersionsV4Type
} from './BillOfMaterialsVersionsV4';
import {
  BillOfMaterialsLines,
  BillOfMaterialsLinesType
} from './BillOfMaterialsLines';
import {
  BillOfMaterialsLinesV3,
  BillOfMaterialsLinesV3Type
} from './BillOfMaterialsLinesV3';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "BillOfMaterialsHeaders" of service "d365_metadata".
 */
export class BillOfMaterialsHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillOfMaterialsHeadersType<T>
{
  /**
   * Technical entity name for BillOfMaterialsHeaders.
   */
  static override _entityName = 'BillOfMaterialsHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillOfMaterialsHeaders entity.
   */
  static _keys = ['dataAreaId', 'BOMId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Id.
   */
  declare bomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * Eng Chg Released Product Version.
   */
  declare engChgReleasedProductVersion: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Engineering Version Id.
   * @nullable
   */
  declare engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eng Chg Engineering Bom Reference.
   * @nullable
   */
  declare engChgEngineeringBomReference?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Eng Chg Display Product Number.
   * @nullable
   */
  declare engChgDisplayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsLinesV2} entity.
   */
  declare billOfMaterialsLineV2: BillOfMaterialsLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsLinesV2} entity.
   */
  declare billOfMaterialsLines: BillOfMaterialsLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersions} entity.
   */
  declare billOfMaterialsVersions: BillOfMaterialsVersions<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV3} entity.
   */
  declare billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsODataV2} entity.
   */
  declare billOfMaterialsVersionsV2: BillOfMaterialsVersionsODataV2<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsVersionsV4} entity.
   */
  declare billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsLines} entity.
   */
  declare billOfMaterialsLine: BillOfMaterialsLines<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsLinesV3} entity.
   */
  declare billOfMaterialsLineV3: BillOfMaterialsLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsLinesV3} entity.
   */
  declare billOfMaterialsLines3: BillOfMaterialsLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: BillOfMaterialsHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface BillOfMaterialsHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bomId: DeserializedType<T, 'Edm.String'>;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  bomName?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  engChgReleasedProductVersion: DeserializedType<T, 'Edm.Int64'>;
  engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  engChgEngineeringBomReference?: DeserializedType<T, 'Edm.String'> | null;
  engChgDisplayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  billOfMaterialsLineV2: BillOfMaterialsLinesV2Type<T>[];
  billOfMaterialsLines: BillOfMaterialsLinesV2Type<T>[];
  billOfMaterialsVersions: BillOfMaterialsVersionsType<T>[];
  billOfMaterialsVersionsV3: BillOfMaterialsVersionsV3Type<T>[];
  billOfMaterialsVersionsV2: BillOfMaterialsVersionsODataV2Type<T>[];
  billOfMaterialsVersionsV4: BillOfMaterialsVersionsV4Type<T>[];
  billOfMaterialsLine: BillOfMaterialsLinesType<T>[];
  billOfMaterialsLineV3: BillOfMaterialsLinesV3Type<T>[];
  billOfMaterialsLines3: BillOfMaterialsLinesV3Type<T>[];
  plannedOrders: PlannedOrdersType<T>[];
}
