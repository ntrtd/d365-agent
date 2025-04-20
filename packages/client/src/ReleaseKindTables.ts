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
import type { ReleaseKindTablesApi } from './ReleaseKindTablesApi';
import { NoYes } from './NoYes';
import { ProdReleaseCalcPrincipleRu } from './ProdReleaseCalcPrincipleRu';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ReleaseKindTables" of service "d365_metadata".
 */
export class ReleaseKindTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReleaseKindTablesType<T>
{
  /**
   * Technical entity name for ReleaseKindTables.
   */
  static override _entityName = 'ReleaseKindTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleaseKindTables entity.
   */
  static _keys = ['dataAreaId', 'ReleaseKindId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Release Kind Id.
   */
  declare releaseKindId: DeserializedType<T, 'Edm.String'>;
  /**
   * Defective Product.
   * @nullable
   */
  declare defectiveProduct?: NoYes | null;
  /**
   * Warehouse.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Costing Rule.
   * @nullable
   */
  declare costingRule?: ProdReleaseCalcPrincipleRu | null;
  /**
   * Scrap.
   * @nullable
   */
  declare scrap?: NoYes | null;
  /**
   * Loss Phys Ledger Dimension Display Value.
   * @nullable
   */
  declare lossPhysLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loss Account Display Value.
   * @nullable
   */
  declare lossAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ReleaseKindTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ReleaseKindTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  releaseKindId: DeserializedType<T, 'Edm.String'>;
  defectiveProduct?: NoYes | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  costingRule?: ProdReleaseCalcPrincipleRu | null;
  scrap?: NoYes | null;
  lossPhysLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lossAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
