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
import type { LaborUnionAgreementsApi } from './LaborUnionAgreementsApi';
import { Unions, UnionsType } from './Unions';
import { Positions, PositionsType } from './Positions';
import {
  PositionUnionAgreements,
  PositionUnionAgreementsType
} from './PositionUnionAgreements';

/**
 * This class represents the entity "LaborUnionAgreements" of service "d365_metadata".
 */
export class LaborUnionAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LaborUnionAgreementsType<T>
{
  /**
   * Technical entity name for LaborUnionAgreements.
   */
  static override _entityName = 'LaborUnionAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LaborUnionAgreements entity.
   */
  static _keys = ['UnionId', 'AgreementName', 'LegalEntityId'];
  /**
   * Union Id.
   */
  declare unionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Name.
   */
  declare agreementName: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Unions} entity.
   */
  declare laborUnion?: Unions<T> | null;
  /**
   * One-to-many navigation property to the {@link Positions} entity.
   */
  declare positions: Positions<T>[];
  /**
   * One-to-many navigation property to the {@link PositionUnionAgreements} entity.
   */
  declare positionUnionAgreement: PositionUnionAgreements<T>[];

  constructor(_entityApi: LaborUnionAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface LaborUnionAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unionId: DeserializedType<T, 'Edm.String'>;
  agreementName: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  laborUnion?: UnionsType<T> | null;
  positions: PositionsType<T>[];
  positionUnionAgreement: PositionUnionAgreementsType<T>[];
}
