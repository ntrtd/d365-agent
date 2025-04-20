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
import type { FundingLimitSpentAmountValidationHistoriesApi } from './FundingLimitSpentAmountValidationHistoriesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "FundingLimitSpentAmountValidationHistories" of service "d365_metadata".
 */
export class FundingLimitSpentAmountValidationHistories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FundingLimitSpentAmountValidationHistoriesType<T>
{
  /**
   * Technical entity name for FundingLimitSpentAmountValidationHistories.
   */
  static override _entityName = 'FundingLimitSpentAmountValidationHistories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FundingLimitSpentAmountValidationHistories entity.
   */
  static _keys = ['dataAreaId', 'ContractId', 'LineNumber', 'CreatedOn'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Id.
   */
  declare contractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Current.
   * @nullable
   */
  declare isCurrent?: NoYes | null;
  /**
   * Limit Spent.
   */
  declare limitSpent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Data Update.
   * @nullable
   */
  declare dataUpdate?: NoYes | null;
  /**
   * Limit Spent Computed.
   */
  declare limitSpentComputed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Required.
   * @nullable
   */
  declare updateRequired?: NoYes | null;

  constructor(_entityApi: FundingLimitSpentAmountValidationHistoriesApi<T>) {
    super(_entityApi);
  }
}

export interface FundingLimitSpentAmountValidationHistoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contractId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isCurrent?: NoYes | null;
  limitSpent: DeserializedType<T, 'Edm.Decimal'>;
  dataUpdate?: NoYes | null;
  limitSpentComputed: DeserializedType<T, 'Edm.Decimal'>;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  updateRequired?: NoYes | null;
}
