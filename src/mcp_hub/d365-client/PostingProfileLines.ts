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
import type { PostingProfileLinesApi } from './PostingProfileLinesApi';
import { TableGroupAll } from './TableGroupAll';
import { DimensionHierarchyType } from './DimensionHierarchyType';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PostingProfileLines" of service "d365_metadata".
 */
export class PostingProfileLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PostingProfileLinesType<T>
{
  /**
   * Technical entity name for PostingProfileLines.
   */
  static override _entityName = 'PostingProfileLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostingProfileLines entity.
   */
  static _keys = [
    'dataAreaId',
    'PostingProfile',
    'AccountCode',
    'AccountGroupNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Account Group Number.
   */
  declare accountGroupNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hierarchy Name.
   * @nullable
   */
  declare hierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fine Account Display Value.
   * @nullable
   */
  declare fineAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hierarchy Type.
   * @nullable
   */
  declare hierarchyType?: DimensionHierarchyType | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Transfer Account Display Value.
   * @nullable
   */
  declare taxTransferAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Hierarchy Status.
   * @nullable
   */
  declare hierarchyStatus?: DimensionHierarchyConstraintStatus | null;
  /**
   * Sales Tax Prepayments Account Display Value.
   * @nullable
   */
  declare salesTaxPrepaymentsAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Arrival Account Display Value.
   * @nullable
   */
  declare arrivalAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Interest Account Display Value.
   * @nullable
   */
  declare financialInterestAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Settle Account Display Value.
   * @nullable
   */
  declare settleAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Summary Account Display Value.
   * @nullable
   */
  declare summaryAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPostingProfileOffsetAccountRole?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPostingProfileSalesTaxPrepayRole?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPostingProfileSettleAccountRole?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPostingProfileSummaryAccountRole?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare vendorPostingProfileArrivalAccountRole?: DimensionCombinations<T> | null;

  constructor(_entityApi: PostingProfileLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PostingProfileLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  accountGroupNumber: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  fineAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyType?: DimensionHierarchyType | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  taxTransferAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyStatus?: DimensionHierarchyConstraintStatus | null;
  salesTaxPrepaymentsAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  arrivalAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  financialInterestAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  settleAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  summaryAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  vendorPostingProfileOffsetAccountRole?: DimensionCombinationsType<T> | null;
  vendorPostingProfileSalesTaxPrepayRole?: DimensionCombinationsType<T> | null;
  vendorPostingProfileSettleAccountRole?: DimensionCombinationsType<T> | null;
  vendorPostingProfileSummaryAccountRole?: DimensionCombinationsType<T> | null;
  vendorPostingProfileArrivalAccountRole?: DimensionCombinationsType<T> | null;
}
