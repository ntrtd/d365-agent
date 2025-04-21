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
import type { CashFlowMgmtJourNameBalanceControlsApi } from './CashFlowMgmtJourNameBalanceControlsApi';

/**
 * This class represents the entity "CashFlowMgmtJourNameBalanceControls" of service "d365_metadata".
 */
export class CashFlowMgmtJourNameBalanceControls<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtJourNameBalanceControlsType<T>
{
  /**
   * Technical entity name for CashFlowMgmtJourNameBalanceControls.
   */
  static override _entityName = 'CashFlowMgmtJourNameBalanceControls';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtJourNameBalanceControls entity.
   */
  static _keys = ['Name', 'Currency'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum Cash Balance.
   */
  declare minimumCashBalance: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CashFlowMgmtJourNameBalanceControlsApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtJourNameBalanceControlsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  minimumCashBalance: DeserializedType<T, 'Edm.Decimal'>;
}
