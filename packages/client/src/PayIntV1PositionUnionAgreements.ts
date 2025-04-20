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
import type { PayIntV1PositionUnionAgreementsApi } from './PayIntV1PositionUnionAgreementsApi';

/**
 * This class represents the entity "PayIntV1PositionUnionAgreements" of service "d365_metadata".
 */
export class PayIntV1PositionUnionAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PositionUnionAgreementsType<T>
{
  /**
   * Technical entity name for PayIntV1PositionUnionAgreements.
   */
  static override _entityName = 'PayIntV1PositionUnionAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PositionUnionAgreements entity.
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

  constructor(_entityApi: PayIntV1PositionUnionAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PositionUnionAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  laborUnionId?: DeserializedType<T, 'Edm.String'> | null;
  unionAgreementName?: DeserializedType<T, 'Edm.String'> | null;
}
