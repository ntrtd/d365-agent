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
import type { AssetParametersProposalJournalNamesApi } from './AssetParametersProposalJournalNamesApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { JournalNames, JournalNamesType } from './JournalNames';
import { AssetParameters, AssetParametersType } from './AssetParameters';

/**
 * This class represents the entity "AssetParametersProposalJournalNames" of service "d365_metadata".
 */
export class AssetParametersProposalJournalNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetParametersProposalJournalNamesType<T>
{
  /**
   * Technical entity name for AssetParametersProposalJournalNames.
   */
  static override _entityName = 'AssetParametersProposalJournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetParametersProposalJournalNames entity.
   */
  static _keys = ['dataAreaId', 'AssetParameters', 'PostingType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Parameters.
   */
  declare assetParameters: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: CurrentOperationsTax | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare assetParameterProposalJournalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetParameters} entity.
   */
  declare assetParameterProposalJournalNameParameters?: AssetParameters<T> | null;

  constructor(_entityApi: AssetParametersProposalJournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetParametersProposalJournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  assetParameters: DeserializedType<T, 'Edm.Int32'>;
  postingType?: CurrentOperationsTax | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  assetParameterProposalJournalName?: JournalNamesType<T> | null;
  assetParameterProposalJournalNameParameters?: AssetParametersType<T> | null;
}
