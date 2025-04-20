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
import type { CfopCodesApi } from './CfopCodesApi';
import { NoYes } from './NoYes';
import { CfopPurposeBr } from './CfopPurposeBr';
import { FiscalDocDirectionBr } from './FiscalDocDirectionBr';
import { CustVendLocationBr } from './CustVendLocationBr';

/**
 * This class represents the entity "CFOPCodes" of service "d365_metadata".
 */
export class CfopCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CfopCodesType<T>
{
  /**
   * Technical entity name for CfopCodes.
   */
  static override _entityName = 'CFOPCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CfopCodes entity.
   */
  static _keys = ['dataAreaId', 'CFOP'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cfop.
   */
  declare cfop: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Reference Legal Text.
   * @nullable
   */
  declare fiscalReferenceLegalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Reference Required.
   * @nullable
   */
  declare fiscalReferenceRequired?: NoYes | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Source Text.
   * @nullable
   */
  declare fiscalDocumentSourceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Document Text.
   * @nullable
   */
  declare fiscalDocumentText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: CfopPurposeBr | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Cfop.
   * @nullable
   */
  declare deliveryCfop?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: FiscalDocDirectionBr | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: CustVendLocationBr | null;
  /**
   * Consider In Ciap.
   * @nullable
   */
  declare considerInCiap?: NoYes | null;

  constructor(_entityApi: CfopCodesApi<T>) {
    super(_entityApi);
  }
}

export interface CfopCodesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cfop: DeserializedType<T, 'Edm.String'>;
  fiscalReferenceLegalText?: DeserializedType<T, 'Edm.String'> | null;
  fiscalReferenceRequired?: NoYes | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentSourceText?: DeserializedType<T, 'Edm.String'> | null;
  fiscalDocumentText?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: CfopPurposeBr | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCfop?: DeserializedType<T, 'Edm.String'> | null;
  direction?: FiscalDocDirectionBr | null;
  location?: CustVendLocationBr | null;
  considerInCiap?: NoYes | null;
}
