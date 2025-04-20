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
import type { LandedCostFolioTablesApi } from './LandedCostFolioTablesApi';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';
import { PurchStatus } from './PurchStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LandedCostFolioTables" of service "d365_metadata".
 */
export class LandedCostFolioTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LandedCostFolioTablesType<T>
{
  /**
   * Technical entity name for LandedCostFolioTables.
   */
  static override _entityName = 'LandedCostFolioTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LandedCostFolioTables entity.
   */
  static _keys = ['dataAreaId', 'ShipFolioId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Folio Id.
   */
  declare shipFolioId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ship Goods Released.
   */
  declare shipGoodsReleased: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Exporter Name.
   * @nullable
   */
  declare shipExporterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Customs Broker.
   * @nullable
   */
  declare shipCustomsBroker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Status Id.
   * @nullable
   */
  declare shipStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship No Of Cartons.
   */
  declare shipNoOfCartons: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Est Dlv Date.
   */
  declare shipEstDlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Broker Advised.
   */
  declare shipBrokerAdvised: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Customer Appointment.
   */
  declare shipCustomerAppointment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Original Docs Received.
   */
  declare shipOriginalDocsReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Remarks.
   * @nullable
   */
  declare shipRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Tariff Code.
   * @nullable
   */
  declare shipTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Valuation Date.
   */
  declare shipValuationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Cargo Control Number.
   * @nullable
   */
  declare shipCargoControlNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Delivery Instructions.
   */
  declare shipDeliveryInstructions: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Customs Id.
   * @nullable
   */
  declare shipCustomsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Verification Date.
   */
  declare shipVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Folio Date.
   */
  declare shipFolioDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Measurement Unit.
   * @nullable
   */
  declare shipMeasurementUnit?: ItmMeasurementUnit | null;
  /**
   * Ship Goods Desc.
   * @nullable
   */
  declare shipGoodsDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Data Area.
   * @nullable
   */
  declare shipDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Del At Warehouse.
   */
  declare shipDelAtWarehouse: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Est Port Date.
   */
  declare shipEstPortDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Hawb.
   * @nullable
   */
  declare shipHawb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Exporter Id.
   * @nullable
   */
  declare shipExporterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Original Bol Sebt.
   */
  declare shipOriginalBolSebt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ship Id.
   * @nullable
   */
  declare shipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Purch Status.
   * @nullable
   */
  declare shipPurchStatus?: PurchStatus | null;
  /**
   * Ship Doc Received.
   * @nullable
   */
  declare shipDocReceived?: NoYes | null;
  /**
   * Ship From Port.
   * @nullable
   */
  declare shipFromPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship To Port.
   * @nullable
   */
  declare shipToPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Measurement.
   */
  declare shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LandedCostFolioTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LandedCostFolioTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipFolioId: DeserializedType<T, 'Edm.String'>;
  shipGoodsReleased: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipExporterName?: DeserializedType<T, 'Edm.String'> | null;
  shipCustomsBroker?: DeserializedType<T, 'Edm.String'> | null;
  shipStatusId?: DeserializedType<T, 'Edm.String'> | null;
  shipNoOfCartons: DeserializedType<T, 'Edm.Decimal'>;
  shipEstDlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  shipBrokerAdvised: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCustomerAppointment: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipOriginalDocsReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipRemarks?: DeserializedType<T, 'Edm.String'> | null;
  shipTariffCode?: DeserializedType<T, 'Edm.String'> | null;
  shipValuationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCargoControlNumber?: DeserializedType<T, 'Edm.String'> | null;
  shipDeliveryInstructions: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipCustomsId?: DeserializedType<T, 'Edm.String'> | null;
  shipVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipFolioDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipMeasurementUnit?: ItmMeasurementUnit | null;
  shipGoodsDesc?: DeserializedType<T, 'Edm.String'> | null;
  shipDataArea?: DeserializedType<T, 'Edm.String'> | null;
  shipDelAtWarehouse: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipEstPortDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipHawb?: DeserializedType<T, 'Edm.String'> | null;
  shipExporterId?: DeserializedType<T, 'Edm.String'> | null;
  shipOriginalBolSebt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shipId?: DeserializedType<T, 'Edm.String'> | null;
  shipPurchStatus?: PurchStatus | null;
  shipDocReceived?: NoYes | null;
  shipFromPort?: DeserializedType<T, 'Edm.String'> | null;
  shipToPort?: DeserializedType<T, 'Edm.String'> | null;
  shipMeasurement: DeserializedType<T, 'Edm.Decimal'>;
}
