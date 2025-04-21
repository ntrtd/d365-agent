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
import type { DeferralsProfilesApi } from './DeferralsProfilesApi';
import { RDeferralsMethod } from './RDeferralsMethod';
import { RDeferralsCalculatePeriod } from './RDeferralsCalculatePeriod';
import { RDeferralsInterval } from './RDeferralsInterval';
import { RDeferralsManualCalcType } from './RDeferralsManualCalcType';

/**
 * This class represents the entity "DeferralsProfiles" of service "d365_metadata".
 */
export class DeferralsProfiles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeferralsProfilesType<T>
{
  /**
   * Technical entity name for DeferralsProfiles.
   */
  static override _entityName = 'DeferralsProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeferralsProfiles entity.
   */
  static _keys = ['dataAreaId', 'WritingOffProfile'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Writing Off Profile.
   */
  declare writingOffProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Writing Off Method.
   * @nullable
   */
  declare writingOffMethod?: RDeferralsMethod | null;
  /**
   * Round Off Operation.
   */
  declare roundOffOperation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculation Period.
   * @nullable
   */
  declare calculationPeriod?: RDeferralsCalculatePeriod | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Writing Off Period.
   * @nullable
   */
  declare writingOffPeriod?: RDeferralsInterval | null;
  /**
   * Calculation Type.
   * @nullable
   */
  declare calculationType?: RDeferralsManualCalcType | null;

  constructor(_entityApi: DeferralsProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface DeferralsProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  writingOffProfile: DeserializedType<T, 'Edm.String'>;
  writingOffMethod?: RDeferralsMethod | null;
  roundOffOperation: DeserializedType<T, 'Edm.Decimal'>;
  calculationPeriod?: RDeferralsCalculatePeriod | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  writingOffPeriod?: RDeferralsInterval | null;
  calculationType?: RDeferralsManualCalcType | null;
}
