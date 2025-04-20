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
import type { CfopCreditBaseSourcesApi } from './CfopCreditBaseSourcesApi';
import { FbNonFiscalOpCreditSourceCodeBr } from './FbNonFiscalOpCreditSourceCodeBr';

/**
 * This class represents the entity "CFOPCreditBaseSources" of service "d365_metadata".
 */
export class CfopCreditBaseSources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CfopCreditBaseSourcesType<T>
{
  /**
   * Technical entity name for CfopCreditBaseSources.
   */
  static override _entityName = 'CFOPCreditBaseSources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CfopCreditBaseSources entity.
   */
  static _keys = ['CreditBaseSource', 'CFOP'];
  /**
   * Credit Base Source.
   * @nullable
   */
  declare creditBaseSource?: FbNonFiscalOpCreditSourceCodeBr | null;
  /**
   * Cfop.
   */
  declare cfop: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cfop Description.
   * @nullable
   */
  declare cfopDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CfopCreditBaseSourcesApi<T>) {
    super(_entityApi);
  }
}

export interface CfopCreditBaseSourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  creditBaseSource?: FbNonFiscalOpCreditSourceCodeBr | null;
  cfop: DeserializedType<T, 'Edm.String'>;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cfopDescription?: DeserializedType<T, 'Edm.String'> | null;
}
