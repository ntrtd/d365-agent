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
import type { DiscountVendorClaimPostingProfilesApi } from './DiscountVendorClaimPostingProfilesApi';
import { GupDiscountClaimPostingProfileType } from './GupDiscountClaimPostingProfileType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "DiscountVendorClaimPostingProfiles" of service "d365_metadata".
 */
export class DiscountVendorClaimPostingProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountVendorClaimPostingProfilesType<T>
{
  /**
   * Technical entity name for DiscountVendorClaimPostingProfiles.
   */
  static override _entityName = 'DiscountVendorClaimPostingProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountVendorClaimPostingProfiles entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Account Display Value.
   * @nullable
   */
  declare debitAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profile Type.
   * @nullable
   */
  declare profileType?: GupDiscountClaimPostingProfileType | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: DiscountVendorClaimPostingProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountVendorClaimPostingProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  debitAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  profileType?: GupDiscountClaimPostingProfileType | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
