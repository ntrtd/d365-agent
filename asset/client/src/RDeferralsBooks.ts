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
import type { RDeferralsBooksApi } from './RDeferralsBooksApi';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "RDeferralsBooks" of service "d365_metadata".
 */
export class RDeferralsBooks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RDeferralsBooksType<T>
{
  /**
   * Technical entity name for RDeferralsBooks.
   */
  static override _entityName = 'RDeferralsBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RDeferralsBooks entity.
   */
  static _keys = ['dataAreaId', 'DeferralsId', 'ModelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Deferrals Id.
   */
  declare deferralsId: DeserializedType<T, 'Edm.String'>;
  /**
   * Model Number.
   */
  declare modelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Writing Off Time.
   */
  declare writingOffTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * End Date Of Writing Off.
   */
  declare endDateOfWritingOff: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Writing Off Method.
   * @nullable
   */
  declare writingOffMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Account Display Value.
   * @nullable
   */
  declare mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lock.
   * @nullable
   */
  declare lock?: NoYes | null;
  /**
   * Deferrals Group.
   * @nullable
   */
  declare deferralsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Profile.
   * @nullable
   */
  declare postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beginning Date Of Writing Off.
   */
  declare beginningDateOfWritingOff: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deferrals Sum.
   */
  declare deferralsSum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Disposal Date.
   */
  declare disposalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: RDeferralsBooksApi<T>) {
    super(_entityApi);
  }
}

export interface RDeferralsBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deferralsId: DeserializedType<T, 'Edm.String'>;
  modelNumber: DeserializedType<T, 'Edm.String'>;
  writingOffTime: DeserializedType<T, 'Edm.Int32'>;
  endDateOfWritingOff: DeserializedType<T, 'Edm.DateTimeOffset'>;
  writingOffMethod?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  lock?: NoYes | null;
  deferralsGroup?: DeserializedType<T, 'Edm.String'> | null;
  postingProfile?: DeserializedType<T, 'Edm.String'> | null;
  beginningDateOfWritingOff: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deferralsSum: DeserializedType<T, 'Edm.Decimal'>;
  disposalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
