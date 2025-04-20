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
import type { PositionTypesApi } from './PositionTypesApi';
import { HcmEmploymentStatus } from './HcmEmploymentStatus';
import {
  PayIntV1HcmPositionDetails,
  PayIntV1HcmPositionDetailsType
} from './PayIntV1HcmPositionDetails';
import {
  RecruitingRequestPositions,
  RecruitingRequestPositionsType
} from './RecruitingRequestPositions';
import { PositionDetails, PositionDetailsType } from './PositionDetails';
import { Positions, PositionsType } from './Positions';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "PositionTypes" of service "d365_metadata".
 */
export class PositionTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionTypesType<T>
{
  /**
   * Technical entity name for PositionTypes.
   */
  static override _entityName = 'PositionTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionTypes entity.
   */
  static _keys = ['PositionTypeId'];
  /**
   * Position Type Id.
   */
  declare positionTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Classification.
   * @nullable
   */
  declare classification?: HcmEmploymentStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPositionDetails} entity.
   */
  declare payIntPositionDetails: PayIntV1HcmPositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link RecruitingRequestPositions} entity.
   */
  declare recruitingRequestPositions: RecruitingRequestPositions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionDetails} entity.
   */
  declare positionDetails: PositionDetails<T>[];
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionsV2} entity.
   */
  declare positionsV2: PositionsV2<T>[];

  constructor(_entityApi: PositionTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PositionTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionTypeId: DeserializedType<T, 'Edm.String'>;
  classification?: HcmEmploymentStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payIntPositionDetails: PayIntV1HcmPositionDetailsType<T>[];
  recruitingRequestPositions: RecruitingRequestPositionsType<T>[];
  positionDetails: PositionDetailsType<T>[];
  positions: PositionsType<T>[];
  positionsV2: PositionsV2Type<T>[];
}
