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
import type { CustomerPostingProfilesApi } from './CustomerPostingProfilesApi';
import { NoYes } from './NoYes';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';
import {
  CustomerPostingProfileLines,
  CustomerPostingProfileLinesType
} from './CustomerPostingProfileLines';

/**
 * This class represents the entity "CustomerPostingProfiles" of service "d365_metadata".
 */
export class CustomerPostingProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPostingProfilesType<T>
{
  /**
   * Technical entity name for CustomerPostingProfiles.
   */
  static override _entityName = 'CustomerPostingProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPostingProfiles entity.
   */
  static _keys = ['dataAreaId', 'PostingProfile'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile To Close Settlement.
   * @nullable
   */
  declare postingProfileToCloseSettlement?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Transaction Included In Auto Settlement.
   * @nullable
   */
  declare isTransactionIncludedInAutoSettlement?: NoYes | null;
  /**
   * Is Transaction Included In Collection Letter Generation.
   * @nullable
   */
  declare isTransactionIncludedInCollectionLetterGeneration?: NoYes | null;
  /**
   * Is Transaction Included In Interest Calculation.
   * @nullable
   */
  declare isTransactionIncludedInInterestCalculation?: NoYes | null;
  /**
   * Allow Empty Dimension Value.
   * @nullable
   */
  declare allowEmptyDimensionValue?: DimSettlementCtrlTypeRu | null;
  /**
   * One-to-many navigation property to the {@link CustomerPostingProfileLines} entity.
   */
  declare custCustomerPostingProfileHead: CustomerPostingProfileLines<T>[];

  constructor(_entityApi: CustomerPostingProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPostingProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  postingProfileToCloseSettlement?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isTransactionIncludedInAutoSettlement?: NoYes | null;
  isTransactionIncludedInCollectionLetterGeneration?: NoYes | null;
  isTransactionIncludedInInterestCalculation?: NoYes | null;
  allowEmptyDimensionValue?: DimSettlementCtrlTypeRu | null;
  custCustomerPostingProfileHead: CustomerPostingProfileLinesType<T>[];
}
