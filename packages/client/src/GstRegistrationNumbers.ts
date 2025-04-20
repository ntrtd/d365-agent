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
import type { GstRegistrationNumbersApi } from './GstRegistrationNumbersApi';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { NoYes } from './NoYes';
import { GstTypeIn } from './GstTypeIn';

/**
 * This class represents the entity "GSTRegistrationNumbers" of service "d365_metadata".
 */
export class GstRegistrationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GstRegistrationNumbersType<T>
{
  /**
   * Technical entity name for GstRegistrationNumbers.
   */
  static override _entityName = 'GSTRegistrationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GstRegistrationNumbers entity.
   */
  static _keys = [
    'RegistrationNumberType',
    'RegistrationNumber',
    'CasualToDate',
    'CasualFromDate'
  ];
  /**
   * Registration Number Type.
   * @nullable
   */
  declare registrationNumberType?: TaxRegistrationTypeIn | null;
  /**
   * Registration Number.
   */
  declare registrationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Casual To Date.
   */
  declare casualToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Casual From Date.
   */
  declare casualFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Business Verticals.
   * @nullable
   */
  declare businessVerticals?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shared.
   * @nullable
   */
  declare shared?: NoYes | null;
  /**
   * Casual Description.
   * @nullable
   */
  declare casualDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Turn Over.
   */
  declare turnOver: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created Company Id.
   * @nullable
   */
  declare createdCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Of Taxable Person.
   * @nullable
   */
  declare nameOfTaxablePerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: GstTypeIn | null;

  constructor(_entityApi: GstRegistrationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface GstRegistrationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationNumberType?: TaxRegistrationTypeIn | null;
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  casualToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  casualFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessVerticals?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  shared?: NoYes | null;
  casualDescription?: DeserializedType<T, 'Edm.String'> | null;
  turnOver: DeserializedType<T, 'Edm.Decimal'>;
  createdCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  nameOfTaxablePerson?: DeserializedType<T, 'Edm.String'> | null;
  type?: GstTypeIn | null;
}
