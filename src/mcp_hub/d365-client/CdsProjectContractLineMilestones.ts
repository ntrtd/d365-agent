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
import type { CdsProjectContractLineMilestonesApi } from './CdsProjectContractLineMilestonesApi';

/**
 * This class represents the entity "CDSProjectContractLineMilestones" of service "d365_metadata".
 */
export class CdsProjectContractLineMilestones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsProjectContractLineMilestonesType<T>
{
  /**
   * Technical entity name for CdsProjectContractLineMilestones.
   */
  static override _entityName = 'CDSProjectContractLineMilestones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsProjectContractLineMilestones entity.
   */
  static _keys = ['dataAreaId', 'TransactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contract Line Ref.
   */
  declare contractLineRef: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Currency Id.
   * @nullable
   */
  declare currencyId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CdsProjectContractLineMilestonesApi<T>) {
    super(_entityApi);
  }
}

export interface CdsProjectContractLineMilestonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  contractLineRef: DeserializedType<T, 'Edm.Guid'>;
  currencyId?: DeserializedType<T, 'Edm.String'> | null;
}
