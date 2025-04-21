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
import type { AbsenceReasonsApi } from './AbsenceReasonsApi';
import { AbsenceCodes, AbsenceCodesType } from './AbsenceCodes';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';

/**
 * This class represents the entity "AbsenceReasons" of service "d365_metadata".
 */
export class AbsenceReasons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AbsenceReasonsType<T>
{
  /**
   * Technical entity name for AbsenceReasons.
   */
  static override _entityName = 'AbsenceReasons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AbsenceReasons entity.
   */
  static _keys = ['dataAreaId', 'AbsenceCode', 'ReasonCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Absence Code.
   */
  declare absenceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Id.
   */
  declare reasonCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AbsenceCodes} entity.
   */
  declare relatedAbsenceCode?: AbsenceCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;

  constructor(_entityApi: AbsenceReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface AbsenceReasonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  absenceCode: DeserializedType<T, 'Edm.String'>;
  reasonCodeId: DeserializedType<T, 'Edm.String'>;
  relatedAbsenceCode?: AbsenceCodesType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
}
