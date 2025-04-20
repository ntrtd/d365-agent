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
import type { CfopMatrixEntitiesApi } from './CfopMatrixEntitiesApi';
import { SalesPurchTrntypeBr } from './SalesPurchTrntypeBr';

/**
 * This class represents the entity "CFOPMatrixEntities" of service "d365_metadata".
 */
export class CfopMatrixEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CfopMatrixEntitiesType<T>
{
  /**
   * Technical entity name for CfopMatrixEntities.
   */
  static override _entityName = 'CFOPMatrixEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CfopMatrixEntities entity.
   */
  static _keys = ['dataAreaId', 'CFOPCode', 'TransactionType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cfop Code.
   */
  declare cfopCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SalesPurchTrntypeBr | null;
  /**
   * Operation Type.
   * @nullable
   */
  declare operationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfop Group.
   * @nullable
   */
  declare cfopGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CfopMatrixEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CfopMatrixEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cfopCode: DeserializedType<T, 'Edm.String'>;
  transactionType?: SalesPurchTrntypeBr | null;
  operationType?: DeserializedType<T, 'Edm.String'> | null;
  cfopGroup?: DeserializedType<T, 'Edm.String'> | null;
}
