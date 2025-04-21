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
import { LocationRoles } from './LocationRoles';

/**
 * Request builder class for operations supported on the {@link LocationRoles} entity.
 */
export class LocationRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LocationRoles<T>, T> {
  /**
   * Returns a request builder for querying all `LocationRoles` entities.
   * @returns A request builder for creating requests to retrieve all `LocationRoles` entities.
   */
  getAll(): GetAllRequestBuilder<LocationRoles<T>, T> {
    return new GetAllRequestBuilder<LocationRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LocationRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LocationRoles`.
   */
  create(entity: LocationRoles<T>): CreateRequestBuilder<LocationRoles<T>, T> {
    return new CreateRequestBuilder<LocationRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LocationRoles` entity based on its keys.
   * @param purpose Key property. See {@link LocationRoles.purpose}.
   * @param language Key property. See {@link LocationRoles.language}.
   * @returns A request builder for creating requests to retrieve one `LocationRoles` entity based on its keys.
   */
  getByKey(
    purpose: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LocationRoles<T>, T> {
    return new GetByKeyRequestBuilder<LocationRoles<T>, T>(this.entityApi, {
      Purpose: purpose,
      Language: language
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LocationRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LocationRoles`.
   */
  update(entity: LocationRoles<T>): UpdateRequestBuilder<LocationRoles<T>, T> {
    return new UpdateRequestBuilder<LocationRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LocationRoles`.
   * @param purpose Key property. See {@link LocationRoles.purpose}.
   * @param language Key property. See {@link LocationRoles.language}.
   * @returns A request builder for creating requests that delete an entity of type `LocationRoles`.
   */
  delete(
    purpose: string,
    language: string
  ): DeleteRequestBuilder<LocationRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LocationRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LocationRoles` by taking the entity as a parameter.
   */
  delete(entity: LocationRoles<T>): DeleteRequestBuilder<LocationRoles<T>, T>;
  delete(
    purposeOrEntity: any,
    language?: string
  ): DeleteRequestBuilder<LocationRoles<T>, T> {
    return new DeleteRequestBuilder<LocationRoles<T>, T>(
      this.entityApi,
      purposeOrEntity instanceof LocationRoles
        ? purposeOrEntity
        : {
            Purpose: purposeOrEntity!,
            Language: language!
          }
    );
  }
}
