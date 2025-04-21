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
import type { FbFiscalDocumentAdjustmentCodeLedgersApi } from './FbFiscalDocumentAdjustmentCodeLedgersApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "FBFiscalDocumentAdjustmentCodeLedgers" of service "d365_metadata".
 */
export class FbFiscalDocumentAdjustmentCodeLedgers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FbFiscalDocumentAdjustmentCodeLedgersType<T>
{
  /**
   * Technical entity name for FbFiscalDocumentAdjustmentCodeLedgers.
   */
  static override _entityName = 'FBFiscalDocumentAdjustmentCodeLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FbFiscalDocumentAdjustmentCodeLedgers entity.
   */
  static _keys = ['FBFiscalDocumentAdjustmentCodeIdentification', 'Company'];
  /**
   * Fb Fiscal Document Adjustment Code Identification.
   */
  declare fbFiscalDocumentAdjustmentCodeIdentification: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Code.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: FbFiscalDocumentAdjustmentCodeLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface FbFiscalDocumentAdjustmentCodeLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fbFiscalDocumentAdjustmentCodeIdentification: DeserializedType<
    T,
    'Edm.String'
  >;
  company: DeserializedType<T, 'Edm.String'>;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
