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
import type { ProjExpensesExportApi } from './ProjExpensesExportApi';
import { ProjBillingType } from './ProjBillingType';

/**
 * This class represents the entity "ProjExpensesExport" of service "d365_metadata".
 */
export class ProjExpensesExport<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjExpensesExportType<T>
{
  /**
   * Technical entity name for ProjExpensesExport.
   */
  static override _entityName = 'ProjExpensesExport';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjExpensesExport entity.
   */
  static _keys = ['ExpTransNumber', 'ReferenceDataAreaId'];
  /**
   * Exp Trans Number.
   */
  declare expTransNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Data Area Id.
   */
  declare referenceDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Code.
   * @nullable
   */
  declare exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Cost Trans Exists.
   */
  declare projCostTransExists: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Transaction Category Id.
   * @nullable
   */
  declare transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Type.
   * @nullable
   */
  declare billingType?: ProjBillingType | null;
  /**
   * Cost Type.
   * @nullable
   */
  declare costType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Le.
   * @nullable
   */
  declare interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Activity Number.
   * @nullable
   */
  declare projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjExpensesExportApi<T>) {
    super(_entityApi);
  }
}

export interface ProjExpensesExportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  expTransNumber: DeserializedType<T, 'Edm.String'>;
  referenceDataAreaId: DeserializedType<T, 'Edm.String'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  projCostTransExists: DeserializedType<T, 'Edm.Int32'>;
  transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
  billingType?: ProjBillingType | null;
  costType?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
