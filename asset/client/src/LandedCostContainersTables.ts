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
import type { LandedCostContainersTablesApi } from './LandedCostContainersTablesApi';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';
import { PurchStatus } from './PurchStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LandedCostContainersTables" of service "d365_metadata".
 */
export class LandedCostContainersTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LandedCostContainersTablesType<T>
{
  /**
   * Technical entity name for LandedCostContainersTables.
   */
  static override _entityName = 'LandedCostContainersTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LandedCostContainersTables entity.
   */
  static _keys = ['dataAreaId', 'ShipId', 'ShipContainerId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Id.
   */
  declare shipId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Container Id.
   */
  declare shipContainerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Ec Applied Date.
   */
  declare shipEcAppliedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Remarks.
   * @nullable
   */
  declare shipRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Their Seal Num.
   * @nullable
   */
  declare shipTheirSealNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Est Dlv Date.
   */
  declare shipEstDlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Ship Measurement.
   */
  declare shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Itm Local Transport Time.
   */
  declare itmLocalTransportTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ship Ec Num.
   * @nullable
   */
  declare shipEcNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Goods Released.
   */
  declare shipGoodsReleased: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Customer Appointment.
   */
  declare shipCustomerAppointment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Ec Expiry Date.
   */
  declare shipEcExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Original Docs Received.
   */
  declare shipOriginalDocsReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship To Port.
   * @nullable
   */
  declare shipToPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Est Port Date.
   */
  declare shipEstPortDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Container Unit Type Id.
   * @nullable
   */
  declare shipContainerUnitTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Measurement Unit.
   * @nullable
   */
  declare shipMeasurementUnit?: ItmMeasurementUnit | null;
  /**
   * Orig Ship Id.
   * @nullable
   */
  declare origShipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship No Of Cartons.
   */
  declare shipNoOfCartons: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Journey Id.
   * @nullable
   */
  declare shipJourneyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Purch Status.
   * @nullable
   */
  declare shipPurchStatus?: PurchStatus | null;
  /**
   * Ship Ec Received Date.
   */
  declare shipEcReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Itm Local Transport Date.
   */
  declare itmLocalTransportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Hawb.
   * @nullable
   */
  declare shipHawb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Container Type Id.
   * @nullable
   */
  declare shipContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Our Seal Num.
   * @nullable
   */
  declare shipOurSealNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Delivery Instructions.
   */
  declare shipDeliveryInstructions: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Del At Warehouse.
   */
  declare shipDelAtWarehouse: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Expected Loading Date.
   */
  declare shipExpectedLoadingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Broker Advised.
   */
  declare shipBrokerAdvised: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Verification Date.
   */
  declare shipVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Date.
   */
  declare shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Pending Used.
   * @nullable
   */
  declare shipPendingUsed?: NoYes | null;
  /**
   * Ship Converted To Rental.
   * @nullable
   */
  declare shipConvertedToRental?: NoYes | null;
  /**
   * Ship Goods Desc.
   * @nullable
   */
  declare shipGoodsDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Returnable.
   * @nullable
   */
  declare shipReturnable?: NoYes | null;
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
   * Ship Gps Unit.
   * @nullable
   */
  declare shipGpsUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Original Bol Sebt.
   */
  declare shipOriginalBolSebt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Vessel Id.
   * @nullable
   */
  declare shipVesselId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Refrigeration Type Id.
   * @nullable
   */
  declare shipRefrigerationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Actual Weight.
   */
  declare shipActualWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Rental.
   * @nullable
   */
  declare shipRental?: NoYes | null;

  constructor(_entityApi: LandedCostContainersTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LandedCostContainersTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipId: DeserializedType<T, 'Edm.String'>;
  shipContainerId: DeserializedType<T, 'Edm.String'>;
  shipEcAppliedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipRemarks?: DeserializedType<T, 'Edm.String'> | null;
  shipTheirSealNum?: DeserializedType<T, 'Edm.String'> | null;
  shipEstDlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmDepartureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipFromPort?: DeserializedType<T, 'Edm.String'> | null;
  shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;
  itmLocalTransportTime: DeserializedType<T, 'Edm.Int32'>;
  shipEcNum?: DeserializedType<T, 'Edm.String'> | null;
  shipGoodsReleased: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCustomerAppointment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipEcExpiryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipOriginalDocsReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipToPort?: DeserializedType<T, 'Edm.String'> | null;
  shipEstPortDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipContainerUnitTypeId?: DeserializedType<T, 'Edm.String'> | null;
  shipMeasurementUnit?: ItmMeasurementUnit | null;
  origShipId?: DeserializedType<T, 'Edm.String'> | null;
  shipNoOfCartons: DeserializedType<T, 'Edm.Decimal'>;
  shipJourneyId?: DeserializedType<T, 'Edm.String'> | null;
  shipPurchStatus?: PurchStatus | null;
  shipEcReceivedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itmLocalTransportDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipHawb?: DeserializedType<T, 'Edm.String'> | null;
  shipContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  shipOurSealNum?: DeserializedType<T, 'Edm.String'> | null;
  shipDeliveryInstructions: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipDelAtWarehouse: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipExpectedLoadingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipBrokerAdvised: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipPendingUsed?: NoYes | null;
  shipConvertedToRental?: NoYes | null;
  shipGoodsDesc?: DeserializedType<T, 'Edm.String'> | null;
  shipReturnable?: NoYes | null;
  shipStatusId?: DeserializedType<T, 'Edm.String'> | null;
  shipLocalForwarder?: DeserializedType<T, 'Edm.String'> | null;
  shipGpsUnit?: DeserializedType<T, 'Edm.String'> | null;
  shipOriginalBolSebt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipVesselId?: DeserializedType<T, 'Edm.String'> | null;
  shipRefrigerationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  shipActualWeight: DeserializedType<T, 'Edm.Decimal'>;
  shipRental?: NoYes | null;
}
