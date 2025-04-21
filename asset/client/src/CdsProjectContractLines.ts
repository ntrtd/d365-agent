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
import type { CdsProjectContractLinesApi } from './CdsProjectContractLinesApi';
import { PsaContractLineType } from './PsaContractLineType';
import { ProjForecastInvoiceFrequency } from './ProjForecastInvoiceFrequency';

/**
 * This class represents the entity "CDSProjectContractLines" of service "d365_metadata".
 */
export class CdsProjectContractLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsProjectContractLinesType<T>
{
  /**
   * Technical entity name for CdsProjectContractLines.
   */
  static override _entityName = 'CDSProjectContractLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsProjectContractLines entity.
   */
  static _keys = ['dataAreaId', 'ContractId', 'ContractLine'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Id.
   */
  declare contractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Line.
   */
  declare contractLine: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: PsaContractLineType | null;
  /**
   * Forecast Invoice Frequency.
   * @nullable
   */
  declare forecastInvoiceFrequency?: ProjForecastInvoiceFrequency | null;

  constructor(_entityApi: CdsProjectContractLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsProjectContractLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contractId: DeserializedType<T, 'Edm.String'>;
  contractLine: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  transactionId: DeserializedType<T, 'Edm.Guid'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  type?: PsaContractLineType | null;
  forecastInvoiceFrequency?: ProjForecastInvoiceFrequency | null;
}
