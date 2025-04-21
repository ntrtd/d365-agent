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
import type { I9DocumentTypesApi } from './I9DocumentTypesApi';
import { NoYes } from './NoYes';
import { Hcmi9ListType } from './Hcmi9ListType';
import {
  IdentificationTypes,
  IdentificationTypesType
} from './IdentificationTypes';
import { IssuingAgencies, IssuingAgenciesType } from './IssuingAgencies';

/**
 * This class represents the entity "I9DocumentTypes" of service "d365_metadata".
 */
export class I9DocumentTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements I9DocumentTypesType<T>
{
  /**
   * Technical entity name for I9DocumentTypes.
   */
  static override _entityName = 'I9DocumentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the I9DocumentTypes entity.
   */
  static _keys = ['I9DocumentTypeId'];
  /**
   * I 9 Document Type Id.
   */
  declare i9DocumentTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Issuing Agency Id.
   * @nullable
   */
  declare issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expire Date.
   */
  declare expireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Form Id.
   * @nullable
   */
  declare formId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * List Type.
   * @nullable
   */
  declare listType?: Hcmi9ListType | null;
  /**
   * Identification Type Id.
   * @nullable
   */
  declare identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link IdentificationTypes} entity.
   */
  declare identificationType?: IdentificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link IssuingAgencies} entity.
   */
  declare issuingAgency?: IssuingAgencies<T> | null;

  constructor(_entityApi: I9DocumentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface I9DocumentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  i9DocumentTypeId: DeserializedType<T, 'Edm.String'>;
  issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  expireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  formId?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  listType?: Hcmi9ListType | null;
  identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  identificationType?: IdentificationTypesType<T> | null;
  issuingAgency?: IssuingAgenciesType<T> | null;
}
