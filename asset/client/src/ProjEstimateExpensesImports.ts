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
import type { ProjEstimateExpensesImportsApi } from './ProjEstimateExpensesImportsApi';
import { ProjCdsTransType } from './ProjCdsTransType';
import { ProjBillingType } from './ProjBillingType';

/**
 * This class represents the entity "ProjEstimateExpensesImports" of service "d365_metadata".
 */
export class ProjEstimateExpensesImports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjEstimateExpensesImportsType<T>
{
  /**
   * Technical entity name for ProjEstimateExpensesImports.
   */
  static override _entityName = 'ProjEstimateExpensesImports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjEstimateExpensesImports entity.
   */
  static _keys = ['dataAreaId', 'EstimateExpensesImportId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Estimate Expenses Import Id.
   */
  declare estimateExpensesImportId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: ProjCdsTransType | null;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Cds Resource Id.
   */
  declare projCdsResourceId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Resource Category Id.
   * @nullable
   */
  declare resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Category Id.
   * @nullable
   */
  declare transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Estimate Line Id.
   */
  declare originEstimateLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Type.
   * @nullable
   */
  declare billingType?: ProjBillingType | null;
  /**
   * Estimate Line Id.
   */
  declare estimateLineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Id.
   * @nullable
   */
  declare currencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contract Line Id.
   * @nullable
   */
  declare contractLineId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjEstimateExpensesImportsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjEstimateExpensesImportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  estimateExpensesImportId: DeserializedType<T, 'Edm.Guid'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  transType?: ProjCdsTransType | null;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  projCdsResourceId: DeserializedType<T, 'Edm.Guid'>;
  resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  originEstimateLineId: DeserializedType<T, 'Edm.Guid'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingType?: ProjBillingType | null;
  estimateLineId: DeserializedType<T, 'Edm.Guid'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  contractLineId?: DeserializedType<T, 'Edm.String'> | null;
}
