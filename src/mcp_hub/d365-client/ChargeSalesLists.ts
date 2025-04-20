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
import type { ChargeSalesListsApi } from './ChargeSalesListsApi';
import { ListStatus } from './ListStatus';
import { Listcode } from './Listcode';
import { Quarter } from './Quarter';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ChargeSalesLists" of service "d365_metadata".
 */
export class ChargeSalesLists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChargeSalesListsType<T>
{
  /**
   * Technical entity name for ChargeSalesLists.
   */
  static override _entityName = 'ChargeSalesLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChargeSalesLists entity.
   */
  static _keys = ['dataAreaId', 'ReportingStatus', 'Dispatch', 'Number'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reporting Status.
   * @nullable
   */
  declare reportingStatus?: ListStatus | null;
  /**
   * Dispatch.
   */
  declare dispatch: DeserializedType<T, 'Edm.String'>;
  /**
   * Number.
   */
  declare number: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Listcode.
   * @nullable
   */
  declare listcode?: Listcode | null;
  /**
   * Trans Quarter.
   * @nullable
   */
  declare transQuarter?: Quarter | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Correction.
   * @nullable
   */
  declare correction?: NoYes | null;
  /**
   * Log.
   * @nullable
   */
  declare log?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Years.
   */
  declare years: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Exempt Number.
   * @nullable
   */
  declare taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ChargeSalesListsApi<T>) {
    super(_entityApi);
  }
}

export interface ChargeSalesListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportingStatus?: ListStatus | null;
  dispatch: DeserializedType<T, 'Edm.String'>;
  number: DeserializedType<T, 'Edm.Int32'>;
  listcode?: Listcode | null;
  transQuarter?: Quarter | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  correction?: NoYes | null;
  log?: DeserializedType<T, 'Edm.String'> | null;
  years: DeserializedType<T, 'Edm.Int32'>;
  taxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
}
