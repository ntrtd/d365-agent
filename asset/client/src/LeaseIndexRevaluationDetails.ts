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
import type { LeaseIndexRevaluationDetailsApi } from './LeaseIndexRevaluationDetailsApi';
import { AssetLeaseType } from './AssetLeaseType';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LeaseIndexRevaluationDetails" of service "d365_metadata".
 */
export class LeaseIndexRevaluationDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseIndexRevaluationDetailsType<T>
{
  /**
   * Technical entity name for LeaseIndexRevaluationDetails.
   */
  static override _entityName = 'LeaseIndexRevaluationDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseIndexRevaluationDetails entity.
   */
  static _keys = ['LeaseId', 'LegalEntity', 'ProcessId'];
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Id.
   */
  declare processId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * New Payment Amount.
   */
  declare newPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Index Rate.
   */
  declare newIndexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Index Rate Date.
   */
  declare indexRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Old Index Rate.
   */
  declare oldIndexRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Type.
   * @nullable
   */
  declare leaseType?: AssetLeaseType | null;
  /**
   * Asset Adjustment.
   */
  declare assetAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Liability Adjustment.
   */
  declare liabilityAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variable Payment.
   */
  declare variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Revaluation Date.
   */
  declare revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Processed.
   * @nullable
   */
  declare processed?: NoYes | null;
  /**
   * Number Of Change Lines.
   */
  declare numberOfChangeLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Liability Account Display Value.
   * @nullable
   */
  declare liabilityAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Asset Account Display Value.
   * @nullable
   */
  declare assetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare liabilityAccountCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare assetAccountCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: LeaseIndexRevaluationDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseIndexRevaluationDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  leaseId: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  processId: DeserializedType<T, 'Edm.Guid'>;
  newPaymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  newIndexRate: DeserializedType<T, 'Edm.Decimal'>;
  indexRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  oldIndexRate: DeserializedType<T, 'Edm.Decimal'>;
  leaseType?: AssetLeaseType | null;
  assetAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  liabilityAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  revaluationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processed?: NoYes | null;
  numberOfChangeLines: DeserializedType<T, 'Edm.Int32'>;
  liabilityAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  assetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  liabilityAccountCombination?: DimensionCombinationsType<T> | null;
  assetAccountCombination?: DimensionCombinationsType<T> | null;
}
