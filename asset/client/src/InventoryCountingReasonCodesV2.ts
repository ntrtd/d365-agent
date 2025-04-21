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
import type { InventoryCountingReasonCodesV2Api } from './InventoryCountingReasonCodesV2Api';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "InventoryCountingReasonCodesV2" of service "d365_metadata".
 */
export class InventoryCountingReasonCodesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryCountingReasonCodesV2Type<T>
{
  /**
   * Technical entity name for InventoryCountingReasonCodesV2.
   */
  static override _entityName = 'InventoryCountingReasonCodesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryCountingReasonCodesV2 entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: InventoryCountingReasonCodesV2Api<T>) {
    super(_entityApi);
  }
}

export interface InventoryCountingReasonCodesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
