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
import type { LandedCostVoyageTablesApi } from './LandedCostVoyageTablesApi';
import { PurchStatus } from './PurchStatus';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LandedCostVoyageTables" of service "d365_metadata".
 */
export class LandedCostVoyageTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LandedCostVoyageTablesType<T>
{
  /**
   * Technical entity name for LandedCostVoyageTables.
   */
  static override _entityName = 'LandedCostVoyageTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LandedCostVoyageTables entity.
   */
  static _keys = ['dataAreaId', 'ShipId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Id.
   */
  declare shipId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Remarks.
   * @nullable
   */
  declare shipRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Est Dlv Date.
   */
  declare shipEstDlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Original Docs Received.
   */
  declare itmOriginalDocsReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Departure Date.
   */
  declare itmDepartureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship From Port.
   * @nullable
   */
  declare shipFromPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship No Of Pallets.
   */
  declare shipNoOfPallets: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ship Measurement.
   */
  declare shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Itm Local Transport Time.
   */
  declare itmLocalTransportTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dlv Mode Id.
   * @nullable
   */
  declare dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itm Purch Status.
   * @nullable
   */
  declare itmPurchStatus?: PurchStatus | null;
  /**
   * Itm Customer Appointment.
   */
  declare itmCustomerAppointment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Goods Released.
   */
  declare itmGoodsReleased: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Delivery Instructions.
   */
  declare itmDeliveryInstructions: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Broker Advised.
   */
  declare itmBrokerAdvised: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship To Port.
   * @nullable
   */
  declare shipToPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Valuation Date.
   */
  declare shipValuationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Est Port Date.
   */
  declare shipEstPortDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Verification Date.
   */
  declare itmVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Measurement Unit.
   * @nullable
   */
  declare shipMeasurementUnit?: ItmMeasurementUnit | null;
  /**
   * Ship Doc Received.
   * @nullable
   */
  declare shipDocReceived?: NoYes | null;
  /**
   * Ship Journey Id.
   * @nullable
   */
  declare shipJourneyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itm Original Bol Sebt.
   */
  declare itmOriginalBolSebt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Local Transport Date.
   */
  declare itmLocalTransportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Mawb.
   * @nullable
   */
  declare shipMawb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Vend Account.
   * @nullable
   */
  declare shipVendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Voyage.
   * @nullable
   */
  declare shipVoyage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Customs Entry Id.
   * @nullable
   */
  declare shipCustomsEntryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itm Del At Warehouse.
   */
  declare itmDelAtWarehouse: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Hawb.
   * @nullable
   */
  declare shipHawb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Pending.
   * @nullable
   */
  declare shipPending?: NoYes | null;
  /**
   * Ship Tally In Number.
   * @nullable
   */
  declare shipTallyInNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Date.
   */
  declare shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Status Id.
   * @nullable
   */
  declare shipStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Local Forwarder.
   * @nullable
   */
  declare shipLocalForwarder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Description.
   * @nullable
   */
  declare shipDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Vessel Id.
   * @nullable
   */
  declare shipVesselId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Rental.
   * @nullable
   */
  declare shipRental?: NoYes | null;
  /**
   * Ship Id External.
   * @nullable
   */
  declare shipIdExternal?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LandedCostVoyageTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LandedCostVoyageTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipId: DeserializedType<T, 'Edm.String'>;
  shipRemarks?: DeserializedType<T, 'Edm.String'> | null;
  shipEstDlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmOriginalDocsReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmDepartureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipFromPort?: DeserializedType<T, 'Edm.String'> | null;
  shipNoOfPallets: DeserializedType<T, 'Edm.Int32'>;
  shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;
  itmLocalTransportTime: DeserializedType<T, 'Edm.Int32'>;
  dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  itmPurchStatus?: PurchStatus | null;
  itmCustomerAppointment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmGoodsReleased: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmDeliveryInstructions: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmBrokerAdvised: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipToPort?: DeserializedType<T, 'Edm.String'> | null;
  shipValuationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipEstPortDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipMeasurementUnit?: ItmMeasurementUnit | null;
  shipDocReceived?: NoYes | null;
  shipJourneyId?: DeserializedType<T, 'Edm.String'> | null;
  itmOriginalBolSebt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmLocalTransportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipMawb?: DeserializedType<T, 'Edm.String'> | null;
  shipVendAccount?: DeserializedType<T, 'Edm.String'> | null;
  shipVoyage?: DeserializedType<T, 'Edm.String'> | null;
  shipCustomsEntryId?: DeserializedType<T, 'Edm.String'> | null;
  itmDelAtWarehouse: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipHawb?: DeserializedType<T, 'Edm.String'> | null;
  shipPending?: NoYes | null;
  shipTallyInNumber?: DeserializedType<T, 'Edm.String'> | null;
  shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipStatusId?: DeserializedType<T, 'Edm.String'> | null;
  shipLocalForwarder?: DeserializedType<T, 'Edm.String'> | null;
  shipDescription?: DeserializedType<T, 'Edm.String'> | null;
  shipVesselId?: DeserializedType<T, 'Edm.String'> | null;
  shipRental?: NoYes | null;
  shipIdExternal?: DeserializedType<T, 'Edm.String'> | null;
}
