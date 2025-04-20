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
import type { LoyaltyOtherActivityTypesApi } from './LoyaltyOtherActivityTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LoyaltyOtherActivityTypes" of service "d365_metadata".
 */
export class LoyaltyOtherActivityTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LoyaltyOtherActivityTypesType<T>
{
  /**
   * Technical entity name for LoyaltyOtherActivityTypes.
   */
  static override _entityName = 'LoyaltyOtherActivityTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoyaltyOtherActivityTypes entity.
   */
  static _keys = ['LoyaltyOtherActivityTypeId'];
  /**
   * Loyalty Other Activity Type Id.
   */
  declare loyaltyOtherActivityTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Other Activity Type Description.
   * @nullable
   */
  declare loyaltyOtherActivityTypeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Loyalty Other Activity Type Name.
   * @nullable
   */
  declare loyaltyOtherActivityTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ignore Vesting Period.
   * @nullable
   */
  declare ignoreVestingPeriod?: NoYes | null;

  constructor(_entityApi: LoyaltyOtherActivityTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LoyaltyOtherActivityTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  loyaltyOtherActivityTypeId: DeserializedType<T, 'Edm.String'>;
  loyaltyOtherActivityTypeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  loyaltyOtherActivityTypeName?: DeserializedType<T, 'Edm.String'> | null;
  ignoreVestingPeriod?: NoYes | null;
}
