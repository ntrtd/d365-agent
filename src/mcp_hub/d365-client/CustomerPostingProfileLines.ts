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
import type { CustomerPostingProfileLinesApi } from './CustomerPostingProfileLinesApi';
import { TableGroupAll } from './TableGroupAll';
import { DimensionHierarchyType } from './DimensionHierarchyType';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  CustomerPostingProfiles,
  CustomerPostingProfilesType
} from './CustomerPostingProfiles';

/**
 * This class represents the entity "CustomerPostingProfileLines" of service "d365_metadata".
 */
export class CustomerPostingProfileLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPostingProfileLinesType<T>
{
  /**
   * Technical entity name for CustomerPostingProfileLines.
   */
  static override _entityName = 'CustomerPostingProfileLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPostingProfileLines entity.
   */
  static _keys = [
    'dataAreaId',
    'PostingProfile',
    'AccountCode',
    'AccountOrGroupNumber'
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
   * Account Or Group Number.
   */
  declare accountOrGroupNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Interest Code.
   * @nullable
   */
  declare interestCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Summary Main Account Id Display Value.
   * @nullable
   */
  declare summaryMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Settle Account Display Value.
   * @nullable
   */
  declare settleAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collection Letter Sequence.
   * @nullable
   */
  declare collectionLetterSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Sale Display Value.
   * @nullable
   */
  declare exportSaleDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hierarchy Type.
   * @nullable
   */
  declare hierarchyType?: DimensionHierarchyType | null;
  /**
   * Liabilities For Discount Main Account Id Display Value.
   * @nullable
   */
  declare liabilitiesForDiscountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Transfer Account Display Value.
   * @nullable
   */
  declare taxTransferAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fine Account Display Value.
   * @nullable
   */
  declare fineAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Prepayments Main Account Id Display Value.
   * @nullable
   */
  declare salesTaxPrepaymentsMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Hierarchy Status.
   * @nullable
   */
  declare hierarchyStatus?: DimensionHierarchyConstraintStatus | null;
  /**
   * Hierarchy Name.
   * @nullable
   */
  declare hierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Endorse Main Account Id Display Value.
   * @nullable
   */
  declare endorseMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Financial Interest Account Display Value.
   * @nullable
   */
  declare financialInterestAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Write Off Main Account Id Display Value.
   * @nullable
   */
  declare writeOffMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare custWriteOffLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare custLiabilitiesForDiscountLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerPostingProfiles} entity.
   */
  declare custCustomerPostingProfileHeadRelation?: CustomerPostingProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare custSummaryLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare custVatPrepaymentsLedgerDimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: CustomerPostingProfileLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPostingProfileLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  accountOrGroupNumber: DeserializedType<T, 'Edm.String'>;
  interestCode?: DeserializedType<T, 'Edm.String'> | null;
  summaryMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  settleAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  collectionLetterSequence?: DeserializedType<T, 'Edm.String'> | null;
  exportSaleDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyType?: DimensionHierarchyType | null;
  liabilitiesForDiscountMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxTransferAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  fineAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxPrepaymentsMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  hierarchyStatus?: DimensionHierarchyConstraintStatus | null;
  hierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  endorseMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  financialInterestAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  writeOffMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  custWriteOffLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  custLiabilitiesForDiscountLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  custCustomerPostingProfileHeadRelation?: CustomerPostingProfilesType<T> | null;
  custSummaryLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  custVatPrepaymentsLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
}
