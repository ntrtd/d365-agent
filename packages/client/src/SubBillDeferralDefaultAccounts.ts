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
import type { SubBillDeferralDefaultAccountsApi } from './SubBillDeferralDefaultAccountsApi';
import { SubBillDeferralDefaultAccountType } from './SubBillDeferralDefaultAccountType';
import { InventPostingItemCode } from './InventPostingItemCode';
import { TableGroupAll } from './TableGroupAll';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SubBillDeferralDefaultAccounts" of service "d365_metadata".
 */
export class SubBillDeferralDefaultAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralDefaultAccountsType<T>
{
  /**
   * Technical entity name for SubBillDeferralDefaultAccounts.
   */
  static override _entityName = 'SubBillDeferralDefaultAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralDefaultAccounts entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountType',
    'ItemCode',
    'ItemRelation',
    'CategoryRelation',
    'AccountCode',
    'AccountRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: SubBillDeferralDefaultAccountType | null;
  /**
   * Item Code.
   * @nullable
   */
  declare itemCode?: InventPostingItemCode | null;
  /**
   * Item Relation.
   */
  declare itemRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Relation.
   */
  declare categoryRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Initial Recognition Account.
   * @nullable
   */
  declare initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Term Account.
   * @nullable
   */
  declare shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Offset Account.
   * @nullable
   */
  declare recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recognition Account Display Value.
   * @nullable
   */
  declare recognitionAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerDimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SubBillDeferralDefaultAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralDefaultAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountType?: SubBillDeferralDefaultAccountType | null;
  itemCode?: InventPostingItemCode | null;
  itemRelation: DeserializedType<T, 'Edm.String'>;
  categoryRelation: DeserializedType<T, 'Edm.String'>;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  initialRecognitionAccount?: DeserializedType<T, 'Edm.String'> | null;
  shortTermAccount?: DeserializedType<T, 'Edm.String'> | null;
  recognitionOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  recognitionAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionCombination?: DimensionCombinationsType<T> | null;
}
