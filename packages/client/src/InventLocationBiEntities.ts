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
import type { InventLocationBiEntitiesApi } from './InventLocationBiEntitiesApi';
import { NoYes } from './NoYes';
import { WhsAutoUpdateShipment } from './WhsAutoUpdateShipment';
import { InventLocationType } from './InventLocationType';
import { WhsLoadReleaseReservationPolicy } from './WhsLoadReleaseReservationPolicy';
import { InventCountingGroupBr } from './InventCountingGroupBr';
import { WhsAllowMarkingReservationRemoval } from './WhsAllowMarkingReservationRemoval';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { WhsRawMaterialPolicy } from './WhsRawMaterialPolicy';
import { WhsReleaseToWarehouseRule } from './WhsReleaseToWarehouseRule';

/**
 * This class represents the entity "InventLocationBiEntities" of service "d365_metadata".
 */
export class InventLocationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventLocationBiEntitiesType<T>
{
  /**
   * Technical entity name for InventLocationBiEntities.
   */
  static override _entityName = 'InventLocationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventLocationBiEntities entity.
   */
  static _keys = ['dataAreaId', 'InventLocationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Location Id.
   */
  declare inventLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Manual.
   * @nullable
   */
  declare manual?: NoYes | null;
  /**
   * Invent Location Id Transit.
   * @nullable
   */
  declare inventLocationIdTransit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Bol Before Ship Confirm.
   * @nullable
   */
  declare printBolBeforeShipConfirm?: NoYes | null;
  /**
   * Default Kanban Finished Goods Location.
   * @nullable
   */
  declare defaultKanbanFinishedGoodsLocation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Branch Number.
   * @nullable
   */
  declare branchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cust Account Hu.
   * @nullable
   */
  declare custAccountHu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Labor Standards.
   * @nullable
   */
  declare allowLaborStandards?: NoYes | null;
  /**
   * Whs Prod Order Backflush Must Use Reserved Qty.
   * @nullable
   */
  declare whsProdOrderBackflushMustUseReservedQty?: NoYes | null;
  /**
   * Wms Rack Name Active.
   * @nullable
   */
  declare wmsRackNameActive?: NoYes | null;
  /**
   * Default Ship Maintenance Loc.
   * @nullable
   */
  declare defaultShipMaintenanceLoc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Wms Location Id Default Receipt.
   * @nullable
   */
  declare wmsLocationIdDefaultReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Wms Level Name Active.
   * @nullable
   */
  declare wmsLevelNameActive?: NoYes | null;
  /**
   * Invent Profile Id Ru.
   * @nullable
   */
  declare inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Production Input Location.
   * @nullable
   */
  declare defaultProductionInputLocation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reserve At Load Post.
   * @nullable
   */
  declare reserveAtLoadPost?: NoYes | null;
  /**
   * Invent Location Id Req Main.
   * @nullable
   */
  declare inventLocationIdReqMain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wms Aisle Name Active.
   * @nullable
   */
  declare wmsAisleNameActive?: NoYes | null;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Auto Release Reservation.
   * @nullable
   */
  declare warehouseAutoReleaseReservation?: NoYes | null;
  /**
   * Auto Update Shipment.
   * @nullable
   */
  declare autoUpdateShipment?: WhsAutoUpdateShipment | null;
  /**
   * Default Production Finish Goods Location.
   * @nullable
   */
  declare defaultProductionFinishGoodsLocation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Unique Check Digits.
   * @nullable
   */
  declare uniqueCheckDigits?: NoYes | null;
  /**
   * Invent Location Id Quarantine.
   * @nullable
   */
  declare inventLocationIdQuarantine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Account Custom Ru.
   * @nullable
   */
  declare vendAccountCustomRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decrement Load Line.
   * @nullable
   */
  declare decrementLoadLine?: NoYes | null;
  /**
   * Wms Rack Format.
   * @nullable
   */
  declare wmsRackFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Type.
   * @nullable
   */
  declare inventLocationType?: InventLocationType | null;
  /**
   * Default Status Id.
   * @nullable
   */
  declare defaultStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wms Location Id Goods In Route Ru.
   * @nullable
   */
  declare wmsLocationIdGoodsInRouteRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Sequence Group Ru.
   * @nullable
   */
  declare numberSequenceGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Release Reservation Policy.
   * @nullable
   */
  declare loadReleaseReservationPolicy?: WhsLoadReleaseReservationPolicy | null;
  /**
   * Invent Use Default Production Location For Formula Bom.
   * @nullable
   */
  declare inventUseDefaultProductionLocationForFormulaBom?: NoYes | null;
  /**
   * Req Refill.
   * @nullable
   */
  declare reqRefill?: NoYes | null;
  /**
   * Req Calendar Id.
   * @nullable
   */
  declare reqCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Processing Policy Name.
   * @nullable
   */
  declare workProcessingPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Quality Management.
   * @nullable
   */
  declare enableQualityManagement?: NoYes | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Site Id.
   * @nullable
   */
  declare inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fsh Store.
   * @nullable
   */
  declare fshStore?: NoYes | null;
  /**
   * Wm Slocation Id Default Issue.
   * @nullable
   */
  declare wmSlocationIdDefaultIssue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Counting Group Br.
   * @nullable
   */
  declare inventCountingGroupBr?: InventCountingGroupBr | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remove Invent Blocking On Status Change.
   * @nullable
   */
  declare removeInventBlockingOnStatusChange?: NoYes | null;
  /**
   * Allow Marking Reservation Removal.
   * @nullable
   */
  declare allowMarkingReservationRemoval?: WhsAllowMarkingReservationRemoval | null;
  /**
   * Invent Profile Type Ru.
   * @nullable
   */
  declare inventProfileTypeRu?: InventProfileTypeRu | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Container Type Code.
   * @nullable
   */
  declare defaultContainerTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rbo Default Wms Location Id.
   * @nullable
   */
  declare rboDefaultWmsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Quality Maintenance Location.
   * @nullable
   */
  declare defaultQualityMaintenanceLocation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Retail Invent Neg Physical.
   * @nullable
   */
  declare retailInventNegPhysical?: NoYes | null;
  /**
   * Invent Location Id Goods In Route Ru.
   * @nullable
   */
  declare inventLocationIdGoodsInRouteRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Wms Position Format.
   * @nullable
   */
  declare wmsPositionFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Whs Enabled.
   * @nullable
   */
  declare whsEnabled?: NoYes | null;
  /**
   * Hmim Domestic Language.
   * @nullable
   */
  declare hmimDomesticLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Level.
   */
  declare inventLocationLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Hmim Export Language.
   * @nullable
   */
  declare hmimExportLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Whs Raw Material Policy.
   * @nullable
   */
  declare whsRawMaterialPolicy?: WhsRawMaterialPolicy | null;
  /**
   * Wms Level Format.
   * @nullable
   */
  declare wmsLevelFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type Ru.
   * @nullable
   */
  declare activityTypeRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Wms Location Id Default Return.
   * @nullable
   */
  declare retailWmsLocationIdDefaultReturn?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rbo Default Invent Profile Id Ru.
   * @nullable
   */
  declare rboDefaultInventProfileIdRu?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cycle Count Allow Pallet Move.
   * @nullable
   */
  declare cycleCountAllowPalletMove?: NoYes | null;
  /**
   * Wms Position Name Active.
   * @nullable
   */
  declare wmsPositionNameActive?: NoYes | null;
  /**
   * Prod Reserve Only Whse.
   * @nullable
   */
  declare prodReserveOnlyWhse?: NoYes | null;
  /**
   * Cust Account Br.
   * @nullable
   */
  declare custAccountBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Invent Neg Financial.
   * @nullable
   */
  declare retailInventNegFinancial?: NoYes | null;
  /**
   * Retail Weight Ex 1.
   */
  declare retailWeightEx1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Return Credit Only Location.
   * @nullable
   */
  declare defaultReturnCreditOnlyLocation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Release To Warehouse Rule.
   * @nullable
   */
  declare releaseToWarehouseRule?: WhsReleaseToWarehouseRule | null;

  constructor(_entityApi: InventLocationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventLocationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventLocationId: DeserializedType<T, 'Edm.String'>;
  manual?: NoYes | null;
  inventLocationIdTransit?: DeserializedType<T, 'Edm.String'> | null;
  printBolBeforeShipConfirm?: NoYes | null;
  defaultKanbanFinishedGoodsLocation?: DeserializedType<T, 'Edm.String'> | null;
  branchNumber?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  custAccountHu?: DeserializedType<T, 'Edm.String'> | null;
  allowLaborStandards?: NoYes | null;
  whsProdOrderBackflushMustUseReservedQty?: NoYes | null;
  wmsRackNameActive?: NoYes | null;
  defaultShipMaintenanceLoc?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  wmsLocationIdDefaultReceipt?: DeserializedType<T, 'Edm.String'> | null;
  wmsLevelNameActive?: NoYes | null;
  inventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  defaultProductionInputLocation?: DeserializedType<T, 'Edm.String'> | null;
  reserveAtLoadPost?: NoYes | null;
  inventLocationIdReqMain?: DeserializedType<T, 'Edm.String'> | null;
  wmsAisleNameActive?: NoYes | null;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  warehouseAutoReleaseReservation?: NoYes | null;
  autoUpdateShipment?: WhsAutoUpdateShipment | null;
  defaultProductionFinishGoodsLocation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  uniqueCheckDigits?: NoYes | null;
  inventLocationIdQuarantine?: DeserializedType<T, 'Edm.String'> | null;
  vendAccountCustomRu?: DeserializedType<T, 'Edm.String'> | null;
  decrementLoadLine?: NoYes | null;
  wmsRackFormat?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationType?: InventLocationType | null;
  defaultStatusId?: DeserializedType<T, 'Edm.String'> | null;
  wmsLocationIdGoodsInRouteRu?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceGroupRu?: DeserializedType<T, 'Edm.String'> | null;
  loadReleaseReservationPolicy?: WhsLoadReleaseReservationPolicy | null;
  inventUseDefaultProductionLocationForFormulaBom?: NoYes | null;
  reqRefill?: NoYes | null;
  reqCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  workProcessingPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  enableQualityManagement?: NoYes | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  inventSiteId?: DeserializedType<T, 'Edm.String'> | null;
  fshStore?: NoYes | null;
  wmSlocationIdDefaultIssue?: DeserializedType<T, 'Edm.String'> | null;
  inventCountingGroupBr?: InventCountingGroupBr | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  removeInventBlockingOnStatusChange?: NoYes | null;
  allowMarkingReservationRemoval?: WhsAllowMarkingReservationRemoval | null;
  inventProfileTypeRu?: InventProfileTypeRu | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  defaultContainerTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  rboDefaultWmsLocationId?: DeserializedType<T, 'Edm.String'> | null;
  defaultQualityMaintenanceLocation?: DeserializedType<T, 'Edm.String'> | null;
  retailInventNegPhysical?: NoYes | null;
  inventLocationIdGoodsInRouteRu?: DeserializedType<T, 'Edm.String'> | null;
  wmsPositionFormat?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  whsEnabled?: NoYes | null;
  hmimDomesticLanguage?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationLevel: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  hmimExportLanguage?: DeserializedType<T, 'Edm.String'> | null;
  whsRawMaterialPolicy?: WhsRawMaterialPolicy | null;
  wmsLevelFormat?: DeserializedType<T, 'Edm.String'> | null;
  activityTypeRu?: DeserializedType<T, 'Edm.String'> | null;
  retailWmsLocationIdDefaultReturn?: DeserializedType<T, 'Edm.String'> | null;
  rboDefaultInventProfileIdRu?: DeserializedType<T, 'Edm.String'> | null;
  cycleCountAllowPalletMove?: NoYes | null;
  wmsPositionNameActive?: NoYes | null;
  prodReserveOnlyWhse?: NoYes | null;
  custAccountBr?: DeserializedType<T, 'Edm.String'> | null;
  retailInventNegFinancial?: NoYes | null;
  retailWeightEx1: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  defaultReturnCreditOnlyLocation?: DeserializedType<T, 'Edm.String'> | null;
  releaseToWarehouseRule?: WhsReleaseToWarehouseRule | null;
}
