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
import { RetailLoyaltySchemeChannels } from './RetailLoyaltySchemeChannels';

/**
 * Request builder class for operations supported on the {@link RetailLoyaltySchemeChannels} entity.
 */
export class RetailLoyaltySchemeChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyaltySchemeChannels<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyaltySchemeChannels` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyaltySchemeChannels` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyaltySchemeChannels<T>, T> {
    return new GetAllRequestBuilder<RetailLoyaltySchemeChannels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailLoyaltySchemeChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyaltySchemeChannels`.
   */
  create(
    entity: RetailLoyaltySchemeChannels<T>
  ): CreateRequestBuilder<RetailLoyaltySchemeChannels<T>, T> {
    return new CreateRequestBuilder<RetailLoyaltySchemeChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyaltySchemeChannels` entity based on its keys.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltySchemeChannels.loyaltySchemeId}.
   * @param organizationPartyNumber Key property. See {@link RetailLoyaltySchemeChannels.organizationPartyNumber}.
   * @param omHierarchyTypeName Key property. See {@link RetailLoyaltySchemeChannels.omHierarchyTypeName}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyaltySchemeChannels` entity based on its keys.
   */
  getByKey(
    loyaltySchemeId: DeserializedType<T, 'Edm.String'>,
    organizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    omHierarchyTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyaltySchemeChannels<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyaltySchemeChannels<T>, T>(
      this.entityApi,
      {
        LoyaltySchemeId: loyaltySchemeId,
        OrganizationPartyNumber: organizationPartyNumber,
        OMHierarchyTypeName: omHierarchyTypeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyaltySchemeChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyaltySchemeChannels`.
   */
  update(
    entity: RetailLoyaltySchemeChannels<T>
  ): UpdateRequestBuilder<RetailLoyaltySchemeChannels<T>, T> {
    return new UpdateRequestBuilder<RetailLoyaltySchemeChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltySchemeChannels`.
   * @param loyaltySchemeId Key property. See {@link RetailLoyaltySchemeChannels.loyaltySchemeId}.
   * @param organizationPartyNumber Key property. See {@link RetailLoyaltySchemeChannels.organizationPartyNumber}.
   * @param omHierarchyTypeName Key property. See {@link RetailLoyaltySchemeChannels.omHierarchyTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltySchemeChannels`.
   */
  delete(
    loyaltySchemeId: string,
    organizationPartyNumber: string,
    omHierarchyTypeName: string
  ): DeleteRequestBuilder<RetailLoyaltySchemeChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyaltySchemeChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyaltySchemeChannels` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyaltySchemeChannels<T>
  ): DeleteRequestBuilder<RetailLoyaltySchemeChannels<T>, T>;
  delete(
    loyaltySchemeIdOrEntity: any,
    organizationPartyNumber?: string,
    omHierarchyTypeName?: string
  ): DeleteRequestBuilder<RetailLoyaltySchemeChannels<T>, T> {
    return new DeleteRequestBuilder<RetailLoyaltySchemeChannels<T>, T>(
      this.entityApi,
      loyaltySchemeIdOrEntity instanceof RetailLoyaltySchemeChannels
        ? loyaltySchemeIdOrEntity
        : {
            LoyaltySchemeId: loyaltySchemeIdOrEntity!,
            OrganizationPartyNumber: organizationPartyNumber!,
            OMHierarchyTypeName: omHierarchyTypeName!
          }
    );
  }
}
