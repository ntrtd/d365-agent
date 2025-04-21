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
import type { WriteOffFinancialReasonsSetupsApi } from './WriteOffFinancialReasonsSetupsApi';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "WriteOffFinancialReasonsSetups" of service "d365_metadata".
 */
export class WriteOffFinancialReasonsSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WriteOffFinancialReasonsSetupsType<T>
{
  /**
   * Technical entity name for WriteOffFinancialReasonsSetups.
   */
  static override _entityName = 'WriteOffFinancialReasonsSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WriteOffFinancialReasonsSetups entity.
   */
  static _keys = ['Company', 'WriteOffReason'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Write Off Reason.
   */
  declare writeOffReason: DeserializedType<T, 'Edm.String'>;
  /**
   * Write Off Description.
   * @nullable
   */
  declare writeOffDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Write Off Ledger Dimension Display Value.
   * @nullable
   */
  declare writeOffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Default.
   * @nullable
   */
  declare isDefault?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomersV3} entity.
   */
  declare customerV3: CustomersV3<T>[];

  constructor(_entityApi: WriteOffFinancialReasonsSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface WriteOffFinancialReasonsSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  writeOffReason: DeserializedType<T, 'Edm.String'>;
  writeOffDescription?: DeserializedType<T, 'Edm.String'> | null;
  writeOffLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isDefault?: NoYes | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  customerV3: CustomersV3Type<T>[];
}
