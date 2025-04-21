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
import type { PositionUnionAgreementsApi } from './PositionUnionAgreementsApi';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  LaborUnionAgreements,
  LaborUnionAgreementsType
} from './LaborUnionAgreements';

/**
 * This class represents the entity "PositionUnionAgreements" of service "d365_metadata".
 */
export class PositionUnionAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionUnionAgreementsType<T>
{
  /**
   * Technical entity name for PositionUnionAgreements.
   */
  static override _entityName = 'PositionUnionAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionUnionAgreements entity.
   */
  static _keys = ['PositionId', 'ValidFrom', 'ValidTo'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Labor Union Id.
   * @nullable
   */
  declare laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Union Agreement Name.
   * @nullable
   */
  declare unionAgreementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link LaborUnionAgreements} entity.
   */
  declare laborUnionAgreement?: LaborUnionAgreements<T> | null;

  constructor(_entityApi: PositionUnionAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionUnionAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  unionAgreementName?: DeserializedType<T, 'Edm.String'> | null;
  position?: PositionsV2Type<T> | null;
  laborUnionAgreement?: LaborUnionAgreementsType<T> | null;
}
