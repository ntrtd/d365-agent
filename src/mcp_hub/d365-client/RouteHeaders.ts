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
import type { RouteHeadersApi } from './RouteHeadersApi';
import { NoYes } from './NoYes';
import {
  SupplyForecastEntries,
  SupplyForecastEntriesType
} from './SupplyForecastEntries';
import { FormulaLinesV2, FormulaLinesV2Type } from './FormulaLinesV2';
import { RouteVersionsV2, RouteVersionsV2Type } from './RouteVersionsV2';
import {
  ReceivedProductReleaseLines,
  ReceivedProductReleaseLinesType
} from './ReceivedProductReleaseLines';
import {
  BillOfMaterialsLinesV2,
  BillOfMaterialsLinesV2Type
} from './BillOfMaterialsLinesV2';
import { Workers, WorkersType } from './Workers';
import {
  ChgSentProductReleaseLines,
  ChgSentProductReleaseLinesType
} from './ChgSentProductReleaseLines';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import { RouteOperations, RouteOperationsType } from './RouteOperations';
import {
  BillOfMaterialsLinesV3,
  BillOfMaterialsLinesV3Type
} from './BillOfMaterialsLinesV3';
import { RouteVersions, RouteVersionsType } from './RouteVersions';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "RouteHeaders" of service "d365_metadata".
 */
export class RouteHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RouteHeadersType<T>
{
  /**
   * Technical entity name for RouteHeaders.
   */
  static override _entityName = 'RouteHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RouteHeaders entity.
   */
  static _keys = ['dataAreaId', 'RouteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Route Id.
   */
  declare routeId: DeserializedType<T, 'Edm.String'>;
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
   * Is Approved.
   * @nullable
   */
  declare isApproved?: NoYes | null;
  /**
   * Display Product Number.
   * @nullable
   */
  declare displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Version Id.
   * @nullable
   */
  declare engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eng Chg Engineering Reference.
   * @nullable
   */
  declare engChgEngineeringReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SupplyForecastEntries} entity.
   */
  declare supplyForecastEntries: SupplyForecastEntries<T>[];
  /**
   * One-to-many navigation property to the {@link FormulaLinesV2} entity.
   */
  declare formulaLinesV2: FormulaLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link RouteVersionsV2} entity.
   */
  declare routeVersionsV2: RouteVersionsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ReceivedProductReleaseLines} entity.
   */
  declare receivedProductReleaseLines: ReceivedProductReleaseLines<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsLinesV2} entity.
   */
  declare billOfMaterialsLines: BillOfMaterialsLinesV2<T>[];
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare approvingWorker?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link ChgSentProductReleaseLines} entity.
   */
  declare sentProductReleaseLines: ChgSentProductReleaseLines<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link RouteOperations} entity.
   */
  declare routeOperations: RouteOperations<T>[];
  /**
   * One-to-many navigation property to the {@link BillOfMaterialsLinesV3} entity.
   */
  declare billOfMaterialsLines3: BillOfMaterialsLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link RouteVersions} entity.
   */
  declare routeVersions: RouteVersions<T>[];
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: RouteHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface RouteHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  routeId: DeserializedType<T, 'Edm.String'>;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  routeName?: DeserializedType<T, 'Edm.String'> | null;
  isApproved?: NoYes | null;
  displayProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  engineeringVersionId?: DeserializedType<T, 'Edm.String'> | null;
  engChgEngineeringReference?: DeserializedType<T, 'Edm.String'> | null;
  supplyForecastEntries: SupplyForecastEntriesType<T>[];
  formulaLinesV2: FormulaLinesV2Type<T>[];
  routeVersionsV2: RouteVersionsV2Type<T>[];
  receivedProductReleaseLines: ReceivedProductReleaseLinesType<T>[];
  billOfMaterialsLines: BillOfMaterialsLinesV2Type<T>[];
  approvingWorker?: WorkersType<T> | null;
  sentProductReleaseLines: ChgSentProductReleaseLinesType<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  routeOperations: RouteOperationsType<T>[];
  billOfMaterialsLines3: BillOfMaterialsLinesV3Type<T>[];
  routeVersions: RouteVersionsType<T>[];
  plannedOrders: PlannedOrdersType<T>[];
}
