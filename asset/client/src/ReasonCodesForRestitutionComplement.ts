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
import type { ReasonCodesForRestitutionComplementApi } from './ReasonCodesForRestitutionComplementApi';
import { FbReasonCodeForRestitutionComplementClassificationBr } from './FbReasonCodeForRestitutionComplementClassificationBr';

/**
 * This class represents the entity "ReasonCodesForRestitutionComplement" of service "d365_metadata".
 */
export class ReasonCodesForRestitutionComplement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReasonCodesForRestitutionComplementType<T>
{
  /**
   * Technical entity name for ReasonCodesForRestitutionComplement.
   */
  static override _entityName = 'ReasonCodesForRestitutionComplement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReasonCodesForRestitutionComplement entity.
   */
  static _keys = ['dataAreaId', 'ReasonCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Occurrence Code.
   * @nullable
   */
  declare occurrenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Classification.
   * @nullable
   */
  declare classification?: FbReasonCodeForRestitutionComplementClassificationBr | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: ReasonCodesForRestitutionComplementApi<T>) {
    super(_entityApi);
  }
}

export interface ReasonCodesForRestitutionComplementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reasonCode: DeserializedType<T, 'Edm.String'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  occurrenceCode?: DeserializedType<T, 'Edm.String'> | null;
  classification?: FbReasonCodeForRestitutionComplementClassificationBr | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
