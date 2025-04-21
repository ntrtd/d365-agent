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
import type { OperationTypesApi } from './OperationTypesApi';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "OperationTypes" of service "d365_metadata".
 */
export class OperationTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OperationTypesType<T>
{
  /**
   * Technical entity name for OperationTypes.
   */
  static override _entityName = 'OperationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperationTypes entity.
   */
  static _keys = ['dataAreaId', 'OperationTypeID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Type Id.
   */
  declare operationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Create Invent Trans.
   * @nullable
   */
  declare createInventTrans?: NoYes | null;
  /**
   * Cust Posting Profile.
   * @nullable
   */
  declare custPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Posting Profile.
   * @nullable
   */
  declare vendPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Financial Trans.
   * @nullable
   */
  declare createFinancialTrans?: NoYes | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: OperationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface OperationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operationTypeId: DeserializedType<T, 'Edm.String'>;
  createInventTrans?: NoYes | null;
  custPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  vendPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  createFinancialTrans?: NoYes | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
