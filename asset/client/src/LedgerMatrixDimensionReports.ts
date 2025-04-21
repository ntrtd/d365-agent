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
import type { LedgerMatrixDimensionReportsApi } from './LedgerMatrixDimensionReportsApi';
import { AmountDisplaySignCn } from './AmountDisplaySignCn';

/**
 * This class represents the entity "LedgerMatrixDimensionReports" of service "d365_metadata".
 */
export class LedgerMatrixDimensionReports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerMatrixDimensionReportsType<T>
{
  /**
   * Technical entity name for LedgerMatrixDimensionReports.
   */
  static override _entityName = 'LedgerMatrixDimensionReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerMatrixDimensionReports entity.
   */
  static _keys = ['dataAreaId', 'DimensionMatrix', 'DimensionValue'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Matrix.
   */
  declare dimensionMatrix: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Value.
   */
  declare dimensionValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Name.
   * @nullable
   */
  declare dimensionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format.
   * @nullable
   */
  declare format?: AmountDisplaySignCn | null;

  constructor(_entityApi: LedgerMatrixDimensionReportsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerMatrixDimensionReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dimensionMatrix: DeserializedType<T, 'Edm.String'>;
  dimensionValue: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dimensionName?: DeserializedType<T, 'Edm.String'> | null;
  format?: AmountDisplaySignCn | null;
}
