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
import type { WithholdAuthoritiesApi } from './WithholdAuthoritiesApi';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * This class represents the entity "WithholdAuthorities" of service "d365_metadata".
 */
export class WithholdAuthorities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdAuthoritiesType<T>
{
  /**
   * Technical entity name for WithholdAuthorities.
   */
  static override _entityName = 'WithholdAuthorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdAuthorities entity.
   */
  static _keys = ['dataAreaId', 'TaxType', 'WithholdingTaxAuthority'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdTypeIn | null;
  /**
   * Withholding Tax Authority.
   */
  declare withholdingTaxAuthority: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdAuthoritiesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdAuthoritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxWithholdTypeIn | null;
  withholdingTaxAuthority: DeserializedType<T, 'Edm.String'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
