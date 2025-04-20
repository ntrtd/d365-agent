/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { LoyaltySchemeExcludedAffiliations } from './LoyaltySchemeExcludedAffiliations';

/**
 * Request builder class for operations supported on the {@link LoyaltySchemeExcludedAffiliations} entity.
 */
export class LoyaltySchemeExcludedAffiliationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T> {
  /**
   * Returns a request builder for querying all `LoyaltySchemeExcludedAffiliations` entities.
   * @returns A request builder for creating requests to retrieve all `LoyaltySchemeExcludedAffiliations` entities.
   */
  getAll(): GetAllRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T> {
    return new GetAllRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LoyaltySchemeExcludedAffiliations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoyaltySchemeExcludedAffiliations`.
   */
  create(
    entity: LoyaltySchemeExcludedAffiliations<T>
  ): CreateRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T> {
    return new CreateRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LoyaltySchemeExcludedAffiliations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LoyaltySchemeExcludedAffiliations.dataAreaId}.
   * @param retailAffiliationName Key property. See {@link LoyaltySchemeExcludedAffiliations.retailAffiliationName}.
   * @param loyaltyScheme Key property. See {@link LoyaltySchemeExcludedAffiliations.loyaltyScheme}.
   * @returns A request builder for creating requests to retrieve one `LoyaltySchemeExcludedAffiliations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailAffiliationName: DeserializedType<T, 'Edm.String'>,
    loyaltyScheme: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T> {
    return new GetByKeyRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetailAffiliationName: retailAffiliationName,
        LoyaltyScheme: loyaltyScheme
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LoyaltySchemeExcludedAffiliations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoyaltySchemeExcludedAffiliations`.
   */
  update(
    entity: LoyaltySchemeExcludedAffiliations<T>
  ): UpdateRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T> {
    return new UpdateRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LoyaltySchemeExcludedAffiliations`.
   * @param dataAreaId Key property. See {@link LoyaltySchemeExcludedAffiliations.dataAreaId}.
   * @param retailAffiliationName Key property. See {@link LoyaltySchemeExcludedAffiliations.retailAffiliationName}.
   * @param loyaltyScheme Key property. See {@link LoyaltySchemeExcludedAffiliations.loyaltyScheme}.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltySchemeExcludedAffiliations`.
   */
  delete(
    dataAreaId: string,
    retailAffiliationName: string,
    loyaltyScheme: string
  ): DeleteRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoyaltySchemeExcludedAffiliations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltySchemeExcludedAffiliations` by taking the entity as a parameter.
   */
  delete(
    entity: LoyaltySchemeExcludedAffiliations<T>
  ): DeleteRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailAffiliationName?: string,
    loyaltyScheme?: string
  ): DeleteRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T> {
    return new DeleteRequestBuilder<LoyaltySchemeExcludedAffiliations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LoyaltySchemeExcludedAffiliations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailAffiliationName: retailAffiliationName!,
            LoyaltyScheme: loyaltyScheme!
          }
    );
  }
}
