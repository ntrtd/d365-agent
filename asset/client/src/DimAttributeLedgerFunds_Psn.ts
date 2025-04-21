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
import type { DimAttributeLedgerFunds_PsnApi } from './DimAttributeLedgerFunds_PsnApi';

/**
 * This class represents the entity "DimAttributeLedgerFunds_PSN" of service "d365_metadata".
 */
export class DimAttributeLedgerFunds_Psn<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeLedgerFunds_PsnType<T>
{
  /**
   * Technical entity name for DimAttributeLedgerFunds_Psn.
   */
  static override _entityName = 'DimAttributeLedgerFunds_PSN';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeLedgerFunds_Psn entity.
   */
  static _keys = ['dataAreaId', 'Value'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimAttributeLedgerFunds_PsnApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeLedgerFunds_PsnType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
