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
import type { PaymDeductionReasonsApi } from './PaymDeductionReasonsApi';
import { TamDeductionClaimBasis } from './TamDeductionClaimBasis';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PaymDeductionReasons" of service "d365_metadata".
 */
export class PaymDeductionReasons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PaymDeductionReasonsType<T>
{
  /**
   * Technical entity name for PaymDeductionReasons.
   */
  static override _entityName = 'PaymDeductionReasons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymDeductionReasons entity.
   */
  static _keys = ['dataAreaId', 'ClaimReasonId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Claim Reason Id.
   */
  declare claimReasonId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Claim Posting Ledger Dimension Display Value.
   * @nullable
   */
  declare claimPostingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Reason Code Id.
   * @nullable
   */
  declare returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Claim Basis.
   * @nullable
   */
  declare claimBasis?: TamDeductionClaimBasis | null;
  /**
   * Deduction Type.
   * @nullable
   */
  declare deductionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PaymDeductionReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymDeductionReasonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  claimReasonId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  claimPostingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  returnReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  claimBasis?: TamDeductionClaimBasis | null;
  deductionType?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
