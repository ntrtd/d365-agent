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
import type { PostalAddressesForAiApi } from './PostalAddressesForAiApi';
import { VendorsForAi, VendorsForAiType } from './VendorsForAi';

/**
 * This class represents the entity "PostalAddressesForAI" of service "d365_metadata".
 */
export class PostalAddressesForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PostalAddressesForAiType<T>
{
  /**
   * Technical entity name for PostalAddressesForAi.
   */
  static override _entityName = 'PostalAddressesForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostalAddressesForAi entity.
   */
  static _keys = ['ValidFrom'];
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Box.
   * @nullable
   */
  declare postBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address.
   * @nullable
   */
  declare address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorsForAi} entity.
   */
  declare vendor?: VendorsForAi<T> | null;

  constructor(_entityApi: PostalAddressesForAiApi<T>) {
    super(_entityApi);
  }
}

export interface PostalAddressesForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  postBox?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  address?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: VendorsForAiType<T> | null;
}
