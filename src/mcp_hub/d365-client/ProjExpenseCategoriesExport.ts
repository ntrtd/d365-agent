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
import type { ProjExpenseCategoriesExportApi } from './ProjExpenseCategoriesExportApi';
import { TrvExpType } from './TrvExpType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjExpenseCategoriesExport" of service "d365_metadata".
 */
export class ProjExpenseCategoriesExport<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjExpenseCategoriesExportType<T>
{
  /**
   * Technical entity name for ProjExpenseCategoriesExport.
   */
  static override _entityName = 'ProjExpenseCategoriesExport';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjExpenseCategoriesExport entity.
   */
  static _keys = ['dataAreaId', 'CostType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Type.
   */
  declare costType: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Txt.
   * @nullable
   */
  declare costTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Category Id.
   * @nullable
   */
  declare transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exp Type.
   * @nullable
   */
  declare expType?: TrvExpType | null;
  /**
   * Is Inactive.
   * @nullable
   */
  declare isInactive?: NoYes | null;

  constructor(_entityApi: ProjExpenseCategoriesExportApi<T>) {
    super(_entityApi);
  }
}

export interface ProjExpenseCategoriesExportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  costType: DeserializedType<T, 'Edm.String'>;
  costTxt?: DeserializedType<T, 'Edm.String'> | null;
  transactionCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  expType?: TrvExpType | null;
  isInactive?: NoYes | null;
}
