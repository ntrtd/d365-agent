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
import type { EfDocAuthoritiesApi } from './EfDocAuthoritiesApi';
import { EfDocAuthorityTypeBr } from './EfDocAuthorityTypeBr';
import { EfDocContingModeBr } from './EfDocContingModeBr';

/**
 * This class represents the entity "EFDocAuthorities" of service "d365_metadata".
 */
export class EfDocAuthorities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EfDocAuthoritiesType<T>
{
  /**
   * Technical entity name for EfDocAuthorities.
   */
  static override _entityName = 'EFDocAuthorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocAuthorities entity.
   */
  static _keys = ['Authority'];
  /**
   * Authority.
   */
  declare authority: DeserializedType<T, 'Edm.String'>;
  /**
   * Icms Tax Base Amount Limit.
   */
  declare icmsTaxBaseAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cancel As Event.
   */
  declare cancelAsEvent: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Process Nfce Synchronous.
   */
  declare processNfceSynchronous: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Nfce Max Amount With Unindentified Customer.
   */
  declare nfceMaxAmountWithUnindentifiedCustomer: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Nfce Consumer Inquiry Url.
   * @nullable
   */
  declare nfceConsumerInquiryUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ignore Accents.
   */
  declare ignoreAccents: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authority Type.
   * @nullable
   */
  declare authorityType?: EfDocAuthorityTypeBr | null;
  /**
   * Contingency Mode.
   * @nullable
   */
  declare contingencyMode?: EfDocContingModeBr | null;
  /**
   * Svc Authority Id.
   * @nullable
   */
  declare svcAuthorityId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EfDocAuthoritiesApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocAuthoritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  authority: DeserializedType<T, 'Edm.String'>;
  icmsTaxBaseAmountLimit: DeserializedType<T, 'Edm.Decimal'>;
  cancelAsEvent: DeserializedType<T, 'Edm.Boolean'>;
  processNfceSynchronous: DeserializedType<T, 'Edm.Boolean'>;
  nfceMaxAmountWithUnindentifiedCustomer: DeserializedType<T, 'Edm.Decimal'>;
  nfceConsumerInquiryUrl?: DeserializedType<T, 'Edm.String'> | null;
  ignoreAccents: DeserializedType<T, 'Edm.Boolean'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  authorityType?: EfDocAuthorityTypeBr | null;
  contingencyMode?: EfDocContingModeBr | null;
  svcAuthorityId?: DeserializedType<T, 'Edm.String'> | null;
}
