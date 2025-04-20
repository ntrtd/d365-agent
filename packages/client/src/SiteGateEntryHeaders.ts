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
import type { SiteGateEntryHeadersApi } from './SiteGateEntryHeadersApi';
import { InventSiteGateEntryStatusIn } from './InventSiteGateEntryStatusIn';
import { NoYes } from './NoYes';
import { InventSiteGateRefDocTypeIn } from './InventSiteGateRefDocTypeIn';
import { InventSiteGateEntryTypeIn } from './InventSiteGateEntryTypeIn';

/**
 * This class represents the entity "SiteGateEntryHeaders" of service "d365_metadata".
 */
export class SiteGateEntryHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SiteGateEntryHeadersType<T>
{
  /**
   * Technical entity name for SiteGateEntryHeaders.
   */
  static override _entityName = 'SiteGateEntryHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SiteGateEntryHeaders entity.
   */
  static _keys = ['dataAreaId', 'GateEntry'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Gate Entry.
   */
  declare gateEntry: DeserializedType<T, 'Edm.String'>;
  /**
   * Transportation Receipt Date.
   */
  declare transportationReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Arrival Date And Time.
   */
  declare arrivalDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: InventSiteGateEntryStatusIn | null;
  /**
   * Vehicle Number.
   * @nullable
   */
  declare vehicleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Receipt Number.
   * @nullable
   */
  declare transportationReceiptNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Challan Date.
   */
  declare challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transporter.
   * @nullable
   */
  declare transporter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factory Gate.
   * @nullable
   */
  declare factoryGate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip Measurement.
   * @nullable
   */
  declare skipMeasurement?: NoYes | null;
  /**
   * Rgp Number.
   * @nullable
   */
  declare rgpNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Document Type.
   * @nullable
   */
  declare referenceDocumentType?: InventSiteGateRefDocTypeIn | null;
  /**
   * Gate Entry Type.
   * @nullable
   */
  declare gateEntryType?: InventSiteGateEntryTypeIn | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Party.
   * @nullable
   */
  declare referenceParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Challan Number.
   * @nullable
   */
  declare challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Driver Mobile Phone.
   * @nullable
   */
  declare driverMobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker.
   * @nullable
   */
  declare worker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Driver Name.
   * @nullable
   */
  declare driverName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exit Date And Time.
   */
  declare exitDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SiteGateEntryHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SiteGateEntryHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  gateEntry: DeserializedType<T, 'Edm.String'>;
  transportationReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  arrivalDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: InventSiteGateEntryStatusIn | null;
  vehicleNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  transportationReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transporter?: DeserializedType<T, 'Edm.String'> | null;
  factoryGate?: DeserializedType<T, 'Edm.String'> | null;
  skipMeasurement?: NoYes | null;
  rgpNumber?: DeserializedType<T, 'Edm.String'> | null;
  referenceDocumentType?: InventSiteGateRefDocTypeIn | null;
  gateEntryType?: InventSiteGateEntryTypeIn | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  referenceParty?: DeserializedType<T, 'Edm.String'> | null;
  challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  driverMobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  worker?: DeserializedType<T, 'Edm.String'> | null;
  site?: DeserializedType<T, 'Edm.String'> | null;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  driverName?: DeserializedType<T, 'Edm.String'> | null;
  exitDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
