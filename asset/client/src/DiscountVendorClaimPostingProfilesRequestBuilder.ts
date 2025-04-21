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
import { DiscountVendorClaimPostingProfiles } from './DiscountVendorClaimPostingProfiles';

/**
 * Request builder class for operations supported on the {@link DiscountVendorClaimPostingProfiles} entity.
 */
export class DiscountVendorClaimPostingProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountVendorClaimPostingProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountVendorClaimPostingProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountVendorClaimPostingProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T> {
    return new GetAllRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscountVendorClaimPostingProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountVendorClaimPostingProfiles`.
   */
  create(
    entity: DiscountVendorClaimPostingProfiles<T>
  ): CreateRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T> {
    return new CreateRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountVendorClaimPostingProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimPostingProfiles.dataAreaId}.
   * @param name Key property. See {@link DiscountVendorClaimPostingProfiles.name}.
   * @returns A request builder for creating requests to retrieve one `DiscountVendorClaimPostingProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T> {
    return new GetByKeyRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountVendorClaimPostingProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountVendorClaimPostingProfiles`.
   */
  update(
    entity: DiscountVendorClaimPostingProfiles<T>
  ): UpdateRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T> {
    return new UpdateRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimPostingProfiles`.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimPostingProfiles.dataAreaId}.
   * @param name Key property. See {@link DiscountVendorClaimPostingProfiles.name}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimPostingProfiles`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimPostingProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimPostingProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountVendorClaimPostingProfiles<T>
  ): DeleteRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T> {
    return new DeleteRequestBuilder<DiscountVendorClaimPostingProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountVendorClaimPostingProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
