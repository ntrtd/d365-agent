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
import type { WithholdCertificatesApi } from './WithholdCertificatesApi';
import { TaxWithholdAcTypeIn } from './TaxWithholdAcTypeIn';
import { NoYes } from './NoYes';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "WithholdCertificates" of service "d365_metadata".
 */
export class WithholdCertificates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdCertificatesType<T>
{
  /**
   * Technical entity name for WithholdCertificates.
   */
  static override _entityName = 'WithholdCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdCertificates entity.
   */
  static _keys = ['dataAreaId', 'CertificateNumber', 'AccountType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Certificate Number.
   */
  declare certificateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: TaxWithholdAcTypeIn | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdTypeIn | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certificate Amount.
   */
  declare certificateAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: WithholdCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  certificateNumber: DeserializedType<T, 'Edm.String'>;
  accountType?: TaxWithholdAcTypeIn | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closed?: NoYes | null;
  taxType?: TaxWithholdTypeIn | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  certificateAmount: DeserializedType<T, 'Edm.Decimal'>;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
