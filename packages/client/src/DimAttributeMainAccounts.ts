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
import type { DimAttributeMainAccountsApi } from './DimAttributeMainAccountsApi';
import { DimensionLedgerAccountType } from './DimensionLedgerAccountType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "DimAttributeMainAccounts" of service "d365_metadata".
 */
export class DimAttributeMainAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimAttributeMainAccountsType<T>
{
  /**
   * Technical entity name for DimAttributeMainAccounts.
   */
  static override _entityName = 'DimAttributeMainAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimAttributeMainAccounts entity.
   */
  static _keys = ['Value'];
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: DimensionLedgerAccountType | null;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-many navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombinationMainAccount: DimensionCombinations<T>[];

  constructor(_entityApi: DimAttributeMainAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface DimAttributeMainAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  type?: DimensionLedgerAccountType | null;
  category: DeserializedType<T, 'Edm.Int64'>;
  dimensionCombinationMainAccount: DimensionCombinationsType<T>[];
}
