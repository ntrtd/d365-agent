/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { LoyaltyCardTiersV2 } from './LoyaltyCardTiersV2';

/**
 * Request builder class for operations supported on the {@link LoyaltyCardTiersV2} entity.
 */
export class LoyaltyCardTiersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoyaltyCardTiersV2<T>, T> {
  /**
   * Returns a request builder for querying all `LoyaltyCardTiersV2` entities.
   * @returns A request builder for creating requests to retrieve all `LoyaltyCardTiersV2` entities.
   */
  getAll(): GetAllRequestBuilder<LoyaltyCardTiersV2<T>, T> {
    return new GetAllRequestBuilder<LoyaltyCardTiersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoyaltyCardTiersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoyaltyCardTiersV2`.
   */
  create(
    entity: LoyaltyCardTiersV2<T>
  ): CreateRequestBuilder<LoyaltyCardTiersV2<T>, T> {
    return new CreateRequestBuilder<LoyaltyCardTiersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LoyaltyCardTiersV2` entity based on its keys.
   * @param loyaltyProgramName Key property. See {@link LoyaltyCardTiersV2.loyaltyProgramName}.
   * @param loyaltyTierAffiliationName Key property. See {@link LoyaltyCardTiersV2.loyaltyTierAffiliationName}.
   * @param loyaltyTierId Key property. See {@link LoyaltyCardTiersV2.loyaltyTierId}.
   * @param loyaltyCardNumber Key property. See {@link LoyaltyCardTiersV2.loyaltyCardNumber}.
   * @param validFrom Key property. See {@link LoyaltyCardTiersV2.validFrom}.
   * @param validTo Key property. See {@link LoyaltyCardTiersV2.validTo}.
   * @returns A request builder for creating requests to retrieve one `LoyaltyCardTiersV2` entity based on its keys.
   */
  getByKey(
    loyaltyProgramName: DeserializedType<T, 'Edm.String'>,
    loyaltyTierAffiliationName: DeserializedType<T, 'Edm.String'>,
    loyaltyTierId: DeserializedType<T, 'Edm.String'>,
    loyaltyCardNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LoyaltyCardTiersV2<T>, T> {
    return new GetByKeyRequestBuilder<LoyaltyCardTiersV2<T>, T>(
      this.entityApi,
      {
        LoyaltyProgramName: loyaltyProgramName,
        LoyaltyTierAffiliationName: loyaltyTierAffiliationName,
        LoyaltyTierId: loyaltyTierId,
        LoyaltyCardNumber: loyaltyCardNumber,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LoyaltyCardTiersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoyaltyCardTiersV2`.
   */
  update(
    entity: LoyaltyCardTiersV2<T>
  ): UpdateRequestBuilder<LoyaltyCardTiersV2<T>, T> {
    return new UpdateRequestBuilder<LoyaltyCardTiersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardTiersV2`.
   * @param loyaltyProgramName Key property. See {@link LoyaltyCardTiersV2.loyaltyProgramName}.
   * @param loyaltyTierAffiliationName Key property. See {@link LoyaltyCardTiersV2.loyaltyTierAffiliationName}.
   * @param loyaltyTierId Key property. See {@link LoyaltyCardTiersV2.loyaltyTierId}.
   * @param loyaltyCardNumber Key property. See {@link LoyaltyCardTiersV2.loyaltyCardNumber}.
   * @param validFrom Key property. See {@link LoyaltyCardTiersV2.validFrom}.
   * @param validTo Key property. See {@link LoyaltyCardTiersV2.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardTiersV2`.
   */
  delete(
    loyaltyProgramName: string,
    loyaltyTierAffiliationName: string,
    loyaltyTierId: string,
    loyaltyCardNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<LoyaltyCardTiersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoyaltyCardTiersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyCardTiersV2` by taking the entity as a parameter.
   */
  delete(
    entity: LoyaltyCardTiersV2<T>
  ): DeleteRequestBuilder<LoyaltyCardTiersV2<T>, T>;
  delete(
    loyaltyProgramNameOrEntity: any,
    loyaltyTierAffiliationName?: string,
    loyaltyTierId?: string,
    loyaltyCardNumber?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<LoyaltyCardTiersV2<T>, T> {
    return new DeleteRequestBuilder<LoyaltyCardTiersV2<T>, T>(
      this.entityApi,
      loyaltyProgramNameOrEntity instanceof LoyaltyCardTiersV2
        ? loyaltyProgramNameOrEntity
        : {
            LoyaltyProgramName: loyaltyProgramNameOrEntity!,
            LoyaltyTierAffiliationName: loyaltyTierAffiliationName!,
            LoyaltyTierId: loyaltyTierId!,
            LoyaltyCardNumber: loyaltyCardNumber!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
